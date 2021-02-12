import React, { Component } from 'react';
import { Buttons } from 'components/Buttons/Buttons';
import Alerts from 'components/Alerts/Alerts';
import Image from 'components/Images/Image';
import Raised from 'components/Images/Raised';
import CircleImage from 'components/Images/CircleImage';
import CircleRaised from 'components/Images/CircleRaised';

export default class Index extends Component {
  render() {
    return (
      <div className="p-10">
        <div className="p-10 bg-gray-100 border border-gray-300 mb-10">
          <div className="mb-10 mx-96">
            <h2 className="mb-5 text-2xl font-bold">Button Colors</h2>

            <div className="flex gap-5 flex-wrap">
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

          <div className="mb-10 mx-96">
            <h2 className="mb-5 text-2xl font-bold">Button Styles</h2>

            <div className="flex gap-5">
              <Buttons color="teal-500" />
              <Buttons color="teal-500" type="outline" />
              <Buttons color="teal-500" rounded />
              <Buttons color="teal-500" type="link" />
            </div>
          </div>

          <div className="mb-10 mx-96">
            <h2 className="mb-5 text-2xl font-bold">Button Sizes</h2>

            <div className="flex gap-5">
              <Buttons color="teal-500" size="sm" />
              <Buttons color="teal-500" />
              <Buttons color="teal-500" size="lg" />
            </div>
          </div>
        </div>

        <div className="p-10 bg-gray-100 border border-gray-300 mb-10">
          <div className="mb-10 mx-96">
            <h2 className="mb-5 text-2xl font-bold">Alerts</h2>
            <Alerts color="blueGray-500" text="Alert Check it out." />
            <Alerts color="gray-500" text="Alert Check it out." />
            <Alerts color="brown-500" text="Alert Check it out." />
            <Alerts color="deepOrange-500" text="Alert Check it out." />
            <Alerts color="orange-500" text="Alert Check it out." />
            <Alerts color="amber-500" text="Alert Check it out." />
            <Alerts color="yellow-500" text="Alert Check it out." />
            <Alerts color="lime-500" text="Alert Check it out." />
            <Alerts color="lightGreen-500" text="Alert Check it out." />
            <Alerts color="green-500" text="Alert Check it out." />
            <Alerts color="cyan-500" text="Alert Check it out." />
            <Alerts color="lightBlue-500" text="Alert Check it out." />
            <Alerts color="blue-500" text="Alert Check it out." />
            <Alerts color="indigo-500" text="Alert Check it out." />
            <Alerts color="deepPurple-500" text="Alert Check it out." />
            <Alerts color="purple-500" text="Alert Check it out." />
            <Alerts color="pink-500" text="Alert Check it out." />
            <Alerts color="red-500" text="Alert Check it out." />
          </div>
        </div>

        <div className="p-10 bg-gray-100 border border-gray-300">
          <div className="mb-10 mx-96">
            <h2 className="mb-5 text-2xl font-bold">Images</h2>

            <div className="flex justify-between gap-5">
              <div className="w-48">
                <Image />
              </div>

              <div className="w-48">
                <CircleImage />
              </div>

              <div className="w-48">
                <Raised />
              </div>

              <div className="w-48">
                <CircleRaised />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
