import React, { useEffect, useState } from "react";
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
    fetch("https://65bb677f52189914b5bc02b7.mockapi.io/students")
      .then((response) => response.json())
      .then((data) => setStudents(data))
      .catch((error) => console.error("Error fetching students:", error));
  }, []);
  return (
    <div>
      <h2>Students</h2>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>No</TableCell>
              <TableCell>Firstname</TableCell>
              <TableCell>Lastname</TableCell>
              <TableCell>Age</TableCell>
              <TableCell>Level</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {students.map((student) => (
              <TableRow key={student.id}>
                <TableCell>{student.id}</TableCell>
                <TableCell>{student.firstName}</TableCell>
                <TableCell>{student.lastName}</TableCell>
                <TableCell>{student.age}</TableCell>
                <TableCell>{student.level}</TableCell>
                <Actions align="center" />
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Students;
