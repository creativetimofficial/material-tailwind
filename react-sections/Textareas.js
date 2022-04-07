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

      <div className="bg-blue-grey-50 text-red-500 mt-12 p-4 rounded-md">
        The sizes, colors, error, success and disabled estates are the same as{" "}
        {`<Input />`} component.
      </div>
    </div>
  );
}
