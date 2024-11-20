"use client";

import * as React from "react";
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });
import { SelectFace3d } from "iconoir-react";
import type { ApexOptions } from "apexcharts";
import { Card, Typography } from "@material-tailwind/react";
import { useTheme } from "next-themes";

function rgbToHex(rgb) {
  return (
    "#" +
    rgb
      .map((x) => {
        const hex = parseInt(x, 10).toString(16);
        return hex.length === 1 ? "0" + hex : hex;
      })
      .join("")
  );
}

export default function PieChart() {
  const { theme } = useTheme();
  const [vars, setVars] = React.useState<CSSStyleDeclaration | null>(null);

  React.useEffect(() => {
    const cssVarValue = window.getComputedStyle(document.documentElement);

    setVars(cssVarValue);
  }, [theme]);

  const colorPrimary = vars
    ? rgbToHex(vars.getPropertyValue("--color-primary").split(" "))
    : "";
  const colorInfo = vars
    ? rgbToHex(vars.getPropertyValue("--color-info").split(" "))
    : "";
  const colorSuccess = vars
    ? rgbToHex(vars.getPropertyValue("--color-success").split(" "))
    : "";
  const colorWarning = vars
    ? rgbToHex(vars.getPropertyValue("--color-warning").split(" "))
    : "";
  const colorError = vars
    ? rgbToHex(vars.getPropertyValue("--color-error").split(" "))
    : "";

  const chartConfig = React.useMemo(
    () =>
      ({
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
            show: false,
          },
          labels: ["Primary", "Info", "Success", "Warning", "Error"],
          colors: [
            colorPrimary,
            colorInfo,
            colorSuccess,
            colorWarning,
            colorError,
          ],
        },
      }) as ApexOptions,
    [colorPrimary, colorInfo, colorSuccess, colorWarning, colorError],
  );

  return (
    <Card>
      <Card.Header className="m-0 flex flex-wrap items-center gap-4 p-4">
        <Card
          color="primary"
          className="grid h-16 w-16 shrink-0 place-items-center rounded-md text-primary-foreground md:h-20 md:w-20"
        >
          <SelectFace3d className="h-6 w-6 md:h-8 md:w-8" />
        </Card>
        <div>
          <Typography type="h6">Pie Chart</Typography>
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
