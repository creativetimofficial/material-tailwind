import { useEffect } from "react";

export default function InputOneTimePassword() {
  useEffect(() => {
    const script = document.createElement("script");
    script.innerHTML = `
      document.querySelectorAll('input[type="text"]').forEach((input, index, inputs) => {
        input.addEventListener("input", function () {
          this.value = this.value.replace(/[^0-9]/g, ''); // Allow only digits
          if (this.value && index < inputs.length - 1) {
            inputs[index + 1].focus(); // Move to the next input
          }
        });

        input.addEventListener("keydown", function (event) {
          if (event.key === "Backspace" && !this.value && index > 0) {
            inputs[index - 1].focus(); // Move to the previous input
          }
        });
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
        __html: `<div class="flex flex-col items-center space-y-4">
  <p class="text-sm text-slate-600">
    Enter the 6-digit OTP sent to <span class="font-bold">+1 123-456-7890</span>
  </p>
  
  <div class="flex items-center space-x-2">
    <input type="text" maxlength="1" class="w-10 h-10 bg-transparent text-center placeholder:text-slate-400 text-slate-700 text-lg border border-slate-200 rounded-md transition duration-300 ease focus:outline-none focus:border-slate-400 ring ring-transparent hover:ring-slate-800/10 focus:ring-slate-800/10 hover:border-slate-800 shadow-sm focus:shadow" oninput="handleChange(this, 0)" onkeydown="handleBackspace(event, 0)" />
    <input type="text" maxlength="1" class="w-10 h-10 bg-transparent text-center placeholder:text-slate-400 text-slate-700 text-lg border border-slate-200 rounded-md transition duration-300 ease focus:outline-none focus:border-slate-400 ring ring-transparent hover:ring-slate-800/10 focus:ring-slate-800/10 hover:border-slate-800 shadow-sm focus:shadow" oninput="handleChange(this, 1)" onkeydown="handleBackspace(event, 1)" />
    <input type="text" maxlength="1" class="w-10 h-10 bg-transparent text-center placeholder:text-slate-400 text-slate-700 text-lg border border-slate-200 rounded-md transition duration-300 ease focus:outline-none focus:border-slate-400 ring ring-transparent hover:ring-slate-800/10 focus:ring-slate-800/10 hover:border-slate-800 shadow-sm focus:shadow" oninput="handleChange(this, 2)" onkeydown="handleBackspace(event, 2)" />
    <span class="text-2xl mx-2 text-slate-700">-</span>
    <input type="text" maxlength="1" class="w-10 h-10 bg-transparent text-center placeholder:text-slate-400 text-slate-700 text-lg border border-slate-200 rounded-md transition duration-300 ease focus:outline-none focus:border-slate-400 ring ring-transparent hover:ring-slate-800/10 focus:ring-slate-800/10 hover:border-slate-800 shadow-sm focus:shadow" oninput="handleChange(this, 3)" onkeydown="handleBackspace(event, 3)" />
    <input type="text" maxlength="1" class="w-10 h-10 bg-transparent text-center placeholder:text-slate-400 text-slate-700 text-lg border border-slate-200 rounded-md transition duration-300 ease focus:outline-none focus:border-slate-400 ring ring-transparent hover:ring-slate-800/10 focus:ring-slate-800/10 hover:border-slate-800 shadow-sm focus:shadow" oninput="handleChange(this, 4)" onkeydown="handleBackspace(event, 4)" />
    <input type="text" maxlength="1" class="w-10 h-10 bg-transparent text-center placeholder:text-slate-400 text-slate-700 text-lg border border-slate-200 rounded-md transition duration-300 ease focus:outline-none focus:border-slate-400 ring ring-transparent hover:ring-slate-800/10 focus:ring-slate-800/10 hover:border-slate-800 shadow-sm focus:shadow" oninput="handleChange(this, 5)" onkeydown="handleBackspace(event, 5)" />
  </div>
 
  <p class="text-xs text-slate-400 mt-4">
    Did not receive the code? <span class="font-bold cursor-pointer">Resend</span>
  </p>
</div>
 
<script>
  const inputs = document.querySelectorAll('input[type="text"]');
 
  function handleChange(input, index) {
    const value = input.value.replace(/[^0-9]/g, ''); // Allow only digits
    input.value = value; // Set the value in the current input
    if (value && index < inputs.length - 1) {
      inputs[index + 1].focus(); // Move to the next input
    }
  }
 
  function handleBackspace(event, index) {
    if (event.key === 'Backspace' && !event.currentTarget.value && index > 0) {
      inputs[index - 1].focus(); // Move to the previous input
    }
  }
</script>`
      }}
    />
  );
}



