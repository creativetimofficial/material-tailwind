"use client";

import { Select } from "@material-tailwind/react";

export default function InputNumberDemo() {
  return (
    <Select value={1}>
      <Select.Trigger className="w-72 bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 hover:shadow-none shadow-none focus:shadow-none cursor-pointer appearance-none" />

      <Select.List>
        <Select.Option value={1}>1</Select.Option>
        <Select.Option value={2}>2</Select.Option>
        <Select.Option value={3}>3</Select.Option>
        <Select.Option value={4}>4</Select.Option>
      </Select.List>
    </Select>
  );
}
