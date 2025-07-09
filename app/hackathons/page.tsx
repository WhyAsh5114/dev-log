import { getHackathons } from "./utils";
import { HackathonCard } from "./components/HackathonCard";
import { TypographyH1 } from "@/components/ui/typographyH1";

export default function HackathonsPage() {
  const hackathons = getHackathons();

  const sortedHackathons = hackathons.sort(
    (a, b) => b.metadata.date.getTime() - a.metadata.date.getTime()
  );

  return (
    <>
      <TypographyH1>Hackathons</TypographyH1>

      <div className="grid gap-2 md:grid-cols-2 mt-4">
        {sortedHackathons.map((hackathon) => (
          <HackathonCard key={hackathon.metadata.name} hackathon={hackathon} />
        ))}
      </div>
    </>
  );
}
