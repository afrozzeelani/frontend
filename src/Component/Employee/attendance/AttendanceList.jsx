import React, { useEffect, useState } from "react";
import axios from "axios";

function AttendanceList() {
  const [attendanceData, setAttendanceData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:4000/api/attendance");
      setAttendanceData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="p-5">
      {/* <h2 className="fw-bold text-muted">Attendance Data</h2>
      <select>
        <option value="">Select Employees</option>
      </select> */}
      <table className="table table-striped">
        <thead>
          <tr>
            <th className="text-center">Date</th>
            <th className="text-center">Status</th>
            <th>Login Time</th>
            <th>Logout Time</th>
            <th>Break Time</th>
            <th>Resume Time</th>
            <th>Break Data</th>
            <th>Total Break</th>
            <th>Log Status</th>
          </tr>
        </thead>
        <tbody>
          {attendanceData.map((yearData) =>
            yearData.years.map((monthData) =>
              monthData.months.map((dateData) =>
                dateData.dates.map((dayData) => {
                  // Determine attendance status based on login time
                  let status = "Absent";
                  if (dayData.loginTime[0]) {
                    const loginDateTime = new Date(
                      `${dateData.date}-${dateData.month}-${monthData.year}T${dayData.loginTime[0]}`
                    );
                    if (
                      loginDateTime <=
                      new Date(
                        `${dateData.date}-${dateData.month}-${monthData.year}T09:30:00`
                      )
                    ) {
                      status = "Present";
                    } else if (
                      loginDateTime <=
                      new Date(
                        `${dateData.date}-${dateData.month}-${monthData.year}T09:45:00`
                      )
                    ) {
                      status = "Late";
                    } else if (
                      loginDateTime <=
                      new Date(
                        `${dateData.date}-${dateData.month}-${monthData.year}T14:00:00`
                      )
                    ) {
                      status = "Half Day";
                    }
                  }

                  return (
                    <tr
                      key={`${yearData.year}-${monthData.month}-${dateData.date}`}
                    >
                      <td style={{ width: "7rem" }}>
                        {dayData.date} / {dateData.month} / {monthData.year}
                      </td>
                      <td>{status}</td>
                      <td>{dayData.loginTime[0]}</td>
                      <td>
                        {dayData.logoutTime[dayData.logoutTime.length - 1]}
                      </td>
                      <td>{dayData.breakTime.join(", ")}</td>
                      <td>{dayData.ResumeTime.join(", ")}</td>
                      <td>{dayData.BreakData.join(", ")}</td>
                      <td>{dayData.totalBreak} Min </td>
                      <td>{dayData.status}</td>
                    </tr>
                  );
                })
              )
            )
          )}
        </tbody>
      </table>
    </div>
  );
}

export default AttendanceList;
