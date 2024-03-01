import { Link } from 'react-router-dom';
import projects from '../../data/portfolio/projects';

import { FaRegEye } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import Label from './Label';

export default function Projects() {
  return (
    <div className='section-pm' id='Projects'>
      <Label title='Projects' align='right' />

      <div className='flex flex-col gap-8 md:flex-row md:flex-wrap'>
        {projects.map((item) => (
          <div
            className='bg-slate-700 text-white/80 flex flex-col overflow-hidden border border-slate-500 rounded-2xl shadow-xl md:w-[45%]'
            key={item.title}
          >
            <div className='w-full h-40 relative'>
              <p className='bg-black/60 px-3 py-1 absolute top-5 left-5 backdrop-blur-sm rounded-xl'>
                {item.title}
              </p>
              <img
                className='w-full h-full object-cover'
                src={item.img}
                alt='image'
              />
            </div>

            <div className='h-full flex flex-col justify-between p-5'>
              <p className='w-max text-[0.8rem] px-2 py-0.5 mb-2 bg-slate-500/80 rounded-lg shadow-xl'>
                Description
              </p>
              <p className='text-slate-300 text-[0.95rem]/5'>{item.desc}</p>

              <div className='flex gap-x-4 mt-10'>
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
