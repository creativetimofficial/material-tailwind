export function AvatarWithDotIndicator() {
  return (
    <div className="flex gap-4">
      <div className="relative">
        <img
          src="https://docs.material-tailwind.com/img/face-2.jpg"
          alt="avatar"
          className="relative inline-block h-12 w-12 rounded-full object-cover object-center"
        />
        <span className="absolute -right-0.5 top-0.5 !z-20 h-3.5 w-3.5 rounded-full border-2 border-white bg-green-500"></span>
      </div>
      <div className="relative">
        <img
          src="https://docs.material-tailwind.com/img/face-2.jpg"
          alt="avatar"
          className="relative inline-block h-12 w-12 rounded-lg object-cover object-center"
        />
        <span className="absolute -right-1 -top-1 !z-20 h-3.5 w-3.5 rounded-full border-2 border-white bg-green-500"></span>
      </div>
      <div className="relative">
        <img
          src="https://docs.material-tailwind.com/img/face-2.jpg"
          alt="avatar"
          className="relative inline-block h-12 w-12 rounded-full object-cover object-center"
        />
        <span className="absolute -right-0.5 bottom-0.5 !z-20 h-3.5 w-3.5 rounded-full border-2 border-white bg-red-500"></span>
      </div>
      <div className="relative">
        <img
          src="https://docs.material-tailwind.com/img/face-2.jpg"
          alt="avatar"
          className="relative inline-block h-12 w-12 rounded-lg object-cover object-center"
        />
        <span className="absolute -bottom-1 -right-1 !z-20 h-3.5 w-3.5 rounded-full border-2 border-white bg-red-500"></span>
      </div>
    </div>
  );
}
