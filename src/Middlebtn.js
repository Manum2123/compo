import * as React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import SearchIcon from "@mui/icons-material/Search";
import SaveAltIcon from "@mui/icons-material/SaveAlt";
import tasks from "./task.json";

// Reusable Button Component
const CustomOutlineButton = ({ name, status, onClick }) => {
  return (
    <Button
      variant="outlined"
      onClick={onClick}
      style={{
        width: "200px",
        height: "50px",
        justifyContent: "space-between",
        alignItems: "center",
        borderBottom: "0",
        borderTop: "0",
        borderLeft: "0",
        borderRadius: "0",
      }}
    >
      {name}
      {status > 0 && (
        <span
          style={{
            background: "#f1c40f",
            color: "white",
            fontWeight: "bold",
            padding: "3px 10px",
            borderRadius: "12px",
            fontSize: "14px",
          }}
        >
          {status}
        </span>
      )}
    </Button>
  );
};

// Main Component
export default function MiddleButton({ onFilter }) {
  // Dynamically generate button data from tasks.json
  const buttonData = [
    { label: "To Do", status: 1 },
    { label: "Start Soon", status: 2 },
    { label: "Ready to Start", status: 3 },
    { label: "Later Due", status: 4 },
    { label: "Soon Due", status: 5 },
    { label: "Over Due", status: 6 },
  ].map((button) => ({
    ...button,
    count: tasks.filter((task) => task.status === button.status).length,
  }));

  return (
    <>
      <div
        style={{
          marginLeft: "calc(72px)",
          marginTop: "40px",
        }}
      >
        <Stack direction="row" style={{ padding: "5px" }}>
          {buttonData.map(({ label, status }, index) => (
            <CustomOutlineButton
              key={index}
              name={label}
              status={status}
              onClick={() => onFilter(status)} // Pass the status to the parent component
            />
          ))}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              border: "1px solid black",
              padding: "10px",
              marginLeft: "30px",
              color: "#e9e5e5",
            }}
          >
            <SearchIcon sx={{ color: "black" }} />
            <input
              type="text"
              placeholder="Search"
              style={{
                padding: "3px",
                background: "transparent",
                border: "0",
                outline: "0",
                color: "rgb(38, 36, 36)",
                fontSize: "16px",
                maxWidth: "200px",
              }}
              onChange={(e) => onFilter(e.target.value)} // Handle search input dynamically
            />
          </div>
          <SaveAltIcon
            sx={{ width: "40px", fontSize: "50px", marginLeft: "20px" }}
          />
        </Stack>
      </div>
      <br />
    </>
  );
}
