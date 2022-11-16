import React from "react";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import './Item.css';

export default function Item({ item }) {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          "& > :not(style)": {
            m: 1,
            p: 2,
          },
        }}
        key={item.id}
      >
        <Paper elevation={3}>
          <article className="card">
            <Link className="buttonDetails" to={"/item/" + item.id}>Detalles</Link>
            <div className="imgContainer">
              <img
                src={
                  item.img ||
                  "https://commons.wikimedia.org/wiki/File:No-Image-Placeholder.svg"
                }
                alt={item.name}
              />
            </div>
            <div className="card--data">
              <h3 style={{ textTransform: 'capitalize' }}>
                {item.name}
              </h3>
            </div>
          </article>
        </Paper>
      </Box>
    </>
  );
}
