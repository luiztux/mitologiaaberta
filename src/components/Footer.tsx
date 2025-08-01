
export const Footer = () => {
  return (
    <footer className="bg-mine-shaft-900 text-white pt-6 mt-16">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        {/* Marca e Direitos */}
        <div className="text-center md:text-left mb-4 md:mb-0">
          <span className="text-sm">&copy; {new Date().getFullYear()} Mitologia Aberta</span>
        </div>

        {/* Desenvolvedor */}
        <div className="text-center md:text-right">
          <span className="text-sm text-gray-400">
            Desenvolvido por{' '}
            <a
              href="https://alphacentauritecnologia.com.br"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-serenade-400 transition"
            >
              Alpha Centauri
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
};