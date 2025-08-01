import {
  LocalizationMap,
  Worker,
  Viewer,
  SpecialZoomLevel
} from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import { useEffect, useState } from 'react';

import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import pt_BR from '@react-pdf-viewer/locales/lib/pt_PT.json';

export const PdfViewer = ({ fileUrl }: { fileUrl: string }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const plugin = defaultLayoutPlugin({
    // Configurações otimizadas para mobile
    sidebarTabs: (defaultTabs) => isMobile ? [] : defaultTabs,
    toolbarPlugin: {
      searchPlugin: {
        keyword: '',
      },
    },
  });

  // Zoom inicial baseado no dispositivo
  const getInitialZoom = () => {
    if (isMobile) {
      return SpecialZoomLevel.PageFit;
    }
    return SpecialZoomLevel.PageWidth;
  };

  return (
    <div className="w-full h-full overflow-hidden">
      <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js">
        <div className="h-full">
          <Viewer
            key={fileUrl}
            fileUrl={fileUrl}
            plugins={[plugin]}
            localization={pt_BR as unknown as LocalizationMap}
            defaultScale={getInitialZoom()}
            // Configurações adicionais para mobile
            theme={isMobile ? 'auto' : 'light'}
          />
        </div>
      </Worker>
    </div>
  );
};