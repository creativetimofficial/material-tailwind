"use client";

import { Select } from "@material-tailwind/react/dist";
import React from "react";

export default function SelectDemo() {
  const [val, setVal] = React.useState("html");

  function onSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);

    console.log(formData.get("version"));
  }

  const list = [
    { value: "react", label: "Material Tailwind React" },
    { value: "html", label: "Material Tailwind HTML" },
    { value: "vue", label: "Material Tailwind Vue" },
    { value: "svelte", label: "Material Tailwind Svelte" },
  ];

  return (
    <form onSubmit={onSubmit} className="p-24">
      <Select name="version" value={val} onChange={(value) => setVal(value)}>
        <Select.Trigger className="w-72" placeholder="Select Version" />
        <Select.List>
          {list.map((item) => (
            <Select.Option key={item.value} value={item.value}>
              {item.label}
            </Select.Option>
          ))}
        </Select.List>
      </Select>
      <p>Value: {val}</p>
      <button type="submit">Submit</button>
    </form>
  );
}
