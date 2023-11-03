import { mores } from "@/constants";

interface MoreCardProps {
  svgName: string;
  title: string;
  description: string;
}

const MoreCard = ({ svgName, title, description }: MoreCardProps) => {
  return (
    <div className="bg-[#181A1E] rounded-2xl flex flex-col justify-center items-center w-[344px] h-[246px] p-8 hover:bg-[#202124] duration-150 group cursor-default">
      <div className="bg-[#27282B] rounded-2xl p-6">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-6 h-6 text-[#797A7C] group-hover:text-[#A770FF] duration-150"
        >
          <path fillRule="evenodd" d={svgName} clipRule="evenodd" />
        </svg>
      </div>
      <h1 className="text-center text-white mt-6">{title}</h1>
      <p className="text-center text-zinc-500 mt-1">{description}</p>
    </div>
  );
};

const More = () => {
  return (
    <section className="py-32 px-4">
      <div className="max-w-6xl mx-auto space-y-4">
        <h1 className="text-gray-300 text-center text-2xl font-medium md:text-3xl">
          And there is more!
        </h1>
        <p className="text-zinc-500 tracking-tight text-center text-lg md:text-2xl max-w-2xl mx-auto">
          Spline is constantly growing just like the possibilities of what you
          can achieve.
        </p>
        <div className="flex flex-wrap justify-center gap-6 pt-8">
          {mores.map((more) => (
            <MoreCard
              svgName={more.svgName}
              title={more.title}
              description={more.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default More;
