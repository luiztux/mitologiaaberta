
export const Introduction = () => {
  return (
    <div className='flex flex-col my-10 w-full text-center md:text-start'>
      <div className='md:px-32 p-2'>
        <h2 className='text-zinc-600 text-3xl'>apresentação</h2>
      </div>
      <div className='bg-serenade-600 h-1.5 w-1/2 mx-auto md:w-36 rounded-md md:ml-20' />
      <div className='text-center md:px-32 p-3 space-y-3 my-10'>
        <p className='text-zinc-600 text-lg'>
          A Revista Mitologia Aberta é uma Revista Eletrônica, Colaborativa e de
          Distribuição Gratuita!
        </p>
        <p className='text-zinc-600 text-lg'>
          Além disso, ela se propõe a ser uma revista de livres pensadores da
          mitologia, ou seja, ela é destinada para quem tem um profundo amor por
          esta temática. Assim, para colaborar em suas edições não é necessário
          ter formação acadêmica na área da mitologia, basta ter amor pelo tema!
        </p>
      </div>
    </div>
  );
};
