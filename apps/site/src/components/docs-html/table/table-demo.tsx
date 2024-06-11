export function TableDemo() {
  return (
    <div className="w-full overflow-hidden rounded-lg border border-surface">
      <table className="w-full">
        <thead className="border-b border-surface bg-surface-light text-sm font-medium text-foreground dark:bg-surface-dark">
          <tr>
            <th className="px-2.5 py-2 text-start font-medium">Name</th>
            <th className="px-2.5 py-2 text-start font-medium">Job</th>
            <th className="px-2.5 py-2 text-start font-medium">Employed</th>
            <th className="px-2.5 py-2 text-start font-medium"></th>
          </tr>
        </thead>
        <tbody className="group text-sm text-black dark:text-white">
          <tr className="border-b border-surface last:border-0">
            <td className="p-3">John Michael</td>
            <td className="p-3">Manager</td>
            <td className="p-3">23/04/18</td>
            <td className="p-3">
              <a
                href="#"
                className="font-sans text-sm font-medium text-inherit antialiased hover:text-primary"
              >
                Edit
              </a>
            </td>
          </tr>
          <tr className="border-b border-surface last:border-0">
            <td className="p-3">Alexa Liras</td>
            <td className="p-3">Developer</td>
            <td className="p-3">23/04/18</td>
            <td className="p-3">
              <a
                href="#"
                className="font-sans text-sm font-medium text-inherit antialiased hover:text-primary"
              >
                Edit
              </a>
            </td>
          </tr>
          <tr className="border-b border-surface last:border-0">
            <td className="p-3">Laurent Perrier</td>
            <td className="p-3">Executive</td>
            <td className="p-3">19/09/17</td>
            <td className="p-3">
              <a
                href="#"
                className="font-sans text-sm font-medium text-inherit antialiased hover:text-primary"
              >
                Edit
              </a>
            </td>
          </tr>
          <tr className="border-b border-surface last:border-0">
            <td className="p-3">Michael Levi</td>
            <td className="p-3">Developer</td>
            <td className="p-3">24/12/08</td>
            <td className="p-3">
              <a
                href="#"
                className="font-sans text-sm font-medium text-inherit antialiased hover:text-primary"
              >
                Edit
              </a>
            </td>
          </tr>
          <tr className="border-b border-surface last:border-0">
            <td className="p-3">Richard Gran</td>
            <td className="p-3">Manager</td>
            <td className="p-3">04/10/21</td>
            <td className="p-3">
              <a
                href="#"
                className="font-sans text-sm font-medium text-inherit antialiased hover:text-primary"
              >
                Edit
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
