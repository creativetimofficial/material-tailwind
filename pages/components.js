import React from "react";
import IndexNavbar from "pagesComponents/IndexNavbar";
import H1 from "components/typography/Heading1.js";
import H2 from "components/typography/Heading2.js";
import H3 from "components/typography/Heading3.js";
import H4 from "components/typography/Heading4.js";
import H5 from "components/typography/Heading5.js";
import H6 from "components/typography/Heading6.js";
import Paragraph from "components/typography/Paragraph.js";
import LeadText from "components/typography/LeadText.js";
import Quote from "components/typography/Quote.js";
import Small from "components/typography/Small.js";
import Alert from "components/Alerts/Alert";
import ClosingAlert from "components/Alerts/ClosingAlert";
import Button from "components/Button/Button";
import Dropdown from "components/Dropdown/Dropdown";
import DropdownItem from "components/Dropdown/DropdownItem";
import Icon from "components/Icon/Icon";
import Image from "components/Image/Image";
import Input from "components/Input/Input";
import InputIcon from "components/Input/InputIcon";
import Label from "components/Labels/Label";
import ClosingLabel from "components/Labels/ClosingLabel";
import Pagination from "components/Pagination/Pagination";
import PaginationItem from "components/Pagination/PaginationItem";
import Progress from "components/Progress/Progress";
import { Menu, MenuIcons, MenuLinks } from "pagesComponents/menus";
import {
  Navbars,
  NavbarIconsLinks,
  NavbarIcons,
  NavbarLinks,
} from "pagesComponents/navbars";
import { TabIcons, TabLinks } from "pagesComponents/tabs";
import Popovers from "pagesComponents/popovers";
import Tooltips from "pagesComponents/tooltips";
import Modals from "pagesComponents/modals";
import RegularCard from "pagesComponents/cards";

