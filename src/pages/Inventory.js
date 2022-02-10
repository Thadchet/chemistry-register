import React, { useEffect, useState } from "react";
import { MOCK_INVENTORY } from "../constatnts";
import axios from "axios";

const Inventory = () => {
  const [inventory, setInventory] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios
      .get("http://13.214.209.62/test/api/inventory")
      .then((res) => {
        console.log(res.data);
        setInventory(res.data.message);
      })
      .catch((err) => console.log(err));
  }, []);

  const searchInventory = (event) => {
    event.preventDefault();
    console.log(search);
    axios
      .get("http://13.214.209.62/test/api/inventory", { params: { search } })
      .then((res) => {
        console.log(res.data);
        setInventory(res.data.message);
      })
      .catch((err) => console.log(err));
  };

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
        <form onSubmit={searchInventory}>
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
                onChange={(e) => setSearch(e.target.value)}
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
              <th scope="col">Unit</th>
            </tr>
          </thead>
          <tbody>
            {inventory.map((item) => (
              <tr>
                <th scope="row">{item.code}</th>
                <td scope="row">{item.chemical_name}</td>
                <td scope="row">{item.cus_no}</td>
                <td scope="row">{item.state}</td>
                <td scope="row">{item.un_class}</td>
                <td scope="row">{item.un_no}</td>
                <td scope="row">{item.packing_size}</td>
                <td scope="row">{item.owner}</td>
                <td scope="row">{item.storage}</td>
                <td scope="row">{item.packing_unit}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Inventory;
