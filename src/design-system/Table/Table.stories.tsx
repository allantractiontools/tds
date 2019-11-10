import React from "react";
import Table from "./Table";

export default {
  title: "UI/Table"
};

export const demo = () => {
  return (
    <Table striped hover>
      <thead>
        <tr>
          <th>Name</th>
          <th>Attendees</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {[1, 2, 3, 4, 5].map((n, index) => (
          <tr key={index}>
            <td>Test 1</td>
            <td>Test 2</td>
            <td>Test 3</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};
