import React from 'react';
import { Box, Container, Typography, Card, CardContent, Grid, Chip } from '@mui/material';
import { EmojiEvents as TrophyIcon, Code as CodeIcon } from '@mui/icons-material';
import { motion } from 'framer-motion';

const Achievements = () => {
  const achievements = [
    {
      title: 'Summer of Bitcoin Contribution',
      period: 'February 2025 - Present',
      category: 'Blockchain, Open Source',
      icon: <CodeIcon fontSize="large" />,
      description: 'Selected for the competitive Summer of Bitcoin program, 1 of 50 participants from a global applicant pool.',
      highlights: [
        'Enhanced expertise in Bitcoin architecture, cryptographic security, and decentralized systems',
        'Completed 8 weekly assignments with a 95% average score',
        'Gained hands-on experience in blockchain technology'
      ]
    },
    {
      title: 'GIRLSCRIPT Summer of Code',
      period: 'October 2024 - November 2024',
      category: 'Full Stack Project',
      icon: <TrophyIcon fontSize="large" />,
      description: 'Contributed to an open-source project by implementing analytics features and card progress indicators.',
      highlights: [
        'Improved dashboard usability for 500+ users',
        'Increased feature adoption by 20%',
        'Resolved 10+ user-reported issues, reducing bug-related complaints by 35%'
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8 } }
  };

  return (
    <Container id="achievements" maxWidth="lg" sx={{ py: 8 }}>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <Typography variant="h3" gutterBottom color="primary" textAlign="center">
          Achievements
        </Typography>

        <Grid container spacing={4}>
          {achievements.map((achievement, index) => (
            <Grid item xs={12} md={6} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ scale: 1.02 }}
              >
                <Card
                  elevation={3}
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    position: 'relative'
                  }}
                >
                  <CardContent>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                      <Box
                        sx={{
                          color: 'primary.main',
                          mr: 2,
                          display: 'flex',
                          alignItems: 'center'
                        }}
                      >
                        {achievement.icon}
                      </Box>
                      <Box>
                        <Typography variant="h5" component="h2" gutterBottom>
                          {achievement.title}
                        </Typography>
                        <Typography color="text.secondary">
                          {achievement.period}
                        </Typography>
                      </Box>
                    </Box>

                    <Box sx={{ mb: 2 }}>
                      <Chip
                        label={achievement.category}
                        color="primary"
                        variant="outlined"
                      />
                    </Box>

                    <Typography variant="body1" paragraph>
                      {achievement.description}
                    </Typography>

                    <Box sx={{ mt: 2 }}>
                      {achievement.highlights.map((highlight, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.1 }}
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
                            {highlight}
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

export default Achievements;