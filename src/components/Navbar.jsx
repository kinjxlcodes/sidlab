import logo from "../assets/logo.png"
const Navbar = () => {
  return <nav className=" container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center ">
    <a className="flex title-font font-medium items-center text-gray-900 mb-4 px-2 py-2">
        <img src={logo} alt="logo"/>
    </a>
    {/* Navbar Links */}
    <div className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
            <a href="#about" className="text-gray-700 font-medium hover:text-blue-500 mr-5">
              About Us
            </a>
            <a href="#projects" className="text-gray-700 font-medium hover:text-blue-500 mr-5">
              Flagship Projects
            </a>
            <a href="#contacts" className="text-gray-700 font-medium hover:text-blue-500 mr-5">
              Contact Now
            </a>
          </div>
  </nav>
  
}

export default Navbar