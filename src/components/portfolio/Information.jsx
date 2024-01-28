import { Link } from 'react-router-dom';
import { primitives, social } from '../../data/portfolio/info.jsx';
import Label from './Label.jsx';
import { TbStars } from 'react-icons/tb';
import { GrStatusGoodSmall } from 'react-icons/gr';
import { TbPointerStar } from "react-icons/tb";
import { FaShieldAlt } from "react-icons/fa";

export default function Information() {
  return (
    <div>
      <Label title='Information' align='right' />

      <h3 className='bg-gray-700 w-max text-white text-lg font-medium tracking-widest flex items-center gap-x-4 px-8 py-2.5 mb-6 mt-16 rounded-xl shadow-xl'>
      <FaShieldAlt />
        Personal
      </h3>

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

            <span className='sm:text-lg sm:px-2'>{item.value}</span>
          </div>
        ))}
      </div>

      <h3 className='bg-gray-700 w-max text-white text-lg font-medium tracking-widest flex items-center gap-x-4 px-8 py-2.5 mb-6 mt-16 rounded-xl shadow-xl'>
        <GrStatusGoodSmall className='relative'></GrStatusGoodSmall>
        <div className='absolute w-4 h-4 ml-[0.08rem] rounded-full outline outline-2 animate-ping'></div>
        Connection
      </h3>

      <div className='flex flex-wrap gap-3'>
        {social.map((item) => {
          if (item.path) {
            return (
              <Link to={item.path} target='_blank' key={item.id}>
                <div className='text-white/80 w-max h-12 p-1 pr-4 flex items-center gap-x-4 border-2 border-gray-600 rounded-xl shadow-xl'>
                  <span className='h-full text-xl flex items-center px-4 bg-gray-700 rounded-lg'>
                    {item.title}
                  </span>

                  <span className='sm:text-lg sm:px-2'>{item.value}</span>
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

                <span className='sm:text-lg sm:px-2'>{item.value}</span>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
}
