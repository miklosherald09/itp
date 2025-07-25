import React from "react";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import Box from "@mui/material/Box"; // Import Box from MUI
import Typography from "@mui/material/Typography"; // Import Typography from MUI
import Stack from "@mui/material/Stack"; // Import Stack for layout
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord"; // Icon for legend color dots
import { PieLabelProps } from "recharts/types/polar/Pie";

// Define a type for your data entries
interface ChartDataItem {
  name: string;
  value: number;
}

// Sample data for owned and system items
const data: ChartDataItem[] = [
  { name: "Owned", value: 0 },
  { name: "System", value: 999999999999999 },
];

// Define colors for the pie chart segments
const COLORS: string[] = ["#8884d8", "#82ca9d"]; // Blue for Owned, Green for System

// Custom Legend component using MUI
const CustomLegend: React.FC<any> = ({ payload }) => {
  return (
    <Stack
      direction="row"
      spacing={2}
      justifyContent="center"
      alignItems="center"
      sx={{ mt: 2 }}
    >
      {payload.map((entry: any, index: number) => (
        <Box key={`item-${index}`} className="flex items-center">
          <FiberManualRecordIcon
            sx={{ color: entry.color, fontSize: 16, mr: 0.5 }}
          />
          <Typography variant="body2" className="text-gray-700">
            {entry.value}
          </Typography>
        </Box>
      ))}
    </Stack>
  );
};

const PieChartComponent: React.FC = () => {
  // Calculate total for percentage calculation
  const total: number = data.reduce((sum, entry) => sum + entry.value, 0);

  return (
    <div className="mt-4 flex flex-col items-center justify-center bg-gray-100 sm:p-12">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Asset Overview</h1>

      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-xl font-semibold text-gray-700 mb-4">
          Owned vs. System Items
        </h2>
        <div className="h-80 w-full">
          {" "}
          {/* Responsive container for the chart */}
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                cx="50%" // Center X position
                cy="50%" // Center Y position
                innerRadius={60} // Inner radius of the pie slices
                outerRadius={80} // Outer radius of the pie slices
                fill="#8884d8"
                paddingAngle={5} // Space between slices
                dataKey="value"
                // Type the label function parameters
                label={({ name, percent }: PieLabelProps) =>
                  `${name}: ${((percent ?? 0) * 100).toFixed(0)}%`
                } // Custom label for each slice
              >
                {data.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              {/* Type the formatter function parameters */}
              <Tooltip
                formatter={(value: number, name: string) => [
                  `${value} items`,
                  name,
                ]}
              />{" "}
              {/* Custom tooltip format */}
              {/* Using the custom legend component */}
              <Legend content={<CustomLegend />} />
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div className="mt-6 text-center text-gray-600">
          <p>Total Items: {total}</p>
          {data.map((item: ChartDataItem, index: number) => (
            <p key={index} className="mt-1">
              {item.name}: {item.value} items (
              {((item.value / total) * 100).toFixed(2)}%)
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PieChartComponent;
