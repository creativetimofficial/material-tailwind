import { Card, CardBody, Typography, Avatar } from "@material-tailwind/react";

const customers = [
  {
    name: "Tania Andrew",
    email: "tania@gmail.com",
    price: 400,
    image:
      "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-1.jpg",
  },
  {
    name: "John Micheal",
    email: "john@gmail.com",
    price: 420,
    image:
      "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-6.jpg",
  },
  {
    name: "Alexa Liras",
    email: "alexa@gmail.com",
    price: 340,
    image:
      "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-2.jpg",
  },
  {
    name: "Richard Gran",
    email: "richard@gmail.com",
    price: 520,
    image:
      "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-3.jpg",
  },
  {
    name: "Micheal Levi",
    email: "levi@gmail.com",
    price: 780,
    image:
      "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-4.jpg",
  },
];

export function CardWithList() {
  return (
    <Card className="mt-6 w-96">
      <CardBody>
        <div className="mb-4 flex items-center justify-between">
          <Typography variant="h5" color="blue-gray" className="">
            Latest Customers
          </Typography>
          <Typography variant="small" color="blue">
            {" "}
            <a href="#" className="hover:underline">
              {" "}
              View all{" "}
            </a>
          </Typography>
        </div>
        {customers.map(({ name, email, price, image }, index) => (
          <div
            key={index}
            className={`flex items-center justify-between border-b py-3.5 ${
              index === customers.length - 1 ? "border-none" : "border-gray-300"
            }  `}
          >
            <div className="flex items-center gap-x-3">
              <Avatar size="sm" src={image} alt={name} />
              <div>
                <Typography color="blue-gray" variant="h6">
                  {name}
                </Typography>
                <Typography variant="small" color="gray">
                  {email}
                </Typography>
              </div>
            </div>
            <Typography color="blue-gray" variant="h6">
              ${price}
            </Typography>
          </div>
        ))}
      </CardBody>
    </Card>
  );
}
