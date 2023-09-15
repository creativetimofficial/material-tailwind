import { IconButton } from "@material-tailwind/react";

export function IconButtonCustomStyles() {
  return (
    <div className="flex gap-4">
      <IconButton className="rounded bg-[#ea4335] hover:shadow-[#ea4335]/20 focus:shadow-[#ea4335]/20 active:shadow-[#ea4335]/10">
        <i className="fab fa-google text-lg" />
      </IconButton>
      <IconButton className="rounded bg-[#1DA1F2] hover:shadow-[#1DA1F2]/20 focus:shadow-[#1DA1F2]/20 active:shadow-[#1DA1F2]/10">
        <i className="fab fa-twitter text-lg" />
      </IconButton>
      <IconButton className="rounded bg-[#ea4c89] hover:shadow-[#ea4c89]/20 focus:shadow-[#ea4c89]/20 active:shadow-[#ea4c89]/10">
        <i className="fab fa-dribbble text-lg" />
      </IconButton>
      <IconButton className="rounded bg-[#333333] hover:shadow-[#333333]/20 focus:shadow-[#333333]/20 active:shadow-[#333333]/10">
        <i className="fab fa-github text-lg" />
      </IconButton>
    </div>
  );
}
