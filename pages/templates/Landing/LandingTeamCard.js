import React from "react";
import Image from "components/Image/Image";
import H6 from "components/Typography/Heading6";
import Paragraph from "components/Typography/Paragraph";
import Button from "components/Button/Button";
import Icon from "components/Icon/Icon";

export default function LandingTeamCard({ img, name, position }) {
  return (
    <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
      <div className="px-6">
        <Image src={img} alt={name} raised />
        <div className="pt-6 text-center">
          <H6 color="gray">{name}</H6>
          <Paragraph color="blueGray">{position}</Paragraph>
          <div className="flex items-center justify-center">
            <Button
              color="lightBlue"
              buttonType="link"
              ripple="dark"
              rounded="full"
              iconOnly
            >
              <Icon family="font-awesome" name="fab fa-twitter" size="lg" />
            </Button>
            <Button
              color="blue"
              buttonType="link"
              ripple="dark"
              rounded="full"
              iconOnly
            >
              <Icon family="font-awesome" name="fab fa-facebook-f" size="lg" />
            </Button>
            <Button
              color="pink"
              buttonType="link"
              ripple="dark"
              rounded="full"
              iconOnly
            >
              <Icon family="font-awesome" name="fab fa-dribbble" size="lg" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
