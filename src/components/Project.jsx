import {motion} from "framer-motion"
const Project = () => {
    return (
      <div id="projects">
        <div className="border-b border-neutral-100 pb-4">
          <h1 className="bg-blue-500 text-transparent bg-clip-text pb-16 text-6xl font-thin tracking-light lg:mt-12 lg:text-6xl ">Explore</h1>
          <motion.span
              className="bg-gradient-to-r from-blue-600 via-slate-300 to-blue-900 bg-clip-text text-3xl tracking-tight text-transparent"
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 4, repeat: Infinity, repeatType: "loop" }}
            >
              OUR FLAGSHIP PROJECTS
            </motion.span>
          <div className="w-full lg:w-auto mt-12 flex justify-around space-x-4">
            <a href="https://aiwisepartners.com/" target="_blank" rel="noopener noreferrer" className="relative group w-1/3">
              <img className="h-auto w-full shadow-lg dark:shadow-black/30 transition-transform duration-500 group-hover:scale-110 group-hover:blur-sm rounded-lg" src="public/asset/projects/project1.png" alt="AIwise Partners"/>
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="bg-white bg-opacity-75 p-4 rounded-lg shadow-lg">
                  <h3 className="text-lg font-bold">[AI]wise Partners: Revolutionizing Business Intelligence</h3>
                  <p className="text-sm">
                    Dive into the future of business intelligence with [AI]wise Partners. This cutting-edge solution harnesses the power of artificial intelligence to provide unparalleled insights, helping businesses make data-driven decisions with confidence.
                  </p>
                </div>
              </div>
            </a>
            <a href="https://www.awarewilderness.com/" target="_blank" rel="noopener noreferrer" className="relative group w-1/3">
              <img className="h-auto w-full shadow-lg dark:shadow-black/30 transition-transform duration-500 group-hover:scale-110 group-hover:blur-sm rounded-lg" src="public/asset/projects/project2.png" alt="Aware Wilderness"/>
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="bg-white bg-opacity-75 p-4 rounded-lg shadow-lg">
                  <h3 className="text-lg font-bold">AwareWilderness: CRAFTING MEMORIES</h3>
                  <p className="text-sm">
                    Empowering travelers to embark on transformative journeys that not only satisfy their wanderlust but also contribute to the conservation and preservation of our planet's precious wilderness.
                  </p>
                </div>
              </div>
            </a>
            <a href="https://care.talktomissmp.com/" target="_blank" rel="noopener noreferrer" className="relative group w-1/3">
              <img className="h-auto w-full shadow-lg dark:shadow-black/30 transition-transform duration-500 group-hover:scale-110 group-hover:blur-sm rounded-lg" src="public/asset/projects/project3.png" alt="CARE Platform"/>
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="bg-white bg-opacity-75 p-4 rounded-lg shadow-lg">
                  <h3 className="text-lg font-bold">CARE Platform</h3>
                  <p className="text-sm">
                    CARE utilizes a comprehensive framework to evaluate and recommend child-friendly apps, videos, and games, ensuring your child’s digital interactions are both enriching and safe.
                  </p>
                </div>
              </div>
            </a>
          </div>
        </div>
        <div className="w-full bg-blue-500 text-white py-12 px-8 flex flex-col lg:flex-row items-center justify-between rounded-lg lg:rounded-[30px]">
        {/* Text Section */}
        <div className="lg:w-1/2">
          <h2 className="text-3xl lg:text-5xl font-bold tracking-tight">SIDLABS</h2>
          <p className="mt-4 text-lg lg:text-xl max-w-lg leading-relaxed">
            Your Destination for Innovation. SidLabs is not just a company; it's a destination for innovation. Our suite of products represents three distinct stores in our innovation mall. Each store is a world in itself, driven by the relentless pursuit of excellence and global human upgradation.
          </p>
        </div>

        {/* Image Section */}
        <div className="lg:w-1/2 mt-8 lg:mt-0 flex justify-center">
          <img src="public/asset/robot1.png" className="w-64 lg:w-96"/>
        </div>
      </div>

      </div>
    );
  }
  
  export default Project;
  