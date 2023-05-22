'use client';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { FC, forwardRef } from 'react';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);
export type HallChartData = {
  label: string;
  data: number;
  color?: string;
};

export type HallChartProps = {
  data: HallChartData[];
  chartTitle?: string;
};

export const HallChart: FC<HallChartProps> = forwardRef<any, HallChartProps>( // ChartJSOrUndefined `Note: 'ChartJSOrUndefined' is declared but its value is never read.ts(6133)`
  ({ data, chartTitle }, ref) => {
    return (
      <Bar
        ref={ref}
        options={{
          indexAxis: 'y',
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            title: {
              display: Boolean(chartTitle),
              text: chartTitle,
            },
            legend: {
              display: false,
            },
          },
        }}
        data={{
          // TODO include characters's profile image as labels
          labels: data.map(({ label }) => label),
          datasets: [
            {
              data: data.map(({ data }) => data),
              label: 'hakdog',
              backgroundColor: data.map(
                ({ color }) => color || getRandomColor()
              ),
            },
          ],
        }}
      />
    );
  }
);

HallChart.displayName = HallChart.name;

const getRandomColor = () => {
  const red = Math.floor(Math.random() * 255);
  const green = Math.floor(Math.random() * 255);
  const blue = Math.floor(Math.random() * 255);

  return `rgb(${red}, ${green}, ${blue})`;
};
