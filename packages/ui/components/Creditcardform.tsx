import * as React from "react";
import {
  Card,
  CardActions,
  CardContent,
  Checkbox,
  Divider,
  FormControl,
  FormLabel,
  Input,
  Typography,
  Button,
} from "@mui/joy";
import InfoOutlined from "@mui/icons-material/InfoOutlined";
import CreditCardIcon from "@mui/icons-material/CreditCard";

export function CreditCardForm() {
  return (
    <center>
      <Card
        variant="outlined"
        sx={{
          maxHeight: "max-content",
          maxWidth: "100%",
          mx: "auto",
          // to make the demo resizable
          overflow: "auto",
          resize: "horizontal",
        }}
      >
        <Typography level="title-lg" startDecorator={<InfoOutlined />}>
          Add new card
        </Typography>
        <Divider inset="none" />
        <CardContent
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(2, minmax(80px, 1fr))",
            gap: 1.5,
          }}
        >
          <FormControl sx={{ gridColumn: "1/-1" }}>
            <FormLabel>Card number</FormLabel>
            <Input endDecorator={<CreditCardIcon />} />
          </FormControl>
          <FormControl>
            <FormLabel>Expiry date</FormLabel>
            <Input endDecorator={<CreditCardIcon />} />
          </FormControl>
          <FormControl>
            <FormLabel>CVC/CVV</FormLabel>
            <Input endDecorator={<InfoOutlined />} />
          </FormControl>
          <FormControl sx={{ gridColumn: "1/-1" }}>
            <FormLabel>Card holder name</FormLabel>
            <Input placeholder="Enter cardholder's full name" />
          </FormControl>
          <Checkbox label="Save card" sx={{ gridColumn: "1/-1", my: 1 }} />
          <CardActions sx={{ gridColumn: "1/-1" }}>
            <Button variant="solid" color="primary">
              Add card
            </Button>
          </CardActions>
        </CardContent>
      </Card>
    </center>
  );
}
