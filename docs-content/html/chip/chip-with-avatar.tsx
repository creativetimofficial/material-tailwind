export function ChipWithAvatar() {
  return (
    <div className="relative grid select-none items-center whitespace-nowrap rounded-full bg-gray-900 px-3 py-1.5 font-sans text-xs font-bold uppercase text-white">
      <div className="absolute top-2/4 left-1.5 h-5 w-5 -translate-y-2/4">
        <img
          alt="Tania Andrew"
          src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1480&amp;q=80"
          className="relative inline-block h-full w-full -translate-x-0.5 !rounded-full  object-cover object-center"
        />
      </div>
      <span className="ml-[18px]">
        <p className="block font-sans text-sm font-medium capitalize leading-none text-white antialiased">
          Tania Andrew
        </p>
      </span>
    </div>
  );
}
