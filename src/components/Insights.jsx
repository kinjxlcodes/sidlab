import { motion } from "framer-motion"
const Insights = () => {
  return (
    <div className="bg-white p-10 bg-transparent">
      <h2 className="bg-blue-500 text-transparent bg-clip-text pb-16 text-6xl font-thin tracking-light lg:mt-12 lg:text-6xl">AI Insights</h2>
      <p className="text-xl text-gray-600 mb-8">
        Stay updated with the latest news and developments
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <motion.div
          className="relative bg-white p-6 rounded-lg shadow-md"
          whileHover={{ scale: 1.05 }}
          style={{
            background: "linear-gradient(white, white) padding-box, linear-gradient(to right, #3b82f6, white) border-box",
            border: "3px solid transparent",
            borderRadius: "1rem",
          }}
        >
          <img
            src="src/assets/Screenshot 2024-09-04 at 7.25.21 PM.png" // Replace with actual image URL
            alt="Industry Update"
            className="w-full h-48 object-cover mb-4 rounded"
          />
          <h3 className="text-xl font-semibold mb-2">Industry Update</h3>
          <p className="text-gray-700">
            There has been significant progress in using AI for medical
            diagnostics, personalized medicine, drug discovery, and improving
            patient care. Increased attention on the ethical implications of AI,
            including fairness, transparency, bias mitigation, and responsible
            deployment of AI systems.
          </p>
        </motion.div>

        <motion.div
          className="relative bg-white p-6 rounded-lg shadow-md"
          whileHover={{ scale: 1.05 }}
          style={{
            background: "linear-gradient(white, white) padding-box, linear-gradient(to right, #3b82f6, white) border-box",
            border: "3px solid transparent",
            borderRadius: "1rem",
          }}
        >
          <img
            src="src/assets/Screenshot 2024-09-04 at 7.25.51 PM.png" // Replace with actual image URL
            alt="Online Tech Education"
            className="w-full h-48 object-cover mb-4 rounded"
          />
          <h3 className="text-xl font-semibold mb-2">Online Tech Education</h3>
          <p className="text-gray-700">
            Online tech education has witnessed a surge in accessibility, with
            platforms offering diverse courses in various languages, catering to
            global audiences. Emphasis on skill-based learning has grown, with
            platforms offering specialized courses in emerging tech fields such
            as AI, cybersecurity, and data science.
          </p>
        </motion.div>

        <motion.div
          className="relative bg-white p-6 rounded-lg shadow-md"
          whileHover={{ scale: 1.05 }}
          style={{
            background: "linear-gradient(white, white) padding-box, linear-gradient(to right, #3b82f6, white) border-box",
            border: "3px solid transparent",
            borderRadius: "1rem",
          }}
        >
          <img
            src="src/assets/Screenshot 2024-09-04 at 7.26.16 PM.png" // Replace with actual image URL
            alt="Modern Age Parenting"
            className="w-full h-48 object-cover mb-4 rounded"
          />
          <h3 className="text-xl font-semibold mb-2">Modern Age Parenting</h3>
          <p className="text-gray-700">
            With the rise of technology, there's a surge in digital tools aiding
            parents—from apps monitoring child activities to educational
            platforms offering interactive learning experiences. Online forums,
            social media groups, and virtual communities are thriving, offering
            a space for parents.
          </p>
        </motion.div>
      </div>
    </div>
  )
}

export default Insights