import Radio from "components/Radio";

export default function RadioButtons() {
  return (
    <div className="mb-24">
      <h2 className="text-2xl font-semibold mb-4">Simple Radio</h2>
      <div className="flex items-center mb-12">
        <Radio name="simple-radio" id="simpe-radio-1" defaultChecked />
        <Radio name="simple-radio" id="simpe-radio-2" />
      </div>

      <h2 className="text-2xl font-semibold mb-4">Radio with Label</h2>
      <div className="flex items-center gap-4 mb-12">
        <Radio label="Male" id="male" name="gender" defaultChecked />
        <Radio label="Female" id="female" name="gender" ripple={false} />
      </div>

      <h2 className="text-2xl font-semibold mb-4">Radio Colors</h2>
      <div className="flex items-center mb-12">
        <Radio color="blue-grey" id="radio-blue-grey" defaultChecked />
        <Radio color="grey" id="radio-grey" defaultChecked />
        <Radio color="brown" id="radio-brown" defaultChecked />
        <Radio color="deep-orange" id="radio-deep-orange" defaultChecked />
        <Radio color="orange" id="radio-orange" defaultChecked />
        <Radio color="amber" id="radio-amber" defaultChecked />
        <Radio color="yellow" id="radio-yellow" defaultChecked />
        <Radio color="lime" id="radio-lime" defaultChecked />
        <Radio color="light-green" id="radio-light-green" defaultChecked />
        <Radio color="green" id="radio-green" defaultChecked />
        <Radio color="teal" id="radio-teal" defaultChecked />
        <Radio color="cyan" id="radio-cyan" defaultChecked />
        <Radio id="radio-light-blue" defaultChecked />
        <Radio color="blue" id="radio-blue" defaultChecked />
        <Radio color="indigo" id="radio-indigo" defaultChecked />
        <Radio color="deep-purple" id="radio-deep-purple" defaultChecked />
        <Radio color="purple" id="radio-purple" defaultChecked />
        <Radio color="pink" id="radio-pink" defaultChecked />
        <Radio color="red" id="radio-red" defaultChecked />
      </div>
    </div>
  );
}
