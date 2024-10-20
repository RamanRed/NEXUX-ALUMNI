/* eslint-disable no-unused-vars */
// Navbar.jsx
import React from 'react';
import pccoelogo from '../assets/logo/pccoe.jpeg';
import pcetlogo from '../assets/logo/pcet.jpg';
import silverjublee from '../assets/logo/pccoe-silver.jpg';

const Navbar = () => {
    const styles = {
        body: {
            margin: 0,
            fontFamily: 'Arial, sans-serif',
            backgroundColor: '#000', // Set the body background color to black
        },
        navbar: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '10px 20px',
            backgroundColor: '#000', // Set navbar background color to black
            borderBottom: '1px solid #ccc', // Optional: add a bottom border
        },
        logoContainer: {
            display: 'flex',
            alignItems: 'center',
        },
        logo: {
            width: '100px', // Adjust size as needed
            height: 'auto',
            margin: '0 10px', // Space between logos
        },
        textContainer: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            flex: 1, // Allow it to take available space
        },
        textLine: {
            margin: 0, // Remove default margin
            padding: '5px 0', // Space between lines
            textAlign: 'center', // Center the text
            color: '#fff', // Set text color to white
        },
    };

    return (
        <nav style={styles.navbar}>
            <div style={styles.logoContainer}>
                <img src={pccoelogo} alt="Left Logo 1" style={styles.logo} />
                <img src={silverjublee} alt="Left Logo 2" style={styles.logo} />
            </div>
            <div style={styles.textContainer}>
                <h3 style={styles.textLine}>Pimpri Chinchwad Education Trust</h3>
                <h3 style={styles.textLine}>Pimpri Chinchwad College of Engineering</h3>
                <h3 style={styles.textLine}>Welcome to Alumni Portal</h3>
            </div>
            <div style={styles.logoContainer}>
                <img src={pcetlogo} alt="Right Logo" style={styles.logo} />
            </div>
        </nav>
    );
};

export default Navbar;
