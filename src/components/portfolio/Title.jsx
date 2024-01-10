export default function Title() {
  return (
    <div className='relative z-10'>
      <div className='w-96 h-96 bg-sky-500 absolute -z-10 -top-60 -left-40 shape-radius rotate-12 shadow-2xl md:w-60 md:h-60 md:top-0 md:left-[65%] md:rotate-0 overflow-hidden'>
        <img className='hidden md:block' src="avatars/1.jpg" alt="avatar" />
      </div>

      <div className='text-white'>
        <h2 className='text-6xl font-bold min-[450px]:text-7xl sm:text-8xl sm:leading-none'>
          Front-End <span className='
          '>Developer</span>
        </h2>

        <div className='text-white/80 tracking-widest mt-10'>
          <p>Hi there 🖐🏻</p>

           <p className='flex items-center gap-x-2 mt-2'>
            <span>I'm</span>
            <span className='text-sky-400 text-sm px-3 py-1 border-2 border-sky-400 rounded-2xl shadow-xl'>
              Matin Hedayat
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
