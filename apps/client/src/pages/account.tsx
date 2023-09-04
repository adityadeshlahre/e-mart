import { Signup, Cards, Signin, Appbar } from "ui";
import { Typography } from "@mui/material";

export default function SingUpPage() {
  return (
    <>
      <Appbar />
      <div style={{ paddingTop: "20px" }}>
        <Signup />
      </div>
      {/* <Signin /> */}
      {/* <Cards /> */}
    </>
  );
}
