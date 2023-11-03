import React from "react";

const Design = () => {
  return (
    <section className="py-20 max-lg:px-4">
      <div className="max-w-6xl mx-auto space-y-4">
        <h1 className="text-gray-300 text-center text-2xl font-medium md:text-3xl">
          3D desing has never been easier
        </h1>
        <p className="text-zinc-500 text-center text-lg md:text-2xl max-w-2xl mx-auto">
          Create 3D objects, edit materials, add interactivity, and export.
          Control the outcome of your 3d design work.
        </p>
        <div className="pt-4">
          <video
            autoPlay
            playsInline
            loop
            muted
            src="https://cdn.spline.design/_assets/_videos/spline_beta_release.mp4"
            poster="/_next/static/media/video_preview.fb407255.jpg"
            width="1080"
            height="634"
            className="rounded-2xl"
          ></video>
        </div>
      </div>
    </section>
  );
};

export default Design;
