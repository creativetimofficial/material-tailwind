import Button from "components/Button";
import Alert from "components/Alert";

import { useState } from "react";

export default function Home() {
  const [show, setShow] = useState(false);
  return (
    <div className="p-10">
      <h4 className="text-3xl font-bold mb-8">Sizes</h4>
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
      </div>
      <h4 className="text-3xl font-bold mt-20 mb-8">Alerts</h4>
      <div>
        <Button onClick={() => setShow(true)}>Button</Button>
        <Alert
          show={show}
          dismissble={{
            onClose: () => setShow(false)
          }}
          variant="gradient"
          color="red"
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          }
          className="mt-10"
        >
          <h4 className="font-medium text-lg mb-2 leading-[1.4]">
            Hello World
          </h4>
          <p className="opacity-80">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
            mollitia dicta explicabo maiores cupiditate inventore, et aperiam,
            quis doloribus vitae aspernatur dolor aut delectus, temporibus
            expedita iusto dolore adipisci reprehenderit.
          </p>
        </Alert>
      </div>
    </div>
  );
}
