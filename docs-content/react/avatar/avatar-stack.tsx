import { Avatar } from "@material-tailwind/react";

export function AvatarStack() {
  return (
    <div className="flex items-center -space-x-4">
      <Avatar
        variant="circular"
        alt="user 1"
        className="border-2 border-white hover:z-10 focus:z-10"
        src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
      />
      <Avatar
        variant="circular"
        alt="user 2"
        className="border-2 border-white hover:z-10 focus:z-10"
        src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1061&q=80"
      />
      <Avatar
        variant="circular"
        alt="user 3"
        className="border-2 border-white hover:z-10 focus:z-10"
        src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1288&q=80"
      />
      <Avatar
        variant="circular"
        alt="user 4"
        className="border-2 border-white hover:z-10 focus:z-10"
        src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80"
      />
      <Avatar
        variant="circular"
        alt="user 5"
        className="border-2 border-white hover:z-10 focus:z-10"
        src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1760&q=80"
      />
    </div>
  );
}
