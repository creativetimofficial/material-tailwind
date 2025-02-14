export default function DataTableDemo() {
  return (
    <div
      className="w-full place-items-center"
      dangerouslySetInnerHTML={{
        __html: `<div class="w-full overflow-hidden rounded-lg border border-slate-200 p-4">
  <table id="example" class="w-full">
    <thead class="border-b border-slate-200 bg-slate-100 text-sm font-medium text-slate-500 dark:bg-slate-800 pt-2">
      <tr>
        <th class="px-2.5 py-2 text-start font-medium">
          Name
        </th>
        <th class="px-2.5 py-2 text-start font-medium">
          Job
        </th>
        <th class="px-2.5 py-2 text-start font-medium">
          Employed
        </th>
        <th class="px-2.5 py-2 text-start font-medium">
        </th>
      </tr>
    </thead>
    <tbody class="group text-sm text-slate-800 dark:text-white">
      <tr class="border-b border-slate-200 last:border-0">
        <td class="p-3">
          John Michael
        </td>
        <td class="p-3">
          Manager
        </td>
        <td class="p-3">
          23/04/18
        </td>
        <td class="p-3">
          <a href="#" class="font-sans antialiased text-sm text-slate-800 font-medium hover:text-slate-600">
            Edit
          </a>
        </td>
      </tr>
      <tr class="border-b border-slate-200 last:border-0">
        <td class="p-3">
          Alexa Liras
        </td>
        <td class="p-3">
          Developer
        </td>
        <td class="p-3">
          23/04/18
        </td>
        <td class="p-3">
          <a href="#" class="font-sans antialiased text-sm text-slate-800 font-medium hover:text-slate-600">
            Edit
          </a>
        </td>
      </tr>
      <tr class="border-b border-slate-200 last:border-0">
        <td class="p-3">
          Laurent Perrier
        </td>
        <td class="p-3">
          Executive
        </td>
        <td class="p-3">
          19/09/17
        </td>
        <td class="p-3">
          <a href="#" class="font-sans antialiased text-sm text-slate-800 font-medium hover:text-slate-600">
            Edit
          </a>
        </td>
      </tr>
      <tr class="border-b border-slate-200 last:border-0">
        <td class="p-3">
          Michael Levi
        </td>
        <td class="p-3">
          Developer
        </td>
        <td class="p-3">
          24/12/08
        </td>
        <td class="p-3">
          <a href="#" class="font-sans antialiased text-sm text-slate-800 font-medium hover:text-slate-600">
            Edit
          </a>
        </td>
      </tr>
      <tr class="border-b border-slate-200 last:border-0">
        <td class="p-3">
          Richard Gran
        </td>
        <td class="p-3">
          Manager
        </td>
        <td class="p-3">
          04/10/21
        </td>
        <td class="p-3">
          <a href="#" class="font-sans antialiased text-sm text-slate-800 font-medium hover:text-slate-600">
            Edit
          </a>
        </td>
      </tr>
    </tbody>
  </table>
</div>

<script type="text/javascript" charset="utf8" src="https://cdn.datatables.net/2.2.2/js/dataTables.js"></script>

<script>
  document.addEventListener('DOMContentLoaded', function() {
    const table = new DataTable('#example', {
      "dom": '<"flex justify-between items-center"<"flex items-center"f><"flex items-center"l>><"w-full"rt><"flex justify-between items-center"<"flex items-center"i><"flex items-center"p>>',
      "language": {
        "search": "",
        "searchPlaceholder": "Search...",
        "paginate": {
          "previous": "<",
          "next": ">"
        }
      }
    });

    // Add Tailwind CSS classes to DataTables elements
    document.querySelector('.dataTables_filter input').classList.add('w-full', 'aria-disabled:cursor-not-allowed', 'outline-none', 'focus:outline-none', 'text-slate-800', 'dark:text-white', 'placeholder:text-slate-600/60', 'bg-transparent', 'ring-transparent', 'border', 'border-slate-200', 'transition-all', 'duration-300', 'ease-in', 'disabled:opacity-50', 'disabled:pointer-events-none', 'data-[error=true]:border-red-500', 'data-[success=true]:border-green-500', 'text-sm', 'rounded-md', 'py-2', 'px-2.5', 'ring', 'shadow-sm', 'data-[icon-placement=start]:ps-9', 'data-[icon-placement=end]:pe-9', 'hover:border-slate-800', 'hover:ring-slate-800/10', 'focus:border-slate-800', 'focus:ring-slate-800/10');
    document.querySelector('.dataTables_length select').classList.add('outline-none', 'focus:outline-none', 'text-slate-600', 'bg-transparent', 'ring-transparent', 'border', 'border-slate-200', 'transition-all', 'duration-300', 'ease-in', 'disabled:opacity-50', 'disabled:pointer-events-none', 'data-[error=true]:border-error', 'data-[success=true]:border-success', 'select-none', 'text-start', 'data-[shape=pill]:rounded-full', '[&amp;_data-slot=placeholder]:text-foreground/60', 'text-sm', 'rounded-md', 'py-2', 'px-3', 'ring', 'shadow-sm', 'hover:border-slate-800', 'hover:ring-slate-800/10', 'focus:border-slate-800', 'focus:ring-slate-800/10');
    document.querySelector('.dataTables_paginate').classList.add('flex', 'items-center', 'space-x-2');
    document.querySelectorAll('.dataTables_paginate a').forEach(el => el.classList.add('inline-grid', 'min-h-[36px]', 'min-w-[36px]', 'select-none', 'place-items-center', 'rounded-md', 'border', 'border-transparent', 'bg-transparent', 'text-center', 'align-middle', 'font-medium', 'text-sm', 'leading-none', 'text-slate-800', 'transition-all', 'duration-300', 'ease-in', 'hover:border-slate-800/5', 'hover:bg-slate-800/5', 'disabled:pointer-events-none', 'disabled:opacity-50', 'disabled:shadow-none'));
  });
</script>
`}}
    />
  );
}