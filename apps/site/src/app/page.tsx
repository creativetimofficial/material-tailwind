"use client";
import { ComponentPreview } from "@components";
import { Button } from "../../../../packages/react/dist";
import {
  Component,
  ColorWheel,
  Heart,
  Keyframe,
  KeyframesCouple,
  ScaleFrameEnlarge,
  Circle,
  Square,
  Svg3DThreePtsBox,
} from "iconoir-react";

export default function Page() {
  return (
    // <div className="h-full rounded-xl bg-gray-950/5 p-3">
    //   <div className="relative h-full w-full rounded-lg border border-gray-100 bg-white p-4 shadow-2xl shadow-gray-950/20">
    //     <div className="mb-8 p-4">
    //       <h1 className="mb-4 text-2xl font-semibold text-gray-950">
    //         Tailwind CSS Button - React
    //       </h1>
    //       <p className="max-w-lg text-base leading-relaxed text-gray-600">
    //         Button is an essential element of web design. Basically, Button is
    //         styled links that grab the user's attention.
    //       </p>
    //     </div>
    //     <div className="mb-4 h-[calc(100%-68px)!] w-full rounded-md bg-red-500">
    //       Hello
    //     </div>
    //     <div className="flex w-full justify-center overflow-hidden rounded-md bg-white">
    //       <div className="flex w-full justify-between gap-2 overflow-scroll">
    //         <ToggleButton isActive icon={Component}>
    //           Default
    //         </ToggleButton>
    //         <ToggleButton icon={KeyframesCouple}>Variants</ToggleButton>
    //         <ToggleButton icon={ScaleFrameEnlarge}>Sizes</ToggleButton>
    //         <ToggleButton icon={ColorWheel}>Colors</ToggleButton>
    //         <ToggleButton icon={Heart}>With Icon</ToggleButton>
    //         <ToggleButton icon={Circle}>Rounded</ToggleButton>
    //         <ToggleButton icon={Square}>Block Level</ToggleButton>
    //         <ToggleButton icon={Svg3DThreePtsBox}>Custom Styles</ToggleButton>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div>
      <h1 className="mb-4 text-2xl font-semibold text-gray-950">
        Tailwind CSS Button - React
      </h1>
      <ComponentPreview>
        <Button>Button</Button>
      </ComponentPreview>
      <br />
      <ComponentPreview>
        <div className="flex items-end gap-2">
          <Button size="sm">Small</Button>
          <Button size="md">Medium</Button>
          <Button size="lg">Large</Button>
        </div>
      </ComponentPreview>
      <br />
      <ComponentPreview>
        <div className="flex items-end gap-2">
          <Button variant="ghost">Ghost</Button>
          <Button variant="solid">Solid</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="gradient">Gradient</Button>
        </div>
      </ComponentPreview>
      <br />
      <ComponentPreview>
        <div className="space-y-4">
          <div className="flex items-end gap-2">
            <Button variant="ghost" color="primary">
              Primary
            </Button>
            <Button variant="ghost" color="secondary">
              Secondary
            </Button>
            <Button variant="ghost" color="info">
              Info
            </Button>
            <Button variant="ghost" color="success">
              Success
            </Button>
            <Button variant="ghost" color="warning">
              Warning
            </Button>
            <Button variant="ghost" color="error">
              Error
            </Button>
          </div>
          <div className="flex items-end gap-2">
            <Button variant="solid" color="primary">
              Primary
            </Button>
            <Button variant="solid" color="secondary">
              Secondary
            </Button>
            <Button variant="solid" color="info">
              Info
            </Button>
            <Button variant="solid" color="success">
              Success
            </Button>
            <Button variant="solid" color="warning">
              Warning
            </Button>
            <Button variant="solid" color="error">
              Error
            </Button>
          </div>
          <div className="flex items-end gap-2">
            <Button variant="outline" color="primary">
              Primary
            </Button>
            <Button variant="outline" color="secondary">
              Secondary
            </Button>
            <Button variant="outline" color="info">
              Info
            </Button>
            <Button variant="outline" color="success">
              Success
            </Button>
            <Button variant="outline" color="warning">
              Warning
            </Button>
            <Button variant="outline" color="error">
              Error
            </Button>
          </div>
          <div className="flex items-end gap-2">
            <Button variant="gradient" color="primary">
              Primary
            </Button>
            <Button variant="gradient" color="secondary">
              Secondary
            </Button>
            <Button variant="gradient" color="info">
              Info
            </Button>
            <Button variant="gradient" color="success">
              Success
            </Button>
            <Button variant="gradient" color="warning">
              Warning
            </Button>
            <Button variant="gradient" color="error">
              Error
            </Button>
          </div>
        </div>
      </ComponentPreview>
      <br />
      <ComponentPreview>
        <div className="space-y-4">
          <div className="flex items-end gap-2">
            <Button rounded variant="ghost" color="primary">
              Primary
            </Button>
            <Button rounded variant="ghost" color="secondary">
              Secondary
            </Button>
            <Button rounded variant="ghost" color="info">
              Info
            </Button>
            <Button rounded variant="ghost" color="success">
              Success
            </Button>
            <Button rounded variant="ghost" color="warning">
              Warning
            </Button>
            <Button rounded variant="ghost" color="error">
              Error
            </Button>
          </div>
          <div className="flex items-end gap-2">
            <Button rounded variant="solid" color="primary">
              Primary
            </Button>
            <Button rounded variant="solid" color="secondary">
              Secondary
            </Button>
            <Button rounded variant="solid" color="info">
              Info
            </Button>
            <Button rounded variant="solid" color="success">
              Success
            </Button>
            <Button rounded variant="solid" color="warning">
              Warning
            </Button>
            <Button rounded variant="solid" color="error">
              Error
            </Button>
          </div>
          <div className="flex items-end gap-2">
            <Button rounded variant="outline" color="primary">
              Primary
            </Button>
            <Button rounded variant="outline" color="secondary">
              Secondary
            </Button>
            <Button rounded variant="outline" color="info">
              Info
            </Button>
            <Button rounded variant="outline" color="success">
              Success
            </Button>
            <Button rounded variant="outline" color="warning">
              Warning
            </Button>
            <Button rounded variant="outline" color="error">
              Error
            </Button>
          </div>
          <div className="flex items-end gap-2">
            <Button rounded variant="gradient" color="primary">
              Primary
            </Button>
            <Button rounded variant="gradient" color="secondary">
              Secondary
            </Button>
            <Button rounded variant="gradient" color="info">
              Info
            </Button>
            <Button rounded variant="gradient" color="success">
              Success
            </Button>
            <Button rounded variant="gradient" color="warning">
              Warning
            </Button>
            <Button rounded variant="gradient" color="error">
              Error
            </Button>
          </div>
        </div>
      </ComponentPreview>
      <br />
      <ComponentPreview>
        <div className="w-full space-y-4">
          <Button fullWidth variant="ghost">
            Full Width Ghost
          </Button>
          <Button fullWidth variant="solid">
            Full Width Solid
          </Button>
          <Button fullWidth variant="outline">
            Full Width Outline
          </Button>
          <Button fullWidth variant="gradient">
            Full Width Gradient
          </Button>
        </div>
      </ComponentPreview>
    </div>
  );
}
