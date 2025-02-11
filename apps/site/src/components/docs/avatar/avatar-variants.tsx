import { Avatar } from "@material-tailwind/react";

export default function AvatarVariants() {
  return (
    <div className="item-center flex gap-2">
      <Avatar
        shape="circular"
        src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/ct-assets/team-4.jpg"
        alt="profile-picture"
      />
      <Avatar
        shape="rounded"
        src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/ct-assets/team-4.jpg"
        alt="profile-picture"
      />
      <Avatar
        shape="square"
        src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/ct-assets/team-4.jpg"
        alt="profile-picture"
      />
    </div>
  );
}
