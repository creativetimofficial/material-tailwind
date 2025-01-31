

export default function TableWithStripedColumn() {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: `<div class="w-full overflow-hidden rounded-lg border border-slate-200">
  <table class="w-full">
    <thead class="border-b border-slate-200 bg-slate-100 text-sm font-medium text-slate-600 dark:bg-surface-dark">
      <tr>
        <th class="px-2.5 py-2 text-start font-medium">Name</th>
        <th class="px-2.5 py-2 text-start font-medium">Job</th>
        <th class="px-2.5 py-2 text-start font-medium">Employed</th>
        <th class="px-2.5 py-2 text-start font-medium"></th>
      </tr>
    </thead>
    <tbody class="group text-sm text-slate-800 dark:text-white">
      <tr>
        <td class="border-b border-slate-200 p-3">John Michael</td>
        <td class="border-b border-slate-200 bg-slate-100 p-3 dark:bg-surface-dark">Manager</td>
        <td class="border-b border-slate-200 p-3">23/04/18</td>
        <td class="border-b border-slate-200 bg-slate-100 p-3 dark:bg-surface-dark"><a href="#" class="font-sans text-sm font-medium text-current antialiased hover:text-primary">Edit</a></td>
      </tr>
      <tr>
        <td class="border-b border-slate-200 p-3">Alexa Liras</td>
        <td class="border-b border-slate-200 bg-slate-100 p-3 dark:bg-surface-dark">Developer</td>
        <td class="border-b border-slate-200 p-3">23/04/18</td>
        <td class="border-b border-slate-200 bg-slate-100 p-3 dark:bg-surface-dark"><a href="#" class="font-sans text-sm font-medium text-current antialiased hover:text-primary">Edit</a></td>
      </tr>
      <tr>
        <td class="border-b border-slate-200 p-3">Laurent Perrier</td>
        <td class="border-b border-slate-200 bg-slate-100 p-3 dark:bg-surface-dark">Executive</td>
        <td class="border-b border-slate-200 p-3">19/09/17</td>
        <td class="border-b border-slate-200 bg-slate-100 p-3 dark:bg-surface-dark"><a href="#" class="font-sans text-sm font-medium text-current antialiased hover:text-primary">Edit</a></td>
      </tr>
      <tr>
        <td class="border-b border-slate-200 p-3">Michael Levi</td>
        <td class="border-b border-slate-200 bg-slate-100 p-3 dark:bg-surface-dark">Developer</td>
        <td class="border-b border-slate-200 p-3">24/12/08</td>
        <td class="border-b border-slate-200 bg-slate-100 p-3 dark:bg-surface-dark"><a href="#" class="font-sans text-sm font-medium text-current antialiased hover:text-primary">Edit</a></td>
      </tr>
      <tr>
        <td class="p-3">Richard Gran</td>
        <td class="bg-slate-100 p-3 dark:bg-surface-dark">Manager</td>
        <td class="p-3">04/10/21</td>
        <td class="bg-slate-100 p-3 dark:bg-surface-dark"><a href="#" class="font-sans text-sm font-medium text-current antialiased hover:text-primary">Edit</a></td>
      </tr>
    </tbody>
  </table>
</div>
`
      }}
    />
  );
}
