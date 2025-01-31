import Image from "next/image";

export function Brand() {
  return (
    <div className="relative overflow-hidden rounded-[10px] border border-surface p-px shadow-lg shadow-black/5">
      <span
        aria-hidden="true"
        className="content[''] duration-[5000] absolute left-2/4 top-2/4 block w-[calc(100%*1.5)] -translate-x-2/4 -translate-y-2/4 animate-gradient-spin rounded-full bg-conic-gradient pb-[calc(100%*1.5)]"
      />
      <div className="relative z-10 rounded-lg bg-background p-1">
        <div className="grid h-9 w-9 scale-105 cursor-pointer place-items-center rounded-[5px] bg-black transition-transform duration-300 hover:scale-110">
          <img
            src={`http://localhost:3001/logo-mt.png`}
            alt="material tailwind"
            width={256}
            height={256}
            className="w-5"
          />
        </div>
      </div>
    </div>
  );
}

export default Brand;
