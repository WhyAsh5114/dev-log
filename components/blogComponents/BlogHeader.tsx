import { Divider } from "@mantine/core";

interface blogHeaderProps {
  title: string;
  tags: string[];
}

export default function BlogHeader({ title, tags }: blogHeaderProps) {
  return (
    <>
      <h2 className="font-bold text-xl md:text-2xl lg:text-3xl xl:text-4xl flex-1 text-white h-fit">
        {title}
      </h2>
      <div className="flex gap-5 my-3">
        {tags.map((tag) => (
          <p
            key={tag}
            className="text-black font-bold lg:py-0.5 bg-gray-200 px-1.5 md:px-2 lg:px-3 rounded-full w-fit text-sm md:text-md lg:text-lg"
          >
            #{tag}
          </p>
        ))}
      </div>
      <Divider color={"white"} orientation="horizontal" className="mt-2" />
    </>
  );
}
