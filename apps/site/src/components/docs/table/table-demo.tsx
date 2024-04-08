import { Card, Typography } from "@material-tailwind/react/dist";

const TABLE_HEAD = ["Name", "Job", "Employed", ""];

const TABLE_ROWS = [
  {
    name: "John Michael",
    job: "Manager",
    date: "23/04/18",
  },
  {
    name: "Alexa Liras",
    job: "Developer",
    date: "23/04/18",
  },
  {
    name: "Laurent Perrier",
    job: "Executive",
    date: "19/09/17",
  },
  {
    name: "Michael Levi",
    job: "Developer",
    date: "24/12/08",
  },
  {
    name: "Richard Gran",
    job: "Manager",
    date: "04/10/21",
  },
];

export function TableDemo() {
  return (
    <Card className="h-full w-full overflow-scroll">
      <Card.Body className="p-0">
        <table className="w-full min-w-max table-auto text-left">
          <thead className="bg-secondary">
            <tr>
              {TABLE_HEAD.map((head) => (
                <th
                  key={head}
                  className="border-b border-surface bg-surface-light p-4"
                >
                  <Typography type="small" className="opacity-70">
                    {head}
                  </Typography>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {TABLE_ROWS.map(({ name, job, date }, index) => {
              const isLast = index === TABLE_ROWS.length - 1;
              const classes = isLast
                ? "p-4"
                : "p-4 border-b border-surface-light";

              return (
                <tr key={name}>
                  <td className={classes}>
                    <Typography type="small">{name}</Typography>
                  </td>
                  <td className={classes}>
                    <Typography type="small">{job}</Typography>
                  </td>
                  <td className={classes}>
                    <Typography type="small">{date}</Typography>
                  </td>
                  <td className={classes}>
                    <Typography
                      as="a"
                      href="#"
                      type="small"
                      className="font-medium"
                    >
                      Edit
                    </Typography>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </Card.Body>
    </Card>
  );
}
