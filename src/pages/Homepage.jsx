import React from "react";
import { Link } from "react-router-dom";

const Homepage = () => {
  return (
    <>

      {/* Banner Section */}
      <div className="h-screen bg-cover bg-center flex flex-col justify-center bg-[linear-gradient(to_right,rgba(0,0,0,0.7),rgba(0,0,0,0)),url('/assets/banner1.jpg')] bg-local ">
        <div className="text-white text-6xl pl-35 w-2xl">
          Providing Special Care For Your Pets!
        </div>
        <div className="text-white text-2xl pl-35 w-2xl pt-5">
          We offer special services for special pets!
        </div>
        <div>
          <button className="bg-white border-1 border-white text-center p-3 w-45 ml-35 mt-10 rounded-sm text-blue-950 hover:bg-transparent hover:text-white transition delay-150 duration-300 cursor-pointer">
            View Our Services
          </button>
          <button className="bg-transparent text-white p-3 w-30 rounded-sm border-1 border-white ml-10 hover:bg-white hover:text-blue-950 transition delay-150 duration-300 cursor-pointer">
            Hire Us
          </button>
        </div>
      </div>

      {/* About Section */}
      <section className="flex flex-row py-20 items-center justify-evenly">
			<div>
				<img src="./public/assets/about.jpg" alt="about" className="w-500 pl-20"/>
			</div>

			<div className="flex flex-col pl-10">

				<div className="w-150">
					<h1 className="text-4xl font-bold ">ABOUT US</h1>
					<span>Orci urna. In et augue ornare, tempor massa in, luctus sapien. 
						Proin a diam et dui fermentum dolor molestie vel id neque. Donec sed tempus enim, 
						a congue risus. Pellen tesqu.
					</span>
				</div>                      

				<div className="flex flex-row justify-between pt-10">
					<div className="flex flex-col w-80">
						<h1 className="text-2xl  ">OUR MISSION</h1>
						<span>In a diam et dui elit, orci urna vel id neque. Donec sed tempus enims.</span>
					</div>
					<div className="flex flex-col w-80">
						<h1 className="text-2xl  ">OUR MISSION</h1>
						<span>In a diam et dui elit, orci urna vel id neque. Donec sed tempus enims.</span>
					</div>
				</div>
			</div>
      </section>

	  {/* What we Do */}

		<section className=" bg-gray-100">
			<h1 className="text-4xl font-bold text-center pt-8 pb-5">WHAT WE DO</h1>
			<p className="text-2xl w-200 text-center ml-85">
				Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque,
				eaque ipsa quae ab illo inventore.
			</p>

			<div className="flex justify-center bg-gray-100 hover:shadow-gray-500 transition delay-100 duration-300 pt-10 pb-10">

				<div className="flex flex-col w-100 bg-white hover:shadow-2xl transition delay-100 duration-300 mr-5">
					<img src="./public/assets/img1.jpg" alt="image" />
					<h1 className="text-2xl hover:text-red-400 transition delay-100 duration-300 p-2">Donec sed teus enime</h1>
					<p className="p-2">Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
					<Link to='/' className="p-4 text-red-400">READ MORE</Link>
				</div>

				<div className="flex flex-col w-100 bg-white hover:shadow-2xl transition delay-100 duration-300 mr-5">
					<img src="./public/assets/img1.jpg" alt="image" />
					<h1 className="text-2xl hover:text-red-400 transition delay-100 duration-300 p-2">Donec sed teus enime</h1>
					<p className="p-2">Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
					<Link to='/' className="p-4 text-red-400">READ MORE</Link>
				</div>

				<div className="flex flex-col w-100 bg-white hover:shadow-2xl transition delay-100 duration-300 mr-5">
					<img src="./public/assets/img1.jpg" alt="image" />
					<h1 className="text-2xl hover:text-red-400 transition delay-100 duration-300 p-2">Donec sed teus enime</h1>
					<p className="p-2">Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
					<Link to='/' className="p-4 text-red-400">READ MORE</Link>
				</div>
			</div>

		</section>

		<section className=" bg-gray-100">
			<h1 className="text-4xl font-bold text-center pt-8 pb-5">WHAT WE DO</h1>
			<p className="text-2xl w-200 text-center ml-85">
				Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque,
				eaque ipsa quae ab illo inventore.
			</p>

			<div className="flex justify-center bg-gray-100 hover:shadow-gray-500 transition delay-100 duration-300 pt-10 pb-10">

				<div className="flex flex-col w-100 bg-white hover:shadow-2xl transition delay-100 duration-300 mr-5">
					<img src="./public/assets/img1.jpg" alt="image" />
					<h1 className="text-2xl hover:text-red-400 transition delay-100 duration-300 p-2">Donec sed teus enime</h1>
					<p className="p-2">Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
					<Link to='/' className="p-4 text-red-400">READ MORE</Link>
				</div>

				<div className="flex flex-col w-100 bg-white hover:shadow-2xl transition delay-100 duration-300 mr-5">
					<img src="./public/assets/img1.jpg" alt="image" />
					<h1 className="text-2xl hover:text-red-400 transition delay-100 duration-300 p-2">Donec sed teus enime</h1>
					<p className="p-2">Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
					<Link to='/' className="p-4 text-red-400">READ MORE</Link>
				</div>

				<div className="flex flex-col w-100 bg-white hover:shadow-2xl transition delay-100 duration-300 mr-5">
					<img src="./public/assets/img1.jpg" alt="image" />
					<h1 className="text-2xl hover:text-red-400 transition delay-100 duration-300 p-2">Donec sed teus enime</h1>
					<p className="p-2">Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
					<Link to='/' className="p-4 text-red-400">READ MORE</Link>
				</div>
			</div>

		</section>



    </>
  );
};

export default Homepage;
