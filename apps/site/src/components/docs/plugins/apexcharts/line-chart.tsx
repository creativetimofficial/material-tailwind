import Chart from "react-apexcharts";
import { SelectFace3d } from "iconoir-react";
import type { ApexOptions } from "apexcharts";
import { Card, Typography } from "@material-tailwind/react";

const chartConfig = {
  type: "line",
  height: 240,
  series: [
    {
      name: "Sales",
      data: [50, 40, 300, 320, 500, 350, 200, 230, 500],
    },
  ],
  options: {
    chart: {
      toolbar: {
        show: false,
      },
    },
    title: {
      show: "",
    },
    dataLabels: {
      enabled: false,
    },
    colors: ["#111827"],
    stroke: {
      curve: "smooth",
      lineCap: "round",
    },
    markers: {
      size: 0,
    },
    xaxis: {
      axisTicks: {
        show: false,
      },
      axisBorder: {
        show: false,
      },
      labels: {
        style: {
          colors: "#4B5563",
          fontSize: "12px",
          fontFamily: "inherit",
          fontWeight: 400,
        },
      },
      categories: [
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
    },
    yaxis: {
      labels: {
        style: {
          colors: "#4B5563",
          fontSize: "12px",
          fontFamily: "inherit",
          fontWeight: 400,
        },
      },
    },
    grid: {
      show: true,
      borderColor: "#E5E7EB",
      strokeDashArray: 5,
      xaxis: {
        lines: {
          show: true,
        },
      },
      padding: {
        top: 5,
        right: 20,
      },
    },
    fill: {
      opacity: 0.8,
    },
    tooltip: {
      theme: "dark",
    },
  } as ApexOptions,
} as ApexChart;

export function LineChart() {
  return (
    <Card>
      <Card.Header className="m-0 flex flex-wrap items-center gap-4 p-4">
        <Card
          color="primary"
          variant="gradient"
          className="grid h-16 w-16 shrink-0 place-items-center rounded-md text-primary-foreground md:h-20 md:w-20"
        >
          <SelectFace3d className="h-6 w-6 md:h-8 md:w-8" />
        </Card>
        <div>
          <Typography type="h6" color="primary">
            Bar Chart
          </Typography>
          <Typography className="mt-1 max-w-sm text-foreground">
            Visualize your data in a simple way using the
            @material-tailwind/react chart plugin.
          </Typography>
        </div>
      </Card.Header>
      <Card.Body>
        <Chart {...chartConfig} />
      </Card.Body>
    </Card>
  );
}
