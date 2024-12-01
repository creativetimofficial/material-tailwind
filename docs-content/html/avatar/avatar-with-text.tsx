export function AvatarWithText() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center gap-4">
        <img
          src="https://docs.material-tailwind.com/img/face-2.jpg"
          alt="avatar"
          className="relative inline-block h-12 w-12 !rounded-full object-cover object-center"
        />
        <div>
          <h6 className="text-slate-800 font-semibold">
            Tania Andrew
          </h6>
          <p className="text-slate-600 text-sm">
            Web Developer
          </p>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <img
          src="https://docs.material-tailwind.com/img/face-2.jpg"
          alt="avatar"
          className="relative inline-block h-12 w-12 rounded-lg object-cover object-center"
        />
        <div>
          <h6 className="text-slate-800 font-semibold">
            Tania Andrew
          </h6>
          <p className="text-slate-600 text-sm">
            Web Developer
          </p>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <img
          src="https://docs.material-tailwind.com/img/face-2.jpg"
          alt="avatar"
          className="relative inline-block h-12 w-12 !rounded-none object-cover object-center"
        />
        <div>
          <h6 className="text-slate-800 font-semibold">
            Tania Andrew
          </h6>
          <p className="text-slate-600 text-sm">
            Web Developer
          </p>
        </div>
      </div>
    </div>
  );
}
