"use client";

import { useEffect } from "react";
import ApexCharts from "apexcharts";

export default function PieChart() {
  useEffect(() => {
    const options = {
      series: [44, 55, 13, 43, 22],
      chart: {
        type: "pie",
        width: 280,
        height: 280,
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
      colors: ["#0062ff", "#00bf6b", "#fca327", "#ef4444", "#030712"],
      legend: {
        show: false,
      },
    };

    const chart = new ApexCharts(document.querySelector("#pie-chart"), options);
    chart.render();

    return () => {
      chart.destroy();
    };
  }, []);

  // const chartHTML = ;

  return (
    <div className="w-full place-items-center"
        dangerouslySetInnerHTML={{ __html: `
<div class="w-full rounded-lg border shadow-sm overflow-hidden bg-background border-surface shadow-black/5">
  <div class="relative mx-4 mt-4 flex flex-col gap-4 overflow-hidden rounded-none bg-transparent bg-clip-border text-slate-500 shadow-none md:flex-row md:items-center">
    <div class="w-max rounded-lg bg-slate-800 p-5 text-white">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        aria-hidden="true"
        class="h-6 w-6"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M6.429 9.75L2.25 12l4.179 2.25m0-4.5l5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0l4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0l-5.571 3-5.571-3"
        ></path>
      </svg>
    </div>
    <div>
      <h6 class="block font-sans text-base font-semibold leading-relaxed tracking-normal text-slate-800 antialiased">
        Pie Chart
      </h6>
      <p class="block max-w-sm font-sans text-sm font-normal leading-normal text-slate-500 antialiased">
        Visualize your data in a simple way using the
        @material-tailwind/html chart plugin.
      </p>
    </div>
  </div>
  <div class="py-6 mt-4 grid place-items-center px-2">
    <div id="pie-chart"></div>
  </div>
</div>
 
<script src="https://cdn.jsdelivr.net/npm/apexcharts"></script>
<script>
const chartConfig = {
  series: [44, 55, 13, 43, 22],
  chart: {
    type: "pie",
    width: 280,
    height: 280,
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
  colors: ["#0062ff", "#00bf6b", "#fca327", "#ef4444", "#030712"],
  legend: {
    show: false,
  },
};
 
const chart = new ApexCharts(document.querySelector("#pie-chart"), chartConfig);
 
chart.render();
</script>
  ` }} />
  );
}



