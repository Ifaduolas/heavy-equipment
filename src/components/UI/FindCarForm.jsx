import React from "react";
import "./FindCarForm.css";

import { Form, FormGroup } from "reactstrap";

const FindCarForm = () => {
  return (
    <Form className="form">
      <div className=" d-flex align-items-center justify-content-between flex-wrap">
        <FormGroup className="form__group">
          <input type="text" placeholder="From address" required />
        </FormGroup>

        <FormGroup className="form__group">
          <input type="text" placeholder="To address" required />
        </FormGroup>

        <FormGroup className="form__group">
          <input type="date" placeholder="Journey date" required />
        </FormGroup>

        <FormGroup className="form__group">
          <input
            className="journey__time"
            type="time"
            placeholder="Journey time"
            required
          />
        </FormGroup>
        <FormGroup className="select__group">
          <select>
            <option value="ac">AC Heavy-Equipment</option>
            <option value="non-ac">Non AC Heavy-Equipment</option>
          </select>
        </FormGroup>

        <FormGroup className="form__group">
          <button className="btn find__car-btn">Find Heavy-Equipment</button>
        </FormGroup>
      </div>
    </Form>
  );
};

export default FindCarForm;
