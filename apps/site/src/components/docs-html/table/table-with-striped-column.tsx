
export default function TableWithStripedColumn() {
  return (
    <div
      className="w-full place-items-center"
      dangerouslySetInnerHTML={{
        __html: `<div class="w-full overflow-hidden rounded-lg border border-slate-200">
  <table class="w-full">
    <thead class="border-b border-slate-200 bg-slate-100 text-sm font-medium text-slate-600 dark:bg-surface-dark">
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
      <tr>
        <td class="p-3 border-b border-slate-200">
          John Michael
        </td>
        <td class="p-3 border-b border-slate-200 bg-slate-100 dark:bg-surface-dark">
          Manager
        </td>
        <td class="p-3 border-b border-slate-200">
          23/04/18
        </td>
        <td class="p-3 border-b border-slate-200 bg-slate-100 dark:bg-surface-dark">
          <a href="#" class="font-sans antialiased text-sm text-current font-medium hover:text-slate-600">
            Edit
          </a>
        </td>
      </tr>
      <tr>
        <td class="p-3 border-b border-slate-200">
          Alexa Liras
        </td>
        <td class="p-3 border-b border-slate-200 bg-slate-100 dark:bg-surface-dark">
          Developer
        </td>
        <td class="p-3 border-b border-slate-200">
          23/04/18
        </td>
        <td class="p-3 border-b border-slate-200 bg-slate-100 dark:bg-surface-dark">
          <a href="#" class="font-sans antialiased text-sm text-current font-medium hover:text-slate-600">
            Edit
          </a>
        </td>
      </tr>
      <tr>
        <td class="p-3 border-b border-slate-200">
          Laurent Perrier
        </td>
        <td class="p-3 border-b border-slate-200 bg-slate-100 dark:bg-surface-dark">
          Executive
        </td>
        <td class="p-3 border-b border-slate-200">
          19/09/17
        </td>
        <td class="p-3 border-b border-slate-200 bg-slate-100 dark:bg-surface-dark">
          <a href="#" class="font-sans antialiased text-sm text-current font-medium hover:text-slate-600">
            Edit
          </a>
        </td>
      </tr>
      <tr>
        <td class="p-3 border-b border-slate-200">
          Michael Levi
        </td>
        <td class="p-3 border-b border-slate-200 bg-slate-100 dark:bg-surface-dark">
          Developer
        </td>
        <td class="p-3 border-b border-slate-200">
          24/12/08
        </td>
        <td class="p-3 border-b border-slate-200 bg-slate-100 dark:bg-surface-dark">
          <a href="#" class="font-sans antialiased text-sm text-current font-medium hover:text-slate-600">
            Edit
          </a>
        </td>
      </tr>
      <tr>
        <td class="p-3">
          Richard Gran
        </td>
        <td class="p-3 bg-slate-100 dark:bg-surface-dark">
          Manager
        </td>
        <td class="p-3">
          04/10/21
        </td>
        <td class="p-3 bg-slate-100 dark:bg-surface-dark">
          <a href="#" class="font-sans antialiased text-sm text-current font-medium hover:text-slate-600">
            Edit
          </a>
        </td>
      </tr>
    </tbody>
  </table>
</div>`
      }}
    />
  );
}
