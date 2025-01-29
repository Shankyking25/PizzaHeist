import React from 'react';
import { Grid, Typography, Box, Link, Container } from '@mui/material';
import truck from "../../icons/truck.ico";
import pay from "../../icons/Pay.ico";
import chat from "../../icons/chat.ico";
import InstagramIcon from '@mui/icons-material/Instagram';
import './footer.css';

function Footer() {
  return (
    <Grid className="footer-container">
      <Container fixed>
        <Box>
          <Grid container justifyContent="center" style={{ padding: '40px 0 30px 0' }}>
            {/* Column 1: Free Delivery */}
            <Grid item xs={12} sm={4} sx={{ textAlign: 'center' }}>
              <img src={truck} alt="Free Delivery" className="footer-icon" />
              <Typography variant="body1" className="footer-title">
                Free Delivery
              </Typography>
              <Typography variant="body2" className="footer-description">
                Delivery happens within: 30-60 minutes
              </Typography>
            </Grid>

            {/* Column 2: Payment Options */}
            <Grid item xs={12} sm={4} sx={{ textAlign: 'center' }}>
              <img src={pay} alt="Payment Options" className="footer-icon" />
              <Typography variant="body1" className="footer-title">
                Payment Options
              </Typography>
              <Typography variant="body2" className="footer-description">
                Cash on delivery and online payment
              </Typography>
            </Grid>

            {/* Column 3: Customer Support */}
            <Grid item xs={12} sm={4} sx={{ textAlign: 'center' }}>
              <img src={chat} alt="Customer Support" className="footer-icon" />
              <Typography variant="body1" className="footer-title">
                Customer Support
              </Typography>
              <Link href="mailto:pizzaheist.com@gmail.com" className="footer-description">
                pizzaheist.com@gmail.com
              </Link>
            </Grid>
          </Grid>

          <hr className="footer-divider" />

          {/* Second row: Store Details */}
          <Grid container justifyContent="center" sx={{ marginTop: 3, marginBottom: 3 }}>
            <Grid item xs={12} sx={{ textAlign: 'center' }}>
              <Typography variant="body2" className="footer-description">
                STORE DETAILS
              </Typography>
              <Typography variant="body1" className="store-details-text">
                Pizza Heist
              </Typography>
              <Typography variant="body2" className="store-details-text">
                Pukhrayan, Kanpur Dehat, Uttar Pradesh
              </Typography>
            </Grid>
          </Grid>

          <hr className="footer-divider" />

          {/* Third row: Follow Us */}
          <Grid container justifyContent="center" sx={{ paddingTop: "15px", paddingBottom: "20px" }}>
            <Grid item xs={12} sx={{ textAlign: 'center' }}>
              <Typography variant="body2" className="footer-description">
                FOLLOW US
              </Typography>
              <Box className="social-media">
                <InstagramIcon className="social-media-icon" />
                <Link
                  //href="https://www.instagram.com/"
                  target="_blank"
                  className="social-media-link"
                >
                  Instagram
                </Link>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Grid>
  );
}

export default Footer;
