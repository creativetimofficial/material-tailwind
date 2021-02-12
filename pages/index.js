import React, { Component } from 'react';
import { Buttons } from 'components/Buttons/Buttons.js';

export default class Index extends Component {
  render() {
    return (
      <div className="p-10">
        <div className="mb-10">
          <h2 className="mb-5 text-2xl font-bold">Button Colors</h2>

          <div className="flex gap-2">
            <Buttons color="blueGray-500" />
            <Buttons color="gray-500" />
            <Buttons color="brown-500" />
            <Buttons color="deepOrange-500" />
            <Buttons color="orange-500" />
            <Buttons color="amber-500" />
            <Buttons color="yellow-500" />
            <Buttons color="lime-500" />
            <Buttons color="lightGreen-500" />
            <Buttons color="green-500" />
            <Buttons color="teal-500" />
            <Buttons color="cyan-500" />
            <Buttons color="lightBlue-500" />
            <Buttons color="blue-500" />
            <Buttons color="indigo-500" />
            <Buttons color="deepPurple-500" />
            <Buttons color="purple-500" />
            <Buttons color="pink-500" />
            <Buttons color="red-500" />
          </div>
        </div>

        <div className="mb-10">
          <h2 className="mb-5 text-2xl font-bold">Button Styles</h2>

          <div className="flex gap-2">
            <Buttons color="teal-500" />
            <Buttons color="teal-500" type="outline" />
            <Buttons color="teal-500" rounded />
            <Buttons color="teal-500" type="link" />
          </div>
        </div>

        <div className="mb-10">
          <h2 className="mb-5 text-2xl font-bold">Button Sizes</h2>

          <div className="flex gap-2">
            <Buttons color="teal-500" size="sm" />
            <Buttons color="teal-500" />
            <Buttons color="teal-500" size="lg" />
          </div>
        </div>
      </div>
    );
  }
}
