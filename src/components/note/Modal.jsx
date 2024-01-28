import { useRef } from 'react';
import useOutsideFocus from '../../hooks/useOutsideFocus';
import { FaInfoCircle } from 'react-icons/fa';
import { IoClose } from 'react-icons/io5';

export default function Modal({
  isModalOpen,
  closeModal,
  content,
  cancelFunc,
  commitFunc,
}) {
  const modalRef = useRef();
  useOutsideFocus(modalRef, closeModal);

  return (
    <div
      className={`bg-gray-800/50 dark:bg-gray-800/70 absolute z-50 inset-0 flex items-center justify-center backdrop-blur-sm ${
        isModalOpen ? 'opacity-100 visible' : 'opacity-0 invisible delay-200'
      } transition-all duration-500`}
    >
      <div
        className={`bg-slate-200 dark:bg-gray-800 font-semibold w-10/12 text-gray-800 dark:text-gray-200 p-6 mb-40 border dark:border-white/50 rounded-2xl shadow-2xl sm:max-w-[60%] transition-all duration-300 ${
          isModalOpen
            ? 'opacity-100 visible translate-y-0 delay-300'
            : 'opacity-0 invisible -translate-y-4'
        }`}
        ref={modalRef}
      >
        <div className='flex items-center justify-between mb-8'>
          <div className='flex items-center gap-x-2.5 text-gray-600 dark:text-gray-300'>
            <FaInfoCircle className='text-2xl ' />
            <p>Notice</p>
          </div>

          <button
            className='bg-black/10 dark:bg-white/10 text-white/80 p-3 rounded-full'
            onClick={closeModal}
          >
            <IoClose />
          </button>
        </div>

        <h3 className='text-lg sm:text-xl'>{content}</h3>

        <div className='flex items-center gap-x-3 mt-6 sm:mt-10'>
          <button
            className='bg-red-500 text-gray-200 w-24 py-2 rounded-xl sm:w-32 sm:py-3'
            onClick={cancelFunc}
          >
            Cancel
          </button>
          <button
            className='bg-emerald-500 text-gray-900 dark:text-emerald-950 w-24 py-2 rounded-xl sm:w-32 sm:py-3'
            onClick={commitFunc}
          >
            OK
          </button>
        </div>
      </div>
    </div>
  );
}
