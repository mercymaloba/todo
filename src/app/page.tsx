import React from "react";
import TableContainer from "@mui/material/TableContainer";
import { Table, TableCell, TableHead, TableRow, Stack } from "@mui/material";
import TodoApp from "./components/TodoApp";

export default function Todo() {
  const columns = ["New", "Active", "Review", "Testing", "Closed"];

  return (
    <>
      <TableContainer>
        <Table sx={{ minWidth: 650 }}>
          <TableHead sx={{ marginTop: "20%" }}>
            <TableRow>
              {columns.map((column) => (
                <TableCell key={column}>{column}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <Stack sx={{ marginTop: "2%" }}>
            <TodoApp />
          </Stack>
        </Table>
      </TableContainer>
    </>
  );
}
