import {
  Carousel,
  Contact,
  EditorialTeam,
  Hero,
  Introduction,
  ModalPdfViewer,
} from '../../components/Components';
export const Home = () => {
  return (
    <>
      <ModalPdfViewer />
      <div className='flex flex-col mb-5 w-full'>
        <Hero />
        <Introduction />
        <EditorialTeam />
        <Carousel />
        <Contact />
      </div>
    </>
  );
};
