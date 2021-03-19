import React from 'react';
import Link from 'next/link';
import IndexNavbar from 'pagesComponents/IndexNavbar';
import IndexFooter from 'pagesComponents/IndexFooter';
import H1 from 'components/typography/Heading1.js';
import H2 from 'components/typography/Heading2.js';
import H3 from 'components/typography/Heading3.js';
import H4 from 'components/typography/Heading4.js';
import H5 from 'components/typography/Heading5.js';
import H6 from 'components/typography/Heading6.js';
import Paragraph from 'components/typography/Paragraph.js';
import LeadText from 'components/typography/LeadText.js';
import Quote from 'components/typography/Quote.js';
import Small from 'components/typography/Small.js';
import Alerts from 'components/Alerts/Alerts';
import ClosingAlerts from 'components/Alerts/ClosingAlerts';
import Buttons from 'components/Buttons/Buttons';
import Dropdowns from 'components/Dropdowns/Dropdowns';
import DropdownItems from 'components/Dropdowns/DropdownItems';
import Icon from 'components/Icon/Icon';
import Image from 'components/Image/Image';
import Input from 'components/Input/Input';
import InputIcon from 'components/Input/InputIcon';
import Labels from 'components/Labels/Labels';
import ClosingLabels from 'components/Labels/ClosingLabels';
import Pagination from 'components/Pagination/Pagination';
import PaginationItem from 'components/Pagination/PaginationItem';
import Progress from 'components/Progress/Progress';
import { Menu, MenuIcons, MenuLinks } from 'pagesComponents/menus';
import {
  Navbars,
  NavbarIconsLinks,
  NavbarIcons,
  NavbarLinks,
} from 'pagesComponents/navbars';
import { TabIcons, TabLinks } from 'pagesComponents/tabs';
import Popovers from 'pagesComponents/popovers';
import Tooltips from 'pagesComponents/tooltips';
import Modals from 'pagesComponents/modals';
import RegularCard from 'pagesComponents/cards';
import Ripple from 'material-ripple-effects';

