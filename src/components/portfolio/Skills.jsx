import skills from '../../data/portfolio/skills.jsx';
import Label from './Label.jsx';

export default function Skills() {
  return (
    <div className='section-pm' id='Skills'>
      <Label title='Skills' align='right' />

      <div className='flex flex-wrap justify-center gap-2'>
        {skills.map((item) => (
          <div
            className={`w-24 ${item.color} py-3 flex flex-col items-center gap-4 cursor-pointer rounded-2xl transition-all duration-300 hover:gray-spec-2 hover:shadow-xl hover:-translate-y-2`}
            key={item.title}
          >
            <span className='text-3xl'>{item.icon}</span>
            <span className='text-base font-medium'>{item.title}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
