import React, { useState, useEffect } from "react";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Button,
} from "@mui/material";
import Actions from "../../components/Actions";

const Teachers = () => {
  const [teachers, setTeachers] = useState([]);

  useEffect(() => {
    fetch("https://65bb677f52189914b5bc02b7.mockapi.io/teachers")
      .then((response) => response.json())
      .then((data) => setTeachers(data))
      .catch((error) => console.error("Error fetching teachers:", error));
  }, []);

  return (
    <div>
      <h2>Teachers</h2>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>First Name</TableCell>
              <TableCell>Last Name</TableCell>
              <TableCell>Age</TableCell>
              <TableCell>Level</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {teachers.map((teacher) => (
              <TableRow key={teacher.id}>
                <TableCell>{teacher.id}</TableCell>
                <TableCell>{teacher.firstName}</TableCell>
                <TableCell>{teacher.lastName}</TableCell>
                <TableCell>{teacher.age}</TableCell>
                <TableCell>{teacher.level}</TableCell>
                <Actions align="center" />
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Teachers;
