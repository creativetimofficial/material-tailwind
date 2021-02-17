import React, { Component } from 'react';
import Buttons from 'components/Buttons/Buttons';
import Alerts from 'components/Alerts/Alerts';

import Image from 'components/Images/Image';
import Raised from 'components/Images/Raised';
import CircleImage from 'components/Images/CircleImage';
import CircleRaised from 'components/Images/CircleRaised';
import Inputs from 'components/Inputs/Inputs';
import InputsIcon from 'components/Inputs/InputsIcon';
import Label from 'components/Labels/LabelsSquare';
import LabelRound from 'components/Labels/LabelsRound';
import Tabs from 'components/Tabs/TabsText';
import DropdownAndDropup from 'components/Dropdowns/DropdownAndDropup';
import RegularModal from 'components/Modals/RegularModal';
import SmallModal from 'components/Modals/SmallModal';
import LargeModal from 'components/Modals/LargeModal';
import Popovers from 'components/Popovers/Popovers';
import Icons from 'components/Icons/Icons';

export default class Index extends Component {
  render() {
    return (
      <div className="p-10">
        <div className="p-10 bg-gray-100 border border-gray-300 mb-10">
          <div className="mb-10 mx-96">
            <h2 className="mb-5 text-2xl font-bold">Button Colors</h2>

            <div className="flex gap-5 flex-wrap">
              <Buttons color="blue-gray">Button</Buttons>
              <Buttons color="gray">Button</Buttons>
              <Buttons color="brown">Button</Buttons>
              <Buttons color="deep-orange">Button</Buttons>
              <Buttons color="orange">Button</Buttons>
              <Buttons color="amber">Button</Buttons>
              <Buttons color="yellow">Button</Buttons>
              <Buttons color="lime">Button</Buttons>
              <Buttons color="light-green">Button</Buttons>
              <Buttons color="green">Button</Buttons>
              <Buttons color="teal">Button</Buttons>
              <Buttons color="cyan">Button</Buttons>
              <Buttons color="light-blue">Button</Buttons>
              <Buttons color="blue">Button</Buttons>
              <Buttons color="indigo">Button</Buttons>
              <Buttons color="deep-purple">Button</Buttons>
              <Buttons color="purple">Button</Buttons>
              <Buttons color="pink">Button</Buttons>
              <Buttons color="red">Button</Buttons>
            </div>
          </div>

          <div className="mb-10 mx-96">
            <h2 className="mb-5 text-2xl font-bold">Button Styles</h2>

            <div className="flex gap-5">
              <Buttons color="pink">Button</Buttons>
              <Buttons color="pink" type="outline">
                Button
              </Buttons>
              <Buttons color="pink" rounded>
                Button
              </Buttons>
              <Buttons color="pink" type="link">
                Button
              </Buttons>
            </div>
          </div>

          <div className="mb-10 mx-96">
            <h2 className="mb-5 text-2xl font-bold">Button Sizes</h2>

            <div className="flex gap-5">
              <Buttons color="pink" size="sm">
                Button
              </Buttons>
              <Buttons color="pink">Button</Buttons>
              <Buttons color="pink" size="lg">
                Button
              </Buttons>
            </div>
          </div>

          <div className="mb-10 mx-96">
            <h2 className="mb-5 text-2xl font-bold">Button With Icons</h2>

            <div className="flex gap-5">
              <Buttons color="pink">
                <Icons name="favorite" color="white" />
                Button
              </Buttons>
              <Buttons color="pink">
                Button
                <Icons name="favorite" color="white" />
              </Buttons>
            </div>
          </div>
        </div>

        <div className="p-10 bg-gray-100 border border-gray-300 mb-10">
          <div className="mb-10 mx-96">
            <h2 className="mb-5 text-2xl font-bold">Alerts</h2>
            <Alerts color="blue-gray-500">MD Tailwind Alerts</Alerts>
            <Alerts color="gray-500">MD Tailwind Alerts</Alerts>
            <Alerts color="brown-500">MD Tailwind Alerts</Alerts>
            <Alerts color="deep-orange-500">MD Tailwind Alerts</Alerts>
            <Alerts color="orange-500">MD Tailwind Alerts</Alerts>
            <Alerts color="amber-500">MD Tailwind Alerts</Alerts>
            <Alerts color="yellow-500">MD Tailwind Alerts</Alerts>
            <Alerts color="lime-500">MD Tailwind Alerts</Alerts>
            <Alerts color="light-green-500">MD Tailwind Alerts</Alerts>
            <Alerts color="green-500">MD Tailwind Alerts</Alerts>
            <Alerts color="cyan-500">MD Tailwind Alerts</Alerts>
            <Alerts color="light-blue-500">MD Tailwind Alerts</Alerts>
            <Alerts color="blue-500">MD Tailwind Alerts</Alerts>
            <Alerts color="indigo-500">MD Tailwind Alerts</Alerts>
            <Alerts color="deep-purple-500">MD Tailwind Alerts</Alerts>
            <Alerts color="purple-500">MD Tailwind Alerts</Alerts>
            <Alerts color="pink-500">MD Tailwind Alerts</Alerts>
            <Alerts color="red-500">MD Tailwind Alerts</Alerts>
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
              <Inputs color="purple" size="sm" />
              <Inputs color="purple" />
              <Inputs color="purple" size="lg" />
            </div>

            <div className="flex gap-10">
              <Inputs color="purple" size="sm" type="outline" />
              <Inputs color="purple" type="outline" />
              <Inputs color="purple" size="lg" type="outline" />
            </div>
          </div>

          <div className="mb-10 mx-96">
            <h2 className="mb-5 text-2xl font-bold">Input With Icon</h2>

            <div className="flex gap-10">
              <InputsIcon color="purple" iconPosition="left" />
              <InputsIcon color="purple" type="outline" iconPosition="right" />
            </div>
          </div>

          <div className="mb-10 mx-96">
            <h2 className="mb-5 text-2xl font-bold">Input Errors</h2>

            <div className="flex gap-10">
              <Inputs color="purple" error />
              <Inputs color="purple" type="outline" error />
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
                        className="p-4 flex items-center text-xs uppercase font-bold leading text-white"
                        href="#pablo"
                      >
                        Profile
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="p-4 flex items-center text-xs uppercase font-bold leading text-white"
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

        <div className="p-10 bg-gray-100 border border-gray-300 mb-10">
          <div className="mb-10 mx-96">
            <h2 className="mb-5 text-2xl font-bold">Navbar</h2>

            <nav className="relative flex flex-wrap items-center justify-between py-2.5 px-3 navbar-expand-lg bg-blue-500 mb-3">
              <div className="container mx-auto">
                <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
                  <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
                    <a
                      className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-no-wrap uppercase text-white"
                      href="#pablo"
                    >
                      Navbar
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
                    className="block lg:flex flex-grow items-center"
                    id="example-navbar-danger"
                  >
                    <ul className="flex flex-col lg:flex-row list-none mr-auto">
                      <li className="nav-item">
                        <a
                          className="p-4 flex items-center text-xs uppercase font-medium leading bg-white bg-opacity-10 text-white rounded"
                          href="#pablo"
                        >
                          <span className="material-icons text-xl leading-lg text-white w-6">
                            languages
                          </span>
                          Discover
                        </a>
                      </li>

                      <li className="nav-item">
                        <a
                          className="p-4 flex items-center text-xs uppercase font-medium leading text-white"
                          href="#pablo"
                        >
                          <span className="material-icons text-xl leading-lg text-white w-6">
                            account_circle
                          </span>
                          Profile
                        </a>
                      </li>

                      <li className="nav-item">
                        <a
                          className="p-4 flex items-center text-xs uppercase font-medium leading text-white"
                          href="#pablo"
                        >
                          <span className="material-icons text-xl leading-lg text-white w-6">
                            settings
                          </span>
                          Settings
                        </a>
                      </li>
                    </ul>
                    <div className="relative w-60 flex items-center md:ml-auto bg-white bg-opacity-10 py-1 px-3 rounded">
                      <span className="material-icons text-white text-xl">
                        search
                      </span>
                      <input
                        type="text"
                        className="bg-transparent border-none text-sm leading-snug text-white w-full font-normal placeholder-white placeholder-opacity-50 focus:ring-0"
                        placeholder="Search"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </nav>
          </div>
        </div>

        <div className="p-10 bg-gray-100 border border-gray-300 mb-10">
          <div className="mb-10 mx-96">
            <h2 className="mb-5 text-2xl font-bold">Tabs</h2>
            <Tabs color="pink" />
          </div>
        </div>

        <div className="p-10 bg-gray-100 border border-gray-300 mb-10">
          <div className="mb-10 mx-96">
            <h2 className="mb-5 text-2xl font-bold">Dropdowns</h2>
            <DropdownAndDropup color="purple" />
          </div>
        </div>

        <div className="p-10 bg-gray-100 border border-gray-300 mb-10">
          <div className="mb-10 mx-96">
            <h2 className="mb-5 text-2xl font-bold">Modals</h2>
            <SmallModal />
            <RegularModal />
            <LargeModal />
          </div>
        </div>

        <div className="p-10 bg-gray-100 border border-gray-300 mb-10">
          <div className="mb-10 mx-96">
            <h2 className="mb-5 text-2xl font-bold">Popovers</h2>
            <Popovers color="purple" />
          </div>
        </div>
      </div>
    );
  }
}
