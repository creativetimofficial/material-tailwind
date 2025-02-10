
export default function InputCurrency() {
  return (
    <div
      className="w-full place-items-center"
      dangerouslySetInnerHTML={{
        __html: `<div class="w-full max-w-sm min-w-[200px] mt-4 ">
  <label class="block mb-1 text-sm text-slate-800">
    Amount You Send
  </label>
  <div class="relative mt-2">
    <input
      type="number"
      class="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md pl-3 pr-20 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow appearance-none [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
      placeholder="1,000" />
    <div class="absolute top-2 right-0 flex items-center pr-3">
      <div class="h-6 border-l border-slate-200 mr-2"></div>
      <button id="dropdownButton" class="h-full text-sm flex justify-center items-center bg-transparent text-slate-700 focus:outline-none">
        <span id="dropdownSpan">USD</span>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-4 w-4 ml-1">
          <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
        </svg>
      </button>
      <div id="dropdownMenu" class="min-w-[150px] overflow-hidden absolute left-0 w-full mt-10 hidden w-full bg-white border border-slate-200 rounded-md shadow-lg z-10">
        <ul id="dropdownOptions">
          <li class="px-4 py-2 text-slate-600 hover:bg-slate-50 text-sm cursor-pointer" data-value="USD">USD</li>
          <li class="px-4 py-2 text-slate-600 hover:bg-slate-50 text-sm cursor-pointer" data-value="EUR">EUR</li>
          <li class="px-4 py-2 text-slate-600 hover:bg-slate-50 text-sm cursor-pointer" data-value="CAD">CAD</li>
          <li class="px-4 py-2 text-slate-600 hover:bg-slate-50 text-sm cursor-pointer" data-value="RON">RON</li>
        </ul>
      </div>
    </div> 
  </div>   
</div>
 
<script>
  document.getElementById('dropdownButton').addEventListener('click', function() {
    var dropdownMenu = document.getElementById('dropdownMenu');
    if (dropdownMenu.classList.contains('hidden')) {
      dropdownMenu.classList.remove('hidden');
    } else {
      dropdownMenu.classList.add('hidden');
    }
  });
 
  document.getElementById('dropdownOptions').addEventListener('click', function(event) {
    if (event.target.tagName === 'LI') {
      const dataValue = event.target.getAttribute('data-value');
      document.getElementById('dropdownSpan').textContent = dataValue;
      document.getElementById('dropdownMenu').classList.add('hidden');
    }
  });
 
  document.addEventListener('click', function(event) {
    var isClickInside = document.getElementById('dropdownButton').contains(event.target) || document.getElementById('dropdownMenu').contains(event.target);
    var dropdownMenu = document.getElementById('dropdownMenu');
 
    if (!isClickInside) {
      dropdownMenu.classList.add('hidden');
    }
  });
</script>`
      }}
    />
  );
}
