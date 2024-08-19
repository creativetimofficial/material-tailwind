 

export function InputPhoneWithAuthenticationForm() {  
  return (
    <div className="w-full max-w-sm min-w-[200px] mx-auto">
      <label className="block mb-1 text-sm text-slate-800">
        Phone Number
      </label>

      <input 
        type="text" 
        placeholder="(+33) 123-456-7890"
        pattern="\(\+\d{2}\) \d{3}-\d{3}-\d{4}" 
        title="Phone number format should be like (+33) 123-456-7890"
        className="w-full h-10 bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded px-3 py-2 mb-4 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-400 shadow-sm focus:shadow-md"
        maxLength={16}
        required
      />

      <button className="w-full h-10 bg-slate-800 text-white text-sm rounded px-3 py-2 mb-4 hover:bg-slate-700 transition duration-300">
        Continue
      </button>

      <div className="flex items-center justify-center mb-4">
        <hr className="w-full border-slate-200" />
        <span className="px-2 text-sm text-slate-500">Or</span>
        <hr className="w-full border-slate-200" />
      </div>

      <button className="w-full h-10 bg-white text-sm text-slate-700 border border-slate-200 rounded px-3 py-2 flex items-center justify-center hover:bg-slate-50 transition duration-300">
        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" className="h-5 w-5 mr-2" viewBox="0 0 48 48">
          <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path><path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path><path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path><path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path>
        </svg>
        Sign In With Google
      </button>
    </div>
  );
}
