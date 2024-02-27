import experiences from '../../data/portfolio/experiences';
import Label from './Label';
import { MdOutlineDateRange } from 'react-icons/md';

export default function Experiences() {
  return (
    <div className='section-pm' id='Experiences'>
      <Label title='Experiences' />

      <div className='flex flex-col gap-8 md:flex-row md:flex-wrap'>
        {experiences.map((item) => (
          <div
            className='gray-gr-br text-slate-300 p-4 pb-6 flex flex-col overflow-hidden border border-slate-500 rounded-2xl shadow-xl md:w-[45%] md:bg-none'
            key={item.id}
          >
            <p className='capitalize mb-4 flex-center-2'>
              <span className='bg-slate-500 w-3 h-1.5 rounded-lg'></span>
              <span className='gray-spec-2 px-3 py-1 border border-slate-500 rounded-lg'>
                {item.title}
              </span>
            </p>
            <span className='text-slate-400 text-sm flex-center-2'>
              <MdOutlineDateRange />
              {item.time}
            </span>
            <span className='capitalize text-[0.9rem] flex-center-2 mt-1'>
              {item.team}
            </span>
            <p className='text-[0.9rem]/5 text-slate-300/90 pt-3 mt-3 border-t border-slate-500 sm:pr-2'>
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
