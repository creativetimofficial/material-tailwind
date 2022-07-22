// @material-tailwind/react components
import { Typography } from "@material-tailwind/react";

// page components
import Framework from "components/cards/framework";

// prop-types
interface Props {
  title: string;
  route: string;
  description: string;
}

export default function DocsRelated({ routes }: { routes: Props[] }) {
  return (
    <div className="mt-36">
      <Typography as="h2" variant="h4" color="blue-grey" className="!mb-6">
        Related
      </Typography>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {routes.map(({ title, route, description }) => (
          <Framework key={route} route={`/docs/react/${route}`}>
            <div className="p-2.5">
              <Typography
                as="h4"
                variant="h6"
                color="blue-grey"
                className="mb-2"
              >
                {title}
              </Typography>
              <Typography variant="small" color="grey">
                {description}
              </Typography>
            </div>
          </Framework>
        ))}
      </div>
    </div>
  );
}
