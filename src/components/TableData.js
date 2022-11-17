import React from "react";
import { Button } from "@mui/material";
import MenuIcon from "@material-ui/icons/Menu";
import DeleteIcon from "@material-ui/icons/Delete";

const TableData = ({ data, setData, deleteHandler, updateCurrent }) => {
  return (
    <div>
      <div className="listcon">
        <h1 className="title">Users List</h1>
        <table>
          <thead>
            <tr>
              <th>username</th>
              <th>Account No</th>
              <th>Bank No.</th>
              <th>Delete</th>
              <th>Update</th>
            </tr>
          </thead>
          <tbody>
            {data.length > 0 &&
              data.map((person, i) => {
                const { userName, account, bankName } = person;
                return (
                  <tr key={i}>
                    <td>{userName}</td>
                    <td>{account}</td>
                    <td>{bankName}</td>
                    <td>
                      <Button
                        variant="outlined"
                        onClick={() => deleteHandler(i)}
                        startIcon={<DeleteIcon />}
                        color="error"
                      >
                        Delete
                      </Button>
                    </td>
                    <td>
                      <Button
                        variant="contained"
                        onClick={() => updateCurrent(i)}
                        endIcon={<MenuIcon />}
                        color="info"
                      >
                        Edit
                      </Button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TableData;
