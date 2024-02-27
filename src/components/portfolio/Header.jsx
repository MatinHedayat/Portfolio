import { useState } from 'react';
import { HiMenuAlt3 } from 'react-icons/hi';
import { SiBackblaze } from 'react-icons/si';
import Menu from './Menu';
import { motion } from 'framer-motion';

const menuItems = ['Skills', 'Experiences', 'Projects'];
export default function Header() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  return (
    <motion.div className='flex items-center justify-between mt-12'>
      <div className='text-slate-400 flex flex-col'>
        <p className='text-xl font-bold uppercase flex items-center gap-x-1'>
          <SiBackblaze className='text-blue-400' />
          MTK
        </p>

        <span className='text-xs'>Developed by Matko</span>
      </div>

      <div className='relative sm:hidden'>
        <button
          className='bg-slate-800/70 text-slate-300/70 p-2.5 rounded-xl shadow-xl'
          id='menu'
          onClick={() => setMenuOpen(!isMenuOpen)}
        >
          <HiMenuAlt3 className='text-xl' id='menu' />
        </button>

        <Menu isMenuOpen={isMenuOpen} setMenuOpen={setMenuOpen} />
      </div>

      <div
        className='bg-slate-800/80 text-slate-300/80 w-max p-2 rounded-2xl backdrop-blur-sm hidden sm:flex'
        onClick={(e) => {
          e.preventDefault();
          const target = e.target;
          const id = target.getAttribute('href').replace('#', '');
          document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
        }}
      >
        {menuItems.map((item) => (
          <a
            className='cursor-pointer px-3 py-1 rounded-xl hover:bg-slate-700'
            key={item}
            href={`#${item}`}
            onClick={() => setMenuOpen(false)}
          >
            {item}
          </a>
        ))}
      </div>
    </motion.div>
  );
}
