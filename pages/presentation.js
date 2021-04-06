import React from "react";
import Header from "components/Documentation/Header";
import IndexNavbar from "pagesComponents/IndexNavbar";
import IndexFooter from "pagesComponents/IndexFooter";
import PresentationHeader from "./presentation/PresentationHeader";
import PresentationInstallation from "./presentation/PresentationInstallation";
import PresentationInfo from "./presentation/PresentationInfo";
import PresentationCSSComponents from "./presentation/PresentationCSSComponents";
import PresentationJSComponents from "./presentation/PresentationJSComponents";
import PresentationDocumentation from "./presentation/PresentationDocumentation";
import PresentationGithubSection from "./presentation/PresentationGithubSection";
import PresentationLoveSection from "./presentation/PresentationLoveSection";

export default function Presentation() {
  return (
    <>
      <Header title="Presentation" />
      <IndexNavbar />
      <PresentationHeader />
      <PresentationInstallation />

      <section className="mt-48 md:mt-40 py-28 relative bg-blue-gray-50">
        <div className="container max-w-7xl mx-auto">
          <PresentationInfo />

          <div className="container mx-auto overflow-hidden pb-20">
            <PresentationCSSComponents />
            <PresentationJSComponents />
            <PresentationDocumentation />
          </div>
        </div>
      </section>

      <PresentationGithubSection />
      <PresentationLoveSection />
      <IndexFooter />
    </>
  );
}
