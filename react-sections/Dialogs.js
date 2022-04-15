import { useState } from "react";
import Button from "components/Button";
import {
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter
} from "components/Dialog";

export default function Dialogs() {
  const [openXS, setOpenXS] = useState(false);
  const [openSM, setOpenSM] = useState(false);
  const [openMD, setOpenMD] = useState(false);
  const [openLG, setOpenLG] = useState(false);
  const [openXL, setOpenXL] = useState(false);
  const [openXXL, setOpenXXL] = useState(false);

  return (
    <div className="mb-24">
      <h2 className="text-2xl font-semibold mb-4">Dialogs</h2>
      <div className="flex gap-4 justify-between">
        <Dialog
          open={openXS}
          handler={setOpenXS}
          size="xs"
          node={<Button variant="gradient">Open Dialog XS</Button>}
        >
          <DialogHeader>Its a simple dialog.</DialogHeader>
          <DialogBody divider>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus
            ad reprehenderit omnis perspiciatis aut odit! Unde architecto
            perspiciatis, dolorum dolorem iure quia saepe autem accusamus eum
            praesentium magni corrupti explicabo!
          </DialogBody>
          <DialogFooter>
            <Button
              variant="text"
              color="red"
              onClick={() => setOpenXS(false)}
              className="mr-1"
            >
              Cancel
            </Button>
            <Button
              variant="gradient"
              color="green"
              onClick={() => setOpenXS(false)}
            >
              Confirm
            </Button>
          </DialogFooter>
        </Dialog>
        <Dialog
          open={openSM}
          handler={setOpenSM}
          size="sm"
          node={<Button variant="gradient">Open Dialog SM</Button>}
        >
          <DialogHeader>Its a simple dialog.</DialogHeader>
          <DialogBody divider>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus
            ad reprehenderit omnis perspiciatis aut odit! Unde architecto
            perspiciatis, dolorum dolorem iure quia saepe autem accusamus eum
            praesentium magni corrupti explicabo!
          </DialogBody>
          <DialogFooter>
            <Button
              variant="text"
              color="red"
              onClick={() => setOpenSM(false)}
              className="mr-1"
            >
              Cancel
            </Button>
            <Button
              variant="gradient"
              color="green"
              onClick={() => setOpenSM(false)}
            >
              Confirm
            </Button>
          </DialogFooter>
        </Dialog>
        <Dialog
          open={openMD}
          handler={setOpenMD}
          node={<Button variant="gradient">Open Dialog MD</Button>}
        >
          <DialogHeader>Its a simple dialog.</DialogHeader>
          <DialogBody divider>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus
            ad reprehenderit omnis perspiciatis aut odit! Unde architecto
            perspiciatis, dolorum dolorem iure quia saepe autem accusamus eum
            praesentium magni corrupti explicabo!
          </DialogBody>
          <DialogFooter>
            <Button
              variant="text"
              color="red"
              onClick={() => setOpenMD(false)}
              className="mr-1"
            >
              Cancel
            </Button>
            <Button
              variant="gradient"
              color="green"
              onClick={() => setOpenMD(false)}
            >
              Confirm
            </Button>
          </DialogFooter>
        </Dialog>
        <Dialog
          open={openLG}
          handler={setOpenLG}
          size="lg"
          node={<Button variant="gradient">Open Dialog LG</Button>}
        >
          <DialogHeader>Its a simple dialog.</DialogHeader>
          <DialogBody divider>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus
            ad reprehenderit omnis perspiciatis aut odit! Unde architecto
            perspiciatis, dolorum dolorem iure quia saepe autem accusamus eum
            praesentium magni corrupti explicabo!
          </DialogBody>
          <DialogFooter>
            <Button
              variant="text"
              color="red"
              onClick={() => setOpenLG(false)}
              className="mr-1"
            >
              Cancel
            </Button>
            <Button
              variant="gradient"
              color="green"
              onClick={() => setOpenLG(false)}
            >
              Confirm
            </Button>
          </DialogFooter>
        </Dialog>
        <Dialog
          open={openXL}
          handler={setOpenXL}
          size="xl"
          node={<Button variant="gradient">Open Dialog XL</Button>}
        >
          <DialogHeader>Its a simple dialog.</DialogHeader>
          <DialogBody divider>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus
            ad reprehenderit omnis perspiciatis aut odit! Unde architecto
            perspiciatis, dolorum dolorem iure quia saepe autem accusamus eum
            praesentium magni corrupti explicabo!
          </DialogBody>
          <DialogFooter>
            <Button
              variant="text"
              color="red"
              onClick={() => setOpenXL(false)}
              className="mr-1"
            >
              Cancel
            </Button>
            <Button
              variant="gradient"
              color="green"
              onClick={() => setOpenXL(false)}
            >
              Confirm
            </Button>
          </DialogFooter>
        </Dialog>
        <Dialog
          open={openXXL}
          handler={setOpenXXL}
          size="xxl"
          node={<Button variant="gradient">Open Dialog XXL</Button>}
        >
          <DialogHeader>Its a simple dialog.</DialogHeader>
          <DialogBody divider>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus
            ad reprehenderit omnis perspiciatis aut odit! Unde architecto
            perspiciatis, dolorum dolorem iure quia saepe autem accusamus eum
            praesentium magni corrupti explicabo!
          </DialogBody>
          <DialogFooter>
            <Button
              variant="text"
              color="red"
              onClick={() => setOpenXXL(false)}
              className="mr-1"
            >
              Cancel
            </Button>
            <Button
              variant="gradient"
              color="green"
              onClick={() => setOpenXXL(false)}
            >
              Confirm
            </Button>
          </DialogFooter>
        </Dialog>
      </div>
    </div>
  );
}
