import React from 'react';

type PdfModalProps = {
  isOpen: boolean;
  handleOpenModal: (file: string) => void;
  handleCloseModal: () => void;
  fileUrl: string;
};

const PdfModalContext = React.createContext<PdfModalProps>({
  isOpen: false,
  handleOpenModal: () => {},
  handleCloseModal: () => {},
  fileUrl: '',
});

export const usePdfModalContext = () => React.useContext(PdfModalContext);

export const PdfModalContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  const [fileUrl, setFileUrl] = React.useState<string>('');

  const handleOpenModal = (file: string) => {
    setIsOpen(true);
    setFileUrl(file)
  }

  const handleCloseModal = () => {
    setIsOpen(false);
    setFileUrl('')
  }

  const MemoizedPdfModalValues = React.useMemo(
    () => ({
      isOpen,
      handleCloseModal,
      handleOpenModal,
      fileUrl,
    }),
    [fileUrl, isOpen]
  );

  return (
    <PdfModalContext.Provider value={MemoizedPdfModalValues}>
      {children}
    </PdfModalContext.Provider>
  );
};
