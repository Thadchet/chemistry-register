import React from "react";
import { MOCK_INVENTORY } from "../constatnts";

const Inventory = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-primary">
        <div class="container-fluid">
          <a class="navbar-brand" href="/">
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
                  href="/"
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
        <p class="fs-1 fw-bold mt-4">Inventory</p>
        <form>
          <div class="row g-3 align-items-center">
            <div class="col-auto">
              <label for="inputPassword6" class="col-form-label">
                Search Inventory
              </label>
            </div>
            <div class="col-4">
              <input
                type="text"
                id="inputPassword6"
                class="form-control"
                aria-describedby="passwordHelpInline"
              />
            </div>
            <div class="col-auto">
              <button class="btn btn-primary" type="submit">
                Search
              </button>
            </div>
          </div>
        </form>
        <table class="table table-striped mt-4">
          <thead>
            <tr>
              <th scope="col">Code</th>
              <th scope="col">Chemical Name</th>
              <th scope="col">Cas No.</th>
              <th scope="col">State</th>
              <th scope="col">UN Class</th>
              <th scope="col">UN No.</th>
              <th scope="col">Packing Size</th>
              <th scope="col">Owner</th>
              <th scope="col">Storage Location</th>
            </tr>
          </thead>
          <tbody>
            {MOCK_INVENTORY.map((item) => (
              <tr>
                <th scope="row">{item}</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                <td>@mdo</td>
                <td>@mdo</td>
                <td>@mdo</td>
                <td>@mdo</td>
                <td>@mdo</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Inventory;
