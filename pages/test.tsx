import { Avatar, Button, Chip } from "@material-tailwind/react";

export default function Test() {
  return (
    <div className="grid h-screen w-screen place-items-center">
      <div className="relative rounded-full">
        {/* <Avatar
          size="xs"
          src="https://images.unsplash.com/photo-1593104547489-5cfb3839a3b5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjl8fHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
        /> */}
        <Button>Button</Button>
        <span className="absolute right-[2%] top-[4%] min-h-[12px] min-w-[12px] translate-x-2/4 -translate-y-2/4 rounded-full bg-green-500 px-1 text-xs font-medium text-white content-['']">
          99+
        </span>
      </div>
    </div>
  );
}
