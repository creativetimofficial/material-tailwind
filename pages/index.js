import React, { Component } from 'react';
import Buttons from 'components/Buttons/Buttons';
import Alerts from 'components/Alerts/ClosingAlerts';
import Image from 'components/Image/Image';
import Input from 'components/Input/Input';
import InputIcon from 'components/Input/InputIcon';
import Labels from 'components/Labels/ClosingLabels';
import Menu from 'components/Menus/Menu.js';
import MenuIcon from 'components/Menus/MenuIcon.js';
import MenuText from 'components/Menus/MenuText.js';
import NavbarExample from 'components/Navbar/NavbarExample';
import NavbarIconWithTextExample from 'components/Navbar/NavbarIconWithTextExample';
import NavbarIconExample from 'components/Navbar/NavbarIconExample';
import NavbarTextExample from 'components/Navbar/NavbarTextExample';
import TabTextExample from 'components/Tabs/TabTextExample';
import TabExample from 'components/Tabs/TabExample';
import Dropdowns from 'components/Dropdowns/Dropdowns';
import DropdownItems from 'components/Dropdowns/DropdownItems';
import RegularModal from 'components/Modals/RegularModal';
import SmallModal from 'components/Modals/SmallModal';
import LargeModal from 'components/Modals/LargeModal';
import PopoverExample from 'components/Popovers/PopoverExample';
import TooltipExample from 'components/Tooltips/TooltipExample';
import PaginationExample from 'components/Pagination/PaginationExample';
import PaginationFirstLastExample from 'components/Pagination/PaginationFirstLastExample';
import Progress from 'components/Progress/Progress';
import Icon from 'components/Icon/Icon';
import 'ripple/ripple';

