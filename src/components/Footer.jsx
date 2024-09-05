import { ArrowUpRight } from 'lucide-react';

function Footer() {
  return (
    <footer className="py-4 ">
      <div className="container mx-auto px-4 ">
        <div className="flex space-x-6 mb-4 text-gray-300">
          <a href="http://linkedin.com/in/aditya-shukla06" target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-gray-300">
            linkedin <ArrowUpRight className="ml-1" size={16} />
          </a>
          <a href="http://github.com/AdiShukla06" target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-gray-300">
            github <ArrowUpRight className="ml-1" size={16} />
          </a>
          <a href="https://x.com/_shukladitya_" target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-gray-300">
            x <ArrowUpRight className="ml-1" size={16} />
          </a>
          <a href="https://drive.google.com/file/d/1hTB0Czyq3xLon0vHdapMopnchYKL25D4/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-gray-300">
            resume <ArrowUpRight className="ml-1" size={16} />
          </a>
        </div>
        <p className="text-gray-300">© 2024 licensed to me</p>
      </div>
    </footer>
  );
}

export default Footer;