import { useState } from "react";
import Button from "components/Button";
import {
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter
} from "components/Dialog";
import Tooltip from "components/Tooltip/index";

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
        <Button onClick={() => setOpenXS(true)} variant="gradient">
          Open Dialog XS
        </Button>
        <Button onClick={() => setOpenSM(true)} variant="gradient">
          Open Dialog SM
        </Button>
        <Button onClick={() => setOpenMD(true)} variant="gradient">
          Open Dialog MD
        </Button>
        <Button onClick={() => setOpenLG(true)} variant="gradient">
          Open Dialog LG
        </Button>
        <Button onClick={() => setOpenXL(true)} variant="gradient">
          Open Dialog XL
        </Button>
        <Button onClick={() => setOpenXXL(true)} variant="gradient">
          Open Dialog XXL
        </Button>
        <Dialog open={openXS} handler={setOpenXS} size="xs">
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
        <Dialog open={openSM} handler={setOpenSM} size="sm">
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
        <Dialog open={openMD} handler={setOpenMD}>
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
        <Dialog open={openLG} size="lg" handler={setOpenLG}>
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
        <Dialog open={openXL} size="xl" handler={setOpenXL}>
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
        <Dialog open={openXXL} size="xxl" handler={setOpenXXL}>
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