export default class Index extends Component {
  render() {
    return (
      <div className="p-10">
        <div className="p-10 bg-gray-100 border border-gray-300 mb-10">
          <div className="mb-10">
            <h2 className="mb-5 text-2xl font-bold">Button Colors</h2>

            <div className="flex gap-5 flex-wrap">
              <Buttons color="blueGray" data-md-ripple-light={true}>
                Button
              </Buttons>
              <Buttons color="gray" data-md-ripple-light={true}>
                Button
              </Buttons>
              <Buttons color="brown" data-md-ripple-light={true}>
                Button
              </Buttons>
              <Buttons color="deepOrange" data-md-ripple-light={true}>
                Button
              </Buttons>
              <Buttons color="orange" data-md-ripple-light={true}>
                Button
              </Buttons>
              <Buttons color="amber" data-md-ripple-light={true}>
                Button
              </Buttons>
              <Buttons color="yellow" data-md-ripple-light={true}>
                Button
              </Buttons>
              <Buttons color="lime" data-md-ripple-light={true}>
                Button
              </Buttons>
              <Buttons color="lightGreen" data-md-ripple-light={true}>
                Button
              </Buttons>
              <Buttons color="green" data-md-ripple-light={true}>
                Button
              </Buttons>
              <Buttons color="teal" data-md-ripple-light={true}>
                Button
              </Buttons>
              <Buttons color="cyan" data-md-ripple-light={true}>
                Button
              </Buttons>
              <Buttons color="lightBlue" data-md-ripple-light={true}>
                Button
              </Buttons>
              <Buttons color="blue" data-md-ripple-light={true}>
                Button
              </Buttons>
              <Buttons color="indigo" data-md-ripple-light={true}>
                Button
              </Buttons>
              <Buttons color="deepPurple" data-md-ripple-light={true}>
                Button
              </Buttons>
              <Buttons color="purple" data-md-ripple-light={true}>
                Button
              </Buttons>
              <Buttons color="pink" data-md-ripple-light={true}>
                Button
              </Buttons>
              <Buttons color="red" data-md-ripple-light={true}>
                Button
              </Buttons>
            </div>
          </div>

          <div className="mb-10">
            <h2 className="mb-5 text-2xl font-bold">Button Styles</h2>

            <div className="flex gap-5">
              <Buttons color="pink" data-md-ripple-light={true}>
                Button
              </Buttons>
              <Buttons color="pink" type="outline" data-md-ripple-dark={true}>
                Button
              </Buttons>
              <Buttons color="pink" rounded data-md-ripple-light={true}>
                Button
              </Buttons>
              <Buttons color="pink" type="link" data-md-ripple-dark={true}>
                Button
              </Buttons>
            </div>
          </div>

          <div className="mb-10">
            <h2 className="mb-5 text-2xl font-bold">Button Sizes</h2>

            <div className="flex items-end gap-5">
              <Buttons color="pink" size="sm" data-md-ripple-light={true}>
                Button
              </Buttons>
              <Buttons color="pink">Button</Buttons>
              <Buttons color="pink" size="lg" data-md-ripple-light={true}>
                Button
              </Buttons>
            </div>
          </div>

          <div className="mb-10">
            <h2 className="mb-5 text-2xl font-bold">Button With Icons</h2>

            <div className="flex gap-5">
              <Buttons color="pink" data-md-ripple-light={true}>
                <Icon name="favorite" color="white" />
                Button
              </Buttons>
              <Buttons color="pink" data-md-ripple-light={true}>
                Button
                <Icon name="favorite" color="white" />
              </Buttons>
            </div>
          </div>
        </div>

        <div className="p-10 bg-gray-100 border border-gray-300 mb-10">
          <div className="mb-10">
            <h2 className="mb-5 text-2xl font-bold">Alerts</h2>
            <Alerts color="blueGray">MD Tailwind Alerts</Alerts>
            <Alerts color="gray">MD Tailwind Alerts</Alerts>
            <Alerts color="brown">MD Tailwind Alerts</Alerts>
            <Alerts color="deepOrange">MD Tailwind Alerts</Alerts>
            <Alerts color="orange">MD Tailwind Alerts</Alerts>
            <Alerts color="amber">MD Tailwind Alerts</Alerts>
            <Alerts color="yellow">MD Tailwind Alerts</Alerts>
            <Alerts color="lime">MD Tailwind Alerts</Alerts>
            <Alerts color="lightGreen">MD Tailwind Alerts</Alerts>
            <Alerts color="green">MD Tailwind Alerts</Alerts>
            <Alerts color="cyan">MD Tailwind Alerts</Alerts>
            <Alerts color="lightBlue">MD Tailwind Alerts</Alerts>
            <Alerts color="blue">MD Tailwind Alerts</Alerts>
            <Alerts color="indigo">MD Tailwind Alerts</Alerts>
            <Alerts color="deepPurple">MD Tailwind Alerts</Alerts>
            <Alerts color="purple">MD Tailwind Alerts</Alerts>
            <Alerts color="pink">MD Tailwind Alerts</Alerts>
            <Alerts color="red">MD Tailwind Alerts</Alerts>
          </div>
        </div>

        <div className="p-10 bg-gray-100 border border-gray-300 mb-10">
          <div className="mb-10">
            <h2 className="mb-5 text-2xl font-bold">Images</h2>

            <div className="flex justify-between gap-5">
              <div className="w-48">
                <Image
                  src={require('assets/img/team-1-800x800.jpg')}
                  alt="Image"
                />
              </div>

              <div className="w-48">
                <Image
                  src={require('assets/img/team-2-800x800.jpg')}
                  alt="Image Rounded"
                  rounded
                />
              </div>

              <div className="w-48">
                <Image
                  src={require('assets/img/team-3-800x800.jpg')}
                  alt="Image Raised"
                  raised
                />
              </div>

              <div className="w-48">
                <Image
                  src={require('assets/img/team-4-470x470.png')}
                  alt="Image Raised Rounded"
                  rounded
                  raised
                />
              </div>
            </div>
          </div>
        </div>

        <div className="p-10 bg-gray-100 border border-gray-300 mb-10">
          <div className="mb-10">
            <h2 className="mb-5 text-2xl font-bold">Input Types</h2>

            <div className="flex gap-10">
              <Input type="text" placeholder="Input Filled" color="pink" />
              <Input
                type="text"
                placeholder="Input Outline"
                color="pink"
                outline
              />
            </div>
          </div>

          <div className="mb-10">
            <h2 className="mb-5 text-2xl font-bold">Input Sizes</h2>

            <div className="flex gap-10 mb-5">
              <Input placeholder="Input Small" color="pink" size="sm" />
              <Input placeholder="Input Regular" color="pink" />
              <Input placeholder="Input Large" color="pink" size="lg" />
            </div>

            <div className="flex gap-10">
              <Input placeholder="Input Small" color="pink" size="sm" outline />
              <Input placeholder="Input Regular" color="pink" outline />
              <Input placeholder="Input Large" color="pink" size="lg" outline />
            </div>
          </div>

          <div className="mb-10">
            <h2 className="mb-5 text-2xl font-bold">Input With Icon</h2>

            <div className="flex gap-10 mb-5">
              <InputIcon
                color="pink"
                size="sm"
                placeholder="Input with icon"
                iconName="person"
              />
              <InputIcon
                color="pink"
                placeholder="Input with icon"
                iconName="person"
              />
              <InputIcon
                color="pink"
                size="lg"
                placeholder="Input with icon"
                iconName="person"
              />
            </div>

            <div className="flex gap-10">
              <InputIcon
                color="pink"
                size="sm"
                placeholder="Input with icon"
                outline
                iconName="person"
              />
              <InputIcon
                color="pink"
                placeholder="Input with icon"
                outline
                iconName="person"
              />
              <InputIcon
                color="pink"
                size="lg"
                placeholder="Input with icon"
                outline
                iconName="person"
              />
            </div>
          </div>

          <div className="mb-10">
            <h2 className="mb-5 text-2xl font-bold">Input Errors</h2>

            <div className="flex gap-10">
              <Input
                placeholder="Input Message"
                color="pink"
                error="This is an error"
              />
              <Input
                placeholder="Input Message"
                color="pink"
                outline
                error="This is an error"
              />
            </div>
          </div>
        </div>

        <div className="p-10 bg-gray-100 border border-gray-300 mb-10">
          <div className="mb-10">
            <h2 className="mb-5 text-2xl font-bold">Labels</h2>

            <div className="flex gap-3 flex-wrap">
              <Labels color="blueGray">Label</Labels>
              <Labels color="gray">Label</Labels>
              <Labels color="brown">Label</Labels>
              <Labels color="deepOrange">Label</Labels>
              <Labels color="orange">Label</Labels>
              <Labels color="amber">Label</Labels>
              <Labels color="yellow">Label</Labels>
              <Labels color="lime">Label</Labels>
              <Labels color="lightGreen">Label</Labels>
              <Labels color="green">Label</Labels>
              <Labels color="teal">Label</Labels>
              <Labels color="cyan">Label</Labels>
              <Labels color="lightBlue">Label</Labels>
              <Labels color="blue">Label</Labels>
              <Labels color="indigo">Label</Labels>
              <Labels color="deepPurple">Label</Labels>
              <Labels color="purple">Label</Labels>
              <Labels color="pink">Label</Labels>
              <Labels color="red">Label</Labels>
            </div>
          </div>
        </div>

        <div className="p-10 bg-gray-100 border border-gray-300 mb-10">
          <div className="mb-10">
            <h2 className="mb-5 text-2xl font-bold">Menus</h2>
            <Menu color="pink" />
            <MenuIcon color="pink" />
            <MenuText color="pink" />
          </div>
        </div>

        <div className="p-10 bg-gray-100 border border-gray-300 mb-10">
          <div className="mb-10">
            <h2 className="mb-5 text-2xl font-bold">Navbars</h2>
            <NavbarExample />
            <NavbarIconWithTextExample />
            <NavbarIconExample />
            <NavbarTextExample />
          </div>
        </div>

        <div className="p-10 bg-gray-100 border border-gray-300 mb-10">
          <div className="mb-10">
            <h2 className="mb-5 text-2xl font-bold">Tabs</h2>
            <TabTextExample />
            <TabExample />
          </div>
        </div>

        <div className="p-10 bg-gray-100 border border-gray-300 mb-10">
          <div className="mb-10">
            <h2 className="mb-5 text-2xl font-bold">Dropdown Positions</h2>

            <div className="flex justify-start gap-4">
              <Dropdowns
                color="pink"
                buttonText="Dropdown"
                data-md-ripple-light={true}
              >
                <DropdownItems>Action</DropdownItems>
                <DropdownItems>Another Action</DropdownItems>
                <DropdownItems>Something Else</DropdownItems>
              </Dropdowns>

              <Dropdowns
                color="pink"
                position="top"
                buttonText="Droup"
                data-md-ripple-light={true}
              >
                <DropdownItems>Action</DropdownItems>
                <DropdownItems>Another Action</DropdownItems>
                <DropdownItems>Something Else</DropdownItems>
              </Dropdowns>
            </div>
          </div>

          <div className="mb-10">
            <h2 className="mb-5 text-2xl font-bold">Dropdown Styles</h2>

            <div className="flex justify-start gap-4">
              <Dropdowns
                color="pink"
                buttonText="Dropdown Filled"
                data-md-ripple-light={true}
              >
                <DropdownItems>Action</DropdownItems>
                <DropdownItems>Another Action</DropdownItems>
                <DropdownItems>Something Else</DropdownItems>
              </Dropdowns>

              <Dropdowns
                color="pink"
                type="outline"
                buttonText="Dropdown Outline"
                data-md-ripple-dark={true}
              >
                <DropdownItems>Action</DropdownItems>
                <DropdownItems>Another Action</DropdownItems>
                <DropdownItems>Something Else</DropdownItems>
              </Dropdowns>

              <Dropdowns
                color="pink"
                rounded
                buttonText="Dropdown Rounded"
                data-md-ripple-light={true}
              >
                <DropdownItems>Action</DropdownItems>
                <DropdownItems>Another Action</DropdownItems>
                <DropdownItems>Something Else</DropdownItems>
              </Dropdowns>

              <Dropdowns
                color="pink"
                type="link"
                buttonText="Dropdown Link"
                data-md-ripple-dark={true}
              >
                <DropdownItems>Action</DropdownItems>
                <DropdownItems>Another Action</DropdownItems>
                <DropdownItems>Something Else</DropdownItems>
              </Dropdowns>
            </div>
          </div>

          <div className="mb-10">
            <h2 className="mb-5 text-2xl font-bold">Dropdown Sizes</h2>

            <div className="flex justify-start items-end gap-4">
              <Dropdowns
                color="pink"
                size="sm"
                buttonText="Dropdown Small"
                data-md-ripple-light={true}
              >
                <DropdownItems>Action</DropdownItems>
                <DropdownItems>Another Action</DropdownItems>
                <DropdownItems>Something Else</DropdownItems>
              </Dropdowns>

              <Dropdowns
                color="pink"
                buttonText="Dropdown Regular"
                data-md-ripple-light={true}
              >
                <DropdownItems>Action</DropdownItems>
                <DropdownItems>Another Action</DropdownItems>
                <DropdownItems>Something Else</DropdownItems>
              </Dropdowns>

              <Dropdowns
                color="pink"
                size="lg"
                buttonText="Dropdown Large"
                data-md-ripple-light={true}
              >
                <DropdownItems>Action</DropdownItems>
                <DropdownItems>Another Action</DropdownItems>
                <DropdownItems>Something Else</DropdownItems>
              </Dropdowns>
            </div>
          </div>
        </div>

        <div className="p-10 bg-gray-100 border border-gray-300 mb-10">
          <div className="mb-10">
            <h2 className="mb-5 text-2xl font-bold">Modals</h2>

            <div className="flex gap-4">
              <SmallModal />
              <RegularModal />
              <LargeModal />
            </div>
          </div>
        </div>

        <div className="p-10 bg-gray-100 border border-gray-300 mb-10">
          <div className="mb-10">
            <h2 className="mb-5 text-2xl font-bold">Popovers</h2>

            <div className="flex gap-4">
              <PopoverExample placement="left" />
              <PopoverExample placement="top" />
              <PopoverExample placement="bottom" />
              <PopoverExample placement="right" />
            </div>
          </div>
        </div>

        <div className="p-10 bg-gray-100 border border-gray-300 mb-10">
          <div className="mb-10">
            <h2 className="mb-5 text-2xl font-bold">Tooltips</h2>

            <div className="flex gap-4">
              <TooltipExample placement="left" />
              <TooltipExample placement="top" />
              <TooltipExample placement="bottom" />
              <TooltipExample placement="right" />
            </div>
          </div>
        </div>

        <div className="p-10 bg-gray-100 border border-gray-300 mb-10">
          <div className="mb-10">
            <h2 className="mb-5 text-2xl font-bold">Paginations</h2>

            <div className="flex flex-col gap-4">
              <PaginationExample />
              <PaginationFirstLastExample />
            </div>
          </div>
        </div>

        <div className="p-10 bg-gray-100 border border-gray-300 mb-10">
          <div className="mb-10">
            <h2 className="mb-5 text-2xl font-bold">Progress</h2>

            <Progress color="pink" value="30" />
            <Progress color="pink" value="50" percentage />
          </div>
        </div>

        <div className="p-10 bg-gray-100 border border-gray-300 mb-10 flex gap-10 justify-evenly">
          {/* Card */}
          <div className="mb-10">
            <h2 className="mb-5 text-2xl font-bold">Cards</h2>

            <div className="max-w-sm bg-white rounded-lg overflow-hidden shadow">
              <img
                className="w-full"
                src="https://miro.medium.com/max/9792/0*xKTwlgXlZPC7Xv3r"
                alt="Patterns"
              />
              <div className="px-7 py-5">
                <div className="font-bold text-xl mb-2 text-gray-900">
                  Card Title
                </div>
                <p className="text-gray-700 text-base">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Voluptatibus quia, nulla! Maiores et perferendis eaque,
                  exercitationem praesentium nihil.
                </p>
              </div>
              <div className="px-7 mt-2 pb-6">
                <Buttons color="pink" size="lg" data-md-ripple-light={true}>
                  Read More
                </Buttons>
              </div>
            </div>
          </div>

          {/* Login Card */}
          <div className="mb-10 w-96">
            <h2 className="mb-5 text-2xl font-bold">Login Card</h2>
            <div className="max-w-sm bg-white rounded-lg overflow-hidden shadow py-6 px-10">
              <div className="px-4 pt-6">
                <div className="text-center mb-3">
                  <h6 className="text-gray-600 text-sm font-bold">
                    Sign In With
                  </h6>
                </div>
                <div className="flex justify-center gap-2 text-center">
                  <Buttons color="lightBlue" size="sm">
                    Twitter
                  </Buttons>
                  <Buttons color="red" size="sm">
                    Google
                  </Buttons>
                </div>
              </div>

              <hr className="my-6 border-b-1 border-gray-200" />

              <div className="w-full pb-6">
                <div className="text-gray-700 text-center font-bold mb-8">
                  <h4 className="text-lg">Or Sign In</h4>
                </div>
                <form>
                  <div className="w-full mb-6">
                    <Input
                      type="email"
                      placeholder="Email Address"
                      color="pink"
                    />
                  </div>
                  <div className="w-full mb-6">
                    <Input
                      type="password"
                      placeholder="Password"
                      color="pink"
                    />
                  </div>
                  <div>
                    <label className="flex gap-2 items-center cursor-pointer">
                      <input
                        type="checkbox"
                        className="appearance-none rounded text-pink-500 outline-none hover:bg-transparent checked:bg-pink-500 focus:bg-transparent focus-within-bg-pink-500 focus:outline-none focus:ring-0 transition-all duration-300"
                      />
                      <span className="text-xs font-semibold text-gray-700 align-middle">
                        Remember me
                      </span>
                    </label>
                  </div>
                  <div className="flex justify-center text-center mt-10">
                    <Buttons
                      color="pink"
                      size="lg"
                      onClick={(e) => e.preventDefault()}
                      data-md-ripple-light={true}
                    >
                      Sign in
                    </Buttons>
                  </div>
                </form>
              </div>
            </div>
          </div>

          {/* Pricing Card */}
          <div className="mb-10 w-96">
            <h2 className="mb-5 text-2xl font-bold">Pricing Card</h2>

            <div className="max-w-sm bg-white rounded-lg overflow-hidden shadow py-4 px-10">
              <div className="text-center p-4 mb-3">
                <h6 className="text-gray-600 text-sm uppercase font-bold">
                  premium
                </h6>
              </div>

              <div className="flex justify-center text-center p-4">
                <div className="relative font-serif max-w-max">
                  <span className="absolute top-2 text-2xl text-gray-500">
                    $
                  </span>
                  <h1 className="inline-block ml-4 text-pink-500 font-bold text-7xl">
                    99
                  </h1>
                  <span className="text-lg text-gray-500">/mo</span>
                </div>
              </div>

              <div className="text-center p-4">
                <ul className="list-none divide-y divide-gray-300">
                  <li className="py-4  capitalize text-gray-600">
                    <span className="font-bold text-gray-900">500 </span>
                    projects
                  </li>
                  <li className="py-4  capitalize text-gray-600">
                    <span className="font-bold text-gray-900">50 </span>
                    team members
                  </li>
                  <li className="py-4  capitalize text-gray-600">
                    <span className="font-bold text-gray-900">125 </span>
                    personal contacts
                  </li>
                  <li className="py-4  capitalize text-gray-600">
                    <span className="font-bold text-gray-900">15.000 </span>
                    messages
                  </li>
                </ul>
              </div>

              <div className="flex justify-center p-4">
                <Buttons
                  color="pink"
                  size="lg"
                  rounded
                  data-md-ripple-light={true}
                >
                  Get Started
                </Buttons>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
