import React from 'react';

const Custom500: React.FC = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>500</h1>
      <p style={styles.message}>Internal Server Error</p>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column' as const,
    alignItems: 'center' as const,
    justifyContent: 'center' as const,
    height: '100vh',
    backgroundColor: '#f0f0f0',
    textAlign: 'center' as const,
  },
  title: {
    fontSize: '5em',
    margin: '0.5em 0',
    color: '#ff0000',
  },
  message: {
    fontSize: '1.5em',
    margin: '0.5em 0',
    color: '#333',
  },
};

export default Custom500;
