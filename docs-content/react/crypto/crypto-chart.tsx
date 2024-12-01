import React from "react";

import dynamic from "next/dynamic";

import {
  Menu,
  Card,
  Button,
  CardBody,
  MenuItem,
  MenuList,
  CardHeader,
  Typography,
  MenuHandler,
} from "@material-tailwind/react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

// charts import
const Chart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

// deepmerge
import merge from "deepmerge";

interface ChartsPropsType {
  height: number;
  series: object[];
  options: object;
}

function AreaChart({
  height = 350,
  series,
  colors,
  options,
}: Partial<ChartsPropsType> & {
  colors: string | string[];
}) {
  const chartOptions = React.useMemo(
    () => ({
      colors,
      ...merge(
        {
          chart: {
            height: height,
            type: "area",
            zoom: {
              enabled: false,
            },
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
            show: false,
          },
          markers: {
            size: 0,
            strokeWidth: 0,
            strokeColors: "transparent",
          },
          stroke: {
            curve: "smooth",
            width: 2,
          },
          grid: {
            show: true,
            borderColor: "#EEEEEE",
            strokeDashArray: 5,
            xaxis: {
              lines: {
                show: false,
              },
            },
            padding: {
              top: 5,
              right: 20,
            },
          },
          tooltip: {
            theme: "light",
          },
          yaxis: {
            labels: {
              show: false,
            },
          },
          xaxis: {
            axisTicks: {
              show: false,
            },
            axisBorder: {
              show: false,
            },
            labels: {
              show: false,
            },
          },
          fill: {
            type: "gradient",
            gradient: {
              shadeIntensity: 1,
              opacityFrom: 0,
              opacityTo: 0,
              stops: [0, 100],
            },
          },
        },
        options ? options : {},
      ),
    }),
    [height, colors, options],
  );

  return (
    <Chart
      type="area"
      height={height}
      series={series as ApexAxisChartSeries}
      options={chartOptions as any}
    />
  );
}

export function CryptoChart() {
  return (
    <Card className="h-fit w-full border border-gray-200 shadow-md">
      <CardHeader
        shadow={false}
        floated={false}
        className="flex items-start justify-between overflow-visible rounded-none"
      >
        <div>
          <Typography
            variant="small"
            className="mb-1 font-medium text-gray-600"
          >
            Current Price
          </Typography>
          <Typography variant="h3" color="blue-gray">
            $156,091 <span className="text-gray-500">0.33</span>
          </Typography>
        </div>
        <Menu>
          <MenuHandler>
            <Button
              size="sm"
              color="gray"
              variant="outlined"
              className="flex items-center gap-1 !border-gray-300"
            >
              last 24h
              <ChevronDownIcon
                strokeWidth={4}
                className="h-3 w-3 text-gray-900"
              />
            </Button>
          </MenuHandler>
          <MenuList>
            <MenuItem>last 12h</MenuItem>
            <MenuItem>last 10h</MenuItem>
            <MenuItem>last 24h</MenuItem>
          </MenuList>
        </Menu>
      </CardHeader>
      <AreaChart
        colors={["#4CAF50"]}
        options={{
          xaxis: {
            categories: [
              "Jan",
              "Feb",
              "Mar",
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
        }}
        series={[
          {
            name: "2023 Sales",
            data: [50, 40, 300, 320, 500, 350, 200, 230, 500],
          },
        ]}
      />
      <CardBody className="flex flex-wrap justify-between gap-y-4 pt-4">
        <div>
          <Typography
            variant="small"
            className="mb-1 font-medium text-gray-600"
          >
            Market Cap
          </Typography>
          <Typography variant="h3" color="blue-gray">
            $10,932.033
          </Typography>
        </div>
        <div>
          <Typography
            variant="small"
            className="mb-1 font-medium text-gray-600"
          >
            24h Volume
          </Typography>
          <Typography variant="h3" color="blue-gray">
            $22,122,267
          </Typography>
        </div>
      </CardBody>
    </Card>
  );
}

export default CryptoChart;
