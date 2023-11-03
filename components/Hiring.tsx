import { contacts } from "@/constants";
import { socials } from "@/constants";

interface ContactCardProps {
  emoji: string;
  email: string;
}

interface SocialCardProps {
  name: string;
}

const ContactCard = ({ emoji, email }: ContactCardProps) => {
  return (
    <div className="bg-[#181A1E] rounded-2xl flex flex-col justify-center items-center py-10 px-12 hover:bg-[#202124] duration-150 group cursor-pointer w-full md:w-fit">
      <p className="text-2xl">{emoji}</p>
      <p className="text-zinc-500 font-medium group-hover:text-white duration-150">
        {email}
      </p>
    </div>
  );
};

const SocialCard = ({ name }: SocialCardProps) => {
  return (
    <div className="text-zinc-500 border border-zinc-800 rounded-2xl flex items-center justify-center py-6 px-7 hover:bg-[#202124] duration-150 group cursor-pointer w-full md:w-fit hover:text-white">
      {name}
    </div>
  );
};

const Hiring = () => {
  return (
    <section className="py-32 max-lg:px-4">
      <div className="max-w-5xl mx-auto space-y-4">
        <h1 className="text-gray-300 text-center text-2xl font-medium md:text-3xl">
          We are starting (and hiring!) 🤓
        </h1>
        <p className="text-zinc-500 text-center text-lg md:text-2xl max-w-2xl mx-auto">
          Feel free to reach out if you need help or you want to connect! Also,
          if you are a Developer or Designer and you want to get involved, write
          us at:
        </p>
        <div className="pt-8 flex flex-col gap-4 items-center md:flex-row md:justify-center">
          {contacts.map((contact) => (
            <ContactCard emoji={contact.emoji} email={contact.email} />
          ))}
        </div>
        <div className="pt-8 flex flex-col gap-4 items-center md:flex-row md:flex-wrap md:justify-center">
          {socials.map((social) => (
            <SocialCard name={social.name} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hiring;
