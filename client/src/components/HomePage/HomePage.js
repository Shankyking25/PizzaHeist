import React, { useState, useRef, useEffect }  from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid2';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActionArea from '@mui/material/CardActionArea';
import AddIcon from '@mui/icons-material/Add';
import Footer from '../Footer/Footer';
import pizza1 from "../../icons/pizza1.ico"
import frenchFries from "../../icons/French-Fries.ico"
import MasalaMag from "../../icons/MasalaMag.ico"
import FriMomo from "../../icons/FriMomo.ico"
import Mag2 from "../../icons/Mag2.ico"
import Momo from "../../icons/Momo.ico"
import SteamMomo from "../../icons/SteamMomo.ico"
import Ots from "../../icons/Ots.ico"
import Mag3 from "../../icons/Magwebp.ico"
import  Col from "../../Img/col.jpeg"
import  Deliv from "../../Img/delivere.jpg"
import  Food from "../../Img/food.jpg"
import Header from '../Header/Header';
import './homePage.css'


  const cards = [
    {
      id: 1,
      title: 'New Arrivals',
      description: 'New Product, New Quality,New Speed, New Price',
      img:Food
    },
    {
      id: 2,
      title: 'Free Home Delivery',
      description: 'Get your order delivered to your home in 30 minutes.',
      img: Deliv
    },
    {
      id: 3,
      title: 'From Beverage Category',
      description: 'Combos.Single Coke not delivered',
      img: Col
    },
  ];

  const categories = [
    { name: 'Unlimited Pizza - Offline', id: 1 },
    { name: 'Chinese - Newly Added', id: 2 },
    { name: 'Full Pizza @69 Only', id: 3 },
    { name: 'Students Pizza 🍕', id: 4 },
    { name: 'Burger Heist', id: 5 },
    { name: 'Meals & Combos', id: 6 },
    { name: 'Pizza Mania', id: 7 },
    { name: 'Beverages', id: 8 },
  ];
  
  const products = [
    {
      categoryId: 1,
      items: [
        {
          name: 'Book Your Seat - Unlimited Pizza 🍕',
          price: 300,
          originalPrice: 500,
          image:pizza1
        },
      ],
    },
    {
      categoryId: 2,
      items: [
        { name: 'French Fries With Mayo 🍟', price: 50, originalPrice: 100,image:frenchFries },
        { name: 'Corn Cheese Maggie', price: 90, originalPrice: 170,image:Ots },
        { name: 'Paneer Maggie', price: 80, originalPrice: 140,image:Mag2 },
        { name: 'Butter Maggie', price: 70, originalPrice: 140,image:Mag3 },
        { name: 'Masala Maggie', price: 60, originalPrice: 100,image:MasalaMag },
        { name: 'Tawa Fry Momo', price: 80, originalPrice: 140,image:Momo },
        { name: 'Fry Momo', price: 60, originalPrice: 110,image:FriMomo },
        { name: 'Steam Momo', price: 50, originalPrice: 100,image:SteamMomo },
      ],
    },
    {
      categoryId: 3,
      items: [
        { name: 'Medium Size Pizza - 8 Piece @129\-', price: 129, originalPrice: 199,image:pizza1 },
        { name: 'Pack Of 4 Slice @ 69\-', price: 69, originalPrice: 140, image:pizza1 },
      ],
    },
    {
      categoryId: 4,
      items: [
        {
          name: 'The Backbenchers Pizza 🍕 Loaded With Veggies',
          price: 119,
          originalPrice: 219,
          image:pizza1
        },
      ],
    },
  ];
  




function HomePage() {

  const [selectedCategory, setSelectedCategory] = useState(null);  
  const [selectedCard, setSelectedCard] = useState(0);



  const column2Ref = useRef(null);

  useEffect(() => {

    if (selectedCategory !== null && column2Ref.current) {
      const categoryElement = document.getElementById(`category-${selectedCategory}`);
      if (categoryElement) {
        console.log(categoryElement.offsetTop)
        column2Ref.current.scrollTo({
          top: categoryElement.offsetTop - column2Ref.current.offsetTop,
          behavior: 'smooth',
        });
      }
    }
  }, [selectedCategory]);


  

    return (
       <>
   
       <Grid fixed >

            <Header/>


    <Container fixed>
  <Box
    sx={{ 
      width: '100%',
      padding:'15px 0',
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)', // Ensure 3 full-width columns
      gap: 2,
      
    }}
  >
    {cards.map((card, index) => (
      <Card key={index} sx={{ height: 160 }}>
        <CardActionArea
          onClick={() => setSelectedCard(index)}
          data-active={selectedCard === index ? '' : undefined}
          sx={{
            height: '100%',
            '&[data-active]': {
              backgroundColor: 'action.selected',
              '&:hover': {
                backgroundColor: 'action.selectedHover',
              },
            },
          }}
        >
          <CardContent 
          className='card-background'
            sx={{
              height: '100%',
              backgroundImage: `url(${card.img})`, 
              }}
          >
            <Typography variant="h5" component="div" style={{fontWeight:"bold",paddingBottom:"3px"}}>
              {card.title}
            </Typography>
            <Typography variant="body2" color="white" style={{wordSpacing:"2px",width:"75%",}}>
              {card.description}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    ))}
  </Box>
</Container>

<hr  style={{ 
  border: 'none', borderTop: '0.5px solid lightgray', margin: 0 
}}/>




<Container fixed>

      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: '1.3fr 3fr 1.5fr', // 3 columns
          marginBottom: 2,
          
        }}
      >
        {/* 1st Column: 20-item list with scrolling effect */}
        <Box
          sx={{
            overflowY: 'auto', 
            maxHeight: '400px', 
            paddingTop: 2
             
          }}
        >
          {categories.map((category) => (
              <Typography
              key={category.id}
              variant="body1"
              sx={{padding:"2px 0px", marginTop: 1,marginBottom: 1, cursor: 'pointer', color: selectedCategory === category.id ? '#488EC4' : '#575757' }}
              onClick={() => setSelectedCategory(category.id)}
            >
              {category.name} ({products.find((product) => product.categoryId === category.id)?.items.length || 0})
            </Typography>
          ))}
        </Box>




  {/* Column 2: Product list */}

