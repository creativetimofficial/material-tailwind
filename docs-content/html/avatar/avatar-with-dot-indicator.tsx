export function AvatarWithDotIndicator() {
  return (
    <div className="flex gap-4">
      <div className="relative inline-flex">
        <img
          src="https://docs.material-tailwind.com/img/face-2.jpg"
          alt="avatar"
          className="relative inline-block h-12 w-12 rounded-full object-cover object-center"
        />
        <span className="absolute right-[14%] top-[14%] grid min-h-[12px] min-w-[12px] -translate-y-2/4 translate-x-2/4 place-items-center rounded-full border-2 border-white bg-green-500 px-1 py-1 text-xs font-medium leading-none text-white content-['']"></span>
      </div>
      <div className="relative inline-flex">
        <img
          src="https://docs.material-tailwind.com/img/face-2.jpg"
          alt="avatar"
          className="relative inline-block h-12 w-12 rounded-lg object-cover object-center"
        />
        <span className="absolute right-[2%] top-[4%] grid min-h-[12px] min-w-[12px] -translate-y-2/4 translate-x-2/4 place-items-center rounded-full border-2 border-white bg-green-500 px-1 py-1 text-xs font-medium leading-none text-white content-['']"></span>
      </div>
      <div className="relative inline-flex">
        <img
          src="https://docs.material-tailwind.com/img/face-2.jpg"
          alt="avatar"
          className="relative inline-block h-12 w-12 rounded-full object-cover object-center"
        />
        <span className="absolute bottom-[14%] right-[14%] grid min-h-[12px] min-w-[12px] translate-x-2/4 translate-y-2/4 place-items-center rounded-full border-2 border-white bg-red-500 px-1 py-1 text-xs font-medium leading-none text-white content-['']"></span>
      </div>
      <div className="relative inline-flex">
        <img
          src="https://docs.material-tailwind.com/img/face-2.jpg"
          alt="avatar"
          className="relative inline-block h-12 w-12 rounded-lg object-cover object-center"
        />
        <span className="absolute bottom-[4%] right-[2%] grid min-h-[12px] min-w-[12px] translate-x-2/4 translate-y-2/4 place-items-center rounded-full border-2 border-white bg-red-500 px-1 py-1 text-xs font-medium leading-none text-white content-['']"></span>
      </div>
    </div>
  );
}
