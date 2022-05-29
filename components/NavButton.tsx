import { Button } from "@mantine/core";
import Link from "next/link";
import { ReactNode } from "react";

interface props {
  link: string;
  children: ReactNode;
}

export default function NavButton(props: props) {
  return (
    <Link href={props.link}>
      <Button variant="subtle" color="gray" className="flex-1 transition-colors font-medium text-lg" uppercase>
        {props.children}
      </Button>
    </Link>);
}