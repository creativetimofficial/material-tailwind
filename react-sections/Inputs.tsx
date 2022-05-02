import { Input } from "../packages/material-tailwind-react/src";

export default function Inputs() {
  return (
    <div className="mb-24">
      <h2 className="text-2xl font-semibold mb-4">Input Variants</h2>
      <div className="flex items-end gap-4 mb-12">
        <Input
          label="Outlined"
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
            </svg>
          }
        />
        <Input
          variant="standard"
          label="Standard"
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
            </svg>
          }
        />
        <Input
          variant="static"
          label="Static"
          placeholder="First Name"
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
            </svg>
          }
        />
      </div>

      <h2 className="text-2xl font-semibold mb-4">Input Sizes</h2>
      <div className="flex items-end gap-4 mb-12">
        <Input label="Input Regular" />
        <Input label="Input Large" size="lg" />
      </div>

      <h2 className="text-2xl font-semibold mb-4">Input Error & Success</h2>
      <div className="flex items-end gap-4 mb-12">
        <Input label="Input Error" error />
        <Input label="Input Success" success />
      </div>

      <h2 className="text-2xl font-semibold mb-4">Input Colors</h2>
      <div className="grid grid-cols-3 gap-4 mb-12">
        <Input color="blue-grey" label="Blue Grey" />
        <Input color="grey" label="Grey" />
        <Input color="brown" label="Brown" />
        <Input color="deep-orange" label="Deep Orange" />
        <Input color="orange" label="Orange" />
        <Input color="amber" label="Amber" />
        <Input color="yellow" label="Yellow" />
        <Input color="lime" label="Lime" />
        <Input color="light-green" label="Light Green" />
        <Input color="green" label="Green" />
        <Input color="teal" label="Teal" />
        <Input color="cyan" label="Cyan" />
        <Input label="Light Blue" />
        <Input color="blue" label="Blue" />
        <Input color="indigo" label="Indigo" />
        <Input color="deep-purple" label="Deep Orange" />
        <Input color="purple" label="Purple" />
        <Input color="pink" label="Pink" />
        <Input color="red" label="Red" />
      </div>

      <h2 className="text-2xl font-semibold mb-4">Input Disabled</h2>
      <div className="flex items-end gap-4 mb-12">
        <Input label="Disabled" disabled />
      </div>
    </div>
  );
}
