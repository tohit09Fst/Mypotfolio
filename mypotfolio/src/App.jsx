import React, { Component } from 'react';
import { ThemeProvider, Box } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import { theme } from './theme';
import Navbar from './components/Navbar';
import About from './components/About';
import Education from './components/Education';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Achievements from './components/Achievements';


class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }
  componentDidCatch(error, errorInfo) {
    // You can log error info here if needed
  }
  render() {
    if (this.state.hasError) {
      return <div style={{ background: 'red', color: 'white', padding: '20px', fontSize: '1.5rem' }}>Error: {this.state.error && this.state.error.toString()}</div>;
    }
    return this.props.children;
  }
}

function App() {

  return (
    <ErrorBoundary>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Navbar />
        <Box sx={{ mt: 10 }}>
          <About />
          <Education />
          <Experience />
          <Projects />
          <Achievements />
        </Box>
      </ThemeProvider>
    </ErrorBoundary>
  );
}


export default App;
