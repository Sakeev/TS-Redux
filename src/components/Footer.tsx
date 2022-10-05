import React from 'react';
import { Box, Button, Container, Grid, Link, Typography } from '@mui/material';

import TelegramIcon from '@mui/icons-material/Telegram';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = () => {
    return (
        <footer>
            <Box sx={{ background: '#f5f5f5', display: 'wrap' }}
                px={{ xs: 4, sm: 10 }} py={{ xs: 5, sm: 10 }}
            >
                <Container maxWidth="xl">
                    <Grid container spacing={3}>
                        <Grid item px={5} xs={12} sm={6} md={3} sx={{ flexDirection: 'column', display: { xs: 'none', sm: 'flex' } }}>
                            <Typography variant='h5' mb={3}>Наши продукты</Typography>
                            <Link variant='body1' py={{ xs: 1 }} sx={{ color: '#9999A6' }} href="#" color="inherit" underline="hover">
                                Общий разговорный
                            </Link>
                            <Link variant='body1' py={{ xs: 1 }} sx={{ color: '#9999A6' }} href="#" color="inherit" underline="hover">
                                Бизнес-английский
                            </Link>
                            <Link variant='body1' py={{ xs: 1 }} sx={{ color: '#9999A6' }} href="#" color="inherit" underline="hover">
                                Английский в программировании
                            </Link>
                            <Link variant='body1' py={{ xs: 1 }} sx={{ color: '#9999A6' }} href="#" color="inherit" underline="hover">
                                Медицинский английский
                            </Link>
                            <Link variant='body1' py={{ xs: 1 }} sx={{ color: '#9999A6' }} href="#" color="inherit" underline="hover">
                                Английский для путешествий
                            </Link>



                        </Grid>





                        <Grid item px={5} xs={12} sm={6} md={3} sx={{ flexDirection: 'column', display: { xs: 'none', sm: 'flex' } }}>
                            <Typography variant='h5' mb={3}>Контакты</Typography>
                            <Link variant='body1' py={{ xs: 1 }} sx={{ color: '#9999A6', textDecoration: 'underline'  }} href="#" color="inherit" underline="hover">
                                Часы работы
                            </Link>
                            <Box component='span' sx={{ color: '#9999A6' }}>
                                Понедельник - суббота 9:00 - 23:00
                            </Box>
                            <Link variant='body1' py={{ xs: 1 }} sx={{ color: '#9999A6', textDecoration: 'underline'  }} href="#" color="inherit" underline="hover">
                                Номер телефона
                            </Link>
                            <Box component='span' sx={{ color: '#9999A6' }}>
                                +996 999 777 555
                            </Box>
                            <Link variant='body1' py={{ xs: 1 }} sx={{ color: '#9999A6', textDecoration: 'underline'  }} href="#" color="inherit" underline="hover">
                                Адрес
                            </Link>
                            <Box component='span' sx={{ color: '#9999A6' }}>
                            г.Бишкек,ул.Табышалиева 29, +996 0555 555 692
                            </Box>

                        </Grid>

                        <Grid item pr={5} xs={12} sm={6} md={3} sx={{ flexDirection: 'column', display: { xs: 'none', sm: 'flex' } }}>
                            <Typography variant='h5' mb={3}>Наша компания</Typography>

                            <Link variant='body1' py={{ xs: 1 }} sx={{ color: '#9999A6' }} href="#" color="inherit" underline="hover">
                                О нас
                            </Link>
                            <Link variant='body1' py={{ xs: 1 }} sx={{ color: '#9999A6' }} href="#" color="inherit" underline="hover">
                                Мероприятия
                            </Link>
                            <Link variant='body1' py={{ xs: 1 }} sx={{ color: '#9999A6' }} href="#" color="inherit" underline="hover">
                                Вакансии
                            </Link>
                            <Link variant='body1' py={{ xs: 1 }} sx={{ color: '#9999A6' }} href="#" color="inherit" underline="hover">
                                Блог
                            </Link>
                            <Link variant='body1' py={{ xs: 1 }} sx={{ color: '#9999A6' }} href="#" color="inherit" underline="hover">
                                Аналитика пользователей
                            </Link>



                        </Grid>
                        <Grid item pt={3} xs={12} sm={6} md={3} sx={{ display: { xs: 'none', sm: 'block' } }}>

                            <Typography variant='h5' mb={3}>Социальные сети</Typography>
                            <Grid py={3}>
                            <Box component='span' p={2} ><TelegramIcon fontSize='large' /></Box>
                            <Box component='span' p={2} ><TwitterIcon fontSize='large' /></Box>
                            <Box component='span' p={2} ><InstagramIcon fontSize='large' /></Box>
                            </Grid>
                        </Grid>


                    </Grid>
                </Container>

                <Grid>


                    <Box textAlign='center'   sx={{  display: 'flex', justifyContent: 'space-around', flexDirection: { xs: 'column', sm: 'row' } }} pt={{ xs: 5, sm: 10 }} pb={{ xs: 5, sm: 0 }}>
                        <Box sx={{margin: '0 auto'}}>&reg; {new Date().getFullYear()} Online school All Rights Reserved</Box>
                        <Box>
                            
                        </Box>
                    </Box>
                </Grid>
            </Box>
        </footer >
    );
};

export default Footer;