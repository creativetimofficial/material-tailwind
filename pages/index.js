import React, { Component } from 'react';
import { Buttons } from 'components/Buttons/Buttons';
import Alerts from 'components/Alerts/Alerts';
import Image from 'components/Images/Image';
import Raised from 'components/Images/Raised';
import CircleImage from 'components/Images/CircleImage';
import CircleRaised from 'components/Images/CircleRaised';
import Inputs from 'components/Inputs/Inputs';
import InputsIcon from 'components/Inputs/InputsIcon';
import Label from 'components/Labels/LabelsSquare';
import LabelRound from 'components/Labels/LabelsRound';

export default class Index extends Component {
  render() {
    return (
      <div className="p-10">
        <div className="p-10 bg-gray-100 border border-gray-300 mb-10">
          <div className="mb-10 mx-96">
            <h2 className="mb-5 text-2xl font-bold">Button Colors</h2>

            <div className="flex gap-5 flex-wrap">
              <Buttons color="blueGray" />
              <Buttons color="gray" />
              <Buttons color="brown" />
              <Buttons color="deepOrange" />
              <Buttons color="orange" />
              <Buttons color="amber" />
              <Buttons color="yellow" />
              <Buttons color="lime" />
              <Buttons color="lightGreen" />
              <Buttons color="green" />
              <Buttons color="teal" />
              <Buttons color="cyan" />
              <Buttons color="lightBlue" />
              <Buttons color="blue" />
              <Buttons color="indigo" />
              <Buttons color="deepPurple" />
              <Buttons color="purple" />
              <Buttons color="pink" />
              <Buttons color="red" />
            </div>
          </div>

          <div className="mb-10 mx-96">
            <h2 className="mb-5 text-2xl font-bold">Button Styles</h2>

            <div className="flex gap-5">
              <Buttons color="blue" />
              <Buttons color="blue" type="outline" />
              <Buttons color="blue" rounded />
              <Buttons color="blue" type="link" />
            </div>
          </div>

          <div className="mb-10 mx-96">
            <h2 className="mb-5 text-2xl font-bold">Button Sizes</h2>

            <div className="flex gap-5">
              <Buttons color="blue" size="sm" />
              <Buttons color="blue" />
              <Buttons color="blue" size="lg" />
            </div>
          </div>

          <div className="mb-10 mx-96">
            <h2 className="mb-5 text-2xl font-bold">Button With Icons</h2>

            <div className="flex gap-5">
              <button className="font-medium outline-none uppercase tracking-wide leading shadow py-2 px-4 text-sm bg-blue-500 text-white rounded hover:shadow-lg">
                <span className="material-icons text-base align-middle mr-2">
                  favorite
                </span>
                Default
              </button>

              <button className="font-medium outline-none uppercase tracking-wide leading shadow py-2 px-4 text-sm bg-blue-500 text-white rounded hover:shadow-lg">
                Default
                <span className="material-icons text-base align-middle ml-2">
                  favorite
                </span>
              </button>
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

        <div className="p-10 bg-gray-100 border border-gray-300 mb-10">
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

        <div className="p-10 bg-gray-100 border border-gray-300 mb-10">
          <div className="mb-10 mx-96">
            <h2 className="mb-5 text-2xl font-bold">Input Types</h2>

            <div className="flex gap-10">
              <Inputs color="purple" />
              <Inputs color="purple" type="outline" />
            </div>
          </div>

          <div className="mb-10 mx-96">
            <h2 className="mb-5 text-2xl font-bold">Input Sizes</h2>

            <div className="flex gap-10 mb-5">
              <Inputs color="gray" size="sm" />
              <Inputs color="gray" />
              <Inputs color="gray" size="lg" />
            </div>

            <div className="flex gap-10">
              <Inputs color="gray" size="sm" type="outline" />
              <Inputs color="gray" type="outline" />
              <Inputs color="gray" size="lg" type="outline" />
            </div>
          </div>

          <div className="mb-10 mx-96">
            <h2 className="mb-5 text-2xl font-bold">Input With Icon</h2>

            <div className="flex gap-10">
              <InputsIcon color="gray" iconPosition="left" />
              <InputsIcon color="gray" type="outline" iconPosition="right" />
            </div>
          </div>
        </div>

        <div className="p-10 bg-gray-100 border border-gray-300 mb-10">
          <div className="mb-10 mx-96">
            <h2 className="mb-5 text-2xl font-bold">Labels Squared</h2>

            <div className="flex gap-3 flex-wrap">
              <Label color="blueGray" />
              <Label color="gray" />
              <Label color="brown" />
              <Label color="deepOrange" />
              <Label color="orange" />
              <Label color="amber" />
              <Label color="yellow" />
              <Label color="lime" />
              <Label color="lightGreen" />
              <Label color="green" />
              <Label color="teal" />
              <Label color="cyan" />
              <Label color="lightBlue" />
              <Label color="blue" />
              <Label color="indigo" />
              <Label color="deepPurple" />
              <Label color="purple" />
              <Label color="pink" />
              <Label color="red" />
            </div>
          </div>

          <div className="mb-10 mx-96">
            <h2 className="mb-5 text-2xl font-bold">Labels Squared</h2>

            <div className="flex gap-3 flex-wrap">
              <LabelRound color="blueGray" />
              <LabelRound color="gray" />
              <LabelRound color="brown" />
              <LabelRound color="deepOrange" />
              <LabelRound color="orange" />
              <LabelRound color="amber" />
              <LabelRound color="yellow" />
              <LabelRound color="lime" />
              <LabelRound color="lightGreen" />
              <LabelRound color="green" />
              <LabelRound color="teal" />
              <LabelRound color="cyan" />
              <LabelRound color="lightBlue" />
              <LabelRound color="blue" />
              <LabelRound color="indigo" />
              <LabelRound color="deepPurple" />
              <LabelRound color="purple" />
              <LabelRound color="pink" />
              <LabelRound color="red" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
