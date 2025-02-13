
export default function InputCurrencyConversion() {
  return (
    <div
      className="w-full place-items-center"
      dangerouslySetInnerHTML={{
        __html: ` <div class="w-full max-w-sm min-w-[200px] mt-4">
  <label class="block mb-2 text-sm font-semibold antialiased text-slate-800">
    Cardholder Name
  </label>
  <input class="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md pl-3 pr-20 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 ring ring-transparent hover:ring-slate-800/10 focus:ring-slate-800/10 hover:border-slate-800 shadow-sm focus:shadow" type="text" placeholder="e.g John Doe" />
 
  <label class="block mb-2 text-sm font-semibold antialiased text-slate-800 mt-4">
    Card Number
  </label>
  <input class="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md pl-3 pr-20 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 ring ring-transparent hover:ring-slate-800/10 focus:ring-slate-800/10 hover:border-slate-800 shadow-sm focus:shadow" type="text" id="cardNumber" placeholder="1234 5678 9012 3456" maxlength="19" oninput="formatCardNumber(this)" />
 
  <div class="flex">
    <div class="w-full md:w-8/12 mr-4">
      <label class="block mb-2 text-sm font-semibold antialiased text-slate-800 mt-4">
        Expiration Date
      </label>
      <input class="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md pl-3 pr-20 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 ring ring-transparent hover:ring-slate-800/10 focus:ring-slate-800/10 hover:border-slate-800 shadow-sm focus:shadow" type="text" placeholder="MM/YY" maxlength="5" pattern="\d{2}/\d{2}" oninput="this.value = this.value.replace(/[^0-9]/g, '').replace(/(\d{2})(\d{1,2})/, '$1/$2').substring(0, 5);" />
    </div>
    <div class="w-full md:w-4/12">
      <label class="block mb-2 text-sm font-semibold antialiased text-slate-800 mt-4">
        CVV
      </label>
      <input class="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md pl-3 pr-20 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 ring ring-transparent hover:ring-slate-800/10 focus:ring-slate-800/10 hover:border-slate-800 shadow-sm focus:shadow" type="text" placeholder="123" maxlength="3" pattern="\d{3}" oninput="this.value = this.value.replace(/[^0-9]/g, '').replace(/(\..*)\./g, '$1');" />
    </div>
  </div>
 
  <button class="w-full mt-4 rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
    Purchase Now
  </button>
</div>
 
<script>
  function formatCardNumber(input) {
    const value = input.value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
    const formattedValue = value.match(/.{1,4}/g)?.join(' ') || value;
    input.value = formattedValue;
  }
</script>
`
      }}
    />
  );
}
