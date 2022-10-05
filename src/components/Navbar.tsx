import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import { MenuItem } from '@mui/material';
import LoginSharpIcon from '@mui/icons-material/LoginSharp';




const pages = [
    { name: ' НАШИ КУРСЫ', link: '/courses', id: 1 },
    { name: 'О НАС', link: '/about', id: 2 },
    { name: 'СВЯЗАТЬСЯ С НАМИ', link: '/contacts', id: 3 },
    { name: 'ADMIN', link: '/add', id: 4 },
  ];
  

const Navbar = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static" sx={{ bgcolor: '#fff', padding: '0 0 10px', boxShadow: '10px 5px 5px #556b724f'}}>

        <Toolbar sx={{mx: '10vw', display: 'flex',
                    justifyContent: 'space-around'}}>
        <Link to="/">
            <img
              src="https://dewey.tailorbrands.com/production/brand_version_mockup_image/252/7254531252_97fb15cc-6b93-44d9-ac6d-71685d8ef5d2.png?cb=1652175155"
              alt="123"
            />
          </Link>
          <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'space-around'
                  }}>
                {pages.map((page) => (
                  <MenuItem key={page.id} 
                //   onClick={handleCloseNavMenu}
                
                >
                    <Link to={page.link}>
                      <Typography
                        sx={{
                          ml: 'auto',
                          my: 1,
                          color: 'black',
                          display: 'block',
                        }}
                      >
                        {page.name}
                      </Typography>
                    </Link>
                  </MenuItem>
                ))}

              </Box>
              <Box sx={{ flexGrow: 0 }}>
            {/* {true ? (
              <Button
                sx={{ color: 'black', fontWeight: 'bold' }}
                // onClick={handleLogout}
              >
                LOGOUT
              </Button>
            ) : ( */}
              <Link to="/">
                <Button sx={{ color: 'black', fontWeight: 'bold' }}>
                  <LoginSharpIcon />
                </Button>
              </Link>
            {/* )} */}
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
    );
};

export default Navbar;