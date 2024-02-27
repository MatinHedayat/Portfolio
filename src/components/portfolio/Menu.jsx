import { useRef } from 'react';
import useOutsideClick from '../../hooks/useOutsideClick';

const menuItems = ['Skills', 'Experiences', 'Projects'];

export default function Menu({ isMenuOpen, setMenuOpen }) {
  const menuRef = useRef();
  useOutsideClick(menuRef, 'menu', () => setMenuOpen(false));

  return (
    <div
      className={`bg-slate-800/80 text-slate-300/80 w-max p-2 absolute z-40 top-12 right-0 flex flex-col rounded-2xl backdrop-blur-sm border border-slate-700 shadow-2xl transition-all duration-300 ${
        isMenuOpen
          ? 'translate-y-0 scale-100 opacity-100 visible'
          : '-translate-y-4 opacity-0 scale-90 invisible'
      }`}
      ref={menuRef}
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
  );
}
