import { Progress } from "../packages/material-tailwind-react/src";

export default function ProgressBars() {
  return (
    <div className="mb-24">
      <h2 className="text-2xl font-semibold mb-4">Progress Variants</h2>
      <Progress value={50} className="mb-2" />
      <Progress variant="gradient" value={50} />

      <h2 className="text-2xl font-semibold mt-12 mb-4">Progress Colors</h2>
      <div className="flex flex-col gap-2">
        <Progress variant="gradient" color="blue-grey" value={75} />

        <Progress variant="gradient" color="grey" value={75} />

        <Progress variant="gradient" color="brown" value={75} />

        <Progress variant="gradient" color="deep-orange" value={75} />

        <Progress variant="gradient" color="orange" value={75} />

        <Progress variant="gradient" color="amber" value={75} />

        <Progress variant="gradient" color="yellow" value={75} />

        <Progress variant="gradient" color="lime" value={75} />

        <Progress variant="gradient" color="light-green" value={75} />

        <Progress variant="gradient" color="green" value={75} />

        <Progress variant="gradient" color="teal" value={75} />

        <Progress variant="gradient" color="cyan" value={75} />

        <Progress variant="gradient" value={75} />
        <Progress variant="gradient" color="blue" value={75} />

        <Progress variant="gradient" color="indigo" value={75} />

        <Progress variant="gradient" color="deep-purple" value={75} />

        <Progress variant="gradient" color="purple" value={75} />

        <Progress variant="gradient" color="pink" value={75} />

        <Progress variant="gradient" color="red" value={75} />
      </div>

      <h2 className="text-2xl font-semibold mt-12 mb-4">Progress With Label</h2>
      <Progress variant="gradient" value={75} label="Compleled" />
    </div>
  );
}
