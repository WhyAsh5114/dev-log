import { Button, Text } from "@mantine/core";
import Link from "next/link";
import { ReactNode } from "react";

interface props {
  link: string;
  children: ReactNode;
  icon: ReactNode;
  hoverClass: string;
  data_cy: string;
}

export default function NavButton(props: props) {
  return (
    <Link href={props.link}>
      <Button 
        leftIcon={props.icon} 
        variant="subtle" 
        color="gray" 
        className={`flex-1 transition-colors font-medium text-lg ${props.hoverClass}`} 
        uppercase 
        data-cy={props.data_cy}
      >
        <Text>{props.children}</Text>
      </Button>
    </Link>
  );
}