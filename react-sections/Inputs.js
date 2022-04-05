import Input from "components/Input";

export default function Inputs() {
  return (
    <div className="mb-24">
      <h2 className="text-2xl font-semibold mb-4">Input Variants</h2>
      <div className="flex items-end gap-4 mb-12">
        <Input label="Outlined" />
        <Input variant="standard" label="Standard" />
        <Input
          variant="static"
          label="Static"
          inputProps={{ placeholder: "First Name" }}
        />
      </div>

      <h2 className="text-2xl font-semibold mb-4">Input Sizes</h2>
      <div className="flex items-end gap-4 mb-12">
        <Input label="Input Regular" />
        <Input label="Input Large" size="lg" />
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
        <Input label="Disabled" inputProps={{ disabled: true }} />
      </div>
    </div>
  );
}
