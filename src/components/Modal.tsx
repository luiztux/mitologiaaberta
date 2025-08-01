import { PdfViewer } from './PdfViewer';
import { Modal } from 'antd';
import { usePdfModalContext } from '../contexts/modal/PdfModalContext';
import { useEffect, useState } from 'react';

export const ModalPdfViewer = () => {
  const { fileUrl, isOpen, handleCloseModal } = usePdfModalContext();
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);
  }, []);

  return (

      <Modal
        open={isOpen}
        onCancel={handleCloseModal}
        width={isMobile ? '95vw' : '70dvw'}
        footer={null}
      >
        <div className='mt-8'>
          <PdfViewer fileUrl={fileUrl} />
        </div>
      </Modal>
  );
};
