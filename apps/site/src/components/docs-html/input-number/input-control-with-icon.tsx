import { useEffect } from "react";
export default function InputControlWithIcon() {
  useEffect(() => {
        const script = document.createElement("script");
        script.innerHTML = `
          // Select the elements
    const amountInput_icon_demo = document.getElementById('amountInput');
    const increaseButton_icon_demo = document.getElementById('increaseButton');
    const decreaseButton_icon_demo = document.getElementById('decreaseButton');
   
    // Increase the value
    increaseButton_icon_demo.addEventListener('click', () => {
      amountInput_icon_demo.value = parseInt(amountInput_icon_demo.value) + 1;
    });
   
    // Decrease the value and prevent going below 0
    decreaseButton_icon_demo.addEventListener('click', () => {
      amountInput_icon_demo.value = Math.max(0, parseInt(amountInput_icon_demo.value) - 1);
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
        __html: `<div class="w-[250px] max-w-sm relative mt-4">
  <label class="block mb-1 text-sm text-slate-600">Select Amount</label>
  <div class="relative">
    <button
      id="decreaseButton"
      class="absolute right-9 top-1 rounded bg-slate-800 p-1.5 border border-transparent text-center text-sm text-white transition-all shadow-sm hover:shadow focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
      type="button"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 16 16"
        fill="currentColor"
        class="w-4 h-4"
      >
        <path d="M3.75 7.25a.75.75 0 0 0 0 1.5h8.5a.75.75 0 0 0 0-1.5h-8.5Z" />
      </svg>
    </button>
 
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="absolute w-5 h-5 top-2.5 left-2.5 text-slate-600">
      <path d="M4.5 6.375a4.125 4.125 0 1 1 8.25 0 4.125 4.125 0 0 1-8.25 0ZM14.25 8.625a3.375 3.375 0 1 1 6.75 0 3.375 3.375 0 0 1-6.75 0ZM1.5 19.125a7.125 7.125 0 0 1 14.25 0v.003l-.001.119a.75.75 0 0 1-.363.63 13.067 13.067 0 0 1-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 0 1-.364-.63l-.001-.122ZM17.25 19.128l-.001.144a2.25 2.25 0 0 1-.233.96 10.088 10.088 0 0 0 5.06-1.01.75.75 0 0 0 .42-.643 4.875 4.875 0 0 0-6.957-4.611 8.586 8.586 0 0 1 1.71 5.157v.003Z"></path>
    </svg>
 
    <input
      id="amountInput"
      type="number"
      value="0"
      class="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md pl-10 pr-20 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow appearance-none [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
    />
    <button
      id="increaseButton"
      class="absolute right-1 top-1 rounded bg-slate-800 p-1.5 border border-transparent text-center text-sm text-white transition-all shadow-sm hover:shadow focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
      type="button"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 16 16"
        fill="currentColor"
        class="w-4 h-4"
      >
        <path
          d="M8.75 3.75a.75.75 0 0 0-1.5 0v3.5h-3.5a.75.75 0 0 0 0 1.5h3.5v3.5a.75.75 0 0 0 1.5 0v-3.5h3.5a.75.75 0 0 0 0-1.5h-3.5v-3.5Z"
        />
      </svg>
    </button>
  </div>
  <p class="flex items-center mt-2 text-xs text-slate-400">
    Adjust the number using the + and - controls.
  </p>
</div>
 
<script>
  // Select the elements
  const amountInput = document.getElementById('amountInput');
  const increaseButton = document.getElementById('increaseButton');
  const decreaseButton = document.getElementById('decreaseButton');
 
  // Increase the value
  increaseButton.addEventListener('click', () => {
    amountInput.value = parseInt(amountInput.value) + 1;
  });
 
  // Decrease the value and prevent going below 0
  decreaseButton.addEventListener('click', () => {
    amountInput.value = Math.max(0, parseInt(amountInput.value) - 1);
  });
</script>
`
      }}
    />
  );
}
