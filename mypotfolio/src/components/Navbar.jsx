import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box, useScrollTrigger, Slide, Container } from '@mui/material';
import { motion } from 'framer-motion';

function HideOnScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger();
  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

const sections = [
  { label: 'About', id: 'about' },
  { label: 'Education', id: 'education' },
  { label: 'Experience', id: 'experience' },
  { label: 'Projects', id: 'projects' },
  { label: 'Achievements', id: 'achievements' },
];

const Navbar = (props) => {
  const handleScroll = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <HideOnScroll {...props}>
      <AppBar
        position="fixed"
        elevation={4}
        sx={{
          background: 'linear-gradient(90deg, #2196f3 0%, #21cbf3 100%)',
          color: '#fff',
        }}
      >
        <Container maxWidth="lg">
          <Toolbar disableGutters sx={{ justifyContent: 'space-between' }}>
            <Typography
              variant="h5"
              noWrap
              sx={{ fontWeight: 700, letterSpacing: '.12rem', flexGrow: 1 }}
              component={motion.div}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              Tohit Khan
            </Typography>
            <Box sx={{ display: 'flex', gap: 2 }}>
              {sections.map((section) => (
                <Button
                  key={section.id}
                  color="inherit"
                  onClick={() => handleScroll(section.id)}
                  sx={{ fontWeight: 600, letterSpacing: '.08rem', fontSize: '1rem' }}
                  component={motion.button}
                  whileHover={{ scale: 1.1, backgroundColor: 'rgba(255,255,255,0.08)' }}
                  whileTap={{ scale: 0.96 }}
                >
                  {section.label}
                </Button>
              ))}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </HideOnScroll>
  );
};

export default Navbar;
