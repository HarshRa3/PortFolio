import { Box, Stack, Typography } from "@mui/material";
import ContactCardCom from "../../components/ContactCom/ContactCardCom";

const ContactUs = () => {
  return (
    <Stack
      spacing={2}
      sx={{
        color: "white",
        bgcolor: "#8080808a",
        p: "10px",
        borderRadius: "5px",
      }}
    >
      <Typography
        sx={{
          fontWeight: 600,
          textAlign: "center",
          bgcolor: "#2d1c2ac2",
          p: "10px",
        }}
        variant="h3"
      >
        Contact Me
      </Typography>
      <Box
        sx={{
          textAlign: "center",
          display: "flex",
          justifyContent: "space-around",
          flexWrap: "wrap",
          alignItems: "center",
          gap: 3,
          py:'40px'
        }}
      >
        <ContactCardCom title={"harshrastogi173@gmail.com"} />
        <ContactCardCom title={"+91 7983721010"} />
        <ContactCardCom title={"New Ashok Nagar,Delhi (110096)"} />
      </Box>
    </Stack>
  );
};

export default ContactUs;
