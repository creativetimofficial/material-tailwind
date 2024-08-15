import { DocumentIcon } from "@heroicons/react/24/solid";
import { ArrowDownTrayIcon } from "@heroicons/react/24/outline";
import { Card, IconButton, Typography } from "@material-tailwind/react";

const TABLE_HEAD = [
  "Number",
  "Customer",
  "Amount",
  "Issued",
  "Payment Date",
  "Actions",
];

const TABLE_ROWS = [
  {
    number: "#MS-415646",
    customer: "CompanyINC",
    amount: "$14,000",
    issued: "31 Jan 2024",
    date: "31 Feb 2024",
  },
  {
    number: "#MS-415647",
    customer: "CompanyINC",
    amount: "$4,000",
    issued: "24 Jan 2024",
    date: "24 Feb 2024",
  },
  {
    number: "#MS-415648",
    customer: "CompanyINC",
    amount: "$11,000",
    issued: "12 Jan 2024",
    date: "12 Feb 2024",
  },
  {
    number: "#MS-415649",
    customer: "CompanyINC",
    amount: "$2,600",
    issued: "10 Jan 2024",
    date: "10 Feb 2024",
  },
];

export function TableWithoutBorder() {
  return (
    <Card className="h-full w-full overflow-scroll">
      <table className="w-full min-w-max table-auto text-left">
        <thead>
          <tr>
            {TABLE_HEAD.map((head) => (
              <th key={head} className="p-4 pt-10">
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-bold leading-none"
                >
                  {head}
                </Typography>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {TABLE_ROWS.map(({ number, customer, amount, issued, date }) => {
            return (
              <tr key={number}>
                <td className="p-4">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-bold"
                  >
                    {number}
                  </Typography>
                </td>
                <td className="p-4">
                  <Typography
                    variant="small"
                    className="font-normal text-gray-600"
                  >
                    {customer}
                  </Typography>
                </td>
                <td className="p-4">
                  <Typography
                    variant="small"
                    className="font-normal text-gray-600"
                  >
                    {amount}
                  </Typography>
                </td>
                <td className="p-4">
                  <Typography
                    variant="small"
                    className="font-normal text-gray-600"
                  >
                    {issued}
                  </Typography>
                </td>
                <td className="p-4">
                  <Typography
                    variant="small"
                    className="font-normal text-gray-600"
                  >
                    {date}
                  </Typography>
                </td>
                <td className="p-4">
                  <div className="flex items-center gap-2">
                    <IconButton variant="text" size="sm">
                      <DocumentIcon className="h-4 w-4 text-gray-900" />
                    </IconButton>
                    <IconButton variant="text" size="sm">
                      <ArrowDownTrayIcon
                        strokeWidth={3}
                        className="h-4 w-4 text-gray-900"
                      />
                    </IconButton>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </Card>
  );
}
