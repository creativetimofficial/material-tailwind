import { useState } from "react";
import Alert from "components/Alert";
import Button from "components/Button";

export default function Alerts() {
  const [show, setShow] = useState(false);
  const [showSimple, setShowSimple] = useState(false);

  return (
    <div className="mb-24">
      <h2 className="text-2xl font-semibold mb-4">Alert Variants</h2>
      <Alert className="mb-2">Simple Alert Component.</Alert>
      <Alert variant="gradient">
        Simple Alert Component with gradient color.
      </Alert>

      <h2 className="text-2xl font-semibold mt-12 mb-4">Alert Colors</h2>
      <div className="flex flex-col gap-2">
        <Alert variant="gradient" color="blue-grey">
          Alert Component with blue-grey color.
        </Alert>
        <Alert variant="gradient" color="grey">
          Alert Component with grey color.
        </Alert>
        <Alert variant="gradient" color="brown">
          Alert Component with brown color.
        </Alert>
        <Alert variant="gradient" color="deep-orange">
          Alert Component with deep-orange color.
        </Alert>
        <Alert variant="gradient" color="orange">
          Alert Component with orange color.
        </Alert>
        <Alert variant="gradient" color="amber">
          Alert Component with amber color.
        </Alert>
        <Alert variant="gradient" color="yellow">
          Alert Component with yellow color.
        </Alert>
        <Alert variant="gradient" color="lime">
          Alert Component with lime color.
        </Alert>
        <Alert variant="gradient" color="light-green">
          Alert Component with light-green color.
        </Alert>
        <Alert variant="gradient" color="green">
          Alert Component with green color.
        </Alert>
        <Alert variant="gradient" color="teal">
          Alert Component with teal color.
        </Alert>
        <Alert variant="gradient" color="cyan">
          Alert Component with cyan color.
        </Alert>
        <Alert variant="gradient">Alert Component with light-blue color.</Alert>
        <Alert variant="gradient" color="blue">
          Alert Component with blue color.
        </Alert>
        <Alert variant="gradient" color="indigo">
          Alert Component with indigo color.
        </Alert>
        <Alert variant="gradient" color="deep-purple">
          Alert Component with deep-purple color.
        </Alert>
        <Alert variant="gradient" color="purple">
          Alert Component with purple color.
        </Alert>
        <Alert variant="gradient" color="pink">
          Alert Component with pink color.
        </Alert>
        <Alert variant="gradient" color="red">
          Alert Component with red color.
        </Alert>
      </div>

      <h2 className="text-2xl font-semibold mt-12 mb-4">Alert With Icon</h2>
      <Alert
        variant="gradient"
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
      >
        Simple Alert Component.
      </Alert>

      <h2 className="text-2xl font-semibold mt-12 mb-4">
        Dismissible Alerts: Simple & Complex
      </h2>
      <div className="flex gap-3 mb-6">
        <Button
          variant="gradient"
          onClick={() => setShowSimple(!showSimple)}
          color="red"
        >
          Trigger Simple Alert
        </Button>
        <Button variant="gradient" onClick={() => setShow(!show)} color="green">
          Trigger Complex Alert
        </Button>
      </div>
      <Alert
        show={showSimple}
        dismissible={{
          onClose: () => setShowSimple(false)
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
        className="!fixed top-2 right-2 w-[800px] mb-2"
      >
        A simple dismissible alert.
      </Alert>

      <Alert
        show={show}
        dismissible={{
          onClose: () => setShow(false)
        }}
        variant="gradient"
        color="green"
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
        className="!fixed top-2 right-2 w-[800px]"
      >
        <h4 className="font-medium text-lg mb-2 leading-[1.4]">Hello World</h4>
        <p className="opacity-80">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
          mollitia dicta explicabo maiores cupiditate inventore, et aperiam,
          quis doloribus vitae aspernatur dolor aut delectus, temporibus
          expedita iusto dolore adipisci reprehenderit.
        </p>
      </Alert>
    </div>
  );
}
