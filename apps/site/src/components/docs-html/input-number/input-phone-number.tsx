import { useEffect } from "react";

export default function InputPhoneNumber() {
    useEffect(() => {
      const script = document.createElement("script");
      script.innerHTML = `
       // Toggle dropdown menu visibility
  document.getElementById('dropdownButton').addEventListener('click', function (event) {
    event.stopPropagation(); // Prevent event bubbling
    const dropdownMenu = document.getElementById('dropdownMenu');
    dropdownMenu.classList.toggle('hidden');
  });
 
  // Update country code when an option is selected
  document.getElementById('dropdownOptions').addEventListener('click', function (event) {
    if (event.target.tagName === 'LI') {
      const dataValue = event.target.getAttribute('data-value');
      document.getElementById('dropdownSpan').textContent = dataValue;
      document.getElementById('dropdownMenu').classList.add('hidden');
    }
  });
 
  // Close the dropdown if clicked outside
  document.addEventListener('click', function (event) {
    const dropdownMenu = document.getElementById('dropdownMenu');
    const isClickInside =
      document.getElementById('dropdownButton').contains(event.target) ||
      dropdownMenu.contains(event.target);
 
    if (!isClickInside) {
      dropdownMenu.classList.add('hidden');
    }
  });
 
  // Limit input to numeric values only and restrict length
  document.getElementById('phoneNumberInput').addEventListener('input', function (e) {
    // Ensure only numeric values
    e.target.value = e.target.value.replace(/\D/g, '').slice(0, 12); // Limit to 12 digits
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
        __html: `<div class="w-full max-w-sm min-w-[200px] mt-4">
  <label class="block mb-1 text-sm text-slate-600">Enter Phone Number</label>
  <div class="relative mt-2">
    <div class="absolute top-2 left-0 flex items-center pl-3">
      <button
        id="dropdownButton"
        class="h-full text-sm flex justify-center items-center bg-transparent text-slate-700 focus:outline-none"
      >
        <span id="dropdownSpan">+33</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="h-4 w-4 ml-1"
        >
          <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
        </svg>
      </button>
      <div class="h-6 border-l border-slate-200 ml-2"></div>
      <div
        id="dropdownMenu"
        class="min-w-[150px] absolute left-0 w-full mt-10 hidden bg-white border border-slate-200 rounded-md shadow-lg z-10"
      >
        <ul id="dropdownOptions">
          <li class="px-4 py-2 text-slate-600 hover:bg-slate-50 text-sm cursor-pointer" data-value="+33">
            France (+33)
          </li>
          <li class="px-4 py-2 text-slate-600 hover:bg-slate-50 text-sm cursor-pointer" data-value="+49">
            Germany (+49)
          </li>
          <li class="px-4 py-2 text-slate-600 hover:bg-slate-50 text-sm cursor-pointer" data-value="+34">
            Spain (+34)
          </li>
          <li class="px-4 py-2 text-slate-600 hover:bg-slate-50 text-sm cursor-pointer" data-value="+1">
            USA (+1)
          </li>
        </ul>
      </div>
    </div>
    <input
      type="tel"
      class="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md pr-3 pl-20 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
      placeholder="324-456-2323"
      pattern="[0-9]*"
      inputmode="numeric"
      maxlength="12"
      id="phoneNumberInput"
    />
  </div>
</div>
 
<script>
  // Toggle dropdown menu visibility
  document.getElementById('dropdownButton').addEventListener('click', function (event) {
    event.stopPropagation(); // Prevent event bubbling
    const dropdownMenu = document.getElementById('dropdownMenu');
    dropdownMenu.classList.toggle('hidden');
  });
 
  // Update country code when an option is selected
  document.getElementById('dropdownOptions').addEventListener('click', function (event) {
    if (event.target.tagName === 'LI') {
      const dataValue = event.target.getAttribute('data-value');
      document.getElementById('dropdownSpan').textContent = dataValue;
      document.getElementById('dropdownMenu').classList.add('hidden');
    }
  });
 
  // Close the dropdown if clicked outside
  document.addEventListener('click', function (event) {
    const dropdownMenu = document.getElementById('dropdownMenu');
    const isClickInside =
      document.getElementById('dropdownButton').contains(event.target) ||
      dropdownMenu.contains(event.target);
 
    if (!isClickInside) {
      dropdownMenu.classList.add('hidden');
    }
  });
 
  // Limit input to numeric values only and restrict length
  document.getElementById('phoneNumberInput').addEventListener('input', function (e) {
    // Ensure only numeric values
    e.target.value = e.target.value.replace(/\D/g, '').slice(0, 12); // Limit to 12 digits
  });
</script>
`
      }}
    />
  );
}
