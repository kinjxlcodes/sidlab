import aboutImg from "../assets/about.png";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div id="about" className="border-b border-neutral-200 pb-16 lg:pb-24 mb-16 lg:mb-24">
      <div className="flex flex-wrap mt-36">
        <div className="w-full lg:w-1/2 lg:p-12">
          <div className="flex items-center justify-center mt-24">
            <motion.img
              src={aboutImg}
              alt="Levitating"
              className="rounded-2xl"
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeInOut",
              }}
            />
          </div>
        </div>
        <div className="w-full lg:w-1/2 px-6 lg:px-12">
          <div className="flex flex-col justify-center lg:justify-start my-24 lg:my-32">
            <h1 className="bg-blue-500 text-transparent bg-clip-text pb-16 text-6xl font-thin tracking-light lg:mt-16 lg:text-6xl">
              Our Mission
            </h1>
            <motion.span
              className="bg-gradient-to-r from-blue-600 via-slate-300 to-blue-900 bg-clip-text text-4xl tracking-tight text-transparent mb-4"
              initial={{ x: "100vw", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{
                duration: 6,
                delay: 0,
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeOut",
              }}
            >
              <h3 className="my-2 max-w-xl py-2 lg:mt-2 lg:text-2xl">
                ELEVATING HUMANITY THROUGH INNOVATION AND TECHNOLOGY IS OUR MISSION.
              </h3>
            </motion.span>

            <p className="text-lg lg:text-2xl">
              Our vision is to reduce the gap in harnessing technology, towards human evolution! We believe that every technological solution should be purposeful and aligned with the unique needs of the user. One-size-fits-all approaches are outdated; instead, we advocate for solutions that are tailored, intuitive, and genuinely enhance the human experience.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
