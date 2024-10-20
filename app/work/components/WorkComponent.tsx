import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Work } from "../data";
import { Badge } from "@/components/ui/badge";

export default function WorkComponent({ work }: { work: Work }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          {work.organization}
          <Badge>{work.location}</Badge>
        </CardTitle>
        <CardDescription className="grid md:grid-cols-2">
          <span>{work.role}</span>
          <span className="italic md:text-right">
            {work.startDate} to {work.endDate}
          </span>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="list-disc ml-4 space-y-2 text-sm font-light">
          {work.tasks.map((task, idx) => (
            <li key={idx}>{task}</li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
