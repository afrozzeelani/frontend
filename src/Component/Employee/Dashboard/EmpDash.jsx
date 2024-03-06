import React, { useState } from "react";
import "../../HrManager/DashboardHR.css";
import { Link } from "react-router-dom";
import LeaveApplicationEmpTable from "../LeaveApplicationEmpTable";
import HolidayList from "../../../Pages/LeaveCalendar/HolidayList";
import UpcomingBirthdays from "../../../Pages/AddEmployee/UpcomingBirthdays";

import Chart from "react-apexcharts";

import { IoIosArrowDroprightCircle } from "react-icons/io";

const EmpDash = (props) => {
  const [totalEmployeeLeave, setTotalEmployeeLeave] = useState(0);

  // Update total leave count when LeaveApplicationEmpTable component notifies
  const updateTotalEmployeeLeave = (count) => {
    setTotalEmployeeLeave(count);
  };

  return (
    <div>
      <div className="container-fluid  mt-4">
        <h2 className="text-muted fw-bolder mb-4">🪟 EMPLOYEE DASHBOARD</h2>
        <div className="row row-gap-4">
          <div className="col-md-2">
            <div
              style={{ backgroundColor: "#FED2AA" }}
              className=" DashboardCard position-relative"
            >
              <div className=" d-flex flex-column gap-3">
                <p className="fw-bold pt-2 text-muted">
                  Total Employees
                  <span
                    className="fw-bolder text-info position-absolute"
                    style={{ fontSize: "35px", right: "10%", top: "4%" }}
                  >
                    {}
                  </span>
                </p>
                <Link
                  className="text-decoration-none bg-white px-4  rounded-5 d-flex justify-between py-2  aline-items-center fw-bold text-info  aline-center"
                  to="/hr/employee"
                >
                  <p className="my-auto">More Info</p>{" "}
                  <p className="my-auto fs-4 d-flex">
                    <IoIosArrowDroprightCircle />
                  </p>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-2">
            <div
              style={{ backgroundColor: "#DFFFD8" }}
              className="DashboardCard position-relative"
            >
              <div className="d-flex flex-column gap-3">
                <p className="fw-bold pt-2 text-muted">
                  Total Leave{" "}
                  <span
                    className="fw-bolder text-info position-absolute"
                    style={{ fontSize: "35px", right: "10%", top: "4%" }}
                  >
                    {totalEmployeeLeave}
                  </span>
                </p>
                <Link
                  className="text-decoration-none bg-white px-4  rounded-5 d-flex justify-between py-2  aline-items-center fw-bold text-info  aline-center"
                  to="/employee/id/leave-application-emp"
                >
                  <p className="my-auto">More Info</p>{" "}
                  <p className="my-auto fs-4 d-flex">
                    <IoIosArrowDroprightCircle />
                  </p>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-2">
            <div
              style={{ backgroundColor: "#FEBBCC" }}
              className="DashboardCard position-relative"
            >
              <div className="d-flex flex-column gap-3">
                <p className="fw-bold pt-2 text-muted">
                  Total Position
                  <span
                    className="fw-bolder text-info position-absolute"
                    style={{ fontSize: "35px", right: "10%", top: "4%" }}
                  >
                    {}
                  </span>
                </p>
                <Link
                  className="text-decoration-none bg-white px-4  rounded-5 d-flex justify-between py-2  aline-items-center fw-bold text-info  aline-center"
                  to="/hr/position"
                >
                  <p className="my-auto">More Info</p>{" "}
                  <p className="my-auto fs-4 d-flex">
                    <IoIosArrowDroprightCircle />
                  </p>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-2">
            <div
              style={{ backgroundColor: "#BCCEF8" }}
              className="DashboardCard position-relative"
            >
              <div className="d-flex flex-column gap-3">
                <p className="fw-bold pt-2 text-muted">
                  Total Role
                  <span
                    className="fw-bolder text-info position-absolute"
                    style={{ fontSize: "35px", right: "10%", top: "4%" }}
                  >
                    {}
                  </span>
                </p>
                <Link
                  className="text-decoration-none bg-white px-4  rounded-5 d-flex justify-between py-2  aline-items-center fw-bold text-info  aline-center"
                  to="/hr/role"
                >
                  <p className="my-auto">More Info</p>{" "}
                  <p className="my-auto fs-4 d-flex">
                    <IoIosArrowDroprightCircle />
                  </p>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <UpcomingBirthdays />
          </div>
          {/* 
          <h1>Task</h1>
          <div className="col-md-3">
            <div
              style={{ backgroundColor: "#D0A2F7" }}
              className=" DashboardCard position-relative"
            >
              <div className=" d-flex flex-column gap-3">
                <p className="fw-bold pt-2 text-muted">
                  Total Complete Task
                  <span
                    className="fw-bolder text-info position-absolute"
                    style={{ fontSize: "35px", right: "10%", top: "4%" }}
                  >
                    {}
                  </span>
                </p>
                <Link
                  className="text-decoration-none bg-white px-4  rounded-5 d-flex justify-between py-2  aline-items-center fw-bold text-info  aline-center"
                  to="/hr/taskcomplete"
                >
                  <p className="my-auto">More Info</p>{" "}
                  <p className="my-auto fs-4 d-flex">
                    <IoIosArrowDroprightCircle />
                  </p>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div
              style={{ backgroundColor: "#FF9B9B" }}
              className="DashboardCard position-relative"
            >
              <div className="d-flex flex-column gap-3">
                <p className="fw-bold pt-2 text-muted">
                  Total Logout
                  <span
                    className="fw-bolder text-info position-absolute"
                    style={{ fontSize: "35px", right: "10%", top: "4%" }}
                  >
                    {}
                  </span>
                </p>
                <Link
                  className="text-decoration-none bg-white px-4  rounded-5 d-flex justify-between py-2  aline-items-center fw-bold text-info  aline-center"
                  to="/admin/leave"
                >
                  <p className="my-auto">More Info</p>{" "}
                  <p className="my-auto fs-4 d-flex">
                    <IoIosArrowDroprightCircle />
                  </p>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div
              style={{ backgroundColor: "#FF9B9B" }}
              className="DashboardCard position-relative"
            >
              <div className="d-flex flex-column gap-3">
                <p className="fw-bold pt-2 text-muted">
                  Total Logout
                  <span
                    className="fw-bolder text-info position-absolute"
                    style={{ fontSize: "35px", right: "10%", top: "4%" }}
                  >
                    {}
                  </span>
                </p>
                <Link
                  className="text-decoration-none bg-white px-4  rounded-5 d-flex justify-between py-2  aline-items-center fw-bold text-info  aline-center"
                  to="/admin/leave"
                >
                  <p className="my-auto">More Info</p>{" "}
                  <p className="my-auto fs-4 d-flex">
                    <IoIosArrowDroprightCircle />
                  </p>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div
              style={{ backgroundColor: "#FF9B9B" }}
              className="DashboardCard position-relative"
            >
              <div className="d-flex flex-column gap-3">
                <p className="fw-bold pt-2 text-muted">
                  Total Logout
                  <span
                    className="fw-bolder text-info position-absolute"
                    style={{ fontSize: "35px", right: "10%", top: "4%" }}
                  >
                    {}
                  </span>
                </p>
                <Link
                  className="text-decoration-none bg-white px-4  rounded-5 d-flex justify-between py-2  aline-items-center fw-bold text-info  aline-center"
                  to="/admin/leave"
                >
                  <p className="my-auto">More Info</p>{" "}
                  <p className="my-auto fs-4 d-flex">
                    <IoIosArrowDroprightCircle />
                  </p>
                </Link>
              </div>
            </div>
          </div> */}

          {/* <HolidayList />
          <UpcomingBirthdays /> */}

          {/* charts */}
          {/* <HrCharts /> */}

          <div className="col-md-6"></div>
          {/* end charts */}

          <div className="col-md-9">
            {/* Your existing code for tables */}
            {/* <div style={{ display: "none" }}>
              <LeaveApplicationEmpTable
                updateTotalEmployeeLeave={updateTotalEmployeeLeave}
              />
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmpDash;
