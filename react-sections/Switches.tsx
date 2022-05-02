import { Switch } from "../packages/material-tailwind-react/src";

export default function Switches() {
  return (
    <div className="mb-24">
      <h2 className="text-2xl font-semibold mb-4">Simple Switch</h2>
      <div className="flex items-center gap-4 mb-12">
        <Switch defaultChecked />
      </div>

      <h2 className="text-2xl font-semibold mb-4">Switch with Label</h2>
      <div className="flex items-center gap-4 mb-12">
        <Switch label="Remember Me" id="switch-with-label" defaultChecked />
      </div>

      <h2 className="text-2xl font-semibold mb-4">Switch Colors</h2>
      <div className="flex items-center gap-4 mb-12">
        <Switch color="blue-grey" id="switch-blue-grey" defaultChecked />
        <Switch color="grey" id="switch-grey" defaultChecked />
        <Switch color="brown" id="switch-brown" defaultChecked />
        <Switch color="deep-orange" id="switch-deep-orange" defaultChecked />
        <Switch color="orange" id="switch-orange" defaultChecked />
        <Switch color="amber" id="switch-amber" defaultChecked />
        <Switch color="yellow" id="switch-yellow" defaultChecked />
        <Switch color="lime" id="switch-lime" defaultChecked />
        <Switch color="light-green" id="switch-light-green" defaultChecked />
        <Switch color="green" id="switch-green" defaultChecked />
        <Switch color="teal" id="switch-teal" defaultChecked />
        <Switch color="cyan" id="switch-cyan" defaultChecked />
        <Switch id="switch-light-blue" defaultChecked />
        <Switch color="blue" id="switch-blue" defaultChecked />
        <Switch color="indigo" id="switch-indigo" defaultChecked />
        <Switch color="deep-purple" id="switch-deep-purple" defaultChecked />
        <Switch color="purple" id="switch-purple" defaultChecked />
        <Switch color="pink" id="switch-pink" defaultChecked />
        <Switch color="red" id="switch-red" defaultChecked />
      </div>
    </div>
  );
}
