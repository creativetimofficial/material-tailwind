import React from 'react';
import Card from 'components/Card/Card';
import CardImage from 'components/Card/CardImage';
import CardBody from 'components/Card/CardBody';
import CardFooter from 'components/Card/CardFooter';
import H6 from 'components/Typography/Heading6';
import Paragraph from 'components/Typography/Paragraph';
import Button from 'components/Button/Button';

export default function RegularCard() {
  return (
    <Card>
      <CardImage
        src="https://images.unsplash.com/photo-1612831455740-a2f6212eeeb2?ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=2250&amp;q=80"
        alt="Card Image"
      />

      <CardBody>
        <H6 color="gray">Card Title</H6>
        <Paragraph color="gray">
          Don't be scared of the truth because we need to restart the human
          foundation in truth And I love you like Kanye loves Kanye I love Rick
          Owens’ bed design but the back is...
        </Paragraph>
      </CardBody>

      <CardFooter>
        <Button color="lightBlue" size="lg" ripple="light">
          Read More
        </Button>
      </CardFooter>
    </Card>
  );
}
