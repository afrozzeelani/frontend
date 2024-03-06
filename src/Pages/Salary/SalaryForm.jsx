import React, { useState, useEffect } from "react";
import axios from "axios";
import { Form, Button, Col } from "react-bootstrap";
import SalaryImage from "./SalaryImage.svg"

const SalaryForm = (props) => {
  const [employeeData, setEmployeeData] = useState([]);

  useEffect(() => {
    const loadEmployeeInfo = async () => {
      try {
        const response = await axios.get("http://localhost:4000/api/employee", {
          headers: {
            authorization: localStorage.getItem("token") || ""
          }
        });
        setEmployeeData(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    loadEmployeeInfo();
  }, []);

  return (

    <div style={{ height: '95vh' }} className="bg-light ">
      <div className="row h-100 ">
        <div className="col-12 col-md-6 h-100 d-flex flex-column aline-items-center justify-content-center">

          <div className="my-auto" style={{ width: '80%' }}><img className="my-auto" style={{ width: '100%' }} src={SalaryImage} alt="" /></div>
        </div>
        <div className="col-12 col-md-6 h-100 d-flex">
          <Form
            id="form"
            onSubmit={props.onSalarySubmit}
            style={{ color: 'var(--primaryDashMenuColor)', width: 'fit-content' }}
            className=" shadow text-white fw-bold row w-100 py-2 p-2 bg-dark"
          >
            <h4 className="text-white
            my-3 text-uppercase fw-bold">
              Add Salary Details
            </h4>
            <div className="form-group col-12 col-sm-6">
              <Form.Label>
                Select Employee
              </Form.Label>
              <Col className="form-input p-0 ">
                <Form.Control as="select" required>
                  <option value="" disabled selected>
                    Select your option
                  </option>
                  {employeeData.map((data, index) => (
                    <option key={index} value={data["_id"]}>
                      {data["empID"] + data["FirstName"] +
                        " " +
                        data["MiddleName"] +
                        " " +
                        data["LastName"]}
                    </option>
                  ))}
                </Form.Control>
              </Col>
            </div>

            <div className="form-group col-12 col-sm-6 ">
              <Form.Label >
                Basic Salary
              </Form.Label>
              <Col className="form-input p-0">
                <Form.Control
                  type="number"
                  placeholder="Basic Salary"
                  required
                />
              </Col>
            </div>

            <div className="form-group col-12 col-sm-6">
              <Form.Label>
                Bank Name
              </Form.Label>
              <Col className="form-input p-0">
                <Form.Control type="text" placeholder="Bank Name" required />
              </Col>
            </div>

            <div className="form-group col-12 col-sm-6">
              <Form.Label>
                Account No
              </Form.Label>
              <Col className="form-input p-0">
                <Form.Control type="text" placeholder="Account No" required />
              </Col>
            </div>

            <div className="form-group col-12 col-sm-6">
              <Form.Label>
                Re-Enter Account No
              </Form.Label>
              <Col className="form-input p-0">
                <Form.Control
                  type="text"
                  placeholder="Re-Enter Account No"
                  required
                />
              </Col>
            </div>

            <div className="form-group col-12 col-sm-6">
              <Form.Label>
                Account Holder Name
              </Form.Label>
              <Col className="form-input p-0">
                <Form.Control
                  type="text"
                  placeholder="Account Holder Name"
                  required
                />
              </Col>
            </div>

            <div className="form-group col-12 col-sm-6 ">
              <Form.Label >
                IFSC Code
              </Form.Label>
              <Col className="form-input p-0">
                <Form.Control type="text" placeholder="IFSC Code" required />
              </Col>
            </div>

            <div className="form-group col-12 col-sm-6">
              <Form.Label >
                Tax Deduction
              </Form.Label>
              <Col className="form-input p-0">
                <Form.Control
                  type="number"
                  placeholder="Basic Salary"
                  required
                />
              </Col>
            </div>

            <div
              className="form-group d-flex gap-2 m-auto"
              id="form-submit-button"
            >
              <Button type="submit">
                Submit
              </Button>
              <Button type="reset" onClick={props.onFormClose}>
                cancel
              </Button>
            </div>
            <div
              className="form-group col-12 col-md-6"
              id="form-cancel-button"
            ></div>
          </Form></div>
      </div>


    </div>
  );
};

export default SalaryForm;
