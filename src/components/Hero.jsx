import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <div className="border-b border-neutral-50 pb-16 lg:pb-24 flex flex-col lg:flex-row justify-between items-center overflow-hidden mb-16 lg:mb-24">
      <div className="w-full lg:w-1/2 px-6 lg:px-12">
        <div className="flex flex-col items-center lg:items-start">
          <h1 className="pb-8 lg:pb-16 text-4xl lg:text-6xl xl:text-8xl font-thin tracking-light mt-8 lg:mt-16">
            A Venture Studio
          </h1>
          <motion.span
            className="bg-gradient-to-r from-blue-600 via-slate-300 to-blue-900 bg-clip-text text-2xl lg:text-4xl tracking-tight text-transparent mb-4"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 4, repeat: Infinity, repeatType: 'loop' }}
          >
            Advancing Human Intelligence
          </motion.span>
          <motion.span
            className="bg-gradient-to-r from-blue-600 via-slate-300 to-blue-900 bg-clip-text text-2xl lg:text-4xl tracking-tight text-transparent"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 4, repeat: Infinity, repeatType: 'loop' }}
          >
            Through Innovation
          </motion.span>
        </div>
      </div>

      <div className="w-full lg:w-1/2 flex justify-center lg:justify-end items-center mt-12 lg:mt-0">
        <motion.div
          className="relative w-[300px] h-[300px] lg:w-[500px] lg:h-[500px] flex justify-center items-center"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse' }}
        >
          <div className="absolute w-full h-full rounded-full border-blue-400 flex justify-center items-center">
            <motion.div
              className="absolute top-0 left-0 w-full h-full rounded-full border-blue-400"
              animate={{ rotate: 360 }}
              transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
            />

            <motion.div
              className="absolute top-0 left-0 w-full h-full rounded-full border-t-8 border-r-8 border-b-blue border-blue-400"
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
            />

            <motion.div
              className="absolute top-0 left-0 w-full h-full rounded-full border-b-8 border-l-blueborder-blue-400"
              animate={{ rotate: -360 }}
              transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
            />

            <img
              src="src/asset/modelX.png"
              alt="Profile"
              className="w-[250px] h-[250px] lg:w-[450px] lg:h-[450px] rounded-full object-cover shadow-lg"
              style={{ boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.3)' }}
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
