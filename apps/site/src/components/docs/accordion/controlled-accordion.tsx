import * as React from "react";
import { Accordion, Button } from "@material-tailwind/react";
import { NavArrowDown } from "iconoir-react";

export function ControlledAccordion() {
  const [open, setOpen] = React.useState("html");

  return (
    <div>
      <div className="mb-4 flex gap-2">
        <Button
          isFullWidth
          variant={open === "react" ? "solid" : "outline"}
          onClick={() => setOpen("react")}
        >
          React Version
        </Button>
        <Button
          isFullWidth
          variant={open === "html" ? "solid" : "outline"}
          onClick={() => setOpen("html")}
        >
          HTML Version
        </Button>
        <Button
          isFullWidth
          variant={open === "vue" ? "solid" : "outline"}
          onClick={() => setOpen("vue")}
        >
          Vue Version
        </Button>
      </div>
      <Accordion value={open} onValueChange={setOpen}>
        <Accordion.Item value="react">
          <Accordion.Trigger>
            Material Tailwind React
            <NavArrowDown className="h-4 w-4 group-data-[open=true]:rotate-180" />
          </Accordion.Trigger>
          <Accordion.Content>
            Material Tailwind is an open-source crafted in Tailwind CSS. Get
            Material Tailwind and take advantage of its free components and
            features that will help you set up your web project quickly.
          </Accordion.Content>
        </Accordion.Item>
        <Accordion.Item value="html">
          <Accordion.Trigger>
            Material Tailwind HTML
            <NavArrowDown className="h-4 w-4 group-data-[open=true]:rotate-180" />
          </Accordion.Trigger>
          <Accordion.Content>
            Material Tailwind is an open-source crafted in Tailwind CSS. Get
            Material Tailwind and take advantage of its free components and
            features that will help you set up your web project quickly.
          </Accordion.Content>
        </Accordion.Item>
        <Accordion.Item value="vue">
          <Accordion.Trigger>
            Material Tailwind Vue
            <NavArrowDown className="h-4 w-4 group-data-[open=true]:rotate-180" />
          </Accordion.Trigger>
          <Accordion.Content>
            Material Tailwind is an open-source crafted in Tailwind CSS. Get
            Material Tailwind and take advantage of its free components and
            features that will help you set up your web project quickly.
          </Accordion.Content>
        </Accordion.Item>
      </Accordion>
    </div>
  );
}
