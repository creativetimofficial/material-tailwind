import { useState } from "react";
import { Tooltip } from "../packages/material-tailwind-react/src";
import { Button } from "../packages/material-tailwind-react/src";

export default function Tooltips() {
  const [tTop, setTTop] = useState(false);
  const [tRight, setTRight] = useState(false);
  const [tBottom, setTBottom] = useState(false);
  const [tLeft, setTLeft] = useState(false);

  return (
    <div className="mb-24">
      <h2 className="text-2xl font-semibold mb-4">Tooltips</h2>
      <div className="flex gap-4 justify-between">
        <Tooltip
          content="Tooltip on Top"
          open={tTop}
          handler={setTTop}
          placement="top"
        >
          <Button variant="gradient">Tooltip On Top</Button>
        </Tooltip>
        <Tooltip
          content="Tooltip on Top"
          open={tRight}
          handler={setTRight}
          placement="right"
        >
          <Button variant="gradient">Tooltip On Right</Button>
        </Tooltip>
        <Tooltip
          content="Tooltip on Bottom"
          open={tBottom}
          handler={setTBottom}
          placement="bottom"
        >
          <Button variant="gradient">Tooltip On Bottom</Button>
        </Tooltip>
        <Tooltip
          content="Tooltip on Left"
          open={tLeft}
          handler={setTLeft}
          placement="left"
        >
          <Button variant="gradient">Tooltip On Left</Button>
        </Tooltip>
      </div>
    </div>
  );
}
