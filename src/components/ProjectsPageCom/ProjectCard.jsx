import { Button, Card, Stack, Typography } from "@mui/material";
import { useState } from "react";
import PropTypes from "prop-types";

import { Link } from "react-router-dom";
const ProjectCard = ({ title, desc, path, imgpath }) => {
  const [animation, setanimation] = useState(false);
  return (
    <Card
      onMouseOver={() => setanimation(true)}
      onMouseOut={() => setanimation(false)}
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        width: { lg: "22%", md: "32%", sm: "48%", xs: "100%" },

        height: "200px",
        gap: 2,
        borderRadius: "10px",
        color: "white",
        boxShadow: "-2px 2px 12px black",
        position: "relative",
      }}
    >
      <img src={imgpath} style={{ width: "100%", height: "100%" }} alt="" />
      <Stack
        sx={{
          bgcolor: "#1c15159c",
          width: "100%",
          position: "absolute",
          transition: "all 0.25s ease-in",
          height: "100%",
          transform: `${animation ? "scale(1)" : "scale(0)"} `,
          alignItems: "center",
          justifyContent: "center",
          zIndex: 2,
          textAlign: "center",
          px: "20px",
          textTransform: "capitalize",
        }}
        spacing={1}
      >
        <Typography variant="h6" sx={{ fontWeight: 600 }}>
          {title}
        </Typography>
        <Typography variant="body2" sx={{ color: "#f0f8fd" }}>
          {desc}
        </Typography>
        <Link
          style={{ textDecoration: "none", color: "inherit" }}
          to={path}
          target="blank"
        >
          <Button
            variant="outlined"
            size={"small"}
            sx={{
              color: "#c4e8a4",
              "&.MuiButton-outlined": { border: "2px solid #c4e8a4" },
            }}
          >
            See More
          </Button>
        </Link>
      </Stack>
    </Card>
  );
};
ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  imgpath: PropTypes.string.isRequired,
};
export default ProjectCard;
