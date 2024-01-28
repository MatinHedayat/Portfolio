import skills from '../../data/portfolio/skills.jsx';
import Label from './Label.jsx';

export default function Skills() {
  return (
    <div>
      <Label title='Skills' align='right' />

      <div className='flex flex-wrap justify-center gap-2'>
        {skills.map((item) => (
          <div
            className={`w-36 ${item.color} py-4 flex flex-col items-center gap-4 cursor-pointer rounded-2xl transition-all duration-300 hover:bg-gray-700 hover:shadow-xl hover:-translate-y-1`}
            key={item.title}
          >
            <span className='text-4xl'>{item.icon}</span>
            <span className='text-lg font-medium'>{item.title}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
