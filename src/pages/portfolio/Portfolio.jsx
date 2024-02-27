import Title from '../../components/portfolio/Title';
import Description from '../../components/portfolio/Description';
import Skills from '../../components/portfolio/Skills';
import Projects from '../../components/portfolio/Projects';
import Information from '../../components/portfolio/Information';
import Header from '../../components/portfolio/Header';
import Experiences from '../../components/portfolio/Experiences';
import { motion } from 'framer-motion';

export default function Portfolio() {
  return (
    <>
      <div className='portfolio'>
        <div className='max-w-4xl relative flex flex-col font-outfit px-6 pb-48 mx-auto overflow-x-hidden'>
          <motion.div
            initial={{ opacity: 0, y: -10, transitionDuration: '0.5s' }}
            animate={{ opacity: 1, y: 0 }}
          >
            <Header />
            <Information />
            <Title />
            <Description />
          </motion.div>

          <Skills />
          <Experiences />
          <Projects />
        </div>
      </div>
    </>
  );
}
