import {
  Avatar,
  Box,
  Card,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";
import { Input, Button, Stack } from "@mui/joy/";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ChatIcon from "@mui/icons-material/Chat";
import NumbersIcon from "@mui/icons-material/Numbers";
import PublicIcon from "@mui/icons-material/Public";
import ModeIcon from "@mui/icons-material/Mode";
import { Orderhistory } from "ui";

export default function Profile() {
  return (
    <>
      <div
        style={{
          minHeight: "100vh",
          backgroundColor: "#EEEEEE",
          display: "flex",
          justifyContent: "wrap",
        }}
      >
        <Grid container spacing={1}>
          <Grid xs={4}>
            <div
              style={{
                padding: "10px",
                margin: "20px",
                textSizeAdjust: "auto",
                whiteSpace: "nowrap",
              }}
            >
              <Avatar alt="Remy Sharp" src="" sx={{ width: 80, height: 80 }} />

              <Typography variant="h4">Remy Sharp</Typography>
              <Typography variant="h6">Remyd@drib.com</Typography>
            </div>
            <div
              style={{
                padding: "10px",
                margin: "20px",
                textSizeAdjust: "auto",
                whiteSpace: "nowrap",
              }}
            >
              <Typography variant="h5">Personal Imformation</Typography>
              <br />
              <Typography variant="h5">Billing & Payments</Typography>
              <br />
              <Typography variant="h5">Order History</Typography>
              <br />
              <Typography variant="h5">Gift Card</Typography>
            </div>
          </Grid>
          <Grid xs={8}>
            <Box
              sx={{
                padding: "20px",
                margin: "30px",
              }}
            >
              <div>
                <Typography
                  sx={{
                    fontSize: "50px",
                    textDecoration: "bold",
                  }}
                >
                  Personal Information
                </Typography>
                <div>
                  <Typography sx={{ fontSize: "20px" }}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Voluptates quibusdam voluptate sequi eveniet, quia sint,
                    facere culpa tenetur ipsa. Quidem.
                  </Typography>
                </div>
              </div>
            </Box>
            <Box
              sx={{
                padding: "20px",
                margin: "30px",
              }}
            >
              <Stack
                spacing={{ xs: 1, sm: 2 }}
                direction="row"
                useFlexGap
                flexWrap="wrap"
              >
                <Card variant="outlined" sx={{ borderRadius: "15px" }}>
                  <CardContent>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        gap: "30px",
                      }}
                    >
                      <Typography variant="h5">Name</Typography>
                      <AccountCircleIcon fontSize="large" />
                    </div>
                    <Typography variant="body1">Remy Sharp</Typography>
                  </CardContent>
                </Card>
                <Card variant="outlined" sx={{ borderRadius: "15px" }}>
                  <CardContent>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        gap: "30px",
                      }}
                    >
                      <Typography variant="h5">Date of Birth</Typography>
                      <NumbersIcon fontSize="large" />
                    </div>
                    <Typography variant="body1">30 Feb 2055</Typography>
                  </CardContent>
                </Card>
                <Card variant="outlined" sx={{ borderRadius: "15px" }}>
                  <CardContent>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        gap: "30px",
                      }}
                    >
                      <Typography variant="h5">Country</Typography>
                      <PublicIcon fontSize="large" />
                    </div>
                    <Typography variant="body1">New York, USA</Typography>
                  </CardContent>
                </Card>
                <Card variant="outlined" sx={{ borderRadius: "15px" }}>
                  <CardContent>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        gap: "30px",
                      }}
                    >
                      <Typography variant="h5">Contact At</Typography>
                      <ChatIcon fontSize="large" />
                    </div>
                    <Typography variant="body1">
                      contact.vg@gmail.com
                    </Typography>
                  </CardContent>
                </Card>
              </Stack>
            </Box>
            <Box
              sx={{
                padding: "20px",
                margin: "30px",
              }}
            >
              <div style={{ paddingBottom: "10px" }}>
                <Typography
                  sx={{
                    fontSize: "50px",
                    textDecoration: "bold",
                  }}
                >
                  Billing & Payment
                </Typography>
                <Typography sx={{ fontSize: "20px" }}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptates quibusdam voluptate sequi eveniet, quia sint,
                  facere culpa tenetur ipsa. Quidem.
                </Typography>
              </div>
              <Card
                variant="outlined"
                sx={{ borderRadius: "15px", maxWidth: "300px" }}
              >
                <CardContent>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      gap: "30px",
                    }}
                  >
                    <Typography variant="h5">Card Info</Typography>
                    <ModeIcon fontSize="large" />
                  </div>
                  <Typography variant="body1">
                    <b>CCN</b> : XX4567
                  </Typography>
                  <Typography variant="body1">
                    <b>CVV</b> : XX2
                  </Typography>
                </CardContent>
              </Card>
            </Box>
            <Box
              sx={{
                padding: "20px",
                margin: "30px",
              }}
            >
              <div>
                <Typography
                  sx={{
                    fontSize: "50px",
                    textDecoration: "bold",
                  }}
                >
                  Order History
                </Typography>
                <div>
                  <Typography sx={{ fontSize: "20px" }}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Voluptates quibusdam voluptate sequi eveniet, quia sint,
                    facere culpa tenetur ipsa. Quidem.
                  </Typography>
                </div>
              </div>
              <Orderhistory />
            </Box>
            <Box
              sx={{
                padding: "20px",
                margin: "30px",
              }}
            >
              <div>
                <Typography
                  sx={{
                    fontSize: "50px",
                    textDecoration: "bold",
                  }}
                >
                  Gift Card
                </Typography>
                <div>
                  <Typography sx={{ fontSize: "20px" }}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Voluptates quibusdam voluptate sequi eveniet, quia sint,
                    facere culpa tenetur ipsa. Quidem.
                  </Typography>
                </div>
              </div>
              <br />
              <form
                onSubmit={(event) => {
                  event.preventDefault();
                  const formData = new FormData(event.currentTarget);
                  const formJson = Object.fromEntries(
                    (formData as any).entries()
                  );
                  alert(JSON.stringify(formJson));
                }}
              >
                <Stack spacing={1}>
                  <Typography variant="h4" sx={{ fontWeight: "bold" }}>
                    Enter Gift Code{" "}
                  </Typography>
                  <Input placeholder="Ex  :  DH39HJ39048KL9" required />
                  <Button type="submit">Submit</Button>
                </Stack>
              </form>
            </Box>
          </Grid>
        </Grid>
      </div>
    </>
  );
}
