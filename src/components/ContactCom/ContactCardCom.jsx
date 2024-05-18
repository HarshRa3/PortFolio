import { Card,  Typography } from "@mui/material";
import PropTypes from 'prop-types'

const ContactCardCom = ({ title }) => {
  return (
    <Card
      sx={{
        p: "20px",
        width: {md:"44%",xs:"100%"},
        borderRadius: "10px",
        color: "white",
        boxShadow: "-2px 2px 12px black",
        bgcolor: "#1c15159c",
        ":hover":{transform:'scale(1.03)'}
        ,transition:"all 0.2s ease-in"
      }}
    >
      <Typography variant="h5" sx={{ fontWeight: 600 }}>
        {title}
      </Typography>
    </Card>
  );
};
ContactCardCom.propTypes = {
    title: PropTypes.string.isRequired,
  };
export default ContactCardCom;
