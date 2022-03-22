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
        <Button variant="gradient" size="sm">
          Small
        </Button>
        <Button variant="gradient">Medium</Button>
        <Button variant="gradient" size="lg">
          Large
        </Button>
      </div>

      <h2 className="text-2xl font-semibold mb-4">Button Colors</h2>
      <div className="flex flex-wrap items-end gap-4 mb-12">
        <Button variant="gradient" color="blue-grey">
          blue grey
        </Button>
        <Button variant="gradient" color="grey">
          grey
        </Button>
        <Button variant="gradient" color="brown">
          brown
        </Button>
        <Button variant="gradient" color="deep-orange">
          deep orange
        </Button>
        <Button variant="gradient" color="orange">
          orange
        </Button>
        <Button variant="gradient" color="amber">
          amber
        </Button>
        <Button variant="gradient" color="yellow">
          yellow
        </Button>
        <Button variant="gradient" color="lime">
          lime
        </Button>
        <Button variant="gradient" color="light-green">
          light green
        </Button>
        <Button variant="gradient" color="green">
          green
        </Button>
        <Button variant="gradient" color="teal">
          teal
        </Button>
        <Button variant="gradient" color="cyan">
          cyan
        </Button>
        <Button variant="gradient">light blue</Button>
        <Button variant="gradient" color="blue">
          blue
        </Button>
        <Button variant="gradient" color="indigo">
          indigo
        </Button>
        <Button variant="gradient" color="deep-purple">
          deep purple
        </Button>
        <Button variant="gradient" color="purple">
          purple
        </Button>
        <Button variant="gradient" color="pink">
          pink
        </Button>
        <Button variant="gradient" color="red">
          red
        </Button>
      </div>

      <h2 className="text-2xl font-semibold mb-4">Button with Full Width</h2>
      <Button variant="gradient" fullWidth>
        Full Width
      </Button>
    </div>
  );
}
