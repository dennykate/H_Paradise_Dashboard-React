import React, { useEffect, useState } from "react";
import { useDestroyMutation, useGetAllQuery } from "../feature/api/itemApi";

import { successAlert, suspendAlert } from "../../helper/alert";
import Navbar from "./Navbar";

const Table = () => {
  const [page, setPage] = useState(1);
  const { data, error, isLoading } = useGetAllQuery(page);
  const [destroy] = useDestroyMutation();

  const copiedText = (code) => {
    navigator.clipboard.writeText(code).then(() => {
      successAlert("Copied to clipboard!");
    });
  };

  const onPrevHandler = () => {
    if (page > 1) setPage(page - 1);
  };

  const onNextHandler = () => {
    setPage(page + 1);
  };

  return (
    <div>
      <Navbar />
      <div className="py-5" style={{ width: "100%", overflowY: "auto" }}>
        <table className=" table table-striped table-hover table-bordered rounded-table">
          <thead className="bg-primary text-white">
            <tr className="">
              <th>Code</th>
              <th>Device id</th>
              <th>Created at</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {isLoading && (
              <tr>
                <td colSpan="4" className="text-center">
                  <h6>Fetching data... Please wait</h6>
                </td>
              </tr>
            )}

            {data &&
              data?.data?.map((dt, index) => (
                <tr key={index}>
                  <td className="d-flex align-items-center justify-content-between ">
                    <h6>{dt.code}</h6>
                    <button
                      onClick={() => copiedText(dt.code)}
                      className="btn btn-primary btn-sm"
                    >
                      <i className="bi bi-clipboard-check-fill"></i>
                    </button>
                  </td>
                  <td>{dt.device_id === null ? "-" : dt.device_id}</td>
                  <td>{dt.created_at}</td>
                  <td>
                    <button
                      onClick={() => suspendAlert(dt.code, destroy)}
                      className="btn btn-danger btn-sm"
                    >
                      Suspend
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>

        <div className="d-flex align-items-center justify-content-md-end justify-content-start">
          <div className="btn-group" role="group" aria-label="Basic example">
            <button
              onClick={onPrevHandler}
              type="button"
              className="btn btn-primary"
            >
              Prev
            </button>

            <button type="button" className="btn btn-primary">
              {page}
            </button>

            <button
              onClick={onNextHandler}
              type="button"
              className="btn btn-primary"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table;
