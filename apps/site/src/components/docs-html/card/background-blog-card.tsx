
export default function BackgroundBlogCard() {
  return (
    <div
      className="w-full place-items-center"
      dangerouslySetInnerHTML={{
        __html: `<div class="rounded-lg border shadow-sm bg-white border-slate-200 shadow-slate-950/5 relative flex h-[40rem] w-full max-w-[28rem] flex-col items-end justify-center overflow-hidden text-center">
  <div class="p-2">
    <div class="absolute inset-0 m-0 h-full w-full rounded-none bg-cover bg-center">
      <img class="absolute top-0  left-0 w-full h-full" src="https://images.unsplash.com/photo-1552960562-daf630e9278b?auto=format&fit=crop&w=687&q=80">
      <div class="absolute inset-0 h-full w-full bg-gradient-to-t from-slate-800/80 via-black/50 to-slate-700/10 dark:from-black/90 dark:via-black/60 dark:to-black/20">
      </div>
    </div>
  </div>
  <div class="w-full rounded relative bottom-0 flex h-full flex-col items-center justify-end px-6 py-14 md:px-12">
    <h4 class="font-sans antialiased font-bold text-xl md:text-2xl lg:text-3xl text-white">
      How we design and code open-source projects?
    </h4>
    <h6 class="font-sans antialiased font-bold text-base md:text-lg lg:text-xl my-6 text-white/80">
      Tania Andrew
    </h6>
    <img class="inline-block object-cover object-center w-20 h-20 rounded-full border-2 border-white" src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?auto=format&amp;fit=crop&amp;w=1480&amp;q=80" alt="tania andrew" />
  </div>
</div>`
      }}
    />
  );
}
