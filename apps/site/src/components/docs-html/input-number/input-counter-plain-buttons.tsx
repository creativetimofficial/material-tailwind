
export default function InputControlPlainButtons() {
  return (
    <div
      className="w-full place-items-center"
      dangerouslySetInnerHTML={{
        __html: `<div class="w-[250px] max-w-sm relative mt-4">
  <label class="block mb-1 text-sm text-slate-600">Select Amount</label>
  <div class="relative">
    <button
      id="decreaseButton"
      class="absolute right-9 top-1 rounded-md border border-transparent p-1.5 text-center text-sm transition-all text-slate-600 hover:bg-slate-100 focus:bg-slate-100 active:bg-slate-100 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
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
    <input
      id="amountInput"
      type="number"
      value="0"
      class="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md pl-3 pr-20 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow appearance-none [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
    />
    <button
      id="increaseButton"
      class="absolute right-1 top-1 rounded-md border border-transparent p-1.5 text-center text-sm transition-all text-slate-600 hover:bg-slate-100 focus:bg-slate-100 active:bg-slate-100 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
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
