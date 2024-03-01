import { motion } from 'framer-motion';
import Header from './Header';

export default function Layout({ children }) {
  return (
    <motion.div
      className='max-w-6xl px-4 pt-6 pb-20 mx-auto'
      initial={{ opacity: 0, y: -5 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <Header />
      {children}

      <div className='pointer-events-none fixed z-30 inset-x-0 bottom-0 h-20 bg-gradient-to-t from-slate-200 to-transparent animate-show dark:from-slate-800 lg:hidden'></div>
    </motion.div>
  );
}
