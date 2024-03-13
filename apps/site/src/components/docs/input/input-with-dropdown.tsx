import React from "react";
import { Input, Menu, Button } from "@material-tailwind/react/dist";
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
          variant="ghost"
          className="flex items-center h-10 gap-2 pl-3 border border-r-0 rounded-r-none border-surface bg-secondary"
        >
          <img
            src={flags.svg}
            alt={name}
            className="object-cover w-4 h-4 rounded-full"
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
                  className="object-cover w-5 h-5 rounded-full"
                />
                {name} <span className="ml-auto">{countryCallingCode}</span>
              </Menu.Item>
            );
          })}
        </Menu.Content>
      </Menu>
      <Input className="w-72">
        <Input.Field placeholder="Mobile Number" className="rounded-l-none" />
      </Input>
    </div>
  );
}
