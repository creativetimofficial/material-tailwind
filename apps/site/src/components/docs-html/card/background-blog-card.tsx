

export default function BackgroundBlogCard() {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: `<div class="relative flex h-[40rem] w-full max-w-[28rem] flex-col items-end justify-center overflow-hidden rounded-lg border border-slate-200 bg-white text-center shadow-lg shadow-slate-950/5">
  <div class="m-1.5 h-max w-[calc(100%-12px)] rounded-[5px]">
    <div class="absolute inset-0 m-0 h-full w-full rounded-none  bg-cover bg-center">
      <div class="absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50 to-black/10 dark:from-black/90 dark:via-black/60 dark:to-black/20"></div>
    </div>
  </div>
  <div class="relative bottom-0 flex h-full w-full flex-col items-center justify-end rounded px-6 py-14 md:px-12">
    <h4 class="font-sans text-xl font-bold text-white antialiased md:text-2xl lg:text-3xl">How we design and code open-source projects?</h4>
    <h6 class="my-6 font-sans text-base font-bold text-white/80 antialiased md:text-lg lg:text-xl">Tania Andrew</h6><img src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1480&amp;q=80" alt="tania andrew" class="inline-block h-[72px] w-[72px] rounded-full border-2 border-white object-cover object-center" />
  </div>
</div>
`
      }}
    />
  );
}
