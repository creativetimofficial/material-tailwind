import { useEffect } from "react";

export default function InputPhoneLabelHelper() {
    useEffect(() => {
      const script = document.createElement("script");
      script.innerHTML = `
       // Add event listener to the input field
  document.getElementById('inputPhoneDemo').addEventListener('input', function (e) {
    // Replace any non-numeric characters except +, -, and space
    e.target.value = e.target.value.replace(/[^+\d\s-]/g, '');
  });
      `;
      document.body.appendChild(script);
  
      return () => {
        document.body.removeChild(script);
      };
    }, []);




  return (
    <div
      className="w-full place-items-center"
      dangerouslySetInnerHTML={{
        __html: ` <div class="w-full max-w-sm min-w-[200px]">
  <label class="block mb-2 text-sm font-semibold antialiased text-slate-800">
    Contact Number
  </label>
  <input class="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-800 shadow-sm focus:shadow ring ring-transparent hover:ring-slate-800/10 focus:ring-slate-800/10" id="inputPhoneDemo" placeholder="e.g., +1 123-456-7890" pattern="^\+\d{1,3}\s\d{1,4}-\d{1,4}-\d{4}$" maxlength="16" />
 
  <small class="block font-sans antialiased text-sm text-slate-500 mt-1 ml-0.5">
    Include your country code for international numbers.
  </small>    
</div>

<script>
  // Add event listener to the input field
  document.getElementById('inputPhoneDemo').addEventListener('input', function (e) {
    // Replace any non-numeric characters except +, -, and space
    e.target.value = e.target.value.replace(/[^+\d\s-]/g, '');
  });
</script>

`
      }}
    />
  );
}
