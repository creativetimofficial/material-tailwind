export function AvatarWithBorder() {
  return (
    <div className="flex gap-4">
      <img
        src="https://docs.material-tailwind.com/img/face-2.jpg"
        alt="avatar"
        className="relative inline-block h-12 w-12 !rounded-full border border-slate-800 object-cover object-center p-0.5"
      />
      <img
        src="https://docs.material-tailwind.com/img/face-2.jpg"
        alt="avatar"
        className="relative inline-block h-12 w-12 rounded-lg border border-green-600 object-cover object-center p-0.5"
      />
      <img
        src="https://docs.material-tailwind.com/img/face-2.jpg"
        alt="avatar"
        className="relative inline-block h-12 w-12 !rounded-none border border-pink-600 object-cover object-center p-0.5"
      />
    </div>
  );
}
