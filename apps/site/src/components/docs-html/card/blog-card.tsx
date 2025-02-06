
export default function BlogCard() {
  return (
    <div
      className="w-full place-items-center"
      dangerouslySetInnerHTML={{
        __html: `<div class="w-full rounded-lg border shadow-sm bg-white border-slate-200 shadow-slate-950/5 max-w-[24rem] overflow-hidden"><img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1471&amp;q=80" alt="ui/ux review check" class="w-[calc(100%-16px)] h-max rounded m-2" />
  <div class="w-full h-max rounded px-3.5 py-2.5">
    <h6 class="font-sans antialiased font-bold text-base md:text-lg lg:text-xl text-current">UI/UX Review Check</h6>
    <p class="font-sans antialiased text-base mt-1 text-slate-600">Because it&#x27;s about motivating the doers. Because I&#x27;m here to follow my dreams and inspire others.</p>
  </div>
  <div class="w-full px-3.5 pt-2 pb-3.5 rounded mt-4 flex items-center justify-between">
    <div class="flex items-center -space-x-3"><button data-open="false" class="outline-none group"><img src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1061&amp;q=80" alt="natali craig" class="inline-block object-cover object-center data-[shape=square]:rounded-none data-[shape=circular]:rounded-full data-[shape=rounded]:rounded-[current] w-8 h-8 rounded border-2 border-slate-200 hover:z-10" data-shape="circular" /></button><button data-open="false" class="outline-none group"><img src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1480&amp;q=80" alt="tania andrew" class="inline-block object-cover object-center data-[shape=square]:rounded-none data-[shape=circular]:rounded-full data-[shape=rounded]:rounded-[current] w-8 h-8 rounded border-2 border-slate-200 hover:z-10" data-shape="circular" /></button></div><small class="font-sans antialiased text-sm text-current">January 10</small>
  </div>
</div>
`
      }}
    />
  );
}
