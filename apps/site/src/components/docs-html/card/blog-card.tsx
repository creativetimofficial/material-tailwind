

export default function BlogCard() {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: `<div class="w-full max-w-[24rem] overflow-hidden rounded-lg border border-slate-200 bg-white shadow-lg shadow-slate-950/5"><img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1471&amp;q=80" alt="ui/ux review check" class="m-1.5 h-max w-[calc(100%-12px)] rounded-[5px]" />
  <div class="h-max w-full rounded px-3 py-2">
    <h6 class="font-sans text-base font-bold text-current antialiased md:text-lg lg:text-xl">UI/UX Review Check</h6>
    <p class="mt-1 font-sans text-base text-slate-600 antialiased">Because it&#x27;s about motivating the doers. Because I&#x27;m here to follow my dreams and inspire others.</p>
  </div>
  <div class="mt-4 flex w-full items-center justify-between rounded px-3 pb-3 pt-1.5">
    <div class="flex items-center -space-x-3"><button class="group outline-none"><img src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1061&amp;q=80" alt="natali craig" class="inline-block h-8 w-8 rounded-full border-2 border-slate-200 object-cover object-center hover:z-10" /></button><button class="group outline-none"><img src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1480&amp;q=80" alt="tania andrew" class="inline-block h-8 w-8 rounded-full border-2 border-slate-200 object-cover object-center hover:z-10" /></button></div><small class="font-sans text-sm text-current antialiased">January 10</small>
  </div>
</div>
`
      }}
    />
  );
}
