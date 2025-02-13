import { useEffect } from "react";

export default function InputCurrencyConversion() {
  useEffect(() => {
    const script = document.createElement("script");
    script.innerHTML = `
      // Function to handle dropdown toggle
  document.querySelectorAll('.dropdownButton').forEach(button => {
    button.addEventListener('click', function() {
      const dropdownMenu = this.nextElementSibling;
      dropdownMenu.classList.toggle('hidden');
    });
  });
 
  // Function to handle dropdown item selection
  document.querySelectorAll('.dropdownOptions').forEach(dropdown => {
    dropdown.addEventListener('click', function(event) {
      if (event.target.tagName === 'LI') {
        const dataValue = event.target.getAttribute('data-value');
        const dropdownSpan = this.closest('.relative').querySelector('.dropdownSpan');
        dropdownSpan.textContent = dataValue;
        this.closest('.dropdownMenu').classList.add('hidden');
      }
    });
  });
 
  // Close dropdown if clicked outside
  document.addEventListener('click', function(event) {
    document.querySelectorAll('.dropdownMenu').forEach(dropdownMenu => {
      if (!dropdownMenu.closest('.relative').contains(event.target)) {
        dropdownMenu.classList.add('hidden');
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
        __html: ` <div class="w-full max-w-xl mx-auto mt-4">
  <p class="text-slate-500 mb-4">
    Enter the amount you wish to convert and select the desired currency.
  </p>
  <div class="flex flex-col items-center justify-between">
    <!-- From Input -->
    <div class="w-full max-w-xs min-w-[200px] mt-4">
      <label class="block font-semibold antialiased text-slate-800 mb-2">
        From
      </label>
      <div class="relative mt-2">
        <input class="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md pl-3 pr-20 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 ring ring-transparent hover:ring-slate-800/10 focus:ring-slate-800/10 hover:border-slate-800 shadow-sm focus:shadow appearance-none [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none" type="number" placeholder="1,000" />
        <div class="absolute top-2 right-0 flex items-center pr-3">
          <div class="h-6 border-l border-slate-200 mr-2"></div>
          <button class="dropdownButton h-full text-sm flex items-center bg-transparent text-slate-700 focus:outline-none">
            <span class="dropdownSpan">USD</span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-4 w-4 ml-1">
              <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
            </svg>
          </button>
          <div class="dropdownMenu min-w-[150px] overflow-hidden absolute left-0 w-full mt-10 hidden w-full bg-white border border-slate-200 rounded-md shadow-lg z-10">
            <ul class="dropdownOptions">
              <li class="px-4 py-2 text-slate-800 hover:bg-slate-100 text-sm cursor-pointer" data-value="USD">
                USD
              </li>
              <li class="px-4 py-2 text-slate-800 hover:bg-slate-100 text-sm cursor-pointer" data-value="EUR">
                EUR
              </li>
              <li class="px-4 py-2 text-slate-800 hover:bg-slate-100 text-sm cursor-pointer" data-value="CAD">
                CAD
              </li>
              <li class="px-4 py-2 text-slate-800 hover:bg-slate-100 text-sm cursor-pointer" data-value="RON">
                RON
              </li>
            </ul>
          </div>
        </div> 
      </div>   
    </div>
 
    <!-- Swap Icon -->
    <div class="flex items-center justify-center mt-6">
      <button class="rounded-full border border-slate-300 p-2.5 text-center text-sm transition-all shadow-sm hover:shadow-lg text-slate-600 hover:text-white hover:bg-slate-800 hover:border-slate-800 focus:text-white focus:bg-slate-800 focus:border-slate-800 active:border-slate-800 active:text-white active:bg-slate-800 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="w-4 h-4">
          <path fill-rule="evenodd" d="M13.78 10.47a.75.75 0 0 1 0 1.06l-2.25 2.25a.75.75 0 0 1-1.06 0l-2.25-2.25a.75.75 0 1 1 1.06-1.06l.97.97V5.75a.75.75 0 0 1 1.5 0v5.69l.97-.97a.75.75 0 0 1 1.06 0ZM2.22 5.53a.75.75 0 0 1 0-1.06l2.25-2.25a.75.75 0 0 1 1.06 0l2.25 2.25a.75.75 0 0 1-1.06 1.06l-.97-.97v5.69a.75.75 0 0 1-1.5 0V4.56l-.97.97a.75.75 0 0 1-1.06 0Z" clip-rule="evenodd" />
        </svg>
      </button>
    </div>
 
    <!-- To Input -->
    <div class="w-full max-w-xs min-w-[200px] -mt-2">
      <label class="block font-semibold antialiased text-slate-800 mb-2">
        To
      </label>
      <div class="relative mt-2">
        <input class="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md pl-3 pr-20 py-2 transition duration-300 ease focus:outline-none focus:border-slate-800 ring ring-transparent hover:ring-slate-800/10 focus:ring-slate-800/10 hover:border-slate-300 shadow-sm focus:shadow appearance-none [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none" type="number" placeholder="1,000" />
        <div class="absolute top-2 right-0 flex items-center pr-3">
          <div class="h-6 border-l border-slate-200 mr-2"></div>
          <button class="dropdownButton h-full text-sm flex items-center bg-transparent text-slate-700 focus:outline-none">
            <span class="dropdownSpan">EUR</span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-4 w-4 ml-1">
              <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
            </svg>
          </button>
          <div class="dropdownMenu min-w-[150px] overflow-hidden absolute left-0 w-full mt-10 hidden w-full bg-white border border-slate-200 rounded-md shadow-lg z-10">
            <ul class="dropdownOptions">
              <li class="px-4 py-2 text-slate-600 hover:bg-slate-50 text-sm cursor-pointer" data-value="USD">
                USD
              </li>
              <li class="px-4 py-2 text-slate-600 hover:bg-slate-50 text-sm cursor-pointer" data-value="EUR">
                EUR
              </li>
              <li class="px-4 py-2 text-slate-600 hover:bg-slate-50 text-sm cursor-pointer" data-value="CAD">
                CAD
              </li>
              <li class="px-4 py-2 text-slate-600 hover:bg-slate-50 text-sm cursor-pointer" data-value="RON">
                RON
              </li>
            </ul>
          </div>
        </div> 
      </div>   
    </div>
  </div>
 
  <!-- Last Updated Text -->
  <div class="mt-8 text-slate-400 text-sm">
    <p>
      Rates are updated every hour to provide the most accurate conversions.
    </p>
    <p class="mt-1">
      <b>Last updated</b>: July 30, 2024, 3:00 PM
    </p>
  </div>
</div>
 
<script>
  // Function to handle dropdown toggle
  document.querySelectorAll('.dropdownButton').forEach(button => {
    button.addEventListener('click', function() {
      const dropdownMenu = this.nextElementSibling;
      dropdownMenu.classList.toggle('hidden');
    });
  });
 
  // Function to handle dropdown item selection
  document.querySelectorAll('.dropdownOptions').forEach(dropdown => {
    dropdown.addEventListener('click', function(event) {
      if (event.target.tagName === 'LI') {
        const dataValue = event.target.getAttribute('data-value');
        const dropdownSpan = this.closest('.relative').querySelector('.dropdownSpan');
        dropdownSpan.textContent = dataValue;
        this.closest('.dropdownMenu').classList.add('hidden');
      }
    });
  });
 
  // Close dropdown if clicked outside
  document.addEventListener('click', function(event) {
    document.querySelectorAll('.dropdownMenu').forEach(dropdownMenu => {
      if (!dropdownMenu.closest('.relative').contains(event.target)) {
        dropdownMenu.classList.add('hidden');
      }
    });
  });
</script>
 
`
      }}
    />
  );
}
