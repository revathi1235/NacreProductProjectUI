import React, { useState, useEffect } from 'react';
import { Doughnut } from 'react-chartjs-2';

const DoughnutChart = () => {
  const createGradient = (ctx, chartArea, colorStart, colorEnd) => {
    const gradient = ctx.createLinearGradient(0, chartArea.bottom, 0, chartArea.top);
    gradient.addColorStop(0, colorStart);
    gradient.addColorStop(1, colorEnd);
    return gradient;
  };

  const getBackgroundColors = (context) => {
    const chart = context.chart;
    const { ctx, chartArea } = chart;

    if (!chartArea) {
      return ['rgba(0, 26, 172, 0.5)', 'rgba(192, 0, 0, 0.5)'];
    }

    return [
      createGradient(ctx, chartArea, 'rgba(0, 26, 172, 1)', 'rgba(36, 162, 235, 1)'),
      createGradient(ctx, chartArea, 'rgba(192, 0, 0, 1)', 'rgba(255, 99, 132, 1)')
    ];
  };

  // Dummy data for testing
  const [ordersCompleted, setOrdersCompleted] = useState(50);
  const [ordersInProgress, setOrdersInProgress] = useState(30);

  const data = {
    labels: ['Orders Completed', 'Orders in Progress'],
    datasets: [
      {
        data: [ordersCompleted, ordersInProgress],
        backgroundColor: getBackgroundColors,
        hoverBackgroundColor: ['#36A2EB', '#FF6384'],
      }
    ]
  };

  return (
    <Doughnut
      data={data}
      style={{ height: "300px", width: "400px", padding: "0px 25px 80px 30px" }}
    />
  );
}

export default DoughnutChart;
