import React, { useState } from "react";
import Header from "components/Documentation/Header";
import Container from "components/Documentation/Container";
import Navbar from "components/Documentation/Navbar";
import Heading from "components/Documentation/Heading.js";
import SmallHeading from "components/Documentation/SmallHeading.js";
import InputCode from "components/Documentation/JavaScript/React/Inputs/InputCode";
import InputIconCode from "components/Documentation/JavaScript/React/Inputs/InputIconCode";

export default function Inputs() {
  const [copy, setCopy] = useState(null);
  return (
    <>
      <Header title="React Inputs" />
      <Navbar />
      <Container>
        <Heading
          title="React Inputs"
          description="Easily create inputs with different status and sizes using Material Tailwind inputs"
        />
        <SmallHeading title="Input" />
        <InputCode
          copyText={copy === "Buttons" ? "Copied" : "Copy"}
          onCopy={(text) => setCopy(text ? "Buttons" : "")}
          placeholder="Input"
          size="regular"
          outline={false}
        />

        <div className="h-20">&nbsp;</div>

        <SmallHeading title="Outline Input" />
        <InputCode
          copyText={copy === "Buttons" ? "Copied" : "Copy"}
          onCopy={(text) => setCopy(text ? "Buttons" : "")}
          placeholder="Outline Input"
          size="regular"
          outline={true}
        />

        <div className="h-20">&nbsp;</div>

        <SmallHeading title="Small Input" />
        <InputCode
          copyText={copy === "Buttons" ? "Copied" : "Copy"}
          onCopy={(text) => setCopy(text ? "Buttons" : "")}
          placeholder="Small Input"
          size="sm"
          outline={false}
        />

        <div className="h-20">&nbsp;</div>

        <SmallHeading title="Large Input" />
        <InputCode
          copyText={copy === "Buttons" ? "Copied" : "Copy"}
          onCopy={(text) => setCopy(text ? "Buttons" : "")}
          placeholder="Large Input"
          size="lg"
          outline={false}
        />

        <div className="h-20">&nbsp;</div>

        <SmallHeading title="Small Outline Input" />
        <InputCode
          copyText={copy === "Buttons" ? "Copied" : "Copy"}
          onCopy={(text) => setCopy(text ? "Buttons" : "")}
          placeholder="Small Outline Input"
          size="sm"
          outline={true}
        />

        <div className="h-20">&nbsp;</div>

        <SmallHeading title="Large Outline Input" />
        <InputCode
          copyText={copy === "Buttons" ? "Copied" : "Copy"}
          onCopy={(text) => setCopy(text ? "Buttons" : "")}
          placeholder="Large Outline Input"
          size="lg"
          outline={true}
        />

        <div className="h-20">&nbsp;</div>

        <SmallHeading title="Input with Icon" />
        <InputIconCode
          copyText={copy === "Buttons" ? "Copied" : "Copy"}
          onCopy={(text) => setCopy(text ? "Buttons" : "")}
          placeholder="Input with Icon"
          size="regular"
          outline={false}
        />

        <div className="h-20">&nbsp;</div>

        <SmallHeading title="Outline Input with Icon" />
        <InputIconCode
          copyText={copy === "Buttons" ? "Copied" : "Copy"}
          onCopy={(text) => setCopy(text ? "Buttons" : "")}
          placeholder="Outline Input with Icon"
          size="regular"
          outline={true}
        />

        <div className="h-20">&nbsp;</div>

        <SmallHeading title="Input with Error" />
        <InputCode
          copyText={copy === "Buttons" ? "Copied" : "Copy"}
          onCopy={(text) => setCopy(text ? "Buttons" : "")}
          placeholder="Input with Error"
          size="Regular"
          outline={false}
          errorMessage="Its an error"
          error="Its an error"
        />

        <div className="h-20">&nbsp;</div>

        <SmallHeading title="Outline Input with Error" />
        <InputCode
          copyText={copy === "Buttons" ? "Copied" : "Copy"}
          onCopy={(text) => setCopy(text ? "Buttons" : "")}
          placeholder="Outline Input with Error"
          size="Regular"
          outline={true}
          errorMessage="Its an error"
          error="Its an error"
        />

        <div className="h-20">&nbsp;</div>

        <SmallHeading title="Input with Success" />
        <InputCode
          copyText={copy === "Buttons" ? "Copied" : "Copy"}
          onCopy={(text) => setCopy(text ? "Buttons" : "")}
          placeholder="Input with Success"
          size="Regular"
          outline={false}
          successMessage="Its a success"
          success="Its a success"
        />

        <div className="h-20">&nbsp;</div>

        <SmallHeading title="Outline Input with Success" />
        <InputCode
          copyText={copy === "Buttons" ? "Copied" : "Copy"}
          onCopy={(text) => setCopy(text ? "Buttons" : "")}
          placeholder="Outline Input with Success"
          size="Regular"
          outline={true}
          successMessage="Its a success"
          success="Its a success"
        />
      </Container>
    </>
  );
}
