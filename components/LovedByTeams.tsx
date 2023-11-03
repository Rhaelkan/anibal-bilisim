import Image, { StaticImageData } from "next/image";
import { clients } from "@/constants";

interface TeamsCardProps {
  description: string;
  image: StaticImageData;
  job: string;
  userName: string;
}

const TeamsCard = ({ description, image, job, userName }: TeamsCardProps) => {
  return (
    <div className="bg-[#181A1E] rounded-2xl p-7 border border-zinc-800 flex flex-col justify-between space-y-6">
      <p className="text-gray-300 font-medium tracking-tight">{description}</p>
      <div className="flex items-start">
        <div>
          <Image
            src={image}
            alt="client photo"
            width={40}
            height={40}
            className="rounded-full"
          />
        </div>
        <div className="pl-4">
          <h1 className="text-zinc-400 text-sm tracking-tight font-medium">
            {job}
          </h1>
          <h1 className="text-zinc-400 text-[12px]">{userName}</h1>
        </div>
      </div>
    </div>
  );
};

const LovedByTeams = () => {
  return (
    <section className="py-32 max-lg:px-4">
      <div className="max-w-5xl mx-auto space-y-4">
        <h1 className="text-gray-300 text-center text-2xl font-medium md:text-3xl">
          Loved by teams around the world
        </h1>
        <p className="text-zinc-500 text-center text-lg md:text-2xl max-w-2xl mx-auto">
          Teams love creating in 3D with Anibal for its ease of use and
          flexibility.
        </p>
        <div className="pt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          {clients.map((client) => (
            <TeamsCard
              description={client.description}
              image={client.image}
              job={client.job}
              userName={client.userName}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default LovedByTeams;
