import { Tooltip } from "@mantine/core";
import Image from "next/image"

interface props {
  tech_stack: string[];
}

export default function TechStack({ tech_stack }: props) {
  return (
    <>
      <div className="grid grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 place-items-center gap-5 mt-5">
        {tech_stack.map((tech, idx) => (
          <Tooltip key={idx} label={tech} radius='xl' withArrow>
            <Image
              src={`/techstack/${tech.toLowerCase()}.webp`}
              alt={tech}
              width={100}
              height={100}
              style={{ marginLeft: "auto", marginRight: "auto" }}
            />
          </Tooltip>
        ))}
      </div>
    </>
  );
}
