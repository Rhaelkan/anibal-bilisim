import Image from "next/image";
import Link from "next/link";

import { explorers } from "@/constants";

interface CardProps {
  img: HTMLImageElement;
  title: string;
}

const Card = ({ img, title }: CardProps) => {
  return (
    <div className="group">
      <Image
        src={img}
        alt={title}
        width={200}
        height={150}
        className="rounded-2xl duration-150 border-2 border-black group-hover:ring-2 ring-blue-500 group-hover:border-[#121316] group-hover:duration-150 group-hover:scale-105"
      />
      <h1 className="text-gray-300 font-medium text-sm text-center mt-3">
        {title}
      </h1>
    </div>
  );
};

const Explore = () => {
  return (
    <section id="explore">
      <div className="max-w-7xl mx-auto py-8 space-y-4">
        <h1 className="text-gray-300 text-center text-2xl font-medium md:text-3xl">
          Explore the latest examples
        </h1>
        <p className="text-zinc-500 text-center text-lg md:text-2xl">
          Try remixing a 3d design by opening it.
        </p>
        <div className="flex flex-wrap gap-4 pt-8 justify-center">
          {explorers.map((explorer) => (
            <Card img={explorer.imageName} title={explorer.title} />
          ))}
        </div>
        <div className="w-full flex justify-center pt-8">
          <Link
            href="/examples"
            className="bg-zinc-800 border border-gray-700 text-gray-500 rounded-full px-5 py-2 hover:text-white duration-150"
          >
            See All Examples
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Explore;
