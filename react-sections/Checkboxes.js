import Checkbox from "components/Checkbox";

export default function Checkboxes() {
  return (
    <div className="mb-24">
      <h2 className="text-2xl font-semibold mb-4">Simple Checkbox</h2>
      <div className="flex items-center gap-4 mb-12">
        <Checkbox defaultChecked />
      </div>

      <h2 className="text-2xl font-semibold mb-4">Checkbox with Label</h2>
      <div className="flex items-center gap-4 mb-12">
        <Checkbox label="Remember Me" id="with-label" defaultChecked />
      </div>

      <h2 className="text-2xl font-semibold mb-4">Checkbox Colors</h2>
      <div className="flex items-center mb-12">
        <Checkbox color="blue-grey" id="blue-grey" defaultChecked />
        <Checkbox color="grey" id="grey" defaultChecked />
        <Checkbox color="brown" id="brown" defaultChecked />
        <Checkbox color="deep-orange" id="deep-orange" defaultChecked />
        <Checkbox color="orange" id="orange" defaultChecked />
        <Checkbox color="amber" id="amber" defaultChecked />
        <Checkbox color="yellow" id="yellow" defaultChecked />
        <Checkbox color="lime" id="lime" defaultChecked />
        <Checkbox color="light-green" id="light-green" defaultChecked />
        <Checkbox color="green" id="green" defaultChecked />
        <Checkbox color="teal" id="teal" defaultChecked />
        <Checkbox color="cyan" id="cyan" defaultChecked />
        <Checkbox id="light-blue" defaultChecked />
        <Checkbox color="blue" id="blue" defaultChecked />
        <Checkbox color="indigo" id="indigo" defaultChecked />
        <Checkbox color="deep-purple" id="deep-purple" defaultChecked />
        <Checkbox color="purple" id="purple" defaultChecked />
        <Checkbox color="pink" id="pink" defaultChecked />
        <Checkbox color="red" id="red" defaultChecked />
      </div>
    </div>
  );
}
