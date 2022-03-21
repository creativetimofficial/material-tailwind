import { useState } from "react";
import Chip from "components/Chip";
import Button from "components/Button";

export default function Chips() {
  const [show, setShow] = useState(false);

  return (
    <div className="mb-24">
      <h2 className="text-2xl font-semibold mb-4">Chip Variants</h2>
      <Chip value="filled" className="mr-2" />
      <Chip variant="gradient" value="gradient" />

      <h2 className="text-2xl font-semibold mt-12 mb-4">Chip Colors</h2>
      <div className="flex flex-wrap gap-2">
        <Chip variant="gradient" color="blue-grey" value="blue grey" />
        <Chip variant="gradient" color="grey" value="grey" />
        <Chip variant="gradient" color="brown" value="brown" />
        <Chip variant="gradient" color="deep-orange" value="deep orange" />
        <Chip variant="gradient" color="orange" value="orange" />
        <Chip variant="gradient" color="amber" value="amber" />
        <Chip variant="gradient" color="yellow" value="yellow" />
        <Chip variant="gradient" color="lime" value="lime" />
        <Chip variant="gradient" color="light-green" value="light green" />
        <Chip variant="gradient" color="green" value="green" />
        <Chip variant="gradient" color="teal" value="teal" />
        <Chip variant="gradient" color="cyan" value="cyan" />
        <Chip variant="gradient" value="light-blue" />
        <Chip variant="gradient" color="blue" value="blue" />
        <Chip variant="gradient" color="indigo" value="indigo" />
        <Chip variant="gradient" color="deep-purple" value="deep purple" />
        <Chip variant="gradient" color="purple" value="purple" />
        <Chip variant="gradient" color="pink" value="pink" />
        <Chip variant="gradient" color="red" value="red" />
      </div>

      <h2 className="text-2xl font-semibold mt-12 mb-4">Chip With Icon</h2>
      <Chip
        value="with icon"
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

      <h2 className="text-2xl font-semibold mt-12 mb-4">Dismissible Chip</h2>
      <Button onClick={() => setShow(!show)} color="teal" className="mb-6">
        Trigger Chip
      </Button>
      <div>
        <Chip
          show={show}
          dismissible={{
            onClose: () => setShow(false)
          }}
          variant="gradient"
          color="teal"
          value="dismissible"
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
    </div>
  );
}
