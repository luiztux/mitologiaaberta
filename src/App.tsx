import { BrowserRouter } from 'react-router-dom';
import { Router } from './routes/Router';
import { PdfModalContextProvider } from './contexts/modal/PdfModalContext';

export const App = () => {
  return (
    <BrowserRouter>
      <PdfModalContextProvider>
        <Router />
      </PdfModalContextProvider>
    </BrowserRouter>
  );
};