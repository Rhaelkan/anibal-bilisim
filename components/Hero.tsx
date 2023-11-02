const Hero = () => {
  return (
    <div className="w-full h-screen flex justify-center">
      <div className="absolute h-fit w-fit py-28 md:py-36 px-8 flex flex-col justify-start items-center leading-tight">
        <div className="space-y-7 flex flex-col justify-center">
          <h1 className="text-white text-center text-[23px] tracking-tight font-semibold md:text-[40px] max-w-xl">
            Spline, a place to design and collaborate in 3D.
          </h1>
          <div className="flex items-center space-x-6 justify-center">
            <div className="flex items-center space-x-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4 text-gray-400 md:w-5 md:h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 12.75l6 6 9-13.5"
                />
              </svg>
              <h1 className="text-[12px] text-gray-400 md:text-base">
                Web-Based
              </h1>
            </div>
            <div className="flex items-center space-x-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4 text-gray-400 md:w-5 md:h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 12.75l6 6 9-13.5"
                />
              </svg>
              <h1 className="text-[12px] text-gray-400 md:text-base">
                Real-Time
              </h1>
            </div>
            <div className="flex items-center space-x-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4 text-gray-400 md:w-5 md:h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 12.75l6 6 9-13.5"
                />
              </svg>
              <h1 className="text-[12px] text-gray-400 md:text-base">
                Collaborative
              </h1>
            </div>
          </div>
          <button className="bg-blue-500 text-white font-semibold hover:bg-blue-600 duration-150 w-full max-w-[280px] mx-auto py-4 rounded-xl flex items-center justify-center">
            Get started — it’s free
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 ml-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
              />
            </svg>
          </button>
        </div>
      </div>
      <iframe
        src="https://my.spline.design/clonercubesgenerativecopy-55e467455f125e2b07c701f09a385e14/"
        className="w-full h-full"
      ></iframe>
      <div className="absolute w-fit h-fit bg-zinc-800 bg-opacity-70 text-gray-400 py-4 px-7 backdrop-blur rounded-full bottom-28">
        <h1>Press and drag to orbit</h1>
      </div>
    </div>
  );
};

export default Hero;
