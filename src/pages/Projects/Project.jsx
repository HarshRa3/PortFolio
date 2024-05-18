import { Box, Stack, Typography } from "@mui/material"
import ProjectCard from "../../components/ProjectsPageCom/ProjectCard"
import { ProjectsData } from "../../staticData/staticData"
// import ProjectCard from "../../components/ProjectsPageCom/ProjectCard"

const Project = () => {
  return (
    <Stack spacing={2} sx={{color:"white",bgcolor:"#8080808a",p:'10px',borderRadius:'5px'}}>
          <Typography
          sx={{
            fontWeight: 600,
            textAlign: "center",
            bgcolor: "#2d1c2ac2",
            p: "10px",
          }}
          variant="h3"
        >
          Projects
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-around",
            gap: 2,
          }}
        >{
          ProjectsData.map((e,i)=><ProjectCard key={i} path={e.url} title={e.title} imgpath={e.img} desc={e.desc} />)
        }
          
        </Box>
    </Stack>
  )
}

export default Project
