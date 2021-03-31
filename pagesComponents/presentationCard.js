import React from "react";
import Card from "components/Card/Card";
import CardImage from "components/Card/CardImage";
import CardBody from "components/Card/CardBody";
import CardFooter from "components/Card/CardFooter";
import H6 from "components/Typography/Heading6";
import Paragraph from "components/Typography/Paragraph";
import Button from "components/Button/Button";

export default function PresentationCard() {
  return (
    <Card>
      <CardImage
        src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80"
        alt="Card Image"
      />

      <CardBody>
        <H6 color="gray">Great for your awesome project</H6>
        <Paragraph color="gray">
          Putting together a page has never been easier than matching together
          pre-made components. From landing pages presentation to login areas,
          you can easily customise and built your pages.
        </Paragraph>
      </CardBody>
    </Card>
  );
}
