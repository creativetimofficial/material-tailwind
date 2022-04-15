import { useState } from "react";
import Popover from "components/Popover";
import Button from "components/Button";

export default function Popovers() {
  const [pTop, setPTop] = useState(false);
  const [pRight, setPRight] = useState(false);
  const [pBottom, setPBottom] = useState(false);
  const [pLeft, setPLeft] = useState(false);

  return (
    <div className="mb-24">
      <h2 className="text-2xl font-semibold mb-4">Popovers</h2>
      <div className="flex gap-4 justify-between">
        <Popover
          node={<Button variant="gradient">Popover On Top</Button>}
          open={pTop}
          handler={setPTop}
          placement="top"
        >
          This is a very beautiful popover, show some love.
        </Popover>
        <Popover
          node={<Button variant="gradient">Popover On Right</Button>}
          open={pRight}
          handler={setPRight}
          placement="right"
        >
          This is a very beautiful popover, show some love.
        </Popover>
        <Popover
          node={<Button variant="gradient">Popover On Bottom</Button>}
          open={pBottom}
          handler={setPBottom}
          placement="bottom"
        >
          This is a very beautiful popover, show some love.
        </Popover>
        <Popover
          node={<Button variant="gradient">Popover On Left</Button>}
          open={pLeft}
          handler={setPLeft}
          placement="left"
        >
          This is a very beautiful popover, show some love.
        </Popover>
      </div>
    </div>
  );
}
