import React from 'react'

const Home = () => {
  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    fontSize: '24px',
    textAlign: 'center',
    fontStyle: 'italic',  
    color: '#333',        

  };

  return (
    <div style={containerStyle}>
      Welcome to Nupium Learning Programme, your one & only skills enhancing partner
    </div>
  );
}

export default Home