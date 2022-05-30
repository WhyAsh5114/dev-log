import { Title, Text, List, ThemeIcon } from "@mantine/core";
import { CircleCheck } from "tabler-icons-react";


export default function Description() {
  return (
  <div className='flex lg:flex-1 justify-center flex-col border-l-2 pl-3 h-min py-5'>
    <Title className='w-full h-min text-xl md:text-2xl lg:text-3xl'>Hi, my name is Yash</Title>
    <Text className='w-full pb-3 font-semibold text-md md:text-lg'>I am a full-stack developer, who is</Text>
    <List>
      <DescriptionListItem text="Super excited about new technologies"/>
      <DescriptionListItem text="Ready to tackle challenges head on"/>
      <DescriptionListItem text="Always willing to learn"/>
    </List>
  </div>
  );
}


interface ListItemProps {
  text: string;
}
function DescriptionListItem(props: ListItemProps) {
  return (<List.Item 
    className="text-md md:text-lg" 
    icon={<ThemeIcon color='blue' size={24} radius='xl'><CircleCheck size={20} /></ThemeIcon>}>
      {props.text}
    </List.Item>);
}