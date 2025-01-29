import React, { useState, useRef, useEffect }  from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { Popover,Link  } from '@mui/material';
import Grid from '@mui/material/Grid2';
import Stack from '@mui/material/Stack';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import GridViewIcon from '@mui/icons-material/GridView';
import { TextField, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import Typography from '@mui/material/Typography';
import logo from "../../icons/logo.ico";
import pizza1 from "../../icons/pizza1.ico"
import frenchFries from "../../icons/French-Fries.ico"
import Chip from '@mui/material/Chip';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { useNavigate,useLocation } from 'react-router-dom'; 
import './header.css'




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



function Header() {


    const [selectedCategory, setSelectedCategory] = useState(null);  
    const [anchorEl, setAnchorEl] = useState(null); // To handle popup visibility
    const [searchText, setSearchText] = useState(""); // To store the search text
    const [openAccount, setOpenAccount] = React.useState(false);
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));  
  
  
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
  
  
  
    
    const handleSearchClick = (event) => {
      setAnchorEl(event.currentTarget); // Open the search box
    };
  
    
    const handleClosePopup = () => {
      setAnchorEl(null); // Close the popover
    };
  
  
    // Check if the popup is open
    const open = Boolean(anchorEl);
  
  
  
  
    const handleClickOpen = () => {
      setOpenAccount(true);
    };
  
    const handleClose = () => {
      setOpenAccount(false);
    };
  
    const navigate = useNavigate(); 
    const location = useLocation();


    const ClickNavigate = () => {
      if (location.pathname !== '/categories') {
        navigate('/categories'); 
      }
    };
   


    return (
        <div>
            
            <Grid fixed >
    <Container fixed>
      <Grid
        container
        alignItems="center"
        spacing={2}
        className='headerGrid'
      
      >
        {/* Logo and Name */}
        <Grid container size={2.2} alignItems="center">
          <Grid item   className='headlogo' >
            <img
              src={logo} 
              alt="Pizza Heist Logo"
              className="header-logo-image"
             /*
              style={{
                width: 53,
                height: 'auto',  
                maxHeight: '100%', 
                borderRadius: "6px",
              }}

                */            />
          </Grid>
          <Grid item>
            <Typography
              variant="body1"
              sx={{
                fontSize: { xs: '14px', sm: '17px' }, 
               fontFamily: 'GalanoGrotesque, sans-serif', 
               fontWeight: "bold" , 
               
              }}
            >
              Pizza Heist
            </Typography>
          
          </Grid>
        </Grid>

        {/* Search Box */}
       
        <Grid   container     
      size={5.2}
      style={{
        display: 'flex', alignItems: 'center', padding:'0 18px'}}
      >
      
          <TextField
            placeholder="Search for products..."
            className="custom-textfield" 
            /*
            sx={{
           
              backgroundColor: '#f0f0f0',
              padding:"5px 0px",
              
              borderRadius: "5px",
              border: 'none', // Remove the border
              '& .MuiOutlinedInput-root': {
                border: 'none',
                '& fieldset': {
                  border: 'none', // Remove the border around the input
                },
              },
              '& .MuiInputBase-input': {
                padding: '5px', // Adjust padding for thinner appearance
              },
            }}
            */
            fullWidth

            value={searchText}
        onClick={handleSearchClick} // Open popup on click
        onChange={(e) => setSearchText(e.target.value)} // Update search text

            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />



      {/* Popup Box below search */}
      
         <Popover
        open={open} 
        anchorEl={anchorEl} // Attach the popover to the search box
        onClose={handleClosePopup} 
        anchorOrigin={{
          vertical: 'bottom', // Position below the search box
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top', // Align with the top of the search box
          horizontal: 'left',
        }}
        sx={{ width: 'auto',height:"auto", marginTop:"10px" }} 
      >
        <Box sx={{ padding: '10px', width: 430}}>
        <Typography style={{padding:"3px",  fontWeight: 'bold',}}>Bestsellers</Typography>
  <Grid container 
  spacing={{ xs: 2, md: 1.6 }}
   columns={{ xs: 4, sm: 8, md: 12 }} style={{marginTop:"4px"}}>

    {boxData.slice(0, 8).map((item, index) => (
      <Grid  item xs={6} sm={6} md={6} key={index}>
        <Box
          sx={{
            position: 'relative',
            width: 97,
            height: 100, 
            backgroundImage: `url(${item.image})`, 
            backgroundSize: 'cover',
            backgroundPosition: 'center', 
            borderRadius: '8px',
            display: 'flex',
            alignItems: 'flex-end', 
            justifyContent: 'center',
            color: 'white',
            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)', 
          }}
        >
          <Typography variant="body1" textAlign="center"className='custom-box-text'>
            {item.name}
          </Typography>
        </Box>
      </Grid>
    ))}
  </Grid>
