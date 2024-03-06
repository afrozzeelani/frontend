import React, { useState, useEffect } from "react";
import axios from "axios";
import Chart from "react-apexcharts";
import { FaChartLine } from "react-icons/fa";

const TaskChart = () => {
  const [departmentData, setDepartmentData] = useState([]);
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const loadEmployeeData = () => {
    axios
      .get("http://localhost:4000/api/employee", {
        headers: {
          authorization: localStorage.getItem("token") || ""
        }
      })
      .then((response) => {
        if (Array.isArray(response.data)) {
          setDepartmentData(
            response.data.map(
              (data) => data["department"][0]?.DepartmentName || ""
            )
          );
        } else {
          console.error("Data received is not an array:", response.data);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const loadTaskData = async () => {
    try {
      const response = await axios.get("http://localhost:4000/api/tasks");
      setTasks(response.data);
    } catch (error) {
      console.error("Error fetching tasks:", error.message);
      setError("Error fetching tasks. Please try again later.");
    } finally {
      setLoading(false);
      setTimeout(loadTaskData, 1000);
    }
  };

  useEffect(() => {
    loadEmployeeData();
    loadTaskData();

    return () => clearTimeout();
  }, []);

  const departmentCounts = {};
  departmentData.forEach((department) => {
    departmentCounts[department] = (departmentCounts[department] || 0) + 1;
  });

  const taskStatusCounts = {
    Total: tasks.length,
    Completed: tasks.filter((task) => task.status === "Completed").length,
    Rejected: tasks.filter((task) => task.status === "Rejected").length,
    Canceled: tasks.filter((task) => task.status === "Canceled").length,
    Active: tasks.filter((task) => task.status === "Active").length,
    Pending: tasks.filter((task) => task.status === "Pending").length,
    Overdue: tasks.filter((task) => task.status === "Overdue").length
  };

  const chartData = {
    series: [
      {
        name: "Total Employee",
        data: Object.values(departmentCounts)
      }
    ],
    options: {
      chart: {
        type: "bar",
        height: 350
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "40%",
          endingShape: "rounded"
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        show: true,
        width: 2,
        colors: ["transparent"]
      },
      xaxis: {
        categories: Object.keys(departmentCounts),
        title: {
          text: "Department Wise Employee"
        }
      },
      yaxis: {
        title: {
          text: "Number of Employee"
        }
      },

      fill: {
        opacity: 1,
        colors: ["rgb(100, 150, 200)"] // Change bar colors
      },
      tooltip: {
        y: {
          formatter: function (val) {
            return " " + val + "";
          }
        },
        markers: {
          colors: "yellow"
        }
      }
    }
  };
  const taskStatusChartData = {
    options: {
      chart: {
        id: "task-status-chart",
        type: "bar"
      },
      fill: {
        opacity: 1,
        colors: ["var(--primaryDashColorDark)"] // Change bar colors
      },
      xaxis: {
        categories: Object.keys(taskStatusCounts),
        title: {
          text: "Task Status"
        }
      },
      yaxis: {
        title: {
          text: "Number of Tasks"
        }
      }
    },
    series: [
      {
        name: "Task Status",
        data: Object.values(taskStatusCounts)
      }
    ]
  };

  return (
    // <div className="dashboard-table-container">
    //   <div className="dashboard-table">
    //     <h5 style={{ textAlign: "center" }} className="p-3">
    //       Task Progress Report
    //     </h5>
    //     <Chart
    //       options={taskStatusChartData.options}
    //       type="bar"
    //       series={taskStatusChartData.series}
    //       height="85%"
    //     />
    //   </div>
    // </div>
    <div className="ChartCard shadow-sm">
      <div className="ChartHeader">
        <h5 className="fw-bolder d-flex gap-3 "><FaChartLine className="my-auto" />Task Progress Report</h5>
      </div>
      <div className="chartBody">
        <Chart
          options={taskStatusChartData.options}
          series={taskStatusChartData.series}
          type="bar"
          height="85%"
        />
      </div>
    </div>
  );
};

export default TaskChart;
