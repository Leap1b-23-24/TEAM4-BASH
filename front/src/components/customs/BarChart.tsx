import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

export const BarChart = () => {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Bar Chart",
      },
    },
  };

  //   const labels = recordList.map((item) => item.category);

  const data = {
    // labels,
    // datasets: [
    //   {
    //     label: "Income",
    //     data: recordList.map((item) =>
    //       item.type === "Income" ? item.amount : null
    //     ),
    //     backgroundColor: "#23E01F",
    //   },
    //   {
    //     label: "Expense",
    //     data: recordList.map((item) =>
    //       item.type === "Expense" ? item.amount : null
    //     ),
    //     backgroundColor: "#eb1e1e ",
    //   },
    // ],
  };

  return (
    <div className="md:w-[600px] w-[300px] h-fit">
      {/* <Bar options={options} data={data} /> */}
    </div>
  );
};
