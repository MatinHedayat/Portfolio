import { TbStars } from 'react-icons/tb';
import { FaUserAlt } from 'react-icons/fa';

export default function Description() {
  return (
    <div className='relative z-30 mt-8 sm:mt-12'>
      <p className='w-max gray-spec-2 text-xs font-medium text-slate-300/80 px-2 py-1 mb-3 rounded-lg shadow-xl'>
        23 Years Old
      </p>

      <div className='relative w-max gray-spec font-medium text-slate-300/90 pl-2 pr-3 py-1.5 flex items-center gap-x-2 border-l-2 border-b-2 border-slate-500 rounded-xl shadow-xl'>
        <FaUserAlt className='bg-slate-400/60 text-slate-800 text-sm w-6 h-6 p-1.5 rounded-lg' />
        <p>Matin Hedayat</p>
      </div>

      <div className='relative text-slate-300/80 text-base/[1.3] font-medium mt-6 sm:max-w-lg'>
        <TbStars className='absolute top-0.5' />
        <p className='pr-4'>
          <span className='pl-6 pr-1'>I have been</span>
          working in the web field for several years and I have a special
          interest in the front side of this field. I always try to learn more
          and do many more projects at a professional level.
        </p>
      </div>
    </div>
  );
}
