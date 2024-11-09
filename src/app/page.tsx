
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa6" ;
import { BiLogoTypescript } from "react-icons/bi";

export default function Home() {
  return (
<main>

<title>Eshal Khan Portfolio</title>

{/*Nav Bar Include Some Pages And Social Urls */ }
<header className="text-gray-600 bg-purple-400 body-font">
<div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
  <nav className="flex lg:w-2/5 flex-wrap items-center text-base md:ml-auto">
    <a className="mr-5 hover:text-gray-900">Home</a>
    <a className="mr-5 hover:text-gray-900">About Us</a>
    <a className="mr-5 hover:text-gray-900">Contact Us</a>
    <a className="hover:text-gray-900">Privacy </a>
  </nav>
  <a className="flex order-first lg:order-none lg:w-1/5 title-font font-medium items-center text-gray-900  lg:items-center lg:justify-center mb-4 md:mb-0">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-10 h-10 text-white p-2 bg-purple-500 rounded-full" viewBox="0 0 24 24">
      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
    </svg>
    <span className="ml-3 text-xl">Tailblocks</span>
  </a>

  
</div>
</header>


{/*Hero Section */}

<section className="text-gray-600 body-font bg-gray-900">
<div className="container mx-auto flex flex-col px-5 py-10 justify-center items-center">

  {/*Image  Tag*/}
  <img className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded" alt="hero" src="image/curly girl.jpg"/>
  <div className="w-full md:w-2/3 flex flex-col mb-16 items-center text-center">
    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Knausgaard typewriter readymade marfa</h1>
    <p className="mb-8 leading-relaxed">I am Eshal Khan, a passoniate learner and try to gain experience in web development, designing ,and trying to delivering my bestes work . My journey has been fueled with a strong commitment of learning in both front-end and back-end </p>
    <div className="flex w-full justify-center items-end">
      <div className="relative mr-4 lg:w-full xl:w-1/2 w-2/4 md:w-full text-left">
        <label htmlFor="hero-field" className="leading-7 text-sm text-gray-600">Placeholder</label>
        <input type="text" id="hero-field" name="hero-field" className="w-full bg-gray-100 bg-opacity-50 rounded focus:ring-2 focus:ring-purple-200 focus:bg-transparent border border-gray-300 focus:border-purple-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>
      <button className="inline-flex text-white bg-purple-500 border-0 py-2 px-6 focus:outline-none hover:bg-purple-600 rounded text-lg">Button</button>
    </div>
    <p className="text-sm mt-2 text-gray-500 mb-8 w-full">Neutra shabby chic ramps, viral fixie.</p>
    <div className="flex">
      <button className="bg-orange-300 inline-flex py-3 px-5 rounded-lg items-center hover:bg-orange-200 focus:outline-none">
        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-6 h-6" viewBox="0 0 512 512">
          <path d="M99.617 8.057a50.191 50.191 0 00-38.815-6.713l230.932 230.933 74.846-74.846L99.617 8.057zM32.139 20.116c-6.441 8.563-10.148 19.077-10.148 30.199v411.358c0 11.123 3.708 21.636 10.148 30.199l235.877-235.877L32.139 20.116zM464.261 212.087l-67.266-37.637-81.544 81.544 81.548 81.548 67.273-37.64c16.117-9.03 25.738-25.442 25.738-43.908s-9.621-34.877-25.749-43.907zM291.733 279.711L60.815 510.629c3.786.891 7.639 1.371 11.492 1.371a50.275 50.275 0 0027.31-8.07l266.965-149.372-74.849-74.847z"></path>
        </svg>
        <span className="ml-4 flex items-start flex-col leading-none">
          <span className="text-xs text-gray-600 mb-1">GET IT ON</span>
          <span className="title-font font-medium">Google Play</span>
        </span>
      </button>
      <button className="bg-orange-300 inline-flex py-3 px-5 rounded-lg items-center ml-4 hover:bg-orange-200focus:outline-none">
        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-6 h-6" viewBox="0 0 305 305">
          <path d="M40.74 112.12c-25.79 44.74-9.4 112.65 19.12 153.82C74.09 286.52 88.5 305 108.24 305c.37 0 .74 0 1.13-.02 9.27-.37 15.97-3.23 22.45-5.99 7.27-3.1 14.8-6.3 26.6-6.3 11.22 0 18.39 3.1 25.31 6.1 6.83 2.95 13.87 6 24.26 5.81 22.23-.41 35.88-20.35 47.92-37.94a168.18 168.18 0 0021-43l.09-.28a2.5 2.5 0 00-1.33-3.06l-.18-.08c-3.92-1.6-38.26-16.84-38.62-58.36-.34-33.74 25.76-51.6 31-54.84l.24-.15a2.5 2.5 0 00.7-3.51c-18-26.37-45.62-30.34-56.73-30.82a50.04 50.04 0 00-4.95-.24c-13.06 0-25.56 4.93-35.61 8.9-6.94 2.73-12.93 5.09-17.06 5.09-4.64 0-10.67-2.4-17.65-5.16-9.33-3.7-19.9-7.9-31.1-7.9l-.79.01c-26.03.38-50.62 15.27-64.18 38.86z"></path>
          <path d="M212.1 0c-15.76.64-34.67 10.35-45.97 23.58-9.6 11.13-19 29.68-16.52 48.38a2.5 2.5 0 002.29 2.17c1.06.08 2.15.12 3.23.12 15.41 0 32.04-8.52 43.4-22.25 11.94-14.5 17.99-33.1 16.16-49.77A2.52 2.52 0 00212.1 0z"></path>
        </svg>
        <span className="ml-4 flex items-start flex-col leading-none">
          <span className="text-xs text-gray-600 mb-1">Download on the</span>
          <span className="title-font font-medium">App Store</span>
        </span>
      </button>
    </div>
  </div>
</div>
</section>




{/**Feature section */}

<section className="text-gray-600 bg-gray-900 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="text-center mb-20">
      <h1 className="sm:text-3xl text-2xl font-black text-center title-font text-yellow-500 mb-4">Project Features & Commands</h1>
      <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">Explore the essential feature of each typescript project and easily run them using the npx command provided below.</p>
    </div>
    <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
      <div className="p-2 sm:w-1/2 w-full">
        <div className="bg-gray-100 rounded flex p-4 h-full items-center">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" className="text-yellow-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
            <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
            <path d="M22 4L12 14.01l-3-3"></path>
          </svg>
          <span className="title-font font-medium">npx run start: portfolio</span>
        </div>
      </div>
      <div className="p-2 sm:w-1/2 w-full">
        <div className="bg-gray-100 rounded flex p-4 h-full items-center">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" className="text-yellow-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
            <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
            <path d="M22 4L12 14.01l-3-3"></path>
          </svg>
          <span className="title-font font-medium">npx run start:todo list</span>
        </div>
      </div>
      <div className="p-2 sm:w-1/2 w-full">
        <div className="bg-gray-100 rounded flex p-4 h-full items-center">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" className="text-yellow-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
            <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
            <path d="M22 4L12 14.01l-3-3"></path>
          </svg>
          <span className="title-font font-medium">npx run start:calculator</span>
        </div>
      </div>
      <div className="p-2 sm:w-1/2 w-full">
        <div className="bg-gray-100 rounded flex p-4 h-full items-center">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" className="text-yellow-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
            <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
            <path d="M22 4L12 14.01l-3-3"></path>
          </svg>
          <span className="title-font font-medium">npx run start:atm
           </span>
          </div>
      </div>

      {/**cta */}
    </div>
    
      <button className="bg-gray-300 flex mx-auto mt-16 py-3 px-5 rounded-lg items-center hover:bg-yellow-700 focus:outline-none bg-sky-600">
       <img src="image/download.png" alt="" />
        <span className="ml-4 flex items-start flex-col leading-none">
          <span className="text-xs text-white mb-1">GIT HUB</span>
          <span className="title-font font-bold text-black">Eshalk</span>
        </span>
      </button>
 
 {/**Development Tools  */}
    
    <section>
      <div className="container px-2 py-8 mx-auto flex flex-wrap flex justify-center items-center space-x-6 text-2-xl 
      ">
        {/* Icon */}

        <h1 className="text-white items-center font-bold text-2xl">Programming Language</h1>
      

        <div className="flex flex-col items-center bg-white border-2 border-sky-500 p-4 transition-transform duration-300 ease-in-out transform hover:scale-110">
        <FaHtml5 className="text-orange-500 text-6xl" />
        <span className="mt-2 text-lg text-black"> Html</span>
        </div>


 <div className="flex flex-col items-center bg-white border-2 border-sky-500 p-4 transition-transform duration-300 ease-in-out transform hover:scale-110">
 <FaCss3Alt   className="text-blue-500 text-6xl" />
        <span className="mt-2 text-lg text-black"> CSS</span>
        </div>

        <div className="flex flex-col items-center bg-white border-2 border-sky-500 p-4 transition-transform duration-300 ease-in-out transform hover:scale-110">
 <  FaNodeJs  className="text-blue-500 text-6xl" />
        <span className="mt-2 text-lg text-black">JavaScript</span>
        </div>

        <div className="flex flex-col items-center bg-white border-2 border-sky-500 p-4 transition-transform duration-300 ease-in-out transform hover:scale-110">
        <BiLogoTypescript  className="text-blue-500 text-6xl" />
        <span className="mt-2 text-lg text-black">TypeScript</span>
        </div>


      </div>
    </section>

{/**CONTACT US */}

<section className="text-gray-600 body-font relative">
  <div className="absolute inset-0 bg-gray-300">
    <iframe width="100%" height="100%" frameBorder="0" title="map" scrolling="no" src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=%C4%B0zmir+(My%20Business%20Name)&ie=UTF8&t=&z=14&iwloc=B&output=embed"  ></iframe>
  </div>
  <div className="container px-5 py-24 mx-auto flex">
    <div className="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
      <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">Contact Us</h2>
      <p className="leading-relaxed mb-5 text-gray-600">PLease fill this form if you have any queries or complain or if you have any messages for us</p>
      <div className="relative mb-4">
        <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
        <input type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>
      <div className="relative mb-4">
        <label htmlFor="message" className="leading-7 text-sm text-gray-600">Message</label>
        <textarea id="message" name="message" className="w-full bg-white rounded border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
      </div>
      <button className="text-white bg-purple-500 border-0 py-2 px-6 focus:outline-none hover:bg-purple-600 rounded text-lg">Submit</button>
      <p className="text-xs text-gray-500 mt-3">please read our privay policy for any issue.</p>
    </div>
  </div>
</section>
{/**footer */}

<footer className="text-gray-600 body-font">
  <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
    <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-10 h-10 text-white p-2 bg-purple-500 rounded-full" viewBox="0 0 24 24">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
      </svg>
      <span className="ml-3 text-xl">Tailblocks</span>
    </a>
    <p>All right reserved by EK</p>
    <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
      <a className="text-gray-500">
        <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
          <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
        </svg>
      </a>
      <a className="ml-3 text-gray-500">
        <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
          <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
        </svg>
      </a>
      <a className="ml-3 text-gray-500">
        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
          <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
          <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
        </svg>
      </a>
      <a className="ml-3 text-gray-500">
        <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" className="w-5 h-5" viewBox="0 0 24 24">
          <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
          <circle cx="4" cy="4" r="2" stroke="none"></circle>
        </svg>
      </a>
    </span>
  </div>
</footer>


  </div>
</section>
   





</main>
);
}