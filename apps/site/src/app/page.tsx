"use client";

import React, { useState } from "react";
import { Timeline } from "@material-tailwind/react/dist";
import { UserCircle } from "iconoir-react";

const RangeSlider = () => {
  const [value, setValue] = useState(2);
  console.log(value);
  return (
    <>
      <Timeline
        color="error"
        value={value}
        onChange={(val) => setValue(Number(val))}
        mode="stepper"
      >
        <Timeline.Item disabled={value < 0} value={0}>
          <Timeline.Header>
            <Timeline.Separator />
            <Timeline.Icon>
              <UserCircle className="h-6 w-6" />
            </Timeline.Icon>
          </Timeline.Header>
          <Timeline.Body>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate
            non laudantium accusamus, numquam quibusdam magni odit quo facere
            quae consequuntur minima nesciunt sequi vel aut ratione fuga, eos
            sunt cupiditate.
          </Timeline.Body>
        </Timeline.Item>
        <Timeline.Item disabled={value < 1} value={1}>
          <Timeline.Header>
            <Timeline.Separator />
            <Timeline.Icon>
              <UserCircle className="h-6 w-6" />
            </Timeline.Icon>
          </Timeline.Header>
          <Timeline.Body>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate
            non laudantium accusamus, numquam quibusdam magni odit quo facere
            quae consequuntur minima nesciunt sequi vel aut ratione fuga, eos
            sunt cupiditate.
          </Timeline.Body>
        </Timeline.Item>
        <Timeline.Item disabled={value < 2} value={2}>
          <Timeline.Header>
            {/* <Timeline.Separator /> */}
            <Timeline.Icon>
              <UserCircle className="h-6 w-6" />
            </Timeline.Icon>
          </Timeline.Header>
          <Timeline.Body>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate
            non laudantium accusamus, numquam quibusdam magni odit quo facere
            quae consequuntur minima nesciunt sequi vel aut ratione fuga, eos
            sunt cupiditate.
          </Timeline.Body>
        </Timeline.Item>
      </Timeline>

      <button onClick={() => setValue((cur) => cur - 1)}>Prev</button>
      <button onClick={() => setValue((cur) => cur + 1)}>Next</button>
    </>
  );
};

export default RangeSlider;
