import React from 'react';
import { Box, Container, Typography, Card, CardContent, Chip, Grid } from '@mui/material';
import { motion } from 'framer-motion';
import { Work as WorkIcon } from '@mui/icons-material';

const Experience = () => {
  const experiences = [
    {
      title: 'Frontend Development Intern',
      company: 'WebSeeder Technologies',
      period: 'June 2024 - September 2024',
      location: 'Remote',
      achievements: [
        'Spearheaded frontend development for a key project serving 30,000 users, delivering a robust and user-friendly interface.',
        'Partnered with designers and backend developers to create intuitive user interfaces, resulting in a 10% boost in user engagement.',
        'Enhanced application performance by 30% through strategic optimizations, ensuring seamless user experience across devices.',
        'Engineered 8 reusable React components, facilitating code reuse and accelerating development across multiple projects.'
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8 } }
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } }
  };

  return (
    <Container id="experience" maxWidth="lg" sx={{ py: 8 }}>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <Typography variant="h3" gutterBottom color="primary" textAlign="center">
          Professional Experience
        </Typography>

        <Grid container spacing={4}>
          {experiences.map((exp, index) => (
            <Grid item xs={12} key={index}>
              <motion.div
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                whileHover={{ scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <Card elevation={3}>
                  <CardContent sx={{ p: 4 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                      <WorkIcon color="primary" sx={{ mr: 2, fontSize: 40 }} />
                      <Box>
                        <Typography variant="h5" component="h2" gutterBottom>
                          {exp.title}
                        </Typography>
                        <Typography variant="h6" color="primary" gutterBottom>
                          {exp.company}
                        </Typography>
                      </Box>
                    </Box>

                    <Box sx={{ display: 'flex', gap: 2, mb: 3 }}>
                      <Chip
                        label={exp.period}
                        color="primary"
                        variant="outlined"
                      />
                      <Chip
                        label={exp.location}
                        color="secondary"
                        variant="outlined"
                      />
                    </Box>

                    <Box sx={{ mt: 2 }}>
                      {exp.achievements.map((achievement, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.2 }}
                        >
                          <Typography
                            variant="body1"
                            paragraph
                            sx={{
                              display: 'flex',
                              alignItems: 'center',
                              '&:before': {
                                content: '"•"',
                                marginRight: 2,
                                color: 'primary.main',
                                fontWeight: 'bold'
                              }
                            }}
                          >
                            {achievement}
                          </Typography>
                        </motion.div>
                      ))}
                    </Box>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </motion.div>
    </Container>
  );
};

export default Experience;