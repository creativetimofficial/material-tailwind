import {
  EditPencil,
  UserPlus,
  Search,
  ArrowSeparateVertical,
} from "iconoir-react";
import {
  Card,
  Input,
  Typography,
  Button,
  Chip,
  Tabs,
  Avatar,
  IconButton,
  Tooltip,
} from "@material-tailwind/react/dist";

const TABS = [
  {
    label: "All",
    value: "all",
  },
  {
    label: "Monitored",
    value: "monitored",
  },
  {
    label: "Unmonitored",
    value: "unmonitored",
  },
];

const TABLE_HEAD = ["Member", "Function", "Status", "Employed", ""];

const TABLE_ROWS = [
  {
    img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-3.jpg",
    name: "John Michael",
    email: "john@creative-tim.com",
    job: "Manager",
    org: "Organization",
    online: true,
    date: "23/04/18",
  },
  {
    img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-2.jpg",
    name: "Alexa Liras",
    email: "alexa@creative-tim.com",
    job: "Programator",
    org: "Developer",
    online: false,
    date: "23/04/18",
  },
  {
    img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-1.jpg",
    name: "Laurent Perrier",
    email: "laurent@creative-tim.com",
    job: "Executive",
    org: "Projects",
    online: false,
    date: "19/09/17",
  },
  {
    img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-4.jpg",
    name: "Michael Levi",
    email: "michael@creative-tim.com",
    job: "Programator",
    org: "Developer",
    online: true,
    date: "24/12/08",
  },
  {
    img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-5.jpg",
    name: "Richard Gran",
    email: "richard@creative-tim.com",
    job: "Manager",
    org: "Executive",
    online: false,
    date: "04/10/21",
  },
];

export function SortableTable() {
  return (
    <Card className="w-full">
      <Card.Header>
        <div className="mb-8 flex items-center justify-between gap-8">
          <div>
            <Typography type="h6">Members list</Typography>
            <Typography className="mt-1">
              See information about all members
            </Typography>
          </div>
          <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
            <Button variant="outline" size="sm">
              view all
            </Button>
            <Button className="flex items-center gap-3" size="sm">
              <UserPlus strokeWidth={2} className="h-4 w-4" /> Add member
            </Button>
          </div>
        </div>
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <Tabs defaultValue="all">
            <Tabs.List className="w-full md:w-max">
              {TABS.map(({ label, value }) => (
                <Tabs.Trigger key={value} className="w-full" value={value}>
                  {label}
                </Tabs.Trigger>
              ))}

              <Tabs.TriggerIndicator />
            </Tabs.List>
          </Tabs>
          <div className="w-full md:w-72">
            <Input>
              <Input.Field placeholder="Search" />
              <Input.Icon placement="end">
                <Search className="h-5 w-5" />
              </Input.Icon>
            </Input>
          </div>
        </div>
      </Card.Header>
      <Card.Body className="overflow-scroll px-2">
        <table className="mt-4 w-full min-w-max table-auto text-left">
          <thead>
            <tr>
              {TABLE_HEAD.map((head, index) => (
                <th
                  key={head}
                  className="cursor-pointer border-y border-surface bg-surface-light/50 p-4 transition-colors hover:bg-surface-light"
                >
                  <Typography
                    type="small"
                    className="flex items-center justify-between gap-2 opacity-70"
                  >
                    {head}{" "}
                    {index !== TABLE_HEAD.length - 1 && (
                      <ArrowSeparateVertical
                        strokeWidth={2}
                        className="h-4 w-4"
                      />
                    )}
                  </Typography>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {TABLE_ROWS.map(
              ({ img, name, email, job, org, online, date }, index) => {
                const isLast = index === TABLE_ROWS.length - 1;
                const classes = isLast
                  ? "p-4"
                  : "p-4 border-b border-surface-light";

                return (
                  <tr key={name}>
                    <td className={classes}>
                      <div className="flex items-center gap-3">
                        <Avatar src={img} alt={name} size="sm" />
                        <div className="flex flex-col">
                          <Typography type="small">{name}</Typography>
                          <Typography type="small" className="opacity-70">
                            {email}
                          </Typography>
                        </div>
                      </div>
                    </td>
                    <td className={classes}>
                      <div className="flex flex-col">
                        <Typography type="small">{job}</Typography>
                        <Typography type="small" className=" opacity-70">
                          {org}
                        </Typography>
                      </div>
                    </td>
                    <td className={classes}>
                      <div className="w-max">
                        <Chip
                          size="sm"
                          color={online ? "success" : "secondary"}
                        >
                          <Chip.Label>
                            {online ? "Online" : "Offline"}
                          </Chip.Label>
                        </Chip>
                      </div>
                    </td>
                    <td className={classes}>
                      <Typography type="small">{date}</Typography>
                    </td>
                    <td className={classes}>
                      <Tooltip>
                        <Tooltip.Trigger as={IconButton} variant="ghost">
                          <EditPencil className="h-4 w-4 text-black" />
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
      </Card.Body>
      <Card.Footer className="flex items-center justify-between border-t border-surface-light p-4">
        <Typography type="small">Page 1 of 10</Typography>
        <div className="flex gap-2">
          <Button variant="outline" size="sm">
            Previous
          </Button>
          <Button variant="outline" size="sm">
            Next
          </Button>
        </div>
      </Card.Footer>
    </Card>
  );
}
