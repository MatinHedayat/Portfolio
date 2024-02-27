import { useRef, useState } from 'react';
import info from '../../data/portfolio/info.jsx';
import useOutsideClick from '../../hooks/useOutsideClick.js';
import { HiOutlineCursorClick } from 'react-icons/hi';

export default function Information() {
  const [infoId, setInfoId] = useState(null);

  const handleClickButton = (item) => {
    if (item.path) window.open(item.path, '_blank');
    else setInfoId(item.id);
  };

  const infoRef = useRef();
  useOutsideClick(infoRef, 'info', () => setInfoId(null));

  return (
    <div className='mt-8 mb-10 sm:mb-16'>
      <div className='text-[0.8rem] text-slate-400 border-l-2 border-slate-400 pl-2'>
        <p className='text-slate-300/80 capitalize'>Welcome to my portfolio</p>
        <p className='flex items-center gap-x-1.5'>
          <HiOutlineCursorClick className='text-base' />
          Press any of the buttons to see the info
        </p>
      </div>

      <div className='w-max flex flex-wrap gap-3 mt-6 relative' ref={infoRef}>
        {info.map((item) => (
          <button
            className='w-10 h-10 flex items-center justify-center rounded-xl gray-gr-br shadow-xl'
            key={item.id}
            onClick={() => handleClickButton(item)}
          >
            <span className={`text-slate-300/90 text-lg`}>{item.icon}</span>

            <span
              className={`bg-gradient-to-bl from-slate-800/80 to-slate-700/40 text-slate-300 text-sm w-max font-medium absolute z-30 top-14 px-4 py-2 select-text cursor-text border border-slate-600 rounded-2xl shadow-xl transition-all duration-300 ${
                item.id === infoId
                  ? 'delay-200 translate-y-0 scale-100 opacity-100 visible'
                  : '-translate-y-4 scale-75 opacity-0 invisible'
              }`}
              id='info'
            >
              <span
                className='w-0 h-0 absolute -top-[0.4rem] inset-x-1/2 -translate-x-[50%] border-x-[6px] border-x-transparent
                  border-b-[6px] border-b-slate-600'
              ></span>
              {item.value}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
