import React from 'react';
import { Box, Container, Typography, Card, CardContent, CardActions, Button, Grid, Chip, Link } from '@mui/material';
import { GitHub as GitHubIcon, Launch as LaunchIcon } from '@mui/icons-material';
import { motion } from 'framer-motion';

const Projects = () => {
  const projects = [
    {
      title: 'RealEstate',
      description: 'Developed a MERN stack application that streamlined property management processes, reducing communication delays between real estate agents and buyers by 30%.',
      technologies: ['MERN Stack', 'JWT', 'ImageKit', 'RBAC'],
      liveLink: 'Live',
      githubLink: 'Github-Link',
      achievements: [
        'Implemented role-based access control (RBAC) and real-time scheduling features',
        'Integrated advanced features including Admin Portal and secure authentication',
        'Optimized image load times by 40% using ImageKit'
      ],
      date: 'March 2025'
    },
    {
      title: 'Auction App',
      description: 'Built a modern auction platform allowing 100+ users to list properties, place bids, and track auctions in real time.',
      technologies: ['MERN Stack', 'Real-time Monitoring', 'RBAC'],
      liveLink: 'Live',
      githubLink: 'Github-Link',
      achievements: [
        'Delivered a Superadmin dashboard for real-time monitoring',
        'Developed a robust RBAC system for 200+ unique users',
        'Achieved 25% increase in user engagement'
      ],
      date: 'January 2025'
    },
    {
      title: 'Quiz-App',
      description: 'Enhanced a MERN stack quiz application with secure authentication, enabling 200+ users to engage in personalized language-learning.',
      technologies: ['MERN Stack', 'Real-time Leaderboard', 'User Customization'],
      liveLink: 'Live',
      githubLink: 'Github-Link',
      achievements: [
        'Implemented interactive quizzes and real-time leaderboard',
        'Added user profile customization features',
        'Increased user retention by 20%'
      ],
      date: 'November 2024'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8 } }
  };

  return (
    <Container id="projects" maxWidth="lg" sx={{ py: 8 }}>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <Typography variant="h3" gutterBottom color="primary" textAlign="center">
          Projects
        </Typography>

        <Grid container spacing={4}>
          {projects.map((project, index) => (
            <Grid item xs={12} md={6} lg={4} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ y: -10 }}
              >
                <Card
                  elevation={3}
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    position: 'relative',
                    overflow: 'visible'
                  }}
                >
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                      <Typography variant="h5" component="h2" gutterBottom>
                        {project.title}
                      </Typography>
                      <Chip
                        label={project.date}
                        color="primary"
                        size="small"
                        sx={{ position: 'absolute', top: -12, right: 16 }}
                      />
                    </Box>

                    <Typography variant="body1" color="text.secondary" paragraph>
                      {project.description}
                    </Typography>

                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
                      {project.technologies.map((tech, idx) => (
                        <Chip
                          key={idx}
                          label={tech}
                          size="small"
                          color="secondary"
                          variant="outlined"
                        />
                      ))}
                    </Box>

                    <Box sx={{ mt: 2 }}>
                      {project.achievements.map((achievement, idx) => (
                        <Typography
                          key={idx}
                          variant="body2"
                          sx={{
                            display: 'flex',
                            alignItems: 'center',
                            mb: 1,
                            '&:before': {
                              content: '"•"',
                              marginRight: 1,
                              color: 'primary.main'
                            }
                          }}
                        >
                          {achievement}
                        </Typography>
                      ))}
                    </Box>
                  </CardContent>

                  <CardActions sx={{ p: 2, pt: 0 }}>
                    <Button
                      startIcon={<LaunchIcon />}
                      component={Link}
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      variant="contained"
                      size="small"
                    >
                      Live Demo
                    </Button>
                    <Button
                      startIcon={<GitHubIcon />}
                      component={Link}
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      variant="outlined"
                      size="small"
                    >
                      GitHub
                    </Button>
                  </CardActions>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </motion.div>
    </Container>
  );
};

export default Projects;