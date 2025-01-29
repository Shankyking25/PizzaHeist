import React from 'react';
import Header from '../components/Header/Header';
import Footer from './Footer/Footer';
import { Grid, Card, CardContent, Typography, Container } from '@mui/material';
import pizza1 from "../icons/pizza1.ico"
import frenchFries from "../icons/French-Fries.ico"


  // Sample data for 8 items (2 rows and 4 columns)
  const boxData = [
    { name: "Unlimited Pizza 🍕", image: pizza1 },
    { name: "French Fries 🍟", image: frenchFries },
    { name: "Cheese Maggie 🍝", image: pizza1 },
    { name: "Paneer Momo 🥟", image: frenchFries },
    { name: "Spicy Pizza 🍕", image: pizza1 },
    { name: "Veg Burger 🍔", image: frenchFries },
    { name: "Mushroom Pizza 🍕", image: pizza1 },
    { name: "Tandoori Fries 🍟", image: frenchFries },
  ];



function Categories(props) {
    return (
        <div>
            

                <Header/>


      
<Container fixed>
  <main style={{ padding: '20px 0px' }}>
    <Typography
      variant="body1"
      sx={{ fontSize: '1.2rem', marginBottom: '20px', fontWeight: 'bold' }}
    >
      All categories
    </Typography>

    <Grid container spacing={3}>
      {boxData.map((item) => (
        <Grid item xs={12} sm={6} md={3} key={item.id}>
          <Card
            sx={{
              borderRadius: '12px',
              overflow: 'hidden',
              boxShadow: 3,
            }}
          >
            
            <div
              style={{
                position: 'relative',
                width: '100%',
                paddingTop: '100%', 
                backgroundColor: 'rgba(0, 0, 0, 0.9)', 
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-end', 
                alignItems: 'center', 
              }}
            >
              
              <div
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  backgroundImage: `url(${item.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  zIndex: 1, 
                  opacity: 0.5, 
                }}
              />

              
              <Typography
                variant="body1"
                sx={{
                  color: 'white',
                  textAlign: 'center',
                  fontWeight: 'bold',
                  zIndex: 2, 
                  padding: '8px',
                }}
              >
                {item.name}
              </Typography>
            </div>
          </Card>
        </Grid>
      ))}
    </Grid>
  </main>
</Container>
               <Footer/>

        </div>
    );
}

export default Categories;