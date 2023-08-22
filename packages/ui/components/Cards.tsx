import React from "react";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import {
  Card,
  Button,
  CardContent,
  CardOverflow,
  Chip,
  Link,
  Typography,
  AspectRatio,
} from "@mui/joy";

export function Cards() {
  return (
    <>
      <div>
        <Card sx={{ width: 320, maxWidth: "100%", boxShadow: "lg" }}>
          <CardOverflow>
            <AspectRatio sx={{ minWidth: 200 }}>
              <img
                src="https://images.unsplash.com/photo-1593121925328-369cc8459c08?auto=format&fit=crop&w=286"
                srcSet="https://images.unsplash.com/photo-1593121925328-369cc8459c08?auto=format&fit=crop&w=286&dpr=2 2x"
                loading="lazy"
                alt=""
              />
            </AspectRatio>
          </CardOverflow>
          <CardContent>
            <Typography level="body-xs">Bluetooth Headset</Typography>
            <Link
              href="#product-card"
              fontWeight="md"
              color="neutral"
              textColor="text.primary"
              overlay
              endDecorator={<ArrowOutwardIcon />}
            >
              E-Mart Product
            </Link>

            <Typography
              level="title-lg"
              sx={{ mt: 1, fontWeight: "xl" }}
              endDecorator={
                <Chip component="span" size="sm" variant="soft" color="success">
                  Lowest price
                </Chip>
              }
            >
              2,900 $
            </Typography>
          </CardContent>
          <CardOverflow>
            <Button variant="solid" color="danger" size="lg">
              Add to cart
            </Button>
          </CardOverflow>
        </Card>
      </div>
    </>
  );
}
