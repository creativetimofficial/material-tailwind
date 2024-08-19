import { DocumentIcon } from "@heroicons/react/24/solid";
import { ArrowDownTrayIcon } from "@heroicons/react/24/outline";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import {
  Card,
  Input,
  Checkbox,
  CardHeader,
  IconButton,
  Typography,
} from "@material-tailwind/react";

const TABLE_HEAD = [
  {
    head: "Number",
    icon: <Checkbox />,
  },
  {
    head: "Customer",
  },
  {
    head: "Amount",
  },
  {
    head: "Issued",
  },
  {
    head: "Payment Date",
  },
  {
    head: "",
  },
];

const TABLE_ROWS = [
  {
    number: "#MS-415646",
    customer: "Viking Burrito",
    amount: "$14,000",
    issued: "31 Jan 2024",
    date: "31 Feb 2024",
  },
  {
    number: "#RV-126749",
    customer: "Stone Tech Zone",
    amount: "$3,000",
    issued: "24 Jan 2024",
    date: "24 Feb 2024",
  },
  {
    number: "#QW-103578",
    customer: "Fiber Notion",
    amount: "$20,000",
    issued: "12 Jan 2024",
    date: "12 Feb 2024",
  },
  {
    number: "#MS-415688",
    customer: "Blue Bird",
    amount: "$5,600",
    issued: "10 Jan 2024",
    date: "10 Feb 2024",
  },
];

export function TableWithSearch() {
  return (
    <Card className="h-full w-full overflow-scroll">
      <CardHeader
        floated={false}
        shadow={false}
        className="mb-2 rounded-none p-2"
      >
        <div className="w-full md:w-96">
          <Input
            label="Search Invoice"
            icon={<MagnifyingGlassIcon className="h-5 w-5" />}
          />
        </div>
      </CardHeader>
      <table className="w-full min-w-max table-auto text-left">
        <thead>
          <tr>
            {TABLE_HEAD.map(({ head, icon }) => (
              <th key={head} className="border-b border-gray-300 p-4">
                <div className="flex items-center gap-1">
                  {icon}
                  <Typography
                    color="blue-gray"
                    variant="small"
                    className="!font-bold"
                  >
                    {head}
                  </Typography>
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {TABLE_ROWS.map(
            ({ number, customer, amount, issued, date }, index) => {
              const isLast = index === TABLE_ROWS.length - 1;
              const classes = isLast ? "p-4" : "p-4 border-b border-gray-300";

              return (
                <tr key={number}>
                  <td className={classes}>
                    <div className="flex items-center gap-1">
                      <Checkbox />
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-bold"
                      >
                        {number}
                      </Typography>
                    </div>
                  </td>
                  <td className={classes}>
                    <Typography
                      variant="small"
                      className="font-normal text-gray-600"
                    >
                      {customer}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Typography
                      variant="small"
                      className="font-normal text-gray-600"
                    >
                      {amount}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Typography
                      variant="small"
                      className="font-normal text-gray-600"
                    >
                      {issued}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Typography
                      variant="small"
                      className="font-normal text-gray-600"
                    >
                      {date}
                    </Typography>
                  </td>
                  <td className={classes}>
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
            },
          )}
        </tbody>
      </table>
    </Card>
  );
}
