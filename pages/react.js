import Alerts from "/react-sections/Alerts";
import Avatars from "/react-sections/Avatars";
import Buttons from "/react-sections/Buttons";
import Checkboxes from "/react-sections/Checkboxes";
import Chips from "/react-sections/Chips";
import IconButtons from "/react-sections/IconButtons";

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
      </div>
    </div>
  );
}
