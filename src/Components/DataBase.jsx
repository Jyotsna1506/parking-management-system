import React, { useState } from "react";
import Navbar from "./Navbar";

function DataBase() {
  const [popup, setPopup] = useState(false);
  return (
    <div>
      <Navbar />
      <div class="container">
        <div className="row py-4">
          <div className="col-3 text-start h3 ">Dashboad</div>
          <div className="col-8">
            <form class="d-flex" role="search">
              <input
                class="form-control"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <a class="btn btn-outline-primary" href="/add">
                +CheckIn
              </a>
            </form>
          </div>
        </div>

        {popup && <></>}

        <table class="table">
          <thead>
            <tr className="text-info bg-dark">
              <th scope="col">Vehicle No</th>
              <th scope="col">Vehicle Mode</th>
              <th scope="col">Vehicle Type</th>
              <th scope="col">Phone</th>
              <th scope="col">Check In</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr className="my-4 mx-4">
              <th>TN 09CD 2721</th>
              <td>Audi A6</td>
              <td>
                <a className="btn btn-warning text-danger">4 Wheeler</a>
              </td>
              <td>9444306044</td>
              <td>04-08-2021 06.05 AM</td>
              <td className="text-info">Check out</td>
            </tr>

            <tr className="my-4 mx-4">
              <th>TN 09CD 2721</th>
              <td>Audi A6</td>
              <td>
                <a className="btn btn-warning text-danger">4 Wheeler</a>
              </td>
              <td>9444306044</td>
              <td>04-08-2021 06.05 AM</td>
              <td className="text-info">Check out</td>
            </tr>

            <tr className="my-4 mx-4">
              <th>TN 09CD 2721</th>
              <td>Audi A6</td>
              <td>
                <a className="btn btn-warning text-danger">4 Wheeler</a>
              </td>
              <td>9444306044</td>
              <td>04-08-2021 06.05 AM</td>
              <td className="text-info">Check out</td>
            </tr>

            <tr className="my-4 mx-4">
              <th>TN 09CD 2721</th>
              <td>Audi A6</td>
              <td>
                <a className="btn btn-warning text-danger">4 Wheeler</a>
              </td>
              <td>9444306044</td>
              <td>04-08-2021 06.05 AM</td>
              <td className="text-info">Check out</td>
            </tr>

            <tr className="my-4 mx-4">
              <th>TN 09CD 2721</th>
              <td>Audi A6</td>
              <td>
                <a className="btn btn-warning text-danger">4 Wheeler</a>
              </td>
              <td>9444306044</td>
              <td>04-08-2021 06.05 AM</td>
              <td className="text-info">Check out</td>
            </tr>

            <tr className="my-4 mx-4">
              <th>TN 09CD 2721</th>
              <td>Audi A6</td>
              <td>
                <a className="btn btn-warning text-danger">4 Wheeler</a>
              </td>
              <td>9444306044</td>
              <td>04-08-2021 06.05 AM</td>
              <td className="text-info">Check out</td>
            </tr>

            <tr className="my-4 mx-4">
              <th>TN 09CD 2721</th>
              <td>Audi A6</td>
              <td>
                <a className="btn btn-warning text-danger">4 Wheeler</a>
              </td>
              <td>9444306044</td>
              <td>04-08-2021 06.05 AM</td>
              <td className="text-info">Check out</td>
            </tr>

            <tr className="my-4 mx-4">
              <th>TN 09CD 2721</th>
              <td>Audi A6</td>
              <td>
                <a className="btn btn-warning text-danger">4 Wheeler</a>
              </td>
              <td>9444306044</td>
              <td>04-08-2021 06.05 AM</td>
              <td className="text-info">Check out</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default DataBase;
