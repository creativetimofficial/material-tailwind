import React from 'react';

const colors = [
  'blueGray',
  'gray',
  'brown',
  'deepOrange',
  'orange',
  'amber',
  'yellow',
  'lime',
  'lightGreen',
  'green',
  'teal',
  'cyan',
  'lightBlue',
  'blue',
  'indigo',
  'deepPurple',
  'purple',
  'pink',
  'red',
];

const Tabs = ({ color }) => {
  const [openTab, setOpenTab] = React.useState(1);
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full">
          <ul
            className={`bg-${color}-500 rounded-t flex justify-start mb-0 list-none"
            role="tablist`}
          >
            <li className="text-center w-full">
              <a
                className={
                  'text-sm font-medium py-4 px-6 block leading-normal text-white hover:bg-white hover:bg-opacity-10 ' +
                  (openTab === 1 &&
                    `bg-white bg-opacity-10 border border-t-0 border-l-0 border-r-0 border-b-2 border-white`)
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(1);
                }}
                data-toggle="tab"
                href="#link1"
                role="tablist"
              >
                Profile
              </a>
            </li>
            <li className="text-center w-full">
              <a
                className={
                  'text-sm font-medium py-4 px-6 block leading-normal text-white hover:bg-white hover:bg-opacity-10 ' +
                  (openTab === 2 &&
                    `bg-white bg-opacity-10 border border-t-0 border-l-0 border-r-0 border-b-2 border-white`)
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(2);
                }}
                data-toggle="tab"
                href="#link2"
                role="tablist"
              >
                Settings
              </a>
            </li>
            <li className="text-center w-full">
              <a
                className={
                  'text-sm font-medium py-4 px-6 block leading-normal text-white hover:bg-white hover:bg-opacity-10 ' +
                  (openTab === 3 &&
                    `bg-white bg-opacity-10 border border-t-0 border-l-0 border-r-0 border-b-2 border-white`)
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(3);
                }}
                data-toggle="tab"
                href="#link3"
                role="tablist"
              >
                Options
              </a>
            </li>
          </ul>
          <div className="relative flex flex-col min-w-0 break-words bg-white rounded-b shadow w-full mb-6">
            <div className="px-4 py-5 flex-auto">
              {/* Tab panes */}
              <div className="tab-content tab-space">
                <div className={openTab === 1 ? 'block' : 'hidden'} id="link1">
                  <p>
                    Collaboratively administrate empowered markets via
                    plug-and-play networks. Dynamically procrastinate B2C users
                    after installed base benefits.
                    <br />
                    <br /> Dramatically visualize customer directed convergence
                    without revolutionary ROI.
                  </p>
                </div>
                <div className={openTab === 2 ? 'block' : 'hidden'} id="link2">
                  <p>
                    Completely synergize resource taxing relationships via
                    premier niche markets. Professionally cultivate one-to-one
                    customer service with robust ideas.
                    <br />
                    <br />
                    Dynamically innovate resource-leveling customer service for
                    state of the art customer service.
                  </p>
                </div>
                <div className={openTab === 3 ? 'block' : 'hidden'} id="link3">
                  <p>
                    Efficiently unleash cross-media information without
                    cross-media value. Quickly maximize timely deliverables for
                    real-time schemas.
                    <br />
                    <br /> Dramatically maintain clicks-and-mortar solutions
                    without functional solutions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tabs;

// export default function TabsText() {
//   return (
//     <>
//       {colors.map((prop, key) => {
//         return <Tabs key={key} color={prop} />;
//       })}
//     </>
//   );
// }
