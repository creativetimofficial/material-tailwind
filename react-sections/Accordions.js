import { useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody
} from "components/Accordion";

export default function Accordions() {
  const [open, setOpen] = useState(0);

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };
  return (
    <div className="mb-24">
      <h2 className="text-2xl font-semibold mb-4">Accordion</h2>
      <div>
        <Accordion open={open === 1} onClick={() => handleOpen(1)}>
          <AccordionHeader>How do I order?</AccordionHeader>
          <AccordionBody>
            We&apos;re not always in the position that we want to be at.
            We&apos;re constantly growing. We&apos;re constantly making
            mistakes. We&apos;re constantly trying to express ourselves and
            actualize our dreams. If you have the opportunity to play this game
            of life you need to appreciate every moment. A lot of people
            don&apos;t appreciate the moment until it&apos;s passed.
          </AccordionBody>
        </Accordion>
        <Accordion open={open === 2} onClick={() => handleOpen(2)}>
          <AccordionHeader>How can i make the payment?</AccordionHeader>
          <AccordionBody>
            It really matters and then like it really doesn&apos;t matter. What
            matters is the people who are sparked by it. And the people who are
            like offended by it, it doesn&apos;t matter. Because it&apos;s about
            motivating the doers. Because I&apos;m here to follow my dreams and
            inspire other people to follow their dreams, too.
            <br /> We&apos;re not always in the position that we want to be at.
            We&apos;re constantly growing. We&apos;re constantly making
            mistakes. We&apos;re constantly trying to express ourselves and
            actualize our dreams. If you have the opportunity to play this game
            of life you need to appreciate every moment. A lot of people
            don&apos;t appreciate the moment until it&apos;s passed.
          </AccordionBody>
        </Accordion>
        <Accordion open={open === 3} onClick={() => handleOpen(3)}>
          <AccordionHeader>
            How much time does it take to receive the order?
          </AccordionHeader>
          <AccordionBody>
            The time is now for it to be okay to be great. People in this world
            shun people for being great. For being a bright color. For standing
            out. But the time is now to be okay to be the greatest you. Would
            you believe in what you believe in, if you were the only one who
            believed it? If everything I did failed - which it doesn&apos;t, it
            actually succeeds - just the fact that I&apos;m willing to fail is
            an inspiration. People are so scared to lose that they don&apos;t
            even try. Like, one thing people can&apos;t say is that I&apos;m not
            trying, and I&apos;m not trying my hardest, and I&apos;m not trying
            to do the best way I know how.
          </AccordionBody>
        </Accordion>
        <Accordion open={open === 4} onClick={() => handleOpen(4)}>
          <AccordionHeader>Can I resell the products?</AccordionHeader>
          <AccordionBody>
            I always felt like I could do anything. That&apos;s the main thing
            people are controlled by! Thoughts- their perception of themselves!
            They&apos;re slowed down by their perception of themselves. If
            you&apos;re taught you can&apos;t do anything, you won&apos;t do
            anything. I was taught I could do everything.
            <br />
            <br /> If everything I did failed - which it doesn&apos;t, it
            actually succeeds - just the fact that I&apos;m willing to fail is
            an inspiration. People are so scared to lose that they don&apos;t
            even try. Like, one thing people can&apos;t say is that I&apos;m not
            trying, and I&apos;m not trying my hardest, and I&apos;m not trying
            to do the best way I know how.
          </AccordionBody>
        </Accordion>
        <Accordion open={open === 5} onClick={() => handleOpen(5)} disabled>
          <AccordionHeader>
            Where do I find the shipping details?
          </AccordionHeader>
          <AccordionBody>
            There’s nothing I really wanted to do in life that I wasn&apos;t
            able to get good at. That&apos;s my skill. I&apos;m not really
            specifically talented at anything except for the ability to learn.
            That&apos;s what I do. That&apos;s what I&apos;m here for.
            Don&apos;t be afraid to be wrong because you can&apos;t learn
            anything from a compliment. I always felt like I could do anything.
            That&apos;s the main thing people are controlled by! Thoughts- their
            perception of themselves! They&apos;re slowed down by their
            perception of themselves. If you&apos;re taught you can&apos;t do
            anything, you won&apos;t do anything. I was taught I could do
            everything.
          </AccordionBody>
        </Accordion>
      </div>
    </div>
  );
}
