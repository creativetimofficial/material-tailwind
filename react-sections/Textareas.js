import Textarea from "components/Textarea";

export default function Textareas() {
  return (
    <div className="mb-24">
      <h2 className="text-2xl font-semibold mb-4">Textarea Variants</h2>
      <div className="flex items-end gap-4 mb-12">
        <Textarea label="Outlined" />
        <Textarea variant="standard" label="Standard" />
        <Textarea variant="static" label="Static" placeholder="First Name" />
      </div>

      <h2 className="text-2xl font-semibold mb-4">Textarea Sizes</h2>
      <div className="flex items-end gap-4 mb-12">
        <Textarea label="Textarea Regular" />
        <Textarea label="Textarea Large" size="lg" />
      </div>

      <h2 className="text-2xl font-semibold mb-4">Textarea Error & Success</h2>
      <div className="flex items-end gap-4 mb-12">
        <Textarea label="Textarea Error" error />
        <Textarea label="Textarea Success" success resize={false} />
      </div>

      <h2 className="text-2xl font-semibold mb-4">Textarea Colors</h2>
      <div className="grid grid-cols-3 gap-4 mb-12">
        <Textarea color="blue-grey" label="Blue Grey" />
        <Textarea color="grey" label="Grey" />
        <Textarea color="brown" label="Brown" />
        <Textarea color="deep-orange" label="Deep Orange" />
        <Textarea color="orange" label="Orange" />
        <Textarea color="amber" label="Amber" />
        <Textarea color="yellow" label="Yellow" />
        <Textarea color="lime" label="Lime" />
        <Textarea color="light-green" label="Light Green" />
        <Textarea color="green" label="Green" />
        <Textarea color="teal" label="Teal" />
        <Textarea color="cyan" label="Cyan" />
        <Textarea label="Light Blue" />
        <Textarea color="blue" label="Blue" />
        <Textarea color="indigo" label="Indigo" />
        <Textarea color="deep-purple" label="Deep Orange" />
        <Textarea color="purple" label="Purple" />
        <Textarea color="pink" label="Pink" />
        <Textarea color="red" label="Red" />
      </div>

      <h2 className="text-2xl font-semibold mb-4">Textarea Disabled</h2>
      <div className="flex items-end gap-4 mb-12">
        <Textarea label="Disabled" disabled />
      </div>
    </div>
  );
}
