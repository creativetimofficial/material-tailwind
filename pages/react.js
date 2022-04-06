import Alerts from "/react-sections/Alerts";
import Avatars from "/react-sections/Avatars";
import Buttons from "/react-sections/Buttons";
import Checkboxes from "/react-sections/Checkboxes";
import Chips from "/react-sections/Chips";
import IconButtons from "/react-sections/IconButtons";
import Inputs from "/react-sections/Inputs";
import ProgressBars from "/react-sections/ProgressBars";
import RadioButtons from "/react-sections/RadioButtons";
import Switches from "/react-sections/Switches";
import Textareas from "/react-sections/Textareas";
import Typos from "/react-sections/Typos";

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
        <Inputs />
        <hr className="my-24" />
        <Textareas />
        <hr className="my-24" />
      </div>
    </div>
  );
}
