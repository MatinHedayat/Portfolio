import Title from '../../components/portfolio/Title';
import Description from '../../components/portfolio/Description';
import Skills from '../../components/portfolio/Skills';
import Projects from '../../components/portfolio/Projects';
import Information from '../../components/portfolio/Information';

export default function Portfolio() {
  return (
    <>
      <div className='bg-gray-800 w-full'>
        <div className='max-w-4xl relative flex flex-col gap-y-28 font-outfit px-6 py-20 pb-40 mx-auto overflow-x-hidden'>
          <Title />
          <Description />
          <Skills />
          <Projects />
          <Information />

          <div className='absolute bottom-0 inset-x-0 md:opacity-0'>
            <svg
              className='fill-sky-500'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 1440 320'
            >
              <path
                fillOpacity='1'
                d='M0,64L60,64C120,64,240,64,360,85.3C480,107,600,149,720,170.7C840,192,960,192,1080,170.7C1200,149,1320,107,1380,85.3L1440,64L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z'
              ></path>
            </svg>
          </div>
        </div>
      </div>
    </>
  );
}
