export function AuthButtons() {
  return (
    <div className="flex flex-col items-center gap-4">
      <button className="rounded-md flex items-center border border-transparent py-2 px-4 text-center text-sm transition-all text-slate-600 hover:bg-slate-100 focus:bg-slate-100 active:bg-slate-100 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button">
        <img
          src="https://docs.material-tailwind.com/icons/metamask.svg"
          alt="metamask"
          className="h-5 w-5 mr-2"
        />
        Connect Wallet
      </button>

      <button className="rounded-md flex items-center border border-slate-300 py-2 px-4 text-center text-sm transition-all shadow-sm hover:shadow-lg text-slate-600 hover:text-white hover:bg-slate-800 hover:border-slate-800 focus:text-white focus:bg-slate-800 focus:border-slate-800 active:border-slate-800 active:text-white active:bg-slate-800 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button">
        <img
          src="https://docs.material-tailwind.com/icons/google.svg"
          alt="metamask"
          className="h-5 w-5 mr-2"
        />
        Continue with Google
      </button>

      <button className="rounded-md flex items-center bg-blue-400 text-white border border-transparent py-2 px-4 text-center text-sm transition-all hover:bg-blue-500 focus:bg-blue-500 active:bg-blue-500 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button">
        Sign in with Twitter

        <img
          src="https://docs.material-tailwind.com/icons/twitter.svg"
          alt="twitter"
          className="h-5 w-5 ml-2"
        />
      </button>
    </div>
  );
}
