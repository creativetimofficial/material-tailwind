export function AlertColors() {
  return (
    <div className="block w-full">
      <div className="font-regular relative mb-4 block w-full rounded-lg bg-blue-500 p-4 text-base leading-5 text-white opacity-100">
        An info alert for showing message.
      </div>
      <div className="font-regular relative mb-4 block w-full rounded-lg bg-red-500 p-4 text-base leading-5 text-white opacity-100">
        An error alert for showing message.
      </div>
      <div className="font-regular relative mb-4 block w-full rounded-lg bg-green-500 p-4 text-base leading-5 text-white opacity-100">
        A success alert for showing message.
      </div>
      <div className="font-regular relative mb-4 block w-full rounded-lg bg-orange-500 p-4 text-base leading-5 text-white opacity-100">
        A warning alert for showing message.
      </div>
    </div>
  );
}
