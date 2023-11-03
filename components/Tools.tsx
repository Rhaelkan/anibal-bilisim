import Image, { StaticImageData } from "next/image";
import { tools } from "@/constants";

interface ToolsCardProps {
  imageName: StaticImageData;
  title: string;
  description: string;
}

const ToolsCard = ({ imageName, title, description }: ToolsCardProps) => {
  return (
    <div className="bg-[#181A1E] rounded-2xl w-full max-w-[526px] h-[426px] p-8 flex flex-col justify-center items-center pb-16 group duration-150">
      <Image
        src={imageName}
        alt={title}
        className="group-hover:scale-105 duration-150"
      />
      <h1 className="text-white text-center mt-2">{title}</h1>
      <p className="text-zinc-500 mt-1 text-center">{description}</p>
    </div>
  );
};

const Tools = () => {
  return (
    <section className="py-32 px-4">
      <div className="max-w-5xl mx-auto space-y-4">
        <h1 className="text-gray-300 text-center text-2xl font-medium md:text-3xl">
          Tools to express your creativity in 3D
        </h1>
        <p className="text-zinc-500 tracking-tight text-center text-lg md:text-2xl max-w-2xl mx-auto">
          3D opens a new door for creativity. A solid set of features that will
          help you create your best 3d designs.
        </p>
        <div className="flex flex-col justify-center items-center xl:grid xl:grid-cols-2 gap-6 pt-8">
          {tools.map((tool) => (
            <ToolsCard
              imageName={tool.imageName}
              title={tool.title}
              description={tool.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tools;
