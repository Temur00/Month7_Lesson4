import React from "react";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { Stack } from "@mui/material";

const Actions = ({ teacher, handleDelete }) => {
  const onDelete = () => {
    handleDelete(teacher.id);
  };

  return (
    <Stack direction="row" spacing={1}>
      <div
        style={{
          width: "38",
          height: "38",
          background: "#efefef",
          borderRadius: "12",
        }}
      >
        <IconButton color="success">
          <EditIcon />
        </IconButton>
      </div>
      <div
        style={{
          width: "40",
          height: "40",
          background: "#efefef",
          borderRadius: "12",
        }}
      >
        <IconButton color="error" onClick={onDelete}>
          <DeleteIcon />
        </IconButton>
      </div>
    </Stack>
  );
};

export default Actions;
