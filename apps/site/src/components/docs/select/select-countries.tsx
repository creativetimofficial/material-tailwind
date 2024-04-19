import { Select, Typography } from "@material-tailwind/react";
import { useCountries } from "use-react-countries";

export function SelectCountries() {
  const { countries } = useCountries();

  return (
    <div className="w-72">
      <Select>
        <Select.Trigger placeholder="Select Country" />
        <Select.List className="h-72 w-72 overflow-y-scroll">
          {countries.map(({ name, flags }) => (
            <Select.Option key={name} value={name}>
              <div className="flex items-start gap-2 text-start">
                <img
                  src={flags.svg}
                  alt={name}
                  className="h-5 w-5 rounded-full object-cover"
                />
                <Typography type="small">{name}</Typography>
              </div>
            </Select.Option>
          ))}
        </Select.List>
      </Select>
    </div>
  );
}
