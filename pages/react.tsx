import Head from "next/head";

import Accordions from "../react-sections/Accordions";
import Alerts from "../react-sections/Alerts";
import Avatars from "../react-sections/Avatars";
import BreadcrumbsNav from "../react-sections/Breadcrumbs";
import Buttons from "../react-sections/Buttons";
import Cards from "../react-sections/Cards";
import Checkboxes from "../react-sections/Checkboxes";
import Chips from "../react-sections/Chips";
import Dialogs from "../react-sections/Dialogs";
import IconButtons from "../react-sections/IconButtons";
import Inputs from "../react-sections/Inputs";
import Menus from "../react-sections/Menus";
import Navbars from "../react-sections/Navbars";
import Popovers from "../react-sections/Popovers";
import ProgressBars from "../react-sections/ProgressBars";
import RadioButtons from "../react-sections/RadioButtons";
import Selects from "../react-sections/Selects";
import Switches from "../react-sections/Switches";
import NavTabs from "../react-sections/NavTabs";
import Textareas from "../react-sections/Textareas";
import Tooltips from "../react-sections/Tooltips";
import Typos from "../react-sections/Typos";

export default function React() {
  return (
    <>
      <Head>
        <title>Material Tailwind</title>
      </Head>
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-center p-12 mb-12">
          React Version Components
        </h1>

        <div className="px-10">
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
          <Selects />
          <hr className="my-24" />
          <Menus />
          <hr className="my-24" />
          <Popovers />
          <hr className="my-24" />
          <Tooltips />
          <hr className="my-24" />
          <Dialogs />
          <hr className="my-24" />
          <Accordions />
          <hr className="my-24" />
          <NavTabs />
          <hr className="my-24" />
          <BreadcrumbsNav />
          <hr className="my-24" />
          <Cards />
          <hr className="my-24" />
          <Navbars />
          <hr className="my-24" />
        </div>
      </div>
    </>
  );
}
