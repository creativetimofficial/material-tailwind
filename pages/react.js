import Alerts from "/react-sections/Alerts";
import Avatars from "/react-sections/Avatars";
import Buttons from "/react-sections/Buttons";
import Checkboxes from "/react-sections/Checkboxes";
import Chips from "/react-sections/Chips";
import IconButtons from "/react-sections/IconButtons";
import RadioButtons from "/react-sections/RadioButtons";
import Switches from "/react-sections/Switches";
import Typos from "/react-sections/Typos";
import ProgressBars from "/react-sections/ProgressBars";

import Input from "components/Input";

export default function React() {
  return (
    <div className="container mx-auto">
      <h1 className="text-4xl font-bold text-center p-12 mb-12">
        React Version Components
      </h1>

      <div className="px-48">
        <Alerts />
        <hr className="mb-24" />
        <Avatars />
        <hr className="my-24" />
        <Buttons />
        <hr className="my-24" />
        <Chips />
        <hr className="my-24" />
        <IconButtons />
        <hr className="my-24" />
        <Checkboxes />
        <hr className="my-24" />
        <RadioButtons />
        <hr className="my-24" />
        <Switches />
        <hr className="my-24" />
        <Typos />
        <hr className="my-24" />
        <ProgressBars />
        <hr className="my-24" />
        <Input color="orange" label="Your Name" size="lg" />
        <hr className="my-24" />
      </div>
    </div>
  );
}