export default function Components() {
  return (
    <>
      <IndexNavbar />
      <section className="header relative items-center flex h-screen">
        <div className="container max-w-7xl mx-auto">
          <div className="w-full px-4 text-center">
            <img
              src={require("assets/img/material-tailwind-logo.png")}
              alt="Material Tailwind Logo"
              className="w-56 mx-auto mb-16"
            />
            <h2 className="font-semibold text-6xl text-blue-gray-900 mb-10">
              Material Tailwind
            </h2>
            <h4 className="text-gray-700 text-3xl font-serif font-bold leading-normal mt-0 mb-2">
              All Components
            </h4>
          </div>
        </div>
      </section>

      <div className="container max-w-7xl mx-auto border border-t-0 border-r-0 border-l-0 border-b-1 border-blue-gray-50" />

      <section className="pb-36 bg-white">
        <div className="container max-w-7xl mx-auto mt-36 px-4">
          <H4 color="gray">BUTTONs</H4>
          <div className="mt-10">
            <h4 className="text-xl text-gray-700">Styles</h4>

            <div className="flex flex-wrap gap-x-2 gap-y-8 mt-5">
              <Button color="lightBlue" ripple="light">
                default
              </Button>
              <Button color="lightBlue" buttonType="outline" ripple="dark">
                outline
              </Button>
              <Button color="lightBlue" rounded ripple="light">
                rounded
              </Button>
              <Button color="lightBlue" buttonType="link" ripple="dark">
                link
              </Button>
              <Button color="lightBlue" rounded iconOnly ripple="light">
                <Icon name="favorite" />
              </Button>
            </div>
          </div>

          <div className="mt-16">
            <h4 className="text-xl text-gray-700">Sizes</h4>

            <div className="flex flex-wrap gap-x-24 gap-y-8 mt-5">
              <div className="flex flex-wrap items-end gap-x-2 gap-y-8">
                <Button color="lightBlue" size="sm" ripple="light">
                  small
                </Button>
                <Button color="lightBlue" ripple="light">
                  regular
                </Button>
                <Button color="lightBlue" size="lg" ripple="light">
                  large
                </Button>
              </div>

              <div className="flex flex-wrap items-end gap-x-2 gap-y-8">
                <Button
                  color="lightBlue"
                  size="sm"
                  rounded
                  iconOnly
                  ripple="light"
                >
                  <Icon name="favorite" />
                </Button>
                <Button color="lightBlue" rounded iconOnly ripple="light">
                  <Icon name="favorite" />
                </Button>
                <Button
                  color="lightBlue"
                  size="lg"
                  rounded
                  iconOnly
                  ripple="light"
                >
                  <Icon name="favorite" size="2xl" />
                </Button>
              </div>
            </div>
          </div>

          <div className="mt-16">
            <h4 className="text-xl text-gray-700">Colors</h4>

            <div className="flex flex-wrap gap-x-2 gap-y-8 mt-5">
              <Button color="blueGray" ripple="light">
                Button
              </Button>
              <Button color="gray" ripple="light">
                Button
              </Button>
              <Button color="brown" ripple="light">
                Button
              </Button>
              <Button color="deepOrange" ripple="light">
                Button
              </Button>
              <Button color="orange" ripple="light">
                Button
              </Button>
              <Button color="amber" ripple="light">
                Button
              </Button>
              <Button color="yellow" ripple="light">
                Button
              </Button>
              <Button color="lime" ripple="light">
                Button
              </Button>
              <Button color="lightGreen" ripple="light">
                Button
              </Button>
              <Button color="green" ripple="light">
                Button
              </Button>
              <Button color="teal" ripple="light">
                Button
              </Button>
              <Button color="cyan" ripple="light">
                Button
              </Button>
              <Button color="lightBlue" ripple="light">
                Button
              </Button>
              <Button color="blue" ripple="light">
                Button
              </Button>
              <Button color="indigo" ripple="light">
                Button
              </Button>
              <Button color="purple" ripple="light">
                Button
              </Button>
              <Button color="deepPurple" ripple="light">
                Button
              </Button>
              <Button color="pink" ripple="light">
                Button
              </Button>
              <Button color="red" ripple="light">
                Button
              </Button>
            </div>
          </div>
        </div>

        <div className="container max-w-7xl mx-auto mt-36 px-4">
          <H4 color="gray">Alerts</H4>

          <div className="flex flex-col mt-10">
            <Alert color="blueGray">Material Tailwind Alert.</Alert>
            <Alert color="gray">Material Tailwind Alert.</Alert>
            <Alert color="brown">Material Tailwind Alert.</Alert>
            <Alert color="deepOrange">Material Tailwind Alert.</Alert>
            <Alert color="orange">Material Tailwind Alert.</Alert>
            <Alert color="amber">Material Tailwind Alert.</Alert>
            <Alert color="yellow">Material Tailwind Alert.</Alert>
            <Alert color="lime">Material Tailwind Alert.</Alert>
            <Alert color="lightGreen">Material Tailwind Alert.</Alert>
            <Alert color="green">Material Tailwind Alert.</Alert>
            <Alert color="teal">Material Tailwind Alert.</Alert>
            <Alert color="cyan">Material Tailwind Alert.</Alert>
            <Alert color="lightBlue">Material Tailwind Alert.</Alert>
            <Alert color="blue">Material Tailwind Alert.</Alert>
            <Alert color="indigo">Material Tailwind Alert.</Alert>
            <Alert color="purple">Material Tailwind Alert.</Alert>
            <Alert color="deepPurple">Material Tailwind Alert.</Alert>
            <Alert color="pink">Material Tailwind Alert.</Alert>
            <Alert color="red">Material Tailwind Alert.</Alert>
          </div>
        </div>

        <div className="container max-w-7xl mx-auto mt-36 px-4">
          <H4 color="gray">Closing Alerts</H4>

          <div className="flex flex-col mt-10">
            <ClosingAlert color="blueGray">
              Material Tailwind Closing Alert.
            </ClosingAlert>
            <ClosingAlert color="gray">
              Material Tailwind Closing Alert.
            </ClosingAlert>
            <ClosingAlert color="brown">
              Material Tailwind Closing Alert.
            </ClosingAlert>
            <ClosingAlert color="deepOrange">
              Material Tailwind Closing Alert.
            </ClosingAlert>
            <ClosingAlert color="orange">
              Material Tailwind Closing Alert.
            </ClosingAlert>
            <ClosingAlert color="amber">
              Material Tailwind Closing Alert.
            </ClosingAlert>
            <ClosingAlert color="yellow">
              Material Tailwind Closing Alert.
            </ClosingAlert>
            <ClosingAlert color="lime">
              Material Tailwind Closing Alert.
            </ClosingAlert>
            <ClosingAlert color="lightGreen">
              Material Tailwind Closing Alert.
            </ClosingAlert>
            <ClosingAlert color="green">
              Material Tailwind Closing Alert.
            </ClosingAlert>
            <ClosingAlert color="teal">
              Material Tailwind Closing Alert.
            </ClosingAlert>
            <ClosingAlert color="cyan">
              Material Tailwind Closing Alert.
            </ClosingAlert>
            <ClosingAlert color="lightBlue">
              Material Tailwind Closing Alert.
            </ClosingAlert>
            <ClosingAlert color="blue">
              Material Tailwind Closing Alert.
            </ClosingAlert>
            <ClosingAlert color="indigo">
              Material Tailwind Closing Alert.
            </ClosingAlert>
            <ClosingAlert color="purple">
              Material Tailwind Closing Alert.
            </ClosingAlert>
            <ClosingAlert color="deepPurple">
              Material Tailwind Closing Alert.
            </ClosingAlert>
            <ClosingAlert color="pink">
              Material Tailwind Closing Alert.
            </ClosingAlert>
            <ClosingAlert color="red">
              Material Tailwind Closing Alert.
            </ClosingAlert>
          </div>
        </div>

        <div className="container max-w-7xl mx-auto mt-36 px-4">
          <H4 color="gray">Inputs</H4>
          <div className="mt-10">
            <h4 className="text-xl text-gray-700">Styles</h4>

            <div className="flex flex-wrap gap-8 mt-5">
              <div className="w-72">
                <Input color="lightBlue" placeholder="Input" />
              </div>
              <div className="w-72">
                <Input color="lightBlue" placeholder="Outline Input" outline />
              </div>
            </div>
          </div>

          <div className="mt-16">
            <h4 className="text-xl text-gray-700">Sizes</h4>

            <div className="flex flex-wrap gap-x-24 gap-y-8 mt-5">
              <div className="flex flex-wrap items-end gap-8">
                <div className="w-72">
                  <Input color="lightBlue" placeholder="Small" size="sm" />
                </div>
                <div className="w-72">
                  <Input color="lightBlue" placeholder="Regular" />
                </div>
                <div className="w-72">
                  <Input color="lightBlue" placeholder="Large" size="lg" />
                </div>
              </div>

              <div className="flex flex-wrap items-end gap-8">
                <div className="w-72">
                  <Input
                    color="lightBlue"
                    placeholder="Small"
                    size="sm"
                    outline
                  />
                </div>
                <div className="w-72">
                  <Input color="lightBlue" placeholder="Regular" outline />
                </div>
                <div className="w-72">
                  <Input
                    color="lightBlue"
                    placeholder="Large"
                    size="lg"
                    outline
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16">
            <h4 className="text-xl text-gray-700">With Icon</h4>

            <div className="flex flex-wrap gap-8 mt-5">
              <div className="w-72">
                <InputIcon
                  color="lightBlue"
                  placeholder="Input With Icon"
                  iconName="person"
                />
              </div>
              <div className="w-72">
                <InputIcon
                  color="lightBlue"
                  placeholder="Outline Input With Icon"
                  iconName="person"
                  outline
                />
              </div>
            </div>
          </div>

          <div className="mt-16">
            <h4 className="text-xl text-gray-700">With Error Message</h4>

            <div className="flex flex-wrap gap-8 mt-5">
              <div className="w-72">
                <Input
                  color="lightBlue"
                  placeholder="Input With Error"
                  error="This is an error"
                />
              </div>
              <div className="w-72">
                <Input
                  color="lightBlue"
                  placeholder="Outline Input With Error"
                  error="This is an error"
                  outline
                />
              </div>
            </div>
          </div>

          <div className="mt-16">
            <h4 className="text-xl text-gray-700">With Success Message</h4>

            <div className="flex flex-wrap gap-8 mt-5">
              <div className="w-72">
                <Input
                  color="lightBlue"
                  placeholder="Input With Success"
                  success="This is a success"
                />
              </div>
              <div className="w-72">
                <Input
                  color="lightBlue"
                  placeholder="Outline Input With Success"
                  success="This is a success"
                  outline
                />
              </div>
            </div>
          </div>
        </div>

        <div className="container max-w-7xl mx-auto mt-36 px-4">
          <H4 color="gray">Labels</H4>

          <div className="flex flex-wrap gap-x-2 gap-y-4 mt-10">
            <Label color="blueGray">Label</Label>
            <Label color="gray">Label</Label>
            <Label color="brown">Label</Label>
            <Label color="deepOrange">Label</Label>
            <Label color="orange">Label</Label>
            <Label color="amber">Label</Label>
            <Label color="yellow">Label</Label>
            <Label color="lime">Label</Label>
            <Label color="lightGreen">Label</Label>
            <Label color="green">Label</Label>
            <Label color="teal">Label</Label>
            <Label color="cyan">Label</Label>
            <Label color="lightBlue">Label</Label>
            <Label color="blue">Label</Label>
            <Label color="indigo">Label</Label>
            <Label color="purple">Label</Label>
            <Label color="deepPurple">Label</Label>
            <Label color="pink">Label</Label>
            <Label color="red">Label</Label>
          </div>
        </div>

        <div className="container max-w-7xl mx-auto mt-36 px-4">
          <H4 color="gray">Closing Labels</H4>

          <div className="flex flex-wrap gap-x-2 gap-y-4 mt-10">
            <ClosingLabel color="blueGray">Label</ClosingLabel>
            <ClosingLabel color="gray">Label</ClosingLabel>
            <ClosingLabel color="brown">Label</ClosingLabel>
            <ClosingLabel color="deepOrange">Label</ClosingLabel>
            <ClosingLabel color="orange">Label</ClosingLabel>
            <ClosingLabel color="amber">Label</ClosingLabel>
            <ClosingLabel color="yellow">Label</ClosingLabel>
            <ClosingLabel color="lime">Label</ClosingLabel>
            <ClosingLabel color="lightGreen">Label</ClosingLabel>
            <ClosingLabel color="green">Label</ClosingLabel>
            <ClosingLabel color="teal">Label</ClosingLabel>
            <ClosingLabel color="cyan">Label</ClosingLabel>
            <ClosingLabel color="lightBlue">Label</ClosingLabel>
            <ClosingLabel color="blue">Label</ClosingLabel>
            <ClosingLabel color="indigo">Label</ClosingLabel>
            <ClosingLabel color="purple">Label</ClosingLabel>
            <ClosingLabel color="deepPurple">Label</ClosingLabel>
            <ClosingLabel color="pink">Label</ClosingLabel>
            <ClosingLabel color="red">Label</ClosingLabel>
          </div>
        </div>

        <div className="container max-w-7xl mx-auto mt-36 px-4">
          <H4 color="gray">Images</H4>

          <div className="flex flex-wrap justify-between gap-8 mt-10">
            <div className="w-64 text-center">
              <Image src={require("assets/img/team-1-800x800.jpg")} />
              <h4 className="text-xl text-blue-gray-700 mt-4">Default</h4>
            </div>

            <div className="w-64 text-center">
              <Image src={require("assets/img/team-2-800x800.jpg")} rounded />
              <h4 className="text-xl text-blue-gray-700 mt-4">Rounded</h4>
            </div>

            <div className="w-64 text-center">
              <Image src={require("assets/img/team-3-800x800.jpg")} raised />
              <h4 className="text-xl text-blue-gray-700 mt-4">Raised</h4>
            </div>

            <div className="w-64 text-center">
              <Image
                src={require("assets/img/team-4-470x470.png")}
                rounded
                raised
              />
              <h4 className="text-xl text-blue-gray-700 mt-4">
                Raised Rounded
              </h4>
            </div>
          </div>
        </div>

        <div className="container max-w-7xl mx-auto mt-36 px-4">
          <H4 color="gray">Menus</H4>

          <div className="mt-10">
            <Menu color="lightBlue" menuName="Menu with icons & links" />
            <MenuLinks color="lightBlue" menuName="Menu with links" />
            <MenuIcons color="lightBlue" menuName="Menu with icons" />
          </div>
        </div>

        <div className="container max-w-7xl mx-auto mt-36 px-4">
          <H4 color="gray">Navbars</H4>
        </div>
        <div className="mt-10">
          <Navbars color="lightBlue" navbarName="Complete Navbar" />
          <NavbarIconsLinks
            color="lightBlue"
            navbarName="Navbar With Icons & Links"
          />
          <NavbarLinks
            color="lightBlue"
            navbarName="Navbar With Icons & Links"
          />
          <NavbarIcons
            color="lightBlue"
            navbarName="Navbar With Icons & Links"
          />
        </div>

        <div className="container max-w-7xl mx-auto mt-36 px-4">
          <H4 color="gray">Tabs</H4>

          <div className="mt-24">
            <TabIcons color="lightBlue" />
          </div>
          <div className="mt-24">
            <TabLinks color="lightBlue" />
          </div>
        </div>

        <div className="container max-w-7xl mx-auto mt-36 px-4">
          <H4 color="gray">DROPDOWN</H4>
          <div className="mt-10">
            <h4 className="text-xl text-gray-700">Types</h4>

            <div className="flex flex-wrap gap-x-2 gap-y-8 mt-5">
              <Dropdown color="lightBlue" buttonText="Dropdown" ripple="light">
                <DropdownItem href="#" onClick={(e) => e.preventDefault()}>
                  Action
                </DropdownItem>
                <DropdownItem href="#" onClick={(e) => e.preventDefault()}>
                  Another Action
                </DropdownItem>
                <DropdownItem href="#" onClick={(e) => e.preventDefault()}>
                  Something else here
                </DropdownItem>
              </Dropdown>

              <Dropdown
                color="lightBlue"
                buttonText="Dropup"
                placement="top-end"
                ripple="light"
              >
                <DropdownItem href="#" onClick={(e) => e.preventDefault()}>
                  Action
                </DropdownItem>
                <DropdownItem href="#" onClick={(e) => e.preventDefault()}>
                  Another Action
                </DropdownItem>
                <DropdownItem href="#" onClick={(e) => e.preventDefault()}>
                  Something else here
                </DropdownItem>
              </Dropdown>
            </div>
          </div>

          <div className="mt-16">
            <h4 className="text-xl text-gray-700">Styles</h4>

            <div className="flex flex-wrap gap-x-2 gap-y-8 mt-5">
              <Dropdown color="lightBlue" buttonText="Default" ripple="light">
                <DropdownItem href="#" onClick={(e) => e.preventDefault()}>
                  Action
                </DropdownItem>
                <DropdownItem href="#" onClick={(e) => e.preventDefault()}>
                  Another Action
                </DropdownItem>
                <DropdownItem href="#" onClick={(e) => e.preventDefault()}>
                  Something else here
                </DropdownItem>
              </Dropdown>
              <Dropdown
                color="lightBlue"
                buttonText="Outline"
                buttonType="outline"
                ripple="dark"
              >
                <DropdownItem href="#" onClick={(e) => e.preventDefault()}>
                  Action
                </DropdownItem>
                <DropdownItem href="#" onClick={(e) => e.preventDefault()}>
                  Another Action
                </DropdownItem>
                <DropdownItem href="#" onClick={(e) => e.preventDefault()}>
                  Something else here
                </DropdownItem>
              </Dropdown>
              <Dropdown
                color="lightBlue"
                buttonText="Rounded"
                rounded
                ripple="light"
              >
                <DropdownItem href="#" onClick={(e) => e.preventDefault()}>
                  Action
                </DropdownItem>
                <DropdownItem href="#" onClick={(e) => e.preventDefault()}>
                  Another Action
                </DropdownItem>
                <DropdownItem href="#" onClick={(e) => e.preventDefault()}>
                  Something else here
                </DropdownItem>
              </Dropdown>
              <Dropdown
                color="lightBlue"
                buttonText="Link"
                buttonType="link"
                ripple="dark"
              >
                <DropdownItem href="#" onClick={(e) => e.preventDefault()}>
                  Action
                </DropdownItem>
                <DropdownItem href="#" onClick={(e) => e.preventDefault()}>
                  Another Action
                </DropdownItem>
                <DropdownItem href="#" onClick={(e) => e.preventDefault()}>
                  Something else here
                </DropdownItem>
              </Dropdown>
            </div>
          </div>

          <div className="mt-16">
            <h4 className="text-xl text-gray-700">Sizes</h4>

            <div className="flex flex-wrap items-end gap-x-2 gap-y-8 mt-5">
              <Dropdown
                color="lightBlue"
                buttonText="Small"
                size="sm"
                ripple="light"
              >
                <DropdownItem href="#" onClick={(e) => e.preventDefault()}>
                  Action
                </DropdownItem>
                <DropdownItem href="#" onClick={(e) => e.preventDefault()}>
                  Another Action
                </DropdownItem>
                <DropdownItem href="#" onClick={(e) => e.preventDefault()}>
                  Something else here
                </DropdownItem>
              </Dropdown>
              <Dropdown color="lightBlue" buttonText="Regular" ripple="light">
                <DropdownItem href="#" onClick={(e) => e.preventDefault()}>
                  Action
                </DropdownItem>
                <DropdownItem href="#" onClick={(e) => e.preventDefault()}>
                  Another Action
                </DropdownItem>
                <DropdownItem href="#" onClick={(e) => e.preventDefault()}>
                  Something else here
                </DropdownItem>
              </Dropdown>
              <Dropdown
                color="lightBlue"
                buttonText="Large"
                size="lg"
                ripple="light"
              >
                <DropdownItem href="#" onClick={(e) => e.preventDefault()}>
                  Action
                </DropdownItem>
                <DropdownItem href="#" onClick={(e) => e.preventDefault()}>
                  Another Action
                </DropdownItem>
                <DropdownItem href="#" onClick={(e) => e.preventDefault()}>
                  Something else here
                </DropdownItem>
              </Dropdown>
            </div>
          </div>
        </div>

        <div className="container max-w-7xl mx-auto mt-36 px-4">
          <H4 color="gray">Popovers</H4>

          <div className="flex justify-center flex-wrap gap-x-2 gap-y-8 mt-10">
            <Popovers color="lightBlue" placement="left" />
            <Popovers color="lightBlue" placement="top" />
            <Popovers color="lightBlue" placement="bottom" />
            <Popovers color="lightBlue" placement="right" />
          </div>
        </div>

        <div className="container max-w-7xl mx-auto mt-36 px-4">
          <H4 color="gray">Tooltips</H4>

          <div className="flex justify-center flex-wrap gap-x-2 gap-y-8 mt-10">
            <Tooltips color="lightBlue" placement="left" />
            <Tooltips color="lightBlue" placement="top" />
            <Tooltips color="lightBlue" placement="bottom" />
            <Tooltips color="lightBlue" placement="right" />
          </div>
        </div>

        <div className="container max-w-7xl mx-auto mt-36 px-4">
          <H4 color="gray">Modals</H4>

          <div className="flex flex-wrap gap-x-2 gap-y-8 mt-16">
            <Modals size="sm" color="lightBlue" modalSize="Small" />
            <Modals color="lightBlue" modalSize="Regular" />
            <Modals size="lg" color="lightBlue" modalSize="Large" />
          </div>
        </div>

        <div className="container max-w-7xl mx-auto mt-36 px-4">
          <H4 color="gray">Progressbars</H4>

          <div className="mt-16">
            <h4 className="text-xl text-gray-700">Simple</h4>

            <div className="w-full mt-5">
              <Progress color="lightBlue" value="50" />
            </div>
          </div>

          <div className="mt-16">
            <h4 className="text-xl text-gray-700">With Percentage</h4>

            <div className="w-full mt-5">
              <Progress color="lightBlue" value="75" percentage />
            </div>
          </div>
        </div>

        <div className="container max-w-7xl mx-auto mt-36 px-4">
          <H4 color="gray">Paginations</H4>

          <div className="mt-16">
            <h4 className="text-xl text-gray-700">Simple</h4>

            <div className="w-full mt-5">
              <Pagination>
                <PaginationItem
                  href="#prev"
                  onClick={(e) => e.preventDefault()}
                  ripple="dark"
                >
                  <Icon name="keyboard_arrow_left" />
                </PaginationItem>
                <PaginationItem
                  color="lightBlue"
                  href="#1"
                  onClick={(e) => e.preventDefault()}
                  ripple="light"
                >
                  1
                </PaginationItem>
                <PaginationItem
                  href="#2"
                  onClick={(e) => e.preventDefault()}
                  ripple="dark"
                >
                  2
                </PaginationItem>
                <PaginationItem
                  href="#3"
                  onClick={(e) => e.preventDefault()}
                  ripple="dark"
                >
                  3
                </PaginationItem>
                <PaginationItem
                  href="#4"
                  onClick={(e) => e.preventDefault()}
                  ripple="dark"
                >
                  4
                </PaginationItem>
                <PaginationItem
                  href="#5"
                  onClick={(e) => e.preventDefault()}
                  ripple="dark"
                >
                  5
                </PaginationItem>
                <PaginationItem
                  href="#next"
                  onClick={(e) => e.preventDefault()}
                  ripple="dark"
                >
                  <Icon name="keyboard_arrow_right" />
                </PaginationItem>
              </Pagination>
            </div>
          </div>

          <div className="mt-16">
            <h4 className="text-xl text-gray-700">With First & Last Button</h4>

            <div className="w-full mt-5">
              <Pagination>
                <PaginationItem button href="#first" ripple="dark">
                  First
                </PaginationItem>
                <PaginationItem
                  href="#prev"
                  onClick={(e) => e.preventDefault()}
                  ripple="dark"
                >
                  <Icon name="keyboard_arrow_left" />
                </PaginationItem>
                <PaginationItem
                  color="lightBlue"
                  href="#1"
                  onClick={(e) => e.preventDefault()}
                  ripple="light"
                >
                  1
                </PaginationItem>
                <PaginationItem
                  href="#2"
                  onClick={(e) => e.preventDefault()}
                  ripple="dark"
                >
                  2
                </PaginationItem>
                <PaginationItem
                  href="#3"
                  onClick={(e) => e.preventDefault()}
                  ripple="dark"
                >
                  3
                </PaginationItem>
                <PaginationItem
                  href="#4"
                  onClick={(e) => e.preventDefault()}
                  ripple="dark"
                >
                  4
                </PaginationItem>
                <PaginationItem
                  href="#5"
                  onClick={(e) => e.preventDefault()}
                  ripple="dark"
                >
                  5
                </PaginationItem>
                <PaginationItem
                  href="#next"
                  onClick={(e) => e.preventDefault()}
                  ripple="dark"
                >
                  <Icon name="keyboard_arrow_right" />
                </PaginationItem>
                <PaginationItem button href="#last" ripple="dark">
                  Last
                </PaginationItem>
              </Pagination>
            </div>
          </div>
        </div>

        <div className="container max-w-7xl mx-auto mt-36 px-4">
          <H4 color="gray">Cards</H4>

          <div className="mt-16">
            <RegularCard />
          </div>
        </div>

        <div className="container max-w-7xl mx-auto mt-36 px-4">
          <H4 color="gray">Typography</H4>

          <div className="mt-16">
            <h4 className="text-xl text-gray-700">Headings</h4>

            <div className="w-full flex flex-col gap-y-8 mt-5">
              <H1 color="gray">Material Tailwind</H1>
              <H2 color="gray">Material Tailwind</H2>
              <H3 color="gray">Material Tailwind</H3>
              <H4 color="gray">Material Tailwind</H4>
              <H5 color="gray">Material Tailwind</H5>
              <H6 color="gray">Material Tailwind</H6>
            </div>
          </div>

          <div className="mt-16">
            <h4 className="text-xl text-gray-700">Lead Text</h4>

            <div className="w-full mt-5">
              <LeadText color="gray">
                I think that’s a responsibility that I have, to push
                possibilities, to show people, this is the level that things
                could be at. So when you get something that has the name Kanye
                West on it, it’s supposed to be pushing the furthest
                possibilities. I will be the leader of a company that ends up
                being worth billions of dollars, because I got the answers. I
                understand culture. I am the nucleus.
              </LeadText>
            </div>
          </div>

          <div className="mt-16">
            <h4 className="text-xl text-gray-700">Quote</h4>

            <div className="w-full mt-5">
              <Quote color="gray" footer="Someone famouse" cite="Source title">
                I will be the leader of a company that ends up being worth
                billions of dollars, because I got the answers. I understand
                culture. I am the nucleus. I think that’s a responsibility that
                I have, to push possibilities, to show people, this is the level
                that things could be at.
              </Quote>
            </div>
          </div>

          <div className="mt-16">
            <h4 className="text-xl text-gray-700">Paragraph</h4>

            <div className="w-full mt-5">
              <Paragraph color="gray">
                I will be the leader of a company that ends up being worth
                billions of dollars, because I got the answers. I understand
                culture. I am the nucleus. I think that’s a responsibility that
                I have, to push possibilities, to show people, this is the level
                that things could be at.
              </Paragraph>
            </div>
          </div>

          <div className="mt-16">
            <h4 className="text-xl text-gray-700">Small</h4>

            <div className="w-full mt-5">
              <Small color="gray">
                I will be the leader of a company that ends up being worth
                billions of dollars, because I got the answers. I understand
                culture. I am the nucleus. I think that’s a responsibility that
                I have, to push possibilities, to show people, this is the level
                that things could be at.
              </Small>
            </div>
          </div>
        </div>
      </section>

      <div className="container max-w-7xl mx-auto border border-t-0 border-r-0 border-l-0 border-b-1 border-blue-gray-50" />

      <footer className="relative pt-8 pb-6">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap gap-8 justify-center items-center lg:justify-between">
            <ul className="list-unstyled flex gap-8">
              <li>
                <a
                  className="text-gray-700 hover:text-gray-900 font-medium block pb-2 text-sm"
                  target="_blank"
                  href="https://github.com/creativetimofficial/material-tailwind/blob/main/LICENSE.md?ref=material-tailwind"
                >
                  MIT License
                </a>
              </li>
              <li>
                <a
                  className="text-gray-700 hover:text-gray-900 font-medium block pb-2 text-sm"
                  target="_blank"
                  href="https://github.com/creativetimofficial/material-tailwind/blob/main/CONTRIBUTING.md?ref=material-tailwind"
                >
                  Contribute
                </a>
              </li>
              <li>
                <a
                  className="text-gray-700 hover:text-gray-900 font-medium block pb-2 text-sm"
                  target="_blank"
                  href="https://github.com/creativetimofficial/material-tailwind/blob/main/CODE_OF_CONDUCT.md?ref=material-tailwind"
                >
                  Code of Conduct
                </a>
              </li>
              <li>
                <a
                  className="text-gray-700 hover:text-gray-900 font-medium block pb-2 text-sm"
                  target="_blank"
                  href="https://creative-tim.com/contact-us?ref=material-tailwind"
                >
                  Contact Us
                </a>
              </li>
            </ul>

            <div className="text-sm text-gray-700 font-medium py-1">
              Copyright © {new Date().getFullYear()} Material Tailwind by{" "}
              <a
                href="https://www.creative-tim.com?ref=material-tailwind"
                className="text-gray-700 hover:text-gray-900"
              >
                Creative Tim
              </a>
              .
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
