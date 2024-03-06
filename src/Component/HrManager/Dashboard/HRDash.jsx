import React from "react";
import UpcomingBirthdays from "../../../Pages/AddEmployee/UpcomingBirthdays";
import TaskChart from "../../../Pages/Chart/TaskChart";
import DepartmentChart from "../../../Pages/Chart/DepartmentChart";
import HolidayList from "../../../Pages/LeaveCalendar/HolidayList";
import LeaveCount from "./CountData/LeavesCount";
import EmployeeCount from "./CountData/EmployeeCount"
import InnerDashContainer from "../../InnerDashContainer";


const HRDash = () => {
  return (
    <div>
      <div className="row gap-0 mx-0">
        <div className="col-lg-9">
          <EmployeeCount />
          <LeaveCount />

          <div className="row row_flex mt-5">
            <div className="col-lg-6">
              <TaskChart />
            </div>
            <div className="col-lg-6">
              <DepartmentChart />
            </div>
          </div>
          <div className="row row_flex">
            <div className="col-lg-12">{/* <TodatAttendance /> */}</div>
          </div>
        </div>
        <div className="col-lg-3  ">
          <UpcomingBirthdays />
          <div className="holiday mt-3">
            <HolidayList />
          </div>
          <div className="col-md-9"></div>
        </div>
      </div>
    </div>
  );
};

export default HRDash;