export default function Components() {
  const ripple = new Ripple();
  const rippleLight = (e) => ripple.create(e, 'light');
  const rippleDark = (e) => ripple.create(e, 'dark');

  return (
    <>
      <IndexNavbar />
      <section className="header relative items-center flex h-screen">
        <div className="container max-w-7xl mx-auto">
          <div className="w-full px-4 text-center">
            <img
              src={require('assets/img/md-tailwind-logo-initial.png')}
              alt="Material Tailwind Logo"
              className="w-56 mx-auto mb-16"
            />
            <h2 className="font-semibold text-6xl text-blue-gray-900 mb-10">
              Material Design Tailwind
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
          <H4 color="gray">BUTTONS</H4>
          <div className="mt-10">
            <h4 className="text-xl text-gray-700">Styles</h4>

            <div className="flex flex-wrap gap-x-2 gap-y-8 mt-5">
              <Buttons color="lightBlue" onMouseUp={rippleLight}>
                default
              </Buttons>
              <Buttons
                color="lightBlue"
                buttonType="outline"
                onMouseUp={rippleDark}
              >
                outline
              </Buttons>
              <Buttons color="lightBlue" rounded onMouseUp={rippleLight}>
                rounded
              </Buttons>
              <Buttons
                color="lightBlue"
                buttonType="link"
                onMouseUp={rippleDark}
              >
                link
              </Buttons>
              <Buttons
                color="lightBlue"
                rounded
                iconOnly
                onMouseUp={rippleLight}
              >
                <Icon name="favorite" />
              </Buttons>
            </div>
          </div>

          <div className="mt-16">
            <h4 className="text-xl text-gray-700">Sizes</h4>

            <div className="flex flex-wrap gap-x-24 gap-y-8 mt-5">
              <div className="flex flex-wrap items-end gap-x-2 gap-y-8">
                <Buttons color="lightBlue" size="sm" onMouseUp={rippleLight}>
                  small
                </Buttons>
                <Buttons color="lightBlue" onMouseUp={rippleLight}>
                  regular
                </Buttons>
                <Buttons color="lightBlue" size="lg" onMouseUp={rippleLight}>
                  large
                </Buttons>
              </div>

              <div className="flex flex-wrap items-end gap-x-2 gap-y-8">
                <Buttons
                  color="lightBlue"
                  size="sm"
                  rounded
                  iconOnly
                  onMouseUp={rippleLight}
                >
                  <Icon name="favorite" />
                </Buttons>
                <Buttons
                  color="lightBlue"
                  rounded
                  iconOnly
                  onMouseUp={rippleLight}
                >
                  <Icon name="favorite" />
                </Buttons>
                <Buttons
                  color="lightBlue"
                  size="lg"
                  rounded
                  iconOnly
                  onMouseUp={rippleLight}
                >
                  <Icon name="favorite" />
                </Buttons>
              </div>
            </div>
          </div>

          <div className="mt-16">
            <h4 className="text-xl text-gray-700">Colors</h4>

            <div className="flex flex-wrap gap-x-2 gap-y-8 mt-5">
              <Buttons color="blueGray" onMouseUp={rippleLight}>
                Button
              </Buttons>
              <Buttons color="gray" onMouseUp={rippleLight}>
                Button
              </Buttons>
              <Buttons color="brown" onMouseUp={rippleLight}>
                Button
              </Buttons>
              <Buttons color="deepOrange" onMouseUp={rippleLight}>
                Button
              </Buttons>
              <Buttons color="orange" onMouseUp={rippleLight}>
                Button
              </Buttons>
              <Buttons color="amber" onMouseUp={rippleLight}>
                Button
              </Buttons>
              <Buttons color="yellow" onMouseUp={rippleLight}>
                Button
              </Buttons>
              <Buttons color="lime" onMouseUp={rippleLight}>
                Button
              </Buttons>
              <Buttons color="lightGreen" onMouseUp={rippleLight}>
                Button
              </Buttons>
              <Buttons color="green" onMouseUp={rippleLight}>
                Button
              </Buttons>
              <Buttons color="teal" onMouseUp={rippleLight}>
                Button
              </Buttons>
              <Buttons color="cyan" onMouseUp={rippleLight}>
                Button
              </Buttons>
              <Buttons color="lightBlue" onMouseUp={rippleLight}>
                Button
              </Buttons>
              <Buttons color="blue" onMouseUp={rippleLight}>
                Button
              </Buttons>
              <Buttons color="indigo" onMouseUp={rippleLight}>
                Button
              </Buttons>
              <Buttons color="purple" onMouseUp={rippleLight}>
                Button
              </Buttons>
              <Buttons color="deepPurple" onMouseUp={rippleLight}>
                Button
              </Buttons>
              <Buttons color="pink" onMouseUp={rippleLight}>
                Button
              </Buttons>
              <Buttons color="red" onMouseUp={rippleLight}>
                Button
              </Buttons>
            </div>
          </div>
        </div>

        <div className="container max-w-7xl mx-auto mt-36 px-4">
          <H4 color="gray">Alerts</H4>

          <div className="flex flex-col mt-10">
            <Alerts color="blueGray">Material Tailwind Alert.</Alerts>
            <Alerts color="gray">Material Tailwind Alert.</Alerts>
            <Alerts color="brown">Material Tailwind Alert.</Alerts>
            <Alerts color="deepOrange">Material Tailwind Alert.</Alerts>
            <Alerts color="orange">Material Tailwind Alert.</Alerts>
            <Alerts color="amber">Material Tailwind Alert.</Alerts>
            <Alerts color="yellow">Material Tailwind Alert.</Alerts>
            <Alerts color="lime">Material Tailwind Alert.</Alerts>
            <Alerts color="lightGreen">Material Tailwind Alert.</Alerts>
            <Alerts color="green">Material Tailwind Alert.</Alerts>
            <Alerts color="teal">Material Tailwind Alert.</Alerts>
            <Alerts color="cyan">Material Tailwind Alert.</Alerts>
            <Alerts color="lightBlue">Material Tailwind Alert.</Alerts>
            <Alerts color="blue">Material Tailwind Alert.</Alerts>
            <Alerts color="indigo">Material Tailwind Alert.</Alerts>
            <Alerts color="purple">Material Tailwind Alert.</Alerts>
            <Alerts color="deepPurple">Material Tailwind Alert.</Alerts>
            <Alerts color="pink">Material Tailwind Alert.</Alerts>
            <Alerts color="red">Material Tailwind Alert.</Alerts>
          </div>
        </div>

        <div className="container max-w-7xl mx-auto mt-36 px-4">
          <H4 color="gray">Closing Alerts</H4>

          <div className="flex flex-col mt-10">
            <ClosingAlerts color="blueGray">
              Material Tailwind Closing Alert.
            </ClosingAlerts>
            <ClosingAlerts color="gray">
              Material Tailwind Closing Alert.
            </ClosingAlerts>
            <ClosingAlerts color="brown">
              Material Tailwind Closing Alert.
            </ClosingAlerts>
            <ClosingAlerts color="deepOrange">
              Material Tailwind Closing Alert.
            </ClosingAlerts>
            <ClosingAlerts color="orange">
              Material Tailwind Closing Alert.
            </ClosingAlerts>
            <ClosingAlerts color="amber">
              Material Tailwind Closing Alert.
            </ClosingAlerts>
            <ClosingAlerts color="yellow">
              Material Tailwind Closing Alert.
            </ClosingAlerts>
            <ClosingAlerts color="lime">
              Material Tailwind Closing Alert.
            </ClosingAlerts>
            <ClosingAlerts color="lightGreen">
              Material Tailwind Closing Alert.
            </ClosingAlerts>
            <ClosingAlerts color="green">
              Material Tailwind Closing Alert.
            </ClosingAlerts>
            <ClosingAlerts color="teal">
              Material Tailwind Closing Alert.
            </ClosingAlerts>
            <ClosingAlerts color="cyan">
              Material Tailwind Closing Alert.
            </ClosingAlerts>
            <ClosingAlerts color="lightBlue">
              Material Tailwind Closing Alert.
            </ClosingAlerts>
            <ClosingAlerts color="blue">
              Material Tailwind Closing Alert.
            </ClosingAlerts>
            <ClosingAlerts color="indigo">
              Material Tailwind Closing Alert.
            </ClosingAlerts>
            <ClosingAlerts color="purple">
              Material Tailwind Closing Alert.
            </ClosingAlerts>
            <ClosingAlerts color="deepPurple">
              Material Tailwind Closing Alert.
            </ClosingAlerts>
            <ClosingAlerts color="pink">
              Material Tailwind Closing Alert.
            </ClosingAlerts>
            <ClosingAlerts color="red">
              Material Tailwind Closing Alert.
            </ClosingAlerts>
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
            <Labels color="purple">Label</Labels>
            <Labels color="deepPurple">Label</Labels>
            <Labels color="pink">Label</Labels>
            <Labels color="red">Label</Labels>
          </div>
        </div>

        <div className="container max-w-7xl mx-auto mt-36 px-4">
          <H4 color="gray">Closing Labels</H4>

          <div className="flex flex-wrap gap-x-2 gap-y-4 mt-10">
            <ClosingLabels color="blueGray">Label</ClosingLabels>
            <ClosingLabels color="gray">Label</ClosingLabels>
            <ClosingLabels color="brown">Label</ClosingLabels>
            <ClosingLabels color="deepOrange">Label</ClosingLabels>
            <ClosingLabels color="orange">Label</ClosingLabels>
            <ClosingLabels color="amber">Label</ClosingLabels>
            <ClosingLabels color="yellow">Label</ClosingLabels>
            <ClosingLabels color="lime">Label</ClosingLabels>
            <ClosingLabels color="lightGreen">Label</ClosingLabels>
            <ClosingLabels color="green">Label</ClosingLabels>
            <ClosingLabels color="teal">Label</ClosingLabels>
            <ClosingLabels color="cyan">Label</ClosingLabels>
            <ClosingLabels color="lightBlue">Label</ClosingLabels>
            <ClosingLabels color="blue">Label</ClosingLabels>
            <ClosingLabels color="indigo">Label</ClosingLabels>
            <ClosingLabels color="purple">Label</ClosingLabels>
            <ClosingLabels color="deepPurple">Label</ClosingLabels>
            <ClosingLabels color="pink">Label</ClosingLabels>
            <ClosingLabels color="red">Label</ClosingLabels>
          </div>
        </div>

        <div className="container max-w-7xl mx-auto mt-36 px-4">
          <H4 color="gray">Images</H4>

          <div className="flex flex-wrap justify-between gap-8 mt-10">
            <div className="w-64 text-center">
              <Image src={require('assets/img/team-1-800x800.jpg')} />
              <h4 className="text-xl text-blue-gray-700 mt-4">Default</h4>
            </div>

            <div className="w-64 text-center">
              <Image src={require('assets/img/team-2-800x800.jpg')} rounded />
              <h4 className="text-xl text-blue-gray-700 mt-4">Rounded</h4>
            </div>

            <div className="w-64 text-center">
              <Image src={require('assets/img/team-3-800x800.jpg')} raised />
              <h4 className="text-xl text-blue-gray-700 mt-4">Raised</h4>
            </div>

            <div className="w-64 text-center">
              <Image
                src={require('assets/img/team-4-470x470.png')}
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
          <H4 color="gray">DROPDOWNS</H4>
          <div className="mt-10">
            <h4 className="text-xl text-gray-700">Types</h4>

            <div className="flex flex-wrap gap-x-2 gap-y-8 mt-5">
              <Dropdowns
                color="lightBlue"
                buttonText="Dropdown"
                onMouseUp={rippleLight}
              >
                <DropdownItems href="#" onClick={(e) => e.preventDefault()}>
                  Action
                </DropdownItems>
                <DropdownItems href="#" onClick={(e) => e.preventDefault()}>
                  Another Action
                </DropdownItems>
                <DropdownItems href="#" onClick={(e) => e.preventDefault()}>
                  Something else here
                </DropdownItems>
              </Dropdowns>

              <Dropdowns
                color="lightBlue"
                buttonText="Dropup"
                placement="top-end"
                onMouseUp={rippleLight}
              >
                <DropdownItems href="#" onClick={(e) => e.preventDefault()}>
                  Action
                </DropdownItems>
                <DropdownItems href="#" onClick={(e) => e.preventDefault()}>
                  Another Action
                </DropdownItems>
                <DropdownItems href="#" onClick={(e) => e.preventDefault()}>
                  Something else here
                </DropdownItems>
              </Dropdowns>
            </div>
          </div>

          <div className="mt-16">
            <h4 className="text-xl text-gray-700">Styles</h4>

            <div className="flex flex-wrap gap-x-2 gap-y-8 mt-5">
              <Dropdowns
                color="lightBlue"
                buttonText="Default"
                onMouseUp={rippleLight}
              >
                <DropdownItems href="#" onClick={(e) => e.preventDefault()}>
                  Action
                </DropdownItems>
                <DropdownItems href="#" onClick={(e) => e.preventDefault()}>
                  Another Action
                </DropdownItems>
                <DropdownItems href="#" onClick={(e) => e.preventDefault()}>
                  Something else here
                </DropdownItems>
              </Dropdowns>
              <Dropdowns
                color="lightBlue"
                buttonText="Outline"
                buttonType="outline"
                onMouseUp={rippleDark}
              >
                <DropdownItems href="#" onClick={(e) => e.preventDefault()}>
                  Action
                </DropdownItems>
                <DropdownItems href="#" onClick={(e) => e.preventDefault()}>
                  Another Action
                </DropdownItems>
                <DropdownItems href="#" onClick={(e) => e.preventDefault()}>
                  Something else here
                </DropdownItems>
              </Dropdowns>
              <Dropdowns
                color="lightBlue"
                buttonText="Rounded"
                rounded
                onMouseUp={rippleLight}
              >
                <DropdownItems href="#" onClick={(e) => e.preventDefault()}>
                  Action
                </DropdownItems>
                <DropdownItems href="#" onClick={(e) => e.preventDefault()}>
                  Another Action
                </DropdownItems>
                <DropdownItems href="#" onClick={(e) => e.preventDefault()}>
                  Something else here
                </DropdownItems>
              </Dropdowns>
              <Dropdowns
                color="lightBlue"
                buttonText="Link"
                buttonType="link"
                onMouseUp={rippleDark}
              >
                <DropdownItems href="#" onClick={(e) => e.preventDefault()}>
                  Action
                </DropdownItems>
                <DropdownItems href="#" onClick={(e) => e.preventDefault()}>
                  Another Action
                </DropdownItems>
                <DropdownItems href="#" onClick={(e) => e.preventDefault()}>
                  Something else here
                </DropdownItems>
              </Dropdowns>
            </div>
          </div>

          <div className="mt-16">
            <h4 className="text-xl text-gray-700">Sizes</h4>

            <div className="flex flex-wrap items-end gap-x-2 gap-y-8 mt-5">
              <Dropdowns
                color="lightBlue"
                buttonText="Small"
                size="sm"
                onMouseUp={rippleLight}
              >
                <DropdownItems href="#" onClick={(e) => e.preventDefault()}>
                  Action
                </DropdownItems>
                <DropdownItems href="#" onClick={(e) => e.preventDefault()}>
                  Another Action
                </DropdownItems>
                <DropdownItems href="#" onClick={(e) => e.preventDefault()}>
                  Something else here
                </DropdownItems>
              </Dropdowns>
              <Dropdowns
                color="lightBlue"
                buttonText="Regular"
                onMouseUp={rippleLight}
              >
                <DropdownItems href="#" onClick={(e) => e.preventDefault()}>
                  Action
                </DropdownItems>
                <DropdownItems href="#" onClick={(e) => e.preventDefault()}>
                  Another Action
                </DropdownItems>
                <DropdownItems href="#" onClick={(e) => e.preventDefault()}>
                  Something else here
                </DropdownItems>
              </Dropdowns>
              <Dropdowns
                color="lightBlue"
                buttonText="Large"
                size="lg"
                onMouseUp={rippleLight}
              >
                <DropdownItems href="#" onClick={(e) => e.preventDefault()}>
                  Action
                </DropdownItems>
                <DropdownItems href="#" onClick={(e) => e.preventDefault()}>
                  Another Action
                </DropdownItems>
                <DropdownItems href="#" onClick={(e) => e.preventDefault()}>
                  Something else here
                </DropdownItems>
              </Dropdowns>
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
                  onMouseUp={rippleDark}
                >
                  <Icon name="keyboard_arrow_left" />
                </PaginationItem>
                <PaginationItem
                  color="lightBlue"
                  href="#1"
                  onClick={(e) => e.preventDefault()}
                  onMouseUp={rippleLight}
                >
                  1
                </PaginationItem>
                <PaginationItem
                  href="#2"
                  onClick={(e) => e.preventDefault()}
                  onMouseUp={rippleDark}
                >
                  2
                </PaginationItem>
                <PaginationItem
                  href="#3"
                  onClick={(e) => e.preventDefault()}
                  onMouseUp={rippleDark}
                >
                  3
                </PaginationItem>
                <PaginationItem
                  href="#4"
                  onClick={(e) => e.preventDefault()}
                  onMouseUp={rippleDark}
                >
                  4
                </PaginationItem>
                <PaginationItem
                  href="#5"
                  onClick={(e) => e.preventDefault()}
                  onMouseUp={rippleDark}
                >
                  5
                </PaginationItem>
                <PaginationItem
                  href="#next"
                  onClick={(e) => e.preventDefault()}
                  onMouseUp={rippleDark}
                >
                  <Icon name="keyboard_arrow_right" />
                </PaginationItem>
              </Pagination>
            </div>
          </div>

          <div className="mt-16">
            <h4 className="text-xl text-gray-700">With First & Last Buttons</h4>

            <div className="w-full mt-5">
              <Pagination>
                <PaginationItem button href="#first" onMouseUp={rippleDark}>
                  First
                </PaginationItem>
                <PaginationItem
                  href="#prev"
                  onClick={(e) => e.preventDefault()}
                  onMouseUp={rippleDark}
                >
                  <Icon name="keyboard_arrow_left" />
                </PaginationItem>
                <PaginationItem
                  color="lightBlue"
                  href="#1"
                  onClick={(e) => e.preventDefault()}
                  onMouseUp={rippleLight}
                >
                  1
                </PaginationItem>
                <PaginationItem
                  href="#2"
                  onClick={(e) => e.preventDefault()}
                  onMouseUp={rippleDark}
                >
                  2
                </PaginationItem>
                <PaginationItem
                  href="#3"
                  onClick={(e) => e.preventDefault()}
                  onMouseUp={rippleDark}
                >
                  3
                </PaginationItem>
                <PaginationItem
                  href="#4"
                  onClick={(e) => e.preventDefault()}
                  onMouseUp={rippleDark}
                >
                  4
                </PaginationItem>
                <PaginationItem
                  href="#5"
                  onClick={(e) => e.preventDefault()}
                  onMouseUp={rippleDark}
                >
                  5
                </PaginationItem>
                <PaginationItem
                  href="#next"
                  onClick={(e) => e.preventDefault()}
                  onMouseUp={rippleDark}
                >
                  <Icon name="keyboard_arrow_right" />
                </PaginationItem>
                <PaginationItem button href="#last" onMouseUp={rippleDark}>
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
          <H4 color="gray">typography</H4>

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
                  href="https://github.com/creativetimofficial/notus-nextjs/blob/master/LICENSE.md?ref=nnjs-footer"
                >
                  MIT License
                </a>
              </li>
              <li>
                <a
                  className="text-gray-700 hover:text-gray-900 font-medium block pb-2 text-sm"
                  href="https://creative-tim.com/terms?ref=nnjs-footer"
                >
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a
                  className="text-gray-700 hover:text-gray-900 font-medium block pb-2 text-sm"
                  href="https://creative-tim.com/privacy?ref=nnjs-footer"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  className="text-gray-700 hover:text-gray-900 font-medium block pb-2 text-sm"
                  href="https://creative-tim.com/contact-us?ref=nnjs-footer"
                >
                  Contact Us
                </a>
              </li>
            </ul>

            <div className="text-sm text-gray-700 font-medium py-1">
              Copyright © {new Date().getFullYear()} Notus NextJS by{' '}
              <a
                href="https://www.creative-tim.com?ref=nnjs-footer"
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
