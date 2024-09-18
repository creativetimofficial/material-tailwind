export function CardWithScrollArea() {
  return (
    <div className="relative w-96 bg-white shadow-sm border border-slate-200 rounded-lg p-3 pb-6">
      <div className="flex justify-center mb-4 mt-5">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-10 h-10 text-purple-500">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15.362 5.214A8.252 8.252 0 0 1 12 21 8.25 8.25 0 0 1 6.038 7.047 8.287 8.287 0 0 0 9 9.601a8.983 8.983 0 0 1 3.361-6.867 8.21 8.21 0 0 0 3 2.48Z" />
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 18a3.75 3.75 0 0 0 .495-7.468 5.99 5.99 0 0 0-1.925 3.547 5.975 5.975 0 0 1-2.133-1.001A3.75 3.75 0 0 0 12 18Z" />
          </svg>
        </div>

        <div className="flex justify-center mb-3">
          <h5 className="text-slate-800 text-2xl font-semibold">
            Scrollable Content
          </h5>
        </div>
      <div className="p-3 mt-5 border-t border-slate-100 text-center max-h-60 overflow-y-auto [&::-webkit-scrollbar-thumb]:rounded-xl [&::-webkit-scrollbar-thumb]:bg-slate-300 [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-track]:rounded-xl [&::-webkit-scrollbar-track]:bg-slate-100">
        <p className="block text-slate-600 leading-normal font-light mb-4 max-w-lg">
          Because it&apos;s about motivating the doers. Because I&apos;m here to follow my dreams and inspire others. Here is some additional text to test the scrolling feature. Imagine this is a long article that you can scroll through.
        </p> <br/>
        <p className="block text-slate-600 leading-normal font-light mb-4 max-w-lg">
          Still more content to keep the scroll active. Let's make sure the scrollbar styling is correct. Apple's scrollbar style is subtle, with a thin, sleek design. Scroll down for more! Keep adding more content to ensure the scroll is working. The card's content should now be scrollable. Test it out!
          More text to fill the space, as we continue to check how scroll behaves.
        </p>
      </div>
    </div>

  );
}
