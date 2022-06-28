import React from "react";
import Navbar from "./Navbar";

export default function Add() {
  return (
    <div>
      <Navbar />

      <div className="container">

        <div className="row">
            <p className="text-start h1 p-4 m-2">
                Vehile check-In
            </p>
        </div>

        <form action="" >
          <div className="row">
            <div className="col-5 p-2 m-2">
              <label className="h3" for="VehicleNumber" class="form-label">
                <p className="h3">Vehicle Number</p>
              </label>
              <input
                type="text"
                className="form-control form-control-lg p-2 m-2"
                placeholder="Enter Vehicle Number"
              />
            </div>

            <div className="col-5 p-2 m-3">
              <label className="h3" for="VehicleType" class="form-label">
                <p className="h3">Vehicle Type</p>
              </label>
              <select class="form-select form-select-lg h3">
                <option className="h3" selected>
                  Open this select menu
                </option>
                <option className="h3" value="2 Wheeler">
                  2 Wheeler
                </option>
                <option className="h3" value="4 Wheeler">
                  4 Wheeler
                </option>
                <option className="h3" value="Multi Wheeler">
                  Multi Wheeler
                </option>
              </select>
            </div>
          </div>

          <div className="row">
            <div className="col-5 p-2 m-2">
              <label className="h3" for="VehicleModel" class="form-label">
                <p className="h3">Vehicle Model</p>
              </label>
              <input
                type="text"
                className="form-control form-control-lg p-2 m-2"
                placeholder="Enter Vehicle Model"
              />
            </div>

            <div className="col-5 p-2 m-2">
              <label className="h3" for="PhoneNumber" class="form-label">
                <p className="h3">Phone Number</p>
              </label>
              <input
                type="text"
                className="form-control form-control-lg p-2 m-2"
                placeholder="Enter Phone Number"
              />
            </div>
          </div>

          <div className="row">
            <div className="col-5 p-2 m-2">
              <label className="h3" for="CustomerName" class="form-label">
                <p className="h3">Customer Name</p>
              </label>
              <input
                type="text"
                className="form-control form-control-lg p-2 m-2"
                placeholder="Enter name"
              />
            </div>

          </div>


            <button className="btn btn-primary position-absolute bottom-10 start-50 translate-middle" type="submit">Check In</button>
        </form>
      </div>
    </div>
  );
}
