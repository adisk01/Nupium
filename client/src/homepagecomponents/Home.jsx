import React from 'react'

const Home = () => {
  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    fontSize: '24px',
    textAlign: 'center',
    fontStyle: 'italic',  // Example: Italic font style
    color: '#333',        // Example: Dark gray text color
    // Add more styles as needed
  };

  return (
    <div style={containerStyle}>
      Welcome to Nupium Learning Programme, your one & only skills enhancing partner
    </div>
  );
}

export default Home