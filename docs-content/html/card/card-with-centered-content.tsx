export function CardWithCenteredContent() {
  return (
    <div className="relative min-h-80 w-full flex flex-col justify-center items-center my-6 bg-white shadow-sm border border-slate-200 rounded-lg p-2">
      <div className="p-3 text-center">
        <div className="flex justify-center mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-10 h-10 text-purple-400">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15.362 5.214A8.252 8.252 0 0 1 12 21 8.25 8.25 0 0 1 6.038 7.047 8.287 8.287 0 0 0 9 9.601a8.983 8.983 0 0 1 3.361-6.867 8.21 8.21 0 0 0 3 2.48Z" />
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 18a3.75 3.75 0 0 0 .495-7.468 5.99 5.99 0 0 0-1.925 3.547 5.975 5.975 0 0 1-2.133-1.001A3.75 3.75 0 0 0 12 18Z" />
          </svg>
    
        </div>
        <div className="flex justify-center mb-2">
          <h5 className="text-slate-800 text-2xl font-semibold">
            Lit Ideas for Startups
          </h5>
        </div>
        <p className="block text-slate-600 leading-normal font-light mb-4 max-w-lg">
          Because it&apos;s about motivating the doers. Because I&apos;m here to follow my dreams and inspire others.
        </p>
        <div className="text-center">
          <button className="min-w-32 rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none" type="button">
            View More
          </button>
        </div>
      </div>
    </div>

  );
}
