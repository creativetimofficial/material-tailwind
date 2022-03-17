import Button from "../packages/material-tailwind-react/src/components/Button";

export default function Home() {
  return (
    <div className="p-10">
      {/* <h4 className="text-3xl font-bold mb-8">Sizes</h4>
      <div className="flex items-end gap-4 mb-20">
        <Button size="sm">small</Button>
        <Button>medium</Button>
        <Button size="lg">large</Button>
      </div>
      <hr />
      <h4 className="text-3xl font-bold mt-20 mb-8">Variant = Filled</h4>
      <div className="flex items-end flex-wrap gap-4 mb-20">
        <Button color="blue-grey">Button</Button>
        <Button color="grey">Button</Button>
        <Button color="brown">Button</Button>
        <Button color="deep-orange">Button</Button>
        <Button color="orange">Button</Button>
        <Button color="amber">Button</Button>
        <Button color="yellow">Button</Button>
        <Button color="lime">Button</Button>
        <Button color="light-green">Button</Button>
        <Button color="green">Button</Button>
        <Button color="teal">Button</Button>
        <Button color="cyan">Button</Button>
        <Button>Button</Button>
        <Button color="blue">Button</Button>
        <Button color="indigo">Button</Button>
        <Button color="deep-purple">Button</Button>
        <Button color="purple">Button</Button>
        <Button color="pink">Button</Button>
        <Button color="red">Button</Button>
      </div>
      <hr />
      <h4 className="text-3xl font-bold mt-20 mb-8">Variant = Gradient</h4>
      <div className="flex items-end flex-wrap gap-4 mb-20">
        <Button variant="gradient" color="blue-grey">
          Button
        </Button>
        <Button variant="gradient" color="grey">
          Button
        </Button>
        <Button variant="gradient" color="brown">
          Button
        </Button>
        <Button variant="gradient" color="deep-orange">
          Button
        </Button>
        <Button variant="gradient" color="orange">
          Button
        </Button>
        <Button variant="gradient" color="amber">
          Button
        </Button>
        <Button variant="gradient" color="yellow">
          Button
        </Button>
        <Button variant="gradient" color="lime">
          Button
        </Button>
        <Button variant="gradient" color="light-green">
          Button
        </Button>
        <Button variant="gradient" color="green">
          Button
        </Button>
        <Button variant="gradient" color="teal">
          Button
        </Button>
        <Button variant="gradient" color="cyan">
          Button
        </Button>
        <Button variant="gradient">Button</Button>
        <Button variant="gradient" color="blue">
          Button
        </Button>
        <Button variant="gradient" color="indigo">
          Button
        </Button>
        <Button variant="gradient" color="deep-purple">
          Button
        </Button>
        <Button variant="gradient" color="purple">
          Button
        </Button>
        <Button variant="gradient" color="pink">
          Button
        </Button>
        <Button variant="gradient" color="red">
          Button
        </Button>
      </div>
      <hr />
      <h4 className="text-3xl font-bold mt-20 mb-8">Variant = Outlined</h4>
      <div className="flex items-end flex-wrap gap-4 mb-20">
        <Button variant="outlined" color="blue-grey">
          Button
        </Button>
        <Button variant="outlined" color="grey">
          Button
        </Button>
        <Button variant="outlined" color="brown">
          Button
        </Button>
        <Button variant="outlined" color="deep-orange">
          Button
        </Button>
        <Button variant="outlined" color="orange">
          Button
        </Button>
        <Button variant="outlined" color="amber">
          Button
        </Button>
        <Button variant="outlined" color="yellow">
          Button
        </Button>
        <Button variant="outlined" color="lime">
          Button
        </Button>
        <Button variant="outlined" color="light-green">
          Button
        </Button>
        <Button variant="outlined" color="green">
          Button
        </Button>
        <Button variant="outlined" color="teal">
          Button
        </Button>
        <Button variant="outlined" color="cyan">
          Button
        </Button>
        <Button variant="outlined">Button</Button>
        <Button variant="outlined" color="blue">
          Button
        </Button>
        <Button variant="outlined" color="indigo">
          Button
        </Button>
        <Button variant="outlined" color="deep-purple">
          Button
        </Button>
        <Button variant="outlined" color="purple">
          Button
        </Button>
        <Button variant="outlined" color="pink">
          Button
        </Button>
        <Button variant="outlined" color="red">
          Button
        </Button>
      </div>
      <hr />
      <h4 className="text-3xl font-bold mt-20 mb-8">Variant = Text</h4>
      <div className="flex items-end flex-wrap gap-4 mb-20">
        <Button variant="text" color="blue-grey">
          Button
        </Button>
        <Button variant="text" color="grey">
          Button
        </Button>
        <Button variant="text" color="brown">
          Button
        </Button>
        <Button variant="text" color="deep-orange">
          Button
        </Button>
        <Button variant="text" color="orange">
          Button
        </Button>
        <Button variant="text" color="amber">
          Button
        </Button>
        <Button variant="text" color="yellow">
          Button
        </Button>
        <Button variant="text" color="lime">
          Button
        </Button>
        <Button variant="text" color="light-green">
          Button
        </Button>
        <Button variant="text" color="green">
          Button
        </Button>
        <Button variant="text" color="teal">
          Button
        </Button>
        <Button variant="text" color="cyan">
          Button
        </Button>
        <Button variant="text">Button</Button>
        <Button variant="text" color="blue">
          Button
        </Button>
        <Button variant="text" color="indigo">
          Button
        </Button>
        <Button variant="text" color="deep-purple">
          Button
        </Button>
        <Button variant="text" color="purple">
          Button
        </Button>
        <Button variant="text" color="pink">
          Button
        </Button>
        <Button variant="text" color="red">
          Button No Ripple
        </Button>
      </div> */}

      <div className="flex items-center gap-4">
        <button className="button button-pink" data-ripple-light>
          Button
        </button>
        <button
          className="button button-gradient button-pink"
          data-ripple-light
        >
          Button
        </button>
        <button className="button button-outlined button-pink" data-ripple-dark>
          Button
        </button>
        <button className="button button-text button-pink" data-ripple-dark>
          Button
        </button>
        <h2 className="font-sans shadow-md">Hello World</h2>

        <div className="alert alert-gradient alert-brown">Alert primary</div>
      </div>
    </div>
  );
}
