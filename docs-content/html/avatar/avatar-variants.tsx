export function AvatarVariants() {
  return (
    <div className="flex gap-4">
      <img
        src="https://docs.material-tailwind.com/img/face-2.jpg"
        alt="avatar"
        className="relative inline-block h-12 w-12 !rounded-full object-cover object-center"
      />
      <img
        src="https://docs.material-tailwind.com/img/face-2.jpg"
        alt="avatar"
        className="relative inline-block h-12 w-12 rounded-lg object-cover object-center"
      />
      <img
        src="https://docs.material-tailwind.com/img/face-2.jpg"
        alt="avatar"
        className="relative inline-block h-12 w-12 !rounded-none object-cover object-center"
      />
    </div>
  );
}
