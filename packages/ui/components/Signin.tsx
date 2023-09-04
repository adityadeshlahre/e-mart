import {
  Card,
  Paper,
  TextField,
  Typography,
  CardContent,
  Button,
} from "@mui/material";

export function Signin() {
  return (
    <>
      <div>
        <center>
          <Paper
            elevation={20}
            sx={{ maxWidth: 600, display: "flex", justifyContent: "center" }}
          >
            <Card>
              <CardContent>
                <Typography variant="h4" width="bold" textAlign="center">
                  SignIn On EMART
                </Typography>
                <TextField
                  label="Email"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  color="success"
                />
                <TextField
                  label="Password"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  type="password"
                  color="success"
                />
                <Button
                  size="large"
                  variant="contained"
                  fullWidth
                  color="success"
                >
                  Sign Up
                </Button>
              </CardContent>
            </Card>
          </Paper>
        </center>
      </div>
    </>
  );
}
