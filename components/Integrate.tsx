const Integrate = () => {
  return (
    <section className="py-32 max-lg:px-4">
      <div className="max-w-5xl mx-auto space-y-4">
        <h1 className="text-gray-300 text-center text-2xl font-medium md:text-3xl">
          3D desing has never been easier
        </h1>
        <p className="text-zinc-500 text-center text-lg md:text-2xl max-w-2xl mx-auto">
          Create 3D objects, edit materials, add interactivity, and export.
          Control the outcome of your 3d design work.
        </p>
        <div className="pt-8 h-[512px] relative">
          <h1 className="absolute text-zinc-500 text-sm top-12 left-8 cursor-default">
            Drag the cube to interact with it
          </h1>
          <iframe
            src="https://my.spline.design/cubeaxiswebsiteupdatedinprod-c7eb2ea95c5e22c50b14b5333ee86583/"
            width="100%"
            height="100%"
            className="rounded-2xl"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Integrate;
