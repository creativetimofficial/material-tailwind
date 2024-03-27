import Chart from "react-apexcharts";
import { SelectFace3d } from "iconoir-react";
import type { ApexOptions } from "apexcharts";
import { Card, Typography } from "@material-tailwind/react/dist";

const chartConfig = {
  type: "pie",
  height: 240,
  width: 480,
  series: [44, 55, 13, 43, 22],
  options: {
    responsive: [
      {
        breakpoint: 600,
        options: {
          chart: {
            width: "100%",
          },
          legend: {
            position: "bottom",
          },
        },
      },
    ],
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
    legend: {
      show: true,
    },
    labels: ["Primary", "Info", "Success", "Warning", "Error"],
    colors: ["#020617", "#2563EB", "#16A34A", "#EAB308", "#DC2626"],
  } as ApexOptions,
} as ApexChart;

export function PieChart() {
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
            Pie Chart
          </Typography>
          <Typography className="mt-1 max-w-sm text-foreground">
            Visualize your data in a simple way using the
            @material-tailwind/react chart plugin.
          </Typography>
        </div>
      </Card.Header>
      <Card.Body className="grid place-items-center">
        <Chart {...chartConfig} />
      </Card.Body>
    </Card>
  );
}
