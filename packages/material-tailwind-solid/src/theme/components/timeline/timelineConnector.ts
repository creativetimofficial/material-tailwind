export interface TimelineConnectorStyleTypes {
  styles: {
    base: {
      container: Record<string, string>;
      line: Record<string, string>;
    };
  };
}

export const timelineConnector: TimelineConnectorStyleTypes = {
  styles: {
    base: {
      container: {
        position: "absolute",
        left: "left-0",
        display: "grid",
        justifyContent: "justify-center",
        backgroundColor: "bg-transparent",
        transition: "transition-opacity duration-200",
      },
      line: {
        width: "w-0.5",
        height: "h-full",
        backgroundColor: "bg-blue-gray-100",
      },
    },
  },
};

export default timelineConnector;
