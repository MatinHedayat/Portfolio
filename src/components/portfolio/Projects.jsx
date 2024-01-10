import { Link } from 'react-router-dom';
import projects from '../../data/portfolio/projects';

import { FaRegEye } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import Label from './Label';

export default function Projects() {
  return (
    <div>
      <Label title='Projects' />

      <div className='flex flex-col gap-8 sm:flex-row sm:flex-wrap'>
        {projects.map((item) => (
          <div
            className='bg-gray-700 text-white/80 flex flex-col overflow-hidden rounded-2xl shadow-xl sm:w-[45%]'
            key={item.title}
          >
            <div className='w-full h-40 relative'>
              <p className='bg-black/50 px-3 py-1 absolute top-4 left-4 backdrop-blur-sm rounded-xl'>
                {item.title}
              </p>
              <img
                className='w-full h-full object-cover'
                src={item.img}
                alt='image'
              />
            </div>

            <div className='h-full flex flex-col justify-between p-4'>
              <p>{item.desc}</p>

              <div className='flex gap-x-4 mt-8'>
                <Link to={item.link} target='_blank'>
                  <button className='bg-gray-800 px-4 py-2 flex items-center gap-x-3 rounded-lg'>
                    <FaRegEye />
                    View
                  </button>
                </Link>

                <Link to={item.githubLink} target='_blank'>
                  <button className='bg-gray-800 px-3 py-2 flex items-center gap-x-3 rounded-lg'>
                    <FaGithub />
                    Github
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
