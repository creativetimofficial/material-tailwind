import React, { useState } from "react";
import Header from "components/Documentation/Header";
import Container from "components/Documentation/Container";
import Navbar from "components/Documentation/Navbar";
import Heading from "components/Documentation/Heading.js";
import SmallHeading from "components/Documentation/SmallHeading.js";
import ButtonCode from "components/Documentation/JavaScript/React/ButtonCode";
import Icon from "components/Icon/Icon";

export default function Buttons() {
  const [copy, setCopy] = useState(null);

  return (
    <>
      <Header title="React Buttons" />
      <Navbar />
      <Container>
        <Heading
          title="React Buttons"
          description="Use Material Tailwind buttons for actions in forms, dialogues, and more with support for multiple sizes, states, and more."
        />
        <SmallHeading title="Button" />
        <ButtonCode
          copyText={copy === "Buttons" ? "Copied" : "Copy"}
          onCopy={(text) => setCopy(text ? "Buttons" : "")}
          buttonType="filled"
          size="regular"
          rounded={false}
          buttonChildren="Button"
          rippleEffect='ripple="light"'
          ripple="light"
        >
          Button
        </ButtonCode>

        <div className="h-20">&nbsp;</div>

        <SmallHeading title="Rounded Button" />
        <ButtonCode
          copyText={copy === "Buttons" ? "Copied" : "Copy"}
          onCopy={(text) => setCopy(text ? "Buttons" : "")}
          buttonType="filled"
          size="regular"
          rounded={true}
          buttonChildren="Rounded Button"
          rippleEffect='ripple="light"'
          ripple="light"
        >
          Rounded Button
        </ButtonCode>

        <div className="h-20">&nbsp;</div>

        <SmallHeading title="Small Button" />
        <ButtonCode
          copyText={copy === "Buttons" ? "Copied" : "Copy"}
          onCopy={(text) => setCopy(text ? "Buttons" : "")}
          buttonType="filled"
          size="sm"
          rounded={false}
          buttonChildren="Small Button"
          rippleEffect='ripple="light"'
          ripple="light"
        >
          Small Button
        </ButtonCode>

        <div className="h-20">&nbsp;</div>

        <SmallHeading title="Regular Button" />
        <ButtonCode
          copyText={copy === "Buttons" ? "Copied" : "Copy"}
          onCopy={(text) => setCopy(text ? "Buttons" : "")}
          buttonType="filled"
          size="regular"
          rounded={false}
          buttonChildren="Regular Button"
          rippleEffect='ripple="light"'
          ripple="light"
        >
          Regular Button
        </ButtonCode>

        <div className="h-20">&nbsp;</div>

        <SmallHeading title="Large Button" />
        <ButtonCode
          copyText={copy === "Buttons" ? "Copied" : "Copy"}
          onCopy={(text) => setCopy(text ? "Buttons" : "")}
          buttonType="filled"
          size="lg"
          rounded={false}
          buttonChildren="Large Button"
          rippleEffect='ripple="light"'
          ripple="light"
        >
          Large Button
        </ButtonCode>

        <div className="h-20">&nbsp;</div>

        <SmallHeading title="With Icon Before" />

        <ButtonCode
          copyText={copy === "Buttons" ? "Copied" : "Copy"}
          onCopy={(text) => setCopy(text ? "Buttons" : "")}
          buttonType="filled"
          size="regular"
          rounded={false}
          hasIcon={true}
          buttonChildren={`<Icon name="favorite" size="sm" /> With Icon Before`}
          rippleEffect='ripple="light"'
          ripple="light"
        >
          <Icon name="favorite" size="sm" />
          With Icon Before
        </ButtonCode>

        <div className="h-20">&nbsp;</div>

        <SmallHeading title="With Icon After" />

        <ButtonCode
          copyText={copy === "Buttons" ? "Copied" : "Copy"}
          onCopy={(text) => setCopy(text ? "Buttons" : "")}
          buttonType="filled"
          size="regular"
          rounded={false}
          hasIcon={true}
          buttonChildren={`With Icon After <Icon name="favorite" size="sm" />`}
          rippleEffect='ripple="light"'
          ripple="light"
        >
          With Icon After
          <Icon name="favorite" size="sm" />
        </ButtonCode>

        <div className="h-20">&nbsp;</div>

        <SmallHeading title="With Icon Only" />

        <ButtonCode
          copyText={copy === "Buttons" ? "Copied" : "Copy"}
          onCopy={(text) => setCopy(text ? "Buttons" : "")}
          buttonType="filled"
          size="regular"
          rounded={true}
          hasIcon={true}
          buttonChildren={`<Icon name="favorite" size="sm" />`}
          iconOnly
          rippleEffect='ripple="light"'
          ripple="light"
        >
          <Icon name="favorite" size="sm" />
        </ButtonCode>
      </Container>
    </>
  );
}
