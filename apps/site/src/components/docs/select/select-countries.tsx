import { Select, Typography } from "@material-tailwind/react/dist";
import { useCountries } from "use-react-countries";

export function SelectCountries() {
  const { countries } = useCountries();

  return (
    <div className="w-72">
      <Select>
        <Select.Trigger placeholder="Select Version" />
        <Select.List className="overflow-y-scroll h-72 w-72">
          {countries.map(({ name, flags }) => (
            <Select.Option key={name} value={name}>
              <div className="flex items-start gap-2 text-start">
                <img
                  src={flags.svg}
                  alt={name}
                  className="object-cover w-5 h-5 rounded-full"
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
