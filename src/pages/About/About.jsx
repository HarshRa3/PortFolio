import { Box, Card, List, ListItem, Stack, Typography } from "@mui/material";

import CardCom from "../../components/AboutPageCom/CardCom";
import { SkillStaticData, experienceData } from "../../staticData/staticData";
import ExperienceCard from "../../components/AboutPageCom/ExperienceCard";

const About = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
  return (
    <Stack spacing={2}>
      <Card sx={{ color: "white", bgcolor: "#8080808a", p: "10px" }}>
        <List>
          <Typography
            sx={{
              fontWeight: 600,
              textAlign: "center",
              color: "white",
              bgcolor: "#2d1c2ac2",
              p: "10px",
            }}
            variant="h3"
          >
            About
          </Typography>
          <ListItem>
            <Typography sx={{ textAlign: "justify" }}>
              My educational background includes scoring 70% in 10th grade from
              Saraswati Vidhya Mandir and 68.2% in 12th grade from Krishna Bal
              Vidhya Mandir. Currently, I am a fourth-year Computer Science
              student at KITPS Moradabad, expecting to graduate in 2024. I am
              enthusiastic about applying my knowledge and expertise to
              contribute to dynamic web projects and deliver seamless online
              experiences for users.
            </Typography>
          </ListItem>
          <ListItem>
            <Typography sx={{ textAlign: "justify" }}>
              I have successfully completed the Web Designing Certificate
              program at DUCAT Noida, Sector 16 Branch, with Certificate ID:
              31122022884209370. This certification authenticates my proficiency
              in web design principles, front-end development, and UX design.
              Eager to leverage these skills, I&apos;ve gained 6 months of
              experience as a React.js Developer at Excellence Technology Pvt
              Ltd.
            </Typography>
          </ListItem>
        </List>
      </Card>
      <Card
        sx={{
          color: "white",
          bgcolor: "#8080808a",
          p: "10px",
          display: "flex",
          flexDirection: "column",
          gap: 2,
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
          Skills
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-around",
            gap: 2,
          }}
        >
          {SkillStaticData.map((e, i) => (
            <CardCom key={i} title={e.name} icon={e.icon} />
          ))}
        </Box>
      </Card>
      <Card
        sx={{
          color: "white",
          bgcolor: "#8080808a",
          p: "10px",
          display: "flex",
          flexDirection: "column",
          gap: 2,
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
          Experience
        </Typography>
        {experienceData.map((e, i) => (
          <ExperienceCard
            key={i}
            title={e.role}
            desc={e.desc}
            exprenceTime={e.experienceTime}
            company={e.company}
          />
        ))}
      </Card>
    </Stack>
  );
};

export default About;
