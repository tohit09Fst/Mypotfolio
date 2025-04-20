import React from 'react';
import { Box, Container, Typography, Paper } from '@mui/material';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';

import { School as SchoolIcon } from '@mui/icons-material';
import { motion } from 'framer-motion';

const Education = () => {
  const coursework = [
    'Data Structures',
    'Artificial Intelligence',
    'Database Management',
    'Programming Language',
    'System Design',
    'Backend Development',
    'Front-end Development',
    'Full Stack Development'
  ];

  return (
    <Container id="education" maxWidth="lg" sx={{ py: 8 }}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <Typography variant="h3" gutterBottom color="primary" textAlign="center">
          Education
        </Typography>
        
        <Timeline position="alternate">
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot color="primary">
                <SchoolIcon />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <Paper elevation={3} sx={{ p: 3, mb: 3 }}>
                  <Typography variant="h5" component="h2" gutterBottom color="primary">
                    Polaris School of Technology
                  </Typography>
                  <Typography color="text.secondary" gutterBottom>
                    Aug 2023 - Present
                  </Typography>
                  <Typography variant="h6" gutterBottom>
                    BTech in CSE(AI/ML)
                  </Typography>
                </Paper>
              </motion.div>
            </TimelineContent>
          </TimelineItem>
        </Timeline>

        <Box sx={{ mt: 6 }}>
          <Typography variant="h4" gutterBottom color="primary" textAlign="center">
            Relevant Coursework
          </Typography>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <Paper elevation={3} sx={{ p: 4 }}>
              <Box
                sx={{
                  display: 'grid',
                  gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: '1fr 1fr 1fr 1fr' },
                  gap: 2,
                }}
              >
                {coursework.map((course, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Paper
                      elevation={2}
                      sx={{
                        p: 2,
                        textAlign: 'center',
                        backgroundColor: 'primary.light',
                        color: 'white',
                        borderRadius: 2,
                        '&:hover': {
                          backgroundColor: 'primary.main',
                          transform: 'translateY(-4px)',
                          transition: 'all 0.3s ease-in-out',
                        },
                      }}
                    >
                      <Typography variant="body1">{course}</Typography>
                    </Paper>
                  </motion.div>
                ))}
              </Box>
            </Paper>
          </motion.div>
        </Box>
      </motion.div>
    </Container>
  );
};

export default Education;