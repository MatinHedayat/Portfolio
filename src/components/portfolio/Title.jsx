import { FaReact } from 'react-icons/fa';

export default function Title() {
  return (
    <div>
      <div className='relative z-20 font-extrabold flex flex-col'>
        <h2 className='text-[5rem] leading-none uppercase text-gr mb-3 sm:text-9xl'>
          Front
        </h2>

        <div className='flex items-start'>
          <div className='w-max bg-[#1a1f2f] px-3 py-1.5 rounded-3xl rounded-l shadow-br'>
            <h2 className='text-5xl uppercase text-gr-2 sm:text-6xl'>End</h2>
          </div>

          <div className='flex flex-col items-end gap-y-2 sm:mt-4'>
            <h2 className='w-max flex items-center gap-x-2 text-sm border-r-2 border-b-2 border-slate-500 tracking-wider text-slate-300/80 font-medium px-2 py-0.5 bg-slate-400/20 rounded-lg shadow-xl sm:text-base'>
              <FaReact className='animate-spin' />
              React.JS
            </h2>

            <h2 className='text-3xl tracking-wider text-slate-300/80 font-true font-medium -ml-2 sm:text-4xl'>
              Developer
            </h2>
          </div>
        </div>

        <div className='absolute -top-10 -right-40 -z-20 w-72 h-72 blue-gr-br spec-radius animate-spin min-[896px]:right-8'></div>
      </div>
    </div>
  );
}
