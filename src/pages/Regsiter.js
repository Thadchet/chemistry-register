import React, { useState, useEffect } from "react";
import { UNCLASS, OWNER, STORAGE_LOCATION, STATE, UNIT } from "../constatnts";
import dayjs from "dayjs";
import axios from "axios";

dayjs.locale("th");

const Register = () => {
  const [initCode, setInitCode] = useState(dayjs().year());
  const [initSerialNumber, setInitSerialNumber] = useState(0);
  const [chemicalName, setChemicalName] = useState();
  const [owner, setOwner] = useState();
  const [unNo, setUnNo] = useState();
  const [cusNo, setCusNo] = useState();
  const [packingSize, setPackingSize] = useState();
  const [packingUnit, setPackingUnit] = useState();
  const [storage, setStorage] = useState();
  const [state, setState] = useState();
  const [unClass, setUNCLass] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const pad = (num, size) => {
    num = num.toString();
    while (num.length < size) num = "0" + num;
    return num;
  };

  useEffect(() => {
    axios
      .get("http://localhost:9000/inventory/latest")
      .then((res) => {
        if (res.data.message.length === 0) {
          setInitSerialNumber(1);
        } else {
          setInitSerialNumber(res.data.message[0].id + 1);
        }
      })
      .catch((err) => console.log(err));
  }, []);

  const handleSubmit = (event) => {
    const payload = {
      chemical_name: chemicalName,
      owner: owner,
      un_no: unNo,
      cus_no: cusNo,
      storage: storage,
      state: state,
      un_class: unClass,
      packing_size: packingSize,
      packing_unit: packingUnit,
      code: initCode + pad(initSerialNumber, 4),
    };
    console.log(payload);
    setIsLoading(true);
    axios
      .post("http://localhost:9000/add/inventory", payload)
      .then((res) => {
        console.log(res);
        setIsLoading(false);
        setIsSuccess(true);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
        setIsSuccess(false);
      });
    event.preventDefault();
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
        <form
          class="row g-3 needs-validation"
          novalidate
          onSubmit={handleSubmit}
        >
          <div class="col-md-4">
            <label for="validationCustom04" class="form-label">
              Owner
              <span class="text-danger"> *</span>
            </label>
            <select
              class="form-select"
              id="validationCustom04"
              onChange={(e) => setOwner(e.target.value)}
              required
            >
              <option selected disabled value="">
                Choose...
              </option>
              {OWNER.map((item) => (
                <option value={item}>{item}</option>
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
              onChange={(e) => setChemicalName(e.target.value)}
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
              onChange={(e) => setUnNo(e.target.value)}
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
                onChange={(e) => setCusNo(e.target.value)}
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
            <select
              class="form-select"
              id="validationCustom04"
              onChange={(e) => setUNCLass(e.target.value)}
              required
            >
              <option selected disabled value="">
                Choose...
              </option>
              {UNCLASS.map((item) => (
                <option value={item}>{item}</option>
              ))}
            </select>
            <div class="invalid-feedback">Please select a valid state.</div>
          </div>
          <div class="col-md-4">
            <label for="validationCustom04" class="form-label">
              State
              <span class="text-danger"> *</span>
            </label>
            <select
              class="form-select"
              id="validationCustom04"
              onChange={(e) => setState(e.target.value)}
              required
            >
              <option selected disabled value="">
                Choose...
              </option>
              {STATE.map((item) => (
                <option value={item}>{item}</option>
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
              onChange={(e) => setPackingSize(e.target.value)}
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
            <select
              class="form-select"
              id="validationCustom04"
              onChange={(e) => setPackingUnit(e.target.value)}
              required
            >
              <option selected disabled value="">
                Choose...
              </option>
              {UNIT.map((item) => (
                <option value={item}>{item}</option>
              ))}
            </select>
            <div class="invalid-feedback">Please select a valid state.</div>
          </div>
          <div class="col-md-4">
            <label for="validationCustom04" class="form-label">
              Storage
              <span class="text-danger"> *</span>
            </label>
            <select
              class="form-select"
              id="validationCustom04"
              onChange={(e) => setStorage(e.target.value)}
              required
            >
              <option selected disabled value="">
                Choose...
              </option>
              {STORAGE_LOCATION.map((item) => (
                <option value={item}>{item}</option>
              ))}
            </select>
            <div class="invalid-feedback">Please select a valid state.</div>
          </div>
          <div class="col-12">
            <button class="btn btn-primary" type="submit">
              {isLoading && (
                <span
                  class="spinner-border spinner-border-sm"
                  role="status"
                  aria-hidden="true"
                ></span>
              )}
              <span class="sr-only"> Submit Form</span>
            </button>
          </div>
          {isSuccess && (
            <div class="alert alert-success" role="alert">
              Creaet Inventory success !!
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default Register;
