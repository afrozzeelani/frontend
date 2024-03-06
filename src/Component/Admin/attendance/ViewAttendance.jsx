import React, { useState, useEffect } from "react";
import axios from "axios";

const AttendanceDetails = () => {
  const [employeeId, setEmployeeId] = useState("");
  const [employees, setEmployees] = useState([]);
  const [attendanceData, setAttendanceData] = useState(null);

  useEffect(() => {
    // Fetch the list of employees when the component mounts
    fetchEmployees();
  }, []);

  const fetchEmployees = async () => {
    try {
      const response = await axios.get("http://localhost:4000/api/employee", {
        headers: {
          authorization: localStorage.getItem("token") || ""
        }
      });
      setEmployees(response.data);
    } catch (error) {
      console.error("Error fetching employees:", error);
    }
  };

  const handleEmployeeChange = (event) => {
    setEmployeeId(event.target.value);
  };

  // const handleFetchAttendance = async () => {
  //   try {
  //     const response = await axios.get(
  //       `http://localhost:4000/api/attendance/${employeeId}`
  //     );
  //     setAttendanceData(response.data);
  //   } catch (error) {
  //     console.error("Error fetching attendance data:", error);
  //   }
  // };

  const handleFetchAttendance = async () => {
    try {
      const response = await axios.get(
        `http://localhost:4000/api/attendance/${employeeId}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token") || ""}`
          }
        }
      );
      console.log("Response:", response.data[0].employeeObjID._id); // Log the response for debugging
      console.log("employeeID", employeeId);
      let singleUser = response.data.filter((val) => {
        return val.employeeObjID._id === employeeId;
      });
      console.log(singleUser);
      setAttendanceData(singleUser);
    } catch (error) {
      console.error("Error fetching attendance data:", error);
    }
  };

  return (
    <div className=" bg-dark p-2 d-flex flex-column  gap-3">
      <div className="d-flex gap-3">
        <div>
          <select
            className="form-select"
            id="employeeId"
            value={employeeId}
            onChange={handleEmployeeChange}
          >
            <option value="" disabled>
              Select an employee
            </option>
            {employees.map((employee) => (
              <option key={employee._id} value={employee._id}>
                {employee.FirstName} - {employee.Email}
              </option>
            ))}
          </select>
        </div>
        <button className="btn  btn-info" onClick={handleFetchAttendance}>
          Fetch Attendance
        </button>
      </div>

      {attendanceData && (
        <table className="table">
          <thead>
            <tr>
              <th>Date</th>
              <th>Login Time</th>
              <th>Logout Time</th>
              <th>Break Time</th>
              <th>Resume Time</th>
              <th>Total Break</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {attendanceData[0]?.years?.map((year) =>
              year.months?.map((month) =>
                month.dates?.map((date) => (
                  <tr key={date.date}>
                    <td>{`${date.date}-${month.month}-${year.year}`}</td>
                    <td>{date.loginTime?.[0]}</td>
                    <td>{date.logoutTime?.[date.logoutTime.length - 1]}</td>
                    <td>{date.breakTime?.join(" , ")}</td>
                    <td>{date.ResumeTime?.join(" , ")}</td>
                    <td>{date.totalBrake} Min</td>
                    <td>{date.status}</td>
                  </tr>
                ))
              )
            )}
          </tbody>
          {/* <tbody>
            {attendanceData?.years?.map((year) =>
              year.months?.map((month) =>
                month.dates?.map((date) => (
                  <tr key={date.date}>
                    <td>{`${year.year}-${month.month}-${date.date}`}</td>
                    <td>{date.loginTime[0]}</td>
                    <td>{date.logoutTime[date.logoutTime.length - 1]}</td>
                    <td>{date.breakTime.join(" , ")}</td>
                    <td>{date.ResumeTime.join(" , ")}</td>
                    <td>{date.totalBrake} Min</td>
                    <td>{date.status}</td>
                  </tr>
                ))
              )
            )}
          </tbody> */}
        </table>
      )}
    </div>
  );
};

export default AttendanceDetails;
