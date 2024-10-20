import { TypographyH1 } from "@/components/ui/typographyH1";
import { allWork } from "./data";
import WorkComponent from "./components/WorkComponent";

export default function Work() {
  return (
    <>
      <TypographyH1>Work</TypographyH1>
      <div className="grid gap-2 mt-4">
        {allWork.map((work, idx) => (
          <WorkComponent key={idx} work={work} />
        ))}
      </div>
    </>
  );
}
