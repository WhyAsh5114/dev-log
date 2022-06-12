import { BrandGithub } from "tabler-icons-react";
import { Link as LinkIcon } from "tabler-icons-react";

interface headerProps {
  title: string;
  github: string;
  website: string;
}

export default function ProjectHeader({ title, github, website }: headerProps) {
  return (
    <div className="flex place-items-center mb-2">
      <h2 className="font-bold text-xl md:text-2xl lg:text-3xl xl:text-4xl flex-1 text-white h-fit">
        {title}
      </h2>
      <div className="flex gap-2 h-fit flex-col md:flex-row md:gap-5">
        <div className="bg-indigo-500 rounded-full p-1.5 cursor-pointer">
          <a
            href={github}
            target="_blank"
            rel="noreferrer noopener"
            aria-label="GitHub Link"
          >
            <BrandGithub className="h-5 md:h-6" color="white" />
          </a>
        </div>
        {website !== "" ? (
          <div className={`bg-blue-500 rounded-full p-1.5 cursor-pointer`}>
            <a
              href={website}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="Website Link"
            >
              <LinkIcon className="h-5 md:h-6" color="white" />
            </a>
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}
