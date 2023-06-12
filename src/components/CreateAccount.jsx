import React, { useState } from "react";
import { useCreateMutation } from "../feature/api/itemApi";
import { successAlert } from "../../helper/alert";

const CreateAccount = () => {
  const [create] = useCreateMutation();
  const [code, setCode] = useState("");

  const createHandler = async () => {
    const { data, error } = await create();

    if (data.success) {
      setCode(data.code);
      successAlert("Code was generated successful");
    }
  };

  const copyHandler = () => {
    if (code) {
      navigator.clipboard.writeText(code).then(() => {
        successAlert("Copied to clipboard");
      });
    }
  };

  return (
    <div className=" mt-3">
      <div
        style={{ maxWidth: 500 }}
        className=" px-3 py-5 mx-auto rounded shadow"
      >
        <h3 className=" text-center mb-4">Create An Account</h3>

        <div class="input-group">
          <input
            value={code}
            onChange={(e) => {}}
            type="text"
            className=" form-control "
          />
          <div class="input-group-append">
            <button
              onClick={copyHandler}
              class="btn btn-outline-primary"
              type="button"
            >
              Copy
            </button>
          </div>
        </div>

        <button onClick={createHandler} className=" btn btn-primary w-100 mt-3">
          Generate
        </button>
      </div>
    </div>
  );
};

export default CreateAccount;
