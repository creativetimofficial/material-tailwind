import * as React from "react";
import { Input, Menu, Button } from "@material-tailwind/react";
import { useCountries } from "use-react-countries";

export function InputWithDropdown() {
  const { countries } = useCountries();
  const [country, setCountry] = React.useState(0);
  const { name, flags, countryCallingCode } = countries[country];

  return (
    <div className="relative flex w-full max-w-[24rem]">
      <Menu placement="bottom-start">
        <Menu.Trigger
          as={Button}
          color="secondary"
          className="flex items-center gap-2 rounded-r-none border border-r-0 border-surface bg-secondary pl-3"
        >
          <img
            src={flags.svg}
            alt={name}
            className="h-4 w-4 rounded-full object-cover"
          />
          {countryCallingCode}
        </Menu.Trigger>
        <Menu.Content className="h-72 max-w-[18rem] overflow-y-auto">
          {countries.map(({ name, flags, countryCallingCode }, index) => {
            return (
              <Menu.Item
                key={name}
                value={name}
                className="flex items-center gap-2"
                onClick={() => setCountry(index)}
              >
                <img
                  src={flags.svg}
                  alt={name}
                  className="h-5 w-5 rounded-full object-cover"
                />
                {name} <span className="ml-auto">{countryCallingCode}</span>
              </Menu.Item>
            );
          })}
        </Menu.Content>
      </Menu>
      <Input placeholder="Mobile Number" className="rounded-l-none" />
    </div>
  );
}
