import { Download, Search, EditPencil } from "iconoir-react";
import {
  Typography,
  Button,
  Chip,
  Avatar,
  IconButton,
  Tooltip,
  Input,
} from "@material-tailwind/react";

const TABLE_HEAD = ["Transaction", "Amount", "Date", "Status", "Account", ""];

const TABLE_ROWS = [
  {
    img: "https://docs.material-tailwind.com/img/logos/logo-spotify.svg",
    name: "Spotify",
    amount: "$2,500",
    date: "Wed 3:00pm",
    status: "paid",
    account: "visa",
    accountNumber: "1234",
    expiry: "06/2026",
  },
  {
    img: "https://docs.material-tailwind.com/img/logos/logo-amazon.svg",
    name: "Amazon",
    amount: "$5,000",
    date: "Wed 1:00pm",
    status: "paid",
    account: "master-card",
    accountNumber: "1234",
    expiry: "06/2026",
  },
  {
    img: "https://docs.material-tailwind.com/img/logos/logo-pinterest.svg",
    name: "Pinterest",
    amount: "$3,400",
    date: "Mon 7:40pm",
    status: "pending",
    account: "master-card",
    accountNumber: "1234",
    expiry: "06/2026",
  },
  {
    img: "https://docs.material-tailwind.com/img/logos/logo-google.svg",
    name: "Google",
    amount: "$1,000",
    date: "Wed 5:00pm",
    status: "paid",
    account: "visa",
    accountNumber: "1234",
    expiry: "06/2026",
  },
  {
    img: "https://docs.material-tailwind.com/img/logos/logo-netflix.svg",
    name: "netflix",
    amount: "$14,000",
    date: "Wed 3:30am",
    status: "cancelled",
    account: "visa",
    accountNumber: "1234",
    expiry: "06/2026",
  },
];

export function TransactionsTable() {
  return (
    <div className="w-full px-2">
      <div className="mb-4 flex flex-col justify-between gap-8 md:flex-row md:items-center">
        <div>
          <Typography type="h6">Recent Transactions</Typography>
          <Typography className="mt-1">
            These are details about the last transactions
          </Typography>
        </div>
        <div className="flex w-full shrink-0 gap-2 md:w-max">
          <div className="w-full md:w-72">
            <Input placeholder="Search">
              <Input.Icon placement="end">
                <Search className="h-5 w-5" />
              </Input.Icon>
            </Input>
          </div>
          <Button className="flex items-center gap-3" size="sm">
            <Download strokeWidth={2} className="h-4 w-4" /> Download
          </Button>
        </div>
      </div>

      <div className="w-full overflow-hidden rounded-lg border border-surface">
        <table className="w-full text-left">
          <thead className="border-b border-surface bg-surface-light text-sm font-medium text-foreground dark:bg-surface-dark">
            <tr>
              {TABLE_HEAD.map((head) => (
                <th key={head} className="px-2.5 py-2 text-start font-medium">
                  {head}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {TABLE_ROWS.map(
              (
                {
                  img,
                  name,
                  amount,
                  date,
                  status,
                  account,
                  accountNumber,
                  expiry,
                },
                index,
              ) => {
                const isLast = index === TABLE_ROWS.length - 1;
                const classes = isLast
                  ? "p-4"
                  : "p-4 border-b border-surface-light";

                return (
                  <tr key={name}>
                    <td className={classes}>
                      <div className="flex items-center gap-3">
                        <Avatar
                          src={img}
                          alt={name}
                          size="md"
                          className="border border-surface-light bg-surface-light object-contain p-1 dark:bg-surface-dark"
                        />
                        <Typography type="small" className="font-bold">
                          {name}
                        </Typography>
                      </div>
                    </td>
                    <td className={classes}>
                      <Typography type="small">{amount}</Typography>
                    </td>
                    <td className={classes}>
                      <Typography type="small">{date}</Typography>
                    </td>
                    <td className={classes}>
                      <div className="w-max">
                        <Chip
                          size="sm"
                          variant="ghost"
                          color={
                            status === "paid"
                              ? "success"
                              : status === "pending"
                                ? "warning"
                                : "error"
                          }
                        >
                          <Chip.Label>{status}</Chip.Label>
                        </Chip>
                      </div>
                    </td>
                    <td className={classes}>
                      <div className="flex items-center gap-3">
                        <div className="h-9 w-12 rounded-md border border-surface-light p-1">
                          <Avatar
                            src={
                              account === "visa"
                                ? "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/logos/visa.png"
                                : "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/logos/mastercard.png"
                            }
                            size="sm"
                            alt={account}
                            shape="square"
                            className="h-full w-full object-contain p-1"
                          />
                        </div>
                        <div className="flex flex-col">
                          <Typography type="small" className="capitalize">
                            {account.split("-").join(" ")} {accountNumber}
                          </Typography>
                          <Typography type="small" className="opacity-70">
                            {expiry}
                          </Typography>
                        </div>
                      </div>
                    </td>
                    <td className={classes}>
                      <Tooltip>
                        <Tooltip.Trigger
                          as={IconButton}
                          color="secondary"
                          variant="ghost"
                        >
                          <EditPencil className="h-4 w-4" />
                        </Tooltip.Trigger>
                        <Tooltip.Content>
                          Edit User
                          <Tooltip.Arrow />
                        </Tooltip.Content>
                      </Tooltip>
                    </td>
                  </tr>
                );
              },
            )}
          </tbody>
        </table>
      </div>
      <div className="flex items-center justify-between border-t border-surface-light py-4">
        <Button variant="outline" size="sm" color="secondary">
          Previous
        </Button>
        <div className="flex items-center gap-2">
          <IconButton size="sm" color="secondary">
            1
          </IconButton>
          <IconButton variant="ghost" size="sm" color="secondary">
            2
          </IconButton>
          <IconButton variant="ghost" size="sm" color="secondary">
            3
          </IconButton>
          <IconButton variant="ghost" size="sm" color="secondary">
            ...
          </IconButton>
          <IconButton variant="ghost" size="sm" color="secondary">
            8
          </IconButton>
          <IconButton variant="ghost" size="sm" color="secondary">
            9
          </IconButton>
          <IconButton variant="ghost" size="sm" color="secondary">
            10
          </IconButton>
        </div>
        <Button variant="outline" size="sm" color="secondary">
          Next
        </Button>
      </div>
    </div>
  );
}
