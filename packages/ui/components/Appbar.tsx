import { Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";

export function Appbar() {
  return (
    <>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Paper elevation={2}>
          <Box>
            <div>
              <Typography>E/MART</Typography>
            </div>
          </Box>
        </Paper>
      </div>
    </>
  );
}
