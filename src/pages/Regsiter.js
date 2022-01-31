import React, { useState } from "react";
import { UNCLASS, OWNER, STORAGE_LOCATION, STATE, UNIT } from "../constatnts";
import dayjs from "dayjs";
dayjs.locale("th");

const Register = () => {
  const [initCode, setInitCode] = useState(dayjs().year());
  const [initSerialNumber, setInitSerialNumber] = useState(55);

  const pad = (num, size) => {
    num = num.toString();
    while (num.length < size) num = "0" + num;
    return num;
  };

  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-primary">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            <p class="h2 text-light">Chemicals</p>
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a
                  class="nav-link active text-light"
                  aria-current="page"
                  href="#"
                >
                  Register
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-light" href="inventory">
                  Inventory
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div class="container">
        <p class="fs-1 fw-bold mt-4">Register Chemicals</p>
        <form class="row g-3 needs-validation" novalidate>
          <div class="col-md-4">
            <label for="validationCustom04" class="form-label">
              Owner
              <span class="text-danger"> *</span>
            </label>
            <select class="form-select" id="validationCustom04" required>
              <option selected disabled value="">
                Choose...
              </option>
              {OWNER.map((item) => (
                <option value="">{item}</option>
              ))}
            </select>
            <div class="invalid-feedback">Please select a valid state.</div>
          </div>
          <div class="col-md-4">
            <label for="validationCustomUsername" class="form-label">
              Code
            </label>
            <div class="input-group has-validation">
              <input
                type="text"
                class="form-control"
                id="validationCustomUsername"
                aria-describedby="inputGroupPrepend"
                value={initCode + pad(initSerialNumber, 4)}
                disabled
              />
              <div class="invalid-feedback">Please choose a username.</div>
            </div>
          </div>
          <div class="col-md-4">
            <label for="validationCustom01" class="form-label">
              Chemical Name
              <span class="text-danger"> *</span>
            </label>
            <input
              type="text"
              class="form-control"
              id="validationCustom01"
              required
            />
            <div class="valid-feedback">Looks good!</div>
          </div>
          <div class="col-md-4">
            <label for="validationCustom02" class="form-label">
              UN No.
              <span class="text-danger"> *</span>
            </label>
            <input
              type="text"
              class="form-control"
              id="validationCustom02"
              required
            />
            <div class="valid-feedback">Looks good!</div>
          </div>
          <div class="col-md-4">
            <label for="validationCustomUsername" class="form-label">
              Cus No.
              <span class="text-danger"> *</span>
            </label>
            <div class="input-group has-validation">
              <input
                type="text"
                class="form-control"
                id="validationCustomUsername"
                aria-describedby="inputGroupPrepend"
                required
              />
              <div class="invalid-feedback">Please choose a username.</div>
            </div>
          </div>
          <div class="col-md-4">
            <label for="validationCustom04" class="form-label">
              UN Class
              <span class="text-danger"> *</span>
            </label>
            <select class="form-select" id="validationCustom04" required>
              <option selected disabled value="">
                Choose...
              </option>
              {UNCLASS.map((item) => (
                <option value="">{item}</option>
              ))}
            </select>
            <div class="invalid-feedback">Please select a valid state.</div>
          </div>
          <div class="col-md-4">
            <label for="validationCustom04" class="form-label">
              State
              <span class="text-danger"> *</span>
            </label>
            <select class="form-select" id="validationCustom04" required>
              <option selected disabled value="">
                Choose...
              </option>
              {STATE.map((item) => (
                <option value="">{item}</option>
              ))}
            </select>
            <div class="invalid-feedback">Please select a valid state.</div>
          </div>
          <div class="col-md-4">
            <label for="validationCustom04" class="form-label">
              Packing Size
              <span class="text-danger"> *</span>
            </label>
            <input
              type="number"
              class="form-control"
              id="validationCustom02"
              required
              step="0.01"
            />
            <div class="invalid-feedback">Please select a valid state.</div>
          </div>
          <div class="col-md-4">
            <label for="validationCustom04" class="form-label">
              Packing Unit
              <span class="text-danger"> *</span>
            </label>
            <select class="form-select" id="validationCustom04" required>
              <option selected disabled value="">
                Choose...
              </option>
              {UNIT.map((item) => (
                <option value="">{item}</option>
              ))}
            </select>
            <div class="invalid-feedback">Please select a valid state.</div>
          </div>
          <div class="col-md-4">
            <label for="validationCustom04" class="form-label">
              Storage
              <span class="text-danger"> *</span>
            </label>
            <select class="form-select" id="validationCustom04" required>
              <option selected disabled value="">
                Choose...
              </option>
              {STORAGE_LOCATION.map((item) => (
                <option value="">{item}</option>
              ))}
            </select>
            <div class="invalid-feedback">Please select a valid state.</div>
          </div>
          <div class="col-12">
            <button class="btn btn-primary" type="submit">
              Submit form
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
