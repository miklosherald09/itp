import { useRef } from "react";
import { Box, Typography } from "@mui/material";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import ChartDataLabels from "chartjs-plugin-datalabels";

// Register Chart.js components and the datalabels plugin
ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels);

interface PieChartProps {
  sold: number;
  unsold: number;
}

export default function PieChart({ sold, unsold }: PieChartProps) {
  const chartRef = useRef(null);

  // Calculate percentages
  const total = sold + unsold;
  const soldPercentage = total > 0 ? ((sold / total) * 100).toFixed(1) : 0;
  const unsoldPercentage = total > 0 ? ((unsold / total) * 100).toFixed(1) : 0;

  // Chart data
  const data = {
    labels: ["Sold", "Unsold"],
    datasets: [
      {
        data: [sold, unsold],
        backgroundColor: ["rgba(54, 162, 235, 0.6)", "rgba(255, 99, 132, 0.6)"],
        borderColor: ["rgb(54, 162, 235)", "rgb(255, 99, 132)"],
        borderWidth: 1,
      },
    ],
  };

  // Chart options
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: "Sold vs Unsold Items",
      },
      datalabels: {
        color: "#fff",
        formatter: (value: number, context: any) => {
          const percentage =
            context.chart.data.datasets[0].data[context.dataIndex] === sold
              ? soldPercentage
              : unsoldPercentage;
          return `${percentage}%`;
        },
        font: {
          weight: "bold" as const,
        },
      },
    },
  };

  return (
    <Box sx={{ maxWidth: 400, height: 300, mx: "auto", my: 4 }}>
      <Typography variant="h6" gutterBottom align="center">
        Item Status Distribution
      </Typography>
      <Box sx={{ position: "relative", height: "100%" }}>
        <Pie data={data} options={options} ref={chartRef} />
      </Box>
    </Box>
  );
}
