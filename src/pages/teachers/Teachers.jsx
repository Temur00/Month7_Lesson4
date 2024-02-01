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

const Teachers = () => {
  const [teachers, setTeachers] = useState([]);

  useEffect(() => {
    fetch("https://65bb677f52189914b5bc02b7.mockapi.io/teachers")
      .then((response) => response.json())
      .then((data) => setTeachers(data))
      .catch((error) => console.error("Error fetching teachers:", error));
  }, []);

  const handleDelete = async (teacherId) => {
    if (window.confirm("Are you sure you want to delete this teacher? ❌")) {
      try {
        const response = await fetch(
          `https://65bb677f52189914b5bc02b7.mockapi.io/teachers/${teacherId}`,
          {
            method: "DELETE",
          }
        );
        if (response.ok) {
          // Fetch the updated list of teachers after deletion
          const updatedTeachersResponse = await fetch(
            "https://65bb677f52189914b5bc02b7.mockapi.io/teachers"
          );
          const updatedTeachersData = await updatedTeachersResponse.json();
          setTeachers(updatedTeachersData);
          console.log(`Teacher with ID ${teacherId} deleted successfully.`);
        } else {
          console.error(`Failed to delete teacher with ID ${teacherId}.`);
        }
      } catch (error) {
        console.error("Error deleting teacher:", error);
      }
    }
  };

  return (
    <div>
      <h2>Teachers</h2>
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
            {teachers.map((teacher) => (
              <TableRow key={teacher.id}>
                <TableCell>{teacher.id}</TableCell>
                <TableCell>{teacher.image}</TableCell>
                <TableCell>{teacher.firstName}</TableCell>
                <TableCell>{teacher.lastName}</TableCell>
                <TableCell>{teacher.age}</TableCell>
                <TableCell>{teacher.level}</TableCell>
                <TableCell>
                  <Actions teacher={teacher} handleDelete={handleDelete} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Teachers;
