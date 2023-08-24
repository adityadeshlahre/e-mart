import { Avatar, Box, Typography } from "@mui/material";
import { color } from "@mui/system";

export function Profile() {
  return (
    <>
      <center>
        <div
          style={{
            border: "2px solid black",
            padding: "20px",
            margin: "30px",
            backgroundColor: "#FECCD1",
          }}
        >
          <Avatar alt="Remy Sharp" src="" sx={{ width: 300, height: 300 }} />
          <div>
            <Typography variant="h2">Remy Sharp</Typography>
            <Typography variant="h2" style={{ fontSize: "40px" }}>
              Remyshad@drib.com
            </Typography>
          </div>
        </div>
        <Box>
          <div>
            <Typography
              sx={{
                color: "green",
                fontSize: "50px",
                border: "2px solid black",
              }}
            >
              Personal Information
            </Typography>
          </div>
          <div>
            <Typography sx={{ fontSize: "20px" }}>
              lorameips askjfh sauifhewrkje,sadouihuhsaldfjk sauiohd filuhsadfiu
              hsdfsafa.
            </Typography>
          </div>
        </Box>
      </center>
    </>
  );
}
