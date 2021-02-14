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

        <div className="p-10 bg-gray-100 border border-gray-300 mb-10">
          <div className="mb-10 mx-96">
            <h2 className="mb-5 text-2xl font-bold">Menus</h2>

            <nav className="relative flex flex-wrap items-center justify-between py-2.5 px-3 navbar-expand-lg bg-pink-500 rounded shadow-xl mb-10">
              <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
                <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
                  <a
                    className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-no-wrap uppercase text-white"
                    href="#pablo"
                  >
                    Menu
                  </a>
                  <button
                    className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                    type="button"
                  >
                    <span className="block relative w-6 h-px rounded-sm bg-white"></span>
                    <span className="block relative w-6 h-px rounded-sm bg-white mt-1"></span>
                    <span className="block relative w-6 h-px rounded-sm bg-white mt-1"></span>
                  </button>
                </div>
                <div
                  className="flex lg:flex-grow items-center"
                  id="example-navbar-info"
                >
                  <ul className="flex flex-col lg:flex-row list-none ml-auto">
                    <li className="nav-item">
                      <a
                        className="p-4 flex items-center text-xs uppercase font-medium leading bg-white bg-opacity-10 text-white rounded"
                        href="#pablo"
                      >
                        Discover
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="p-4 flex items-center text-xs uppercase font-bold leading-snug text-white"
                        href="#pablo"
                      >
                        Profile
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="p-4 flex items-center text-xs uppercase font-bold leading-snug text-white"
                        href="#pablo"
                      >
                        Settings
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>

            <nav className="relative flex flex-wrap items-center justify-between py-2.5 px-3 navbar-expand bg-purple-500 rounded shadow-xl">
              <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
                <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
                  <a
                    className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-no-wrap uppercase text-white"
                    href="#pablo"
                  >
                    Menu With Icons
                  </a>
                  <button
                    className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                    type="button"
                  >
                    <span className="block relative w-6 h-px rounded-sm bg-white"></span>
                    <span className="block relative w-6 h-px rounded-sm bg-white mt-1"></span>
                    <span className="block relative w-6 h-px rounded-sm bg-white mt-1"></span>
                  </button>
                </div>
                <div
                  className="flex lg:flex-grow items-center"
                  id="example-navbar-success"
                >
                  <ul className="flex flex-col lg:flex-row list-none ml-auto">
                    <li className="nav-item">
                      <a
                        className="py-3.5 px-4 flex items-center text-xs uppercase bg-white bg-opacity-10 text-white rounded"
                        href="#pablo"
                      >
                        <span className="material-icons text-xl leading-lg text-white">
                          language
                        </span>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="py-3.5 px-4 flex items-center text-xs uppercase text-white"
                        href="#pablo"
                      >
                        <span className="material-icons text-xl leading-lg text-white">
                          person
                        </span>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="py-3.5 px-4 flex items-center text-xs uppercase text-white"
                        href="#pablo"
                      >
                        <span className="material-icons text-xl leading-lg text-white">
                          settings
                        </span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    );
  }
}
