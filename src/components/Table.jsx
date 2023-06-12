import React, { useEffect, useState } from "react";
import { useDestroyMutation, useGetAllQuery } from "../feature/api/itemApi";

import { successAlert, suspendAlert } from "../../helper/alert";

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
    <div className="py-5">
      <table className=" table table-striped table-bordered">
        <thead>
          <tr>
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
                <td className="d-flex align-items-center justify-content-between">
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

      <div className="d-flex align-items-center justify-content-end">
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
  );
};

export default Table;
