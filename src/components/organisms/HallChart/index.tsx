'use client';

import { useWindowSize } from '@react-hookz/web';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { FC, useRef } from 'react';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

// TODO data of character for team1 vs team2
export type HallChartData = {
  label: string;
  data: number;
  color?: string;
};

export type HallChartProps = {
  data: HallChartData[];
  chartTitle?: string;
};

export const HallChart: FC<HallChartProps> = ({ data, chartTitle }) => {
  const windowSize = useWindowSize();
  const animate = useRef(true);

  return (
    <div className="w-full mt-5">
      <Bar
        key={JSON.stringify(windowSize)} // resize hack
        options={{
          animation: animate.current && {
            onComplete: () => (animate.current = false),
          },
          indexAxis: 'y',
          responsive: true,
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
    </div>
  );
};

HallChart.displayName = HallChart.name;

const getRandomColor = () => {
  const red = Math.floor(Math.random() * 255);
  const green = Math.floor(Math.random() * 255);
  const blue = Math.floor(Math.random() * 255);

  return `rgb(${red}, ${green}, ${blue})`;
};
