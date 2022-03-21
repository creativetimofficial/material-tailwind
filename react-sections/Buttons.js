import Button from "components/Button";

export default function Buttons() {
  const image =
    "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80";

  return (
    <div className="mb-24">
      <h2 className="text-2xl font-semibold mb-4">Button Variants</h2>
      <div className="flex items-center gap-4 mb-12">
        <Button>Filled</Button>
        <Button variant="gradient">Gradient</Button>
        <Button variant="outlined">Outlined</Button>
        <Button variant="text">Text</Button>
      </div>

      <h2 className="text-2xl font-semibold mb-4">Button Sizes</h2>
      <div className="flex items-end gap-4 mb-12">
        <Button size="sm">Small</Button>
        <Button>Medium</Button>
        <Button size="lg">Large</Button>
      </div>

      <h2 className="text-2xl font-semibold mb-4">Button Colors</h2>
      <div className="flex flex-wrap items-end gap-4 mb-12">
        <Button color="blue-grey">blue grey</Button>
        <Button color="grey">grey</Button>
        <Button color="brown">brown</Button>
        <Button color="deep-orange">deep orange</Button>
        <Button color="orange">orange</Button>
        <Button color="amber">amber</Button>
        <Button color="yellow">yellow</Button>
        <Button color="lime">lime</Button>
        <Button color="light-green">light green</Button>
        <Button color="green">green</Button>
        <Button color="teal">teal</Button>
        <Button color="cyan">cyan</Button>
        <Button>light blue</Button>
        <Button color="blue">blue</Button>
        <Button color="indigo">indigo</Button>
        <Button color="deep-purple">deep purple</Button>
        <Button color="purple">purple</Button>
        <Button color="pink">pink</Button>
        <Button color="red">red</Button>
      </div>

      <h2 className="text-2xl font-semibold mb-4">Button with Full Width</h2>
      <Button fullWidth>Full Width</Button>
    </div>
  );
}
