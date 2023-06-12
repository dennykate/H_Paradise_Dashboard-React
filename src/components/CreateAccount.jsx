import React, { useState } from "react";
import { useCreateMutation } from "../feature/api/itemApi";
import { successAlert } from "../../helper/alert";
import Navbar from "./Navbar";

const CreateAccount = () => {
  const [create] = useCreateMutation();
  const [code, setCode] = useState("");
  const [loading, setLoading] = useState(false);

  const createHandler = async () => {
    setLoading(true);
    const { data, error } = await create();
    if (data.success) {
      setCode(data.code);
      navigator.clipboard.writeText(data.code).then(() => {
        successAlert("Code was generated successful & Copied to clipboard");
      });
    }
    setLoading(false);
  };

  const copyHandler = () => {
    if (code) {
      navigator.clipboard.writeText(code).then(() => {
        successAlert("Copied to clipboard");
      });
    }
  };

  return (
    <div className=" min-vh-100 d-flex flex-column">
      <Navbar />
      <div
        style={{ maxWidth: 500 }}
        className=" px-3 py-5 m-auto rounded shadow w-md-50 w-100"
      >
        <h3 className=" text-center text-primary  mb-4">Create An Account</h3>

        <div className="input-group mb-3">
          <input
            value={code}
            onChange={(e) => {}}
            type="text"
            className=" form-control "
          />

          <button
            onClick={copyHandler}
            className="btn btn-primary"
            type="button"
          >
            <i className="bi bi-clipboard"></i>
          </button>
        </div>

        <button
          disabled={loading}
          onClick={createHandler}
          className=" btn btn-primary py-2 w-100 mt-3"
        >
          {!loading ? "Generate" : "Loading..."}
        </button>
      </div>
    </div>
  );
};

export default CreateAccount;
