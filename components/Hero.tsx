const Hero = () => {
  return (
    <div className="w-full h-screen">
      <div className="absolute h-full w-full py-32 md:py-36 px-10 flex flex-col justify-between items-center leading-tight">
        <div>
          <h1 className="text-white text-center text-[23px] tracking-tight font-semibold md:text-4xl max-w-xl">
            Spline, a place to design and collaborate in 3D.
          </h1>
        </div>
        <h1>hako</h1>
      </div>
      <iframe
        src="https://my.spline.design/clonercubesgenerativecopy-55e467455f125e2b07c701f09a385e14/"
        className="w-full h-full"
      ></iframe>
      <div className="bg-[#121316] py-2 px-12 absolute bottom-4 right-4">
        <h1 className="text-white invisible">selam</h1>
      </div>
    </div>
  );
};

export default Hero;
