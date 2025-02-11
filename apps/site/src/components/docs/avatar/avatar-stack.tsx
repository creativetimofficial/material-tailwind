import { Avatar } from "@material-tailwind/react";

export default function AvatarStack() {
  return (
    <div className="flex items-center -space-x-4">
      <Avatar
        alt="user 1"
        className="border-2 border-secondary hover:z-10 focus:z-10"
        src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/ct-assets/team-4.jpg"
      />
      <Avatar
        alt="user 2"
        className="border-2 border-secondary hover:z-10 focus:z-10"
        src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/ct-assets/team-4.jpg"
      />
      <Avatar
        alt="user 3"
        className="border-2 border-secondary hover:z-10 focus:z-10"
        src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/ct-assets/team-4.jpg"
      />
      <Avatar
        alt="user 4"
        className="border-2 border-secondary hover:z-10 focus:z-10"
        src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/ct-assets/team-4.jpg"
      />
      <Avatar
        alt="user 5"
        className="border-2 border-secondary hover:z-10 focus:z-10"
        src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/ct-assets/team-4.jpg"
      />
    </div>
  );
}
