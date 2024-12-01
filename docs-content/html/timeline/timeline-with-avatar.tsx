export function TimelineWithAvatar() {
  return (
    <div className="w-[32rem]">
      <ul className="flex w-full flex-col">
        <li className="relative flex flex-col gap-2">
          <span className="absolute left-0 grid justify-center bg-transparent transition-opacity duration-200">
            <span className="h-full w-0.5 bg-blue-gray-100"></span>
          </span>
          <div className="flex items-center gap-4">
            <span className="relative z-[2] w-max flex-shrink-0 overflow-hidden rounded-full bg-gray-900 p-0 text-white">
              <img
                src="https://docs.material-tailwind.com/img/team-1.jpg"
                alt="user 1"
                className="relative inline-block h-9 w-9 !rounded-full  border-2 border-gray-900 object-cover object-center"
              />
            </span>
            <h5 className="block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
              Timeline Title Here.
            </h5>
          </div>
          <div className="flex gap-4 pb-8">
            <span className="pointer-events-none invisible h-full flex-shrink-0"></span>
            <div>
              <p className="block font-sans text-base font-normal leading-relaxed text-gray-600 antialiased">
                The key to more success is to have a lot of pillows. Put it this
                way, it took me twenty five years to get these plants, twenty
                five years of blood sweat and tears, and I&apos;m never giving
                up, I&apos;m just getting started. I&apos;m up to something. Fan
                luv.
              </p>
            </div>
          </div>
        </li>
        <li className="relative flex flex-col gap-2">
          <span className="absolute left-0 grid justify-center bg-transparent transition-opacity duration-200">
            <span className="h-full w-0.5 bg-blue-gray-100"></span>
          </span>
          <div className="flex items-center gap-4">
            <span className="relative z-[2] w-max flex-shrink-0 overflow-hidden rounded-full bg-gray-900 p-0 text-white">
              <img
                src="https://docs.material-tailwind.com/img/team-2.jpg"
                alt="user 2"
                className="relative inline-block h-9 w-9 !rounded-full border-2 border-gray-900 object-cover object-center"
              />
            </span>
            <h5 className="block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
              Timeline Title Here.
            </h5>
          </div>
          <div className="flex gap-4 pb-8">
            <span className="pointer-events-none invisible h-full flex-shrink-0"></span>
            <div>
              <p className="block font-sans text-base font-normal leading-relaxed text-gray-600 antialiased">
                The key to more success is to have a lot of pillows. Put it this
                way, it took me twenty five years to get these plants, twenty
                five years of blood sweat and tears, and I&apos;m never giving
                up, I&apos;m just getting started. I&apos;m up to something. Fan
                luv.
              </p>
            </div>
          </div>
        </li>
        <li className="relative flex flex-col gap-2">
          <div className="flex items-center gap-4">
            <span className="relative z-[2] w-max flex-shrink-0 overflow-hidden rounded-full bg-gray-900 p-0 text-white">
              <img
                src="https://docs.material-tailwind.com/img/team-3.jpg"
                alt="user 3"
                className="relative inline-block h-9 w-9 !rounded-full border-2 border-gray-900 object-cover object-center"
              />
            </span>
            <h5 className="block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
              Timeline Title Here.
            </h5>
          </div>
          <div className="flex gap-4">
            <span className="pointer-events-none invisible h-full flex-shrink-0"></span>
            <div>
              <p className="block font-sans text-base font-normal leading-relaxed text-gray-600 antialiased">
                The key to more success is to have a lot of pillows. Put it this
                way, it took me twenty five years to get these plants, twenty
                five years of blood sweat and tears, and I&apos;m never giving
                up, I&apos;m just getting started. I&apos;m up to something. Fan
                luv.
              </p>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
}
