const CreateAndCollaborate = () => {
  return (
    <section className="py-32 max-lg:px-4">
      <div className="max-w-5xl mx-auto space-y-4">
        <h1 className="text-gray-300 text-center text-2xl font-medium md:text-3xl">
          Create and collaborate in real-time
        </h1>
        <p className="text-zinc-500 text-center text-lg md:text-2xl max-w-2xl mx-auto">
          Add comments, invite your team, or share a link! Brainstorming in 3D
          is easy with Anibal.
        </p>
        <div className="pt-8">
          <video
            autoPlay
            playsInline
            loop
            muted
            src="https://cdn.spline.design/_assets/_videos/features/comments.mp4"
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

export default CreateAndCollaborate;
