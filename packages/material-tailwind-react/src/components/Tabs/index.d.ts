import { ReactNode } from "react";

// generic types
import { animate } from "../../types/generic";

interface TabsHeaderProps {
  className?: string;
  children: ReactNode;
}

declare function TabsHeader(props: TabsHeaderProps): JSX.Element;

interface TabsBodyProps {
  className?: string;
  children: ReactNode;
}

declare function TabsBody(props: TabsBodyProps): JSX.Element;

interface TabProps {
  value: string;
  className?: string;
  disabled?: boolean;
  children: ReactNode;
}

declare function Tab(props: TabProps): JSX.Element;

interface TabPanelProps {
  value: string;
  animate?: animate;
  className?: string;
  disabled?: boolean;
  children: ReactNode;
}

declare function TabPanel(props: TabPanelProps): JSX.Element;

interface TabsProps {
  value: string;
  className?: string;
  children: ReactNode;
}

declare function Tabs(props: TabsProps): JSX.Element;

export { Tabs, TabsHeader, TabsBody, Tab, TabPanel };
export default Tabs;