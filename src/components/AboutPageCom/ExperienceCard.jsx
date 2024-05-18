import { Card, Stack, Typography } from "@mui/material";
import PropTypes from 'prop-types'

const ExperienceCard = ({company,title,exprenceTime,desc}) => {
  return (
    <Card
      sx={{
        borderRadius: "10px",
        bgcolor: "#1c15159c",
        color: "white",
        p: "10px",
      }}
    >
      <Typography
        sx={{
          fontWeight: 600,
          padding: "10px",
          textAlign: "center",
          background: "#2b2234bf",
        }}
        variant="h5"
      >
        {company}
      </Typography>
      <Stack
        spacing={2}
        sx={{ p: "10px", background: "#fb00ff14", borderRadius: " 5px" ,mt:'10px'
        }}
      >
        <Stack
          sx={{
            justifyContent: "space-between",
            alignItems: "center",
            padding: "8px",
            background: "#1c10105e",
            borderRadius: " 4px",
          }}
          direction={"row"}
        >
          <Typography variant="h6">{title}</Typography>
          <Typography variant="h6">{exprenceTime}</Typography>
        </Stack>
        <Typography sx={{ px: "9px", textAlign: "justify" }} variant="body2">
{desc}
        </Typography>
      </Stack>
    </Card>
  );
};
ExperienceCard.propTypes={
    company:PropTypes.string.isRequired,
    title:PropTypes.string.isRequired,
    desc:PropTypes.string.isRequired,
    exprenceTime:PropTypes.string.isRequired,
    
}

export default ExperienceCard;