</Box>
        
        </Popover>

        </Grid>




        {/* Buttons */}
        
        <Grid container  spacing={2} alignItems="center" justifyContent="flex-end" 
        size={4.6}
         style={{display: 'flex', alignItems: 'center'}} >
  
<Stack direction="row" spacing={1.5}>
<Chip 
      icon={<GridViewIcon 
        sx={{ color: '#534D4D', fontSize:"1.7rem",}} />}
  label="Categories"
   style={{padding: '6px',fontWeight: 'bold',backgroundColor: 'transparent',}}
  //className='custom-chip'
   onClick={ClickNavigate}
       />


<Chip 
      icon={<LocalMallIcon  sx={{ color: '#534D4D',fontSize:"1.6rem"}} />}
  label="Cart" 
     style={{padding: '6px',fontWeight: 'bold',backgroundColor: 'transparent',}}/>
    
    
      <Chip 
      icon={<PersonOutlineIcon  sx={{ color: '#534D4D',fontSize: '2rem',}} />}
  label="Account" 
    style={{padding: '6px',fontWeight: 'bold',backgroundColor: 'transparent',}}
  onClick={handleClickOpen}
       />
    </Stack>


    <Dialog
  fullScreen={fullScreen}
  open={openAccount}
  onClose={handleClose}
  aria-labelledby="responsive-dialog-title"
  PaperProps={{
    sx: {
      width: '50%', 
      maxWidth: '450px', 
    },
  }}
>
  <DialogTitle id="responsive-dialog-title">
    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <Typography sx={{ fontWeight: 'bold' ,  fontSize:"1.1rem"}}>Sign in</Typography>
      <Button variant="text" className="CrossButton" onClick={handleClose}>
        X
      </Button>
    </Box>
  </DialogTitle>

  <DialogContent>
    <TextField
      variant="outlined"
      size="small"
      placeholder="Enter your phone number"
      inputProps={{ maxLength: 10 }}
      sx={{ width: '100%',paddingTop:"15px" }}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start" > <Typography sx={{ fontWeight: 'bold' }}>
          +91
        </Typography></InputAdornment>
        ),
      }}
    />
    <Typography className='agreeTerm'>
      By continuing, you agree to our company's
      <Link href="#" sx={{ color: '#4B90C6', textDecoration: 'none' }}>
      <span style={{ margin: '0 5px' }}>Terms and Conditions</span>
      </Link>
      <span style={{ marginRight: '5px' }}>and</span>
      <Link href="#" sx={{ color: '#4B90C6', textDecoration: 'none' }}>
        Privacy Policy
      </Link>
    </Typography>
  </DialogContent>

  <DialogActions sx={{ justifyContent: 'center', padding: '0px 0px 20px 0px' }}>
    <Button size="large" onClick={handleClose} sx={{fontWeight:"bold"}} variant="contained">
      Send OTP
    </Button>
  </DialogActions>
</Dialog>


            </Grid>
      </Grid>
   
    </Container>
    <hr   style={{ border: 'none', borderTop: '0.5px solid lightgray', marginTop: 8 }}/>

 </Grid>

        </div>
    );
}

export default Header;