<Box sx={{ border: '1px solid lightgray',
 padding: 2,
   maxHeight: '350px', overflowY: 'auto', '&::-webkit-scrollbar': {
    display: 'none',  // Hides the scrollbar
    
  }, }} ref={column2Ref}>
  
  
  {products.map((productGroup) => (
    <Box key={productGroup.categoryId} id={`category-${productGroup.categoryId}`}>
     <Typography 

  variant="h6"
  sx={{
    color: selectedCategory === productGroup.categoryId ? '#488EC4' : 'black',
  }}
>  
<Box
    component="span"
    sx={{
      marginTop:"0px",
      padding: '2px',                
      verticalAlign: 'middle',       
    }}
  >
  {categories.find((category) => category.id === productGroup.categoryId)?.name}
  </Box>
  <Box  component="span"   className='itemLength-button'  >
    {productGroup.items.length}
  </Box>
</Typography>


      {productGroup.items.map((item, index) => (
       <Box
       key={index}
       sx={{  
         marginBottom: 5,
         marginTop: 3,
         backgroundColor: selectedCategory === productGroup.categoryId ? '#f9f9f9' : 'transparent',
       }}
     >
      
       <Grid container spacing={2} alignItems="center"    >
         {/* 1st Column: Image (fixed width) */}
         <Grid
           item
           size={3}
           style={{
             display: 'flex',
             justifyContent: 'center',
             position: 'relative', 
           }}
         >
           {/* Image */}
           <img
             src={item.image} 
             alt="Card"
             style={{
               width: 120,
               height: 120,
               objectFit: 'cover',
               borderRadius: '8px',
             }}
           />
     
           {/* Overlapping "40% OFF" Label */}
           <Box className="offer" >
             40% OFF
           </Box>
         </Grid>
     
         {/* 2nd Column: Text and Price (Flexible column) */}
         <Grid
           item
           size={7}
           style={{
             display: 'flex',
             flexDirection: 'column',
             justifyContent: 'center',
           }}
         >
           <Typography variant="body1" fontWeight="bold">{item.name}</Typography>
           <Typography variant="body2" color="text.secondary" sx={{padding:"5px 0px"}}>
             <span style={{ fontWeight: 'bold', fontSize: '1rem',color:"black" }}>₹{item.price}</span>
             <span style={{ marginLeft: '8px' }}>
               <s>₹{item.originalPrice}</s>
             </span>
           </Typography>
         </Grid>
     
         {/* 3rd Column: Add Button (fixed width) */}
         <Grid
           item
           size={2}
           style={{
             display: 'flex',
             justifyContent: 'flex-end', 
           }}
         >
           <Button
           size='small'
             variant="outlined"
             endIcon={<AddIcon sx={{ color: '#A3C6E1' }} />}
             sx={{
               color: '#A3C6E1',
               borderColor: '#A3C6E1',
             }}
           >
             Add
           </Button>
         </Grid>
       </Grid>
     </Box>
      ))}
    </Box>
  ))}
</Box>




    
      {/* 3rd Column: Cart Details */}
<Box>
  {/* Cart Title */}
  <Box
     sx={{
              paddingTop:"16px",
      paddingLeft:"30px"
        }}
  >
  <Typography
    variant="body1"
    sx={{
      
      alignSelf: 'flex-start',
      fontSize:"20px",
      marginBottom: 2,
      color: 'black',
    }}

  >
    Cart
  </Typography>
   </Box>
   
   <Box className='cartIconRight'>
  {/* Cart Icon */}
  <LocalMallIcon
    sx={{
      fontSize: 60,
      color: '#A3C6E1',
      marginBottom: 2,
    }}
  />

  {/* Cart Message */}
  <Typography
    variant="body1"
    sx={{
      textAlign: 'center',
      
    }}
  >
     <span style={{ fontWeight: 'bold', fontSize: '1rem',color: 'black', }}>Your cart is empty.</span> 
    <br />
    <span style={{color:"gray",fontSize: '0.9rem'}}>Looks like you haven't made your choice yet.</span>
  </Typography>
  </Box>

</Box>





</Box>
 
    </Container>






      <Footer/>


</Grid>
  
  </>  );
}

export default HomePage;