export function BlogCard() {
  return (
    <div className="w-full max-w-[24rem] overflow-hidden rounded-lg border border-surface bg-background shadow-lg shadow-black/5">
      <img
        src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1471&amp;q=80"
        alt="ui/ux review check"
        className="m-1.5 h-max w-[calc(100%-12px)] rounded-[5px]"
      />
      <div className="h-max w-full rounded px-3 py-2">
        <h6 className="font-sans text-base font-bold text-inherit antialiased md:text-lg lg:text-xl">
          UI/UX Review Check
        </h6>
        <p className="mt-1 font-sans text-base text-foreground antialiased">
          Because it's about motivating the doers. Because I'm here to follow my
          dreams and inspire others.
        </p>
      </div>
      <div className="mt-4 flex w-full items-center justify-between rounded px-3 pb-3 pt-1.5">
        <div className="flex items-center -space-x-3">
          <button className="group outline-hidden">
            <img
              src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1061&amp;q=80"
              alt="natali craig"
              className="inline-block h-8 w-8 rounded-full border-2 border-secondary object-cover object-center hover:z-10"
            />
          </button>
          <button className="group outline-hidden">
            <img
              src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1480&amp;q=80"
              alt="tania andrew"
              className="inline-block h-8 w-8 rounded-full border-2 border-secondary object-cover object-center hover:z-10"
            />
          </button>
        </div>
        <small className="font-sans text-sm text-inherit antialiased">
          January 10
        </small>
      </div>
    </div>
  );
}
