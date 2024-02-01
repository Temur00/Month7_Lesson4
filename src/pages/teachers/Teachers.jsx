// import React from "react";
// import {
//   Paper,
//   Table,
//   TableBody,
//   TableCell,
//   TableContainer,
//   TableHead,
//   TableRow,
// } from "@mui/material";
// import Actions from "../../components/Actions";
// import request from "../../server";

// const columns = [
//   { field: "id", headerName: "ID", width: 70 },
//   { field: "firstName", headerName: "First name", width: 130 },
//   { field: "lastName", headerName: "Last name", width: 130 },
//   {
//     field: "age",
//     headerName: "Age",
//     type: "number",
//     width: 90,
//   },
//   {
//     field: "fullName",
//     headerName: "Full name",
//     description: "This column has a value getter and is not sortable.",
//     sortable: false,
//     width: 160,
//     valueGetter: (params) =>
//       `${params.row.firstName || ""} ${params.row.lastName || ""}`,
//   },
// ];

// const rows = [
//   { id: 1, lastName: "Snow", firstName: "Jon", age: 35, level: "middle" },
//   {
//     id: 2,
//     lastName: "Lannister",
//     firstName: "Cersei",
//     age: 42,
//     level: "junior",
//   },
//   {
//     id: 3,
//     lastName: "Lannister",
//     firstName: "Jaime",
//     age: 45,
//     level: "junior",
//   },
//   { id: 4, lastName: "Stark", firstName: "Arya", age: 16, level: "senior" },
//   {
//     id: 5,
//     lastName: "Targaryen",
//     firstName: "Daenerys",
//     age: 25,
//     level: "middle",
//   },
//   {
//     id: 6,
//     lastName: "Melisandre",
//     firstName: "Tom",
//     age: 150,
//     level: "junior",
//   },
//   {
//     id: 7,
//     lastName: "Clifford",
//     firstName: "Ferrara",
//     age: 44,
//     level: "senior",
//   },
//   {
//     id: 8,
//     lastName: "Frances",
//     firstName: "Rossini",
//     age: 36,
//     level: "junior",
//   },
//   { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65, level: "middle" },
// ];

// const mappedRows = rows.map((row) => ({ ...row, actions: <Actions /> }));

// const Teachers = () => {
//   return (
//     <div>
//       <h2>Teachers</h2>
//       <TableContainer component={Paper}>
//         <Table sx={{ minWidth: 650 }} aria-label="simple table">
//           <TableHead>
//             <TableRow>
//               <TableCell>No</TableCell>
//               <TableCell>Firstname</TableCell>
//               <TableCell>Lastname</TableCell>
//               <TableCell>Age</TableCell>
//               <TableCell>Level</TableCell>
//               <TableCell>Actions</TableCell>
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {mappedRows.map((row) => (
//               <TableRow
//                 key={row.id}
//                 sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
//               >
//                 <TableCell component="th" scope="row">
//                   {row.id}
//                 </TableCell>
//                 <TableCell>{row.firstName}</TableCell>
//                 <TableCell>{row.lastName}</TableCell>
//                 <TableCell>{row.age}</TableCell>
//                 <TableCell>{row.level}</TableCell>
//                 <TableCell align="center">
//                   <Actions align="center" />
//                 </TableCell>
//               </TableRow>
//             ))}
//           </TableBody>
//         </Table>
//       </TableContainer>
//     </div>
//   );
// };

// export default Teachers;

// second Time

// import React, { useState, useEffect } from "react";
// import {
//   Paper,
//   Table,
//   TableBody,
//   TableCell,
//   TableContainer,
//   TableHead,
//   TableRow,
// } from "@mui/material";

// const Teachers = () => {
//   const [teachers, setTeachers] = useState([]);

//   useEffect(() => {
//     fetch("https://65bb677f52189914b5bc02b7.mockapi.io/teachers")
//       .then((response) => response.json())
//       .then((data) => setTeachers(data))
//       .catch((error) => console.error("Error fetching teachers:", error));
//   }, []);

//   return (
//     <div>
//       <h2>Teachers</h2>
//       <TableContainer component={Paper}>
//         <Table sx={{ minWidth: 650 }} aria-label="simple table">
//           <TableHead>
//             <TableRow>
//               <TableCell>ID</TableCell>
//               <TableCell>First Name</TableCell>
//               <TableCell>Last Name</TableCell>
//               <TableCell>Age</TableCell>
//               {/* Add more table headers as needed */}
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {teachers.map((teacher) => (
//               <TableRow key={teacher.id}>
//                 <TableCell>{teacher.id}</TableCell>
//                 <TableCell>{teacher.firstName}</TableCell>
//                 <TableCell>{teacher.lastName}</TableCell>
//                 <TableCell>{teacher.age}</TableCell>
//                 {/* Add more table cells for other teacher properties */}
//               </TableRow>
//             ))}
//           </TableBody>
//         </Table>
//       </TableContainer>
//     </div>
//   );
// };

// export default Teachers;

// third Time
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
                {/* <TableCell>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => handleEdit(teacher.id)}
                  >
                    Edit
                  </Button>
                  <Button
                    variant="contained"
                    color="secondary"
                    onClick={() => handleDelete(teacher.id)}
                  >
                    <IconButton color="error">
                      <DeleteIcon />
                    </IconButton>
                  </Button>
                </TableCell> */}
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
