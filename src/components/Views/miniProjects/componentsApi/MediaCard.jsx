import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

export default function MediaCard({ data }) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia sx={{ height: 300 }} image={data.image} title="green iguana" />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {data.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Specie: {data.species}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Sex: {data.gender}
        </Typography>
        <Typography variant="body2" color="text.secondary"></Typography>
        {data.status === "Alive" ? (
          <Typography variant="body2" style={{ color: "#1FE85C" }}>
            {data.status}
          </Typography>
        ) : (
          <Typography variant="body2" style={{ color: "#D62222" }}>
            {data.status}
          </Typography>
        )}
        <Typography variant="body2" color={"text.secundary"}> 
          Origin: {data.origin.name}
        </Typography>
      </CardContent>
    </Card>
  );
}
