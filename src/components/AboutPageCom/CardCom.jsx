import { Card, Typography } from "@mui/material";
import PropTypes from 'prop-types'


const CardCom = ({icon,title}) => {
  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        width: { lg: "23%", md: "32%", sm: "48%", xs: "100%" },
        py: "50px",
        gap: 2,
        borderRadius: "10px",
        bgcolor: "#1c15159c",
        color: "white",
        boxShadow: '-2px 2px 12px black',
        ":hover":{transform:'scale(1.03)'}
        ,transition:"all 0.2s ease-in"
      }}
    >
      <img style={{ width: "30%" }} src={icon} alt="" />
      <Typography sx={{ fontWeight: 600 }} variant="h5">
        {title}
      </Typography>
    </Card>
  );
};

CardCom.propTypes={
  icon:PropTypes.string.isRequired,
  title:PropTypes.string.isRequired
}
export default CardCom;
