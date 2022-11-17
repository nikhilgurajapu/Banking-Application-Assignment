import React, { useState } from "react";
import TableData from "./TableData";
import { Button } from "@mui/material";
import { v1 as uuidv1 } from "uuid";

const RegistrationForm = () => {
  const [current, setCurrent] = useState(false);
  const [data, setData] = useState([]);

  const [error, setError] = useState({
    userName: "",
    account: "",
    bankName: "",
  });

  const [person, setPerson] = useState({
    id: uuidv1(),
    userName: "",
    account: "",
    bankName: "",
    addressLine1: "",
    addressLine2: "",
    city: "",
    country: "",
    zipcode: "",
  });

  const validation = () => {
    setError({
      userName: person.userName === "",
      account: person.account === "",
      bankName: person.bankName === "",
    });
    return (
      person.userName !== "" && person.account !== "" && person.bankName !== ""
    );
  };

  const onChange = (e) => {
    setPerson({
      ...person,
      [e.target.name]: e.target.value,
    });
    setError({
      ...error,
      [e.target.name]: "",
    });
  };

  const deleteHandler = (indexValue) => {
    const newData = data.filter((item, i) => indexValue !== i);
    setData(newData);
  };

  const updateCurrent = (id) => {
    setPerson(data[id]);
    setCurrent(true);
  };

  const updateData = (data, updatedPersonData) => {
    const i = data.findIndex(
      (_element) => _element.id === updatedPersonData.id
    );
    if (i > -1) data[i] = updatedPersonData;
    else data.push(updatedPersonData);
  };

  const registerSubmit = (e, id) => {
    e.preventDefault();
    if (validation()) {
      if (!current) {
        setData([...data, person]);
      } else {
        updateData(data, person);
        setCurrent(false);
      }
      setError({
        userName: "",
        account: "",
        bankName: "",
      });
    }
  };

  const formSubmit = (e) => {
    e.preventDefault();
    registerSubmit(e);
    setPerson({
      id: uuidv1(),
      userName: "",
      account: "",
      bankName: "",
      addressLine1: "",
      addressLine2: "",
      city: "",
      country: "",
      zipcode: "",
    });
  };

  const {
    userName,
    account,
    bankName,
    addressLine1,
    addressLine2,
    city,
    country,
    zipcode,
  } = person;

  return (
    <div>
      <center>
        <form>
          <h3 className="title">Bank Details Form</h3>
          <input
            type="text"
            name="userName"
            value={userName || ""}
            onChange={onChange}
            placeholder="Vendor Name*"
          />
          <div style={{ color: "red" }}>
            {error.userName !== "" ? "Required User Name" : ""}
          </div>
          <br />
          <input
            type="number"
            name="account"
            value={account || ""}
            onChange={onChange}
            placeholder="Bank Account No*"
          />
          <div style={{ color: "red" }}>
            {error.account !== "" ? "Required Bank Account No" : ""}
          </div>
          <br />
          <input
            type="text"
            name="bankName"
            value={bankName || ""}
            onChange={onChange}
            placeholder="Bank Name*"
          />
          <div style={{ color: "red" }}>
            {error.bankName !== "" ? "Required Bank Name" : ""}
          </div>
          <br />
          <input
            type="text"
            name="addressLine1"
            value={addressLine1 || ""}
            onChange={onChange}
            placeholder="Address Line 1"
          />
          <br />
          <input
            type="text"
            name="addressLine2"
            value={addressLine2 || ""}
            onChange={onChange}
            placeholder="Address Line 2"
          />
          <br />
          <input
            type="text"
            name="city"
            value={city || ""}
            onChange={onChange}
            placeholder="City"
          />
          <br />
          <input
            type="text"
            name="country"
            value={country || ""}
            onChange={onChange}
            placeholder="Country "
          />
          <br />
          <input
            type="password"
            name="zipcode"
            value={zipcode || ""}
            onChange={onChange}
            placeholder="Zip Code"
          />
          <br />
          <br />
          <br />
          {current ? (
            <Button
              variant="contained"
              onClick={formSubmit}
              type="submit"
              color="secondary"
            >
              Update
            </Button>
          ) : (
            <Button
              variant="contained"
              onClick={formSubmit}
              type="submit"
              color="success"
            >
              Register
            </Button>
          )}
          <br />
        </form>
        <TableData
          data={data}
          deleteHandler={deleteHandler}
          updateCurrent={updateCurrent}
        />
      </center>
    </div>
  );
};

export default RegistrationForm;
