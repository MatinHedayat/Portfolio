import { Link } from 'react-router-dom';
import { primitives, social } from '../../data/portfolio/info.jsx';
import Label from './Label.jsx';

export default function Information() {
  return (
    <div>
      <Label title='Information' />

      <div className='flex flex-wrap gap-3'>
        {primitives.map((item) => (
          <div
            className='text-white/80 w-max h-12 p-1 pr-3 flex items-center gap-x-4 border-2 border-gray-600 rounded-xl shadow-xl'
            key={item.id}
          >
            <span
              className={`h-full ${item.iconSize} flex items-center px-4 bg-gray-700 rounded-lg`}
            >
              {item.title}
            </span>

            <span>{item.value}</span>
          </div>
        ))}
      </div>

      <div className='flex flex-wrap gap-3 mt-12'>
        {social.map((item) => {
          if (item.path) {
            return (
              <Link to={item.path} target='_blank' key={item.id}>
                <div className='text-white/80 w-max h-12 p-1 pr-4 flex items-center gap-x-4 border-2 border-gray-600 rounded-xl shadow-xl'>
                  <span className='h-full text-xl flex items-center px-4 bg-gray-700 rounded-lg'>
                    {item.title}
                  </span>

                  <span>{item.value}</span>
                </div>
              </Link>
            );
          } else {
            return (
              <div
                className='text-white/80 w-max h-12 p-1 pr-4 flex items-center gap-x-4 border-2 border-gray-600 rounded-xl shadow-xl'
                key={item.id}
              >
                <span className='h-full flex items-center px-4 bg-gray-700 rounded-lg'>
                  {item.title}
                </span>

                <span>{item.value}</span>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
}
