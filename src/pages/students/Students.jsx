import React, { useState, useEffect } from "react";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import Actions from "../../components/Actions";

const Students = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    try {
      const response = await fetch(
        "https://65bb677f52189914b5bc02b7.mockapi.io/students"
      );
      if (!response.ok) {
        throw new Error("Failed to fetch students");
      }
      const data = await response.json();
      setStudents(data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = async (type, id) => {
    if (window.confirm(`Are you sure you want to delete this ${type}? ❌`)) {
      try {
        const response = await fetch(
          `https://65bb677f52189914b5bc02b7.mockapi.io/${type}/${id}`,
          {
            method: "DELETE",
          }
        );
        if (!response.ok) {
          throw new Error(`Failed to delete ${type} with ID ${id}`);
        }
        // Remove the deleted student from the state
        setStudents(students.filter((student) => student.id !== id));
        console.log(`${type} with ID ${id} deleted successfully.`);
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <div>
      <h2>Students</h2>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Image</TableCell>
              <TableCell>First Name</TableCell>
              <TableCell>Last Name</TableCell>
              <TableCell>Age</TableCell>
              <TableCell>Level</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {students.map((student) => (
              <TableRow key={student.id}>
                <TableCell>{student.id}</TableCell>
                <img
                  src={student.avatar}
                  alt={`Avatar of ${student.firstName} ${student.lastName}`}
                  style={{
                    width: "50px",
                    height: "50px",
                    borderRadius: "50px",
                  }}
                />
                <TableCell>{student.firstName}</TableCell>
                <TableCell>{student.lastName}</TableCell>
                <TableCell>{student.age}</TableCell>
                <TableCell>{student.level}</TableCell>
                <TableCell>
                  <Actions
                    type="student"
                    data={student}
                    handleDelete={handleDelete}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Students;
