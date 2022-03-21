import Button from "components/Button";
import Alert from "components/Alert";
import Chip from "components/Chip";
import Avatar from "components/Avatar";
import IconButton from "components/IconButton";

import { useState } from "react";

export default function Home() {
  const [show, setShow] = useState(false);
  const [showChip, setShowChip] = useState(false);
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
        <Alert
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
          className="my-10"
        >
          Just a simple alert
        </Alert>
        <Button onClick={() => setShow(!show)}>Trigger Alert</Button>
        <Alert
          show={show}
          dismissible={{
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
      <h4 className="text-3xl font-bold mt-20 mb-8">Chips</h4>
      <div>
        <div className="block w-full mb-10">
          <Button onClick={() => setShowChip(!showChip)}>Trigger Chip</Button>
        </div>
        <Chip value="a simple chip" color="pink" className="mr-2" />
        <Chip
          value="Dismissible Chip"
          color="teal"
          variant="gradient"
          show={showChip}
          dismissible={{
            onClose: () => setShowChip(false)
          }}
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
          }
        />
      </div>
      <h4 className="text-3xl font-bold mt-20 mb-8">Avatars</h4>
      <div className="flex items-end gap-3">
        <Avatar
          size="xs"
          alt="avatar"
          src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80"
        />
        <Avatar
          size="sm"
          alt="avatar"
          src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80"
        />
        <Avatar
          alt="avatar"
          src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80"
        />
        <Avatar
          size="lg"
          alt="avatar"
          src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80"
        />
        <Avatar
          size="xl"
          alt="avatar"
          src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80"
        />
        <Avatar
          size="xxl"
          alt="avatar"
          src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80"
        />
      </div>
      <div className="flex items-end gap-3 mt-12">
        <Avatar
          variant="circular"
          size="xs"
          alt="avatar"
          src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80"
        />
        <Avatar
          variant="circular"
          size="sm"
          alt="avatar"
          src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80"
        />
        <Avatar
          variant="circular"
          alt="avatar"
          src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80"
        />
        <Avatar
          variant="circular"
          size="lg"
          alt="avatar"
          src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80"
        />
        <Avatar
          variant="circular"
          size="xl"
          src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80"
        />
        <Avatar
          variant="circular"
          size="xxl"
          alt="avatar"
          src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80"
        />
      </div>
      <h4 className="text-3xl font-bold mt-20 mb-8">Icon Buttons</h4>
      <div className="flex items-end gap-4">
        <IconButton color="green" variant="gradient" size="sm">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M4 3a2 2 0 100 4h12a2 2 0 100-4H4z" />
            <path
              fillRule="evenodd"
              d="M3 8h14v7a2 2 0 01-2 2H5a2 2 0 01-2-2V8zm5 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z"
              clipRule="evenodd"
            />
          </svg>
        </IconButton>
        <IconButton color="green" variant="gradient">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M4 3a2 2 0 100 4h12a2 2 0 100-4H4z" />
            <path
              fillRule="evenodd"
              d="M3 8h14v7a2 2 0 01-2 2H5a2 2 0 01-2-2V8zm5 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z"
              clipRule="evenodd"
            />
          </svg>
        </IconButton>
        <IconButton color="green" variant="gradient" size="lg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M4 3a2 2 0 100 4h12a2 2 0 100-4H4z" />
            <path
              fillRule="evenodd"
              d="M3 8h14v7a2 2 0 01-2 2H5a2 2 0 01-2-2V8zm5 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z"
              clipRule="evenodd"
            />
          </svg>
        </IconButton>
      </div>
    </div>
  );
}
