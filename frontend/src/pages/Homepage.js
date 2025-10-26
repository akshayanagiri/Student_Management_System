import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Paper } from '@mui/material'; 
import styled from 'styled-components';
import { LightPurpleButton } from '../components/buttonStyles';

// 1. IMPORT THE BACKGROUND IMAGE (Adjust path as needed)
import BackgroundPattern from "../assets/background.png"; 

const Homepage = () => {
    return (
        <StyledContainer>
            <StyledPaper elevation={8}>
                <ContentBox>
                    <StyledTitle>
                        
                        <br />
                        Student Management System
                        
                    </StyledTitle>
                    
                  
     <StyledText>
    Your digital hub for simplified school management.
       </StyledText>
                    
                    <AuthBox>
                        <StyledLink to="/choose">
                            <LightPurpleButton variant="contained" fullWidth>
                                Login
                            </LightPurpleButton>
                        </StyledLink>
                        
                        
                        
                        <BottomText>
                            Don't have an account?{' '}
                            <Link to="/Adminregister" style={{ color: "#550080" }}>
                                Sign up
                            </Link>
                        </BottomText>
                    </AuthBox>
                </ContentBox>
            </StyledPaper>
        </StyledContainer>
    );
};

export default Homepage;

// --- STYLED COMPONENTS ---

// 1. Centers the entire card and applies the background image
const StyledContainer = styled.div`
    display: flex;
    justify-content: center; /* Center horizontally */
    align-items: center; /* Center vertically */
    min-height: 100vh; /* Ensure it takes full viewport height */
    padding: 20px;
    box-sizing: border-box;
    
    /* --- CHANGES HERE: Background Image CSS --- */
    background-image: url(${BackgroundPattern});
    background-size: cover; /* Ensures the image covers the entire container */
    background-repeat: repeat; /* If the image is a pattern, allow repeating */
    background-attachment: fixed; /* Optional: Makes the image stay fixed while scrolling */
    background-color: #9662beff; /* Fallback color in case the image doesn't load */
    /* --- END CHANGES --- */
`;

// 2. The white card itself (Rectangle shape adjustment)
const StyledPaper = styled(Paper)`
    /* Increased max-width significantly for a much wider card */
    max-width: 800px; 
    width: 100%;
    
    /* Slightly reduced padding to emphasize the width */
    padding: 40px; 
    border-radius: 16px; 
`;


// 3. Inner box for centering content and managing spacing
const ContentBox = styled(Box)`
    display: flex;
    flex-direction: column;
    align-items: center; /* Centers block elements (like AuthBox) */
    text-align: center; /* Centers inline content (like the text) */
    gap: 20px;
`;

// 4. Title styling
const StyledTitle = styled.h1`
    font-size: 40px;
    color: #252525;
    font-weight: 800; /* Bolder title */
    line-height: 1.1;
    margin-bottom: 0;
`;

// 5. Main description text
const StyledText = styled.p`
    color: #4b5563; /* Darker gray for readability */
    font-size: 1rem;
    line-height: 1.6;
    margin-top: 10px;
    margin-bottom: 20px;
    /* Limiting the text width slightly to make the content column taller and more rectangular */
    max-width: 450px; 
`;

// 6. Box to control the width of the buttons
const AuthBox = styled(Box)`
    display: flex;
    flex-direction: column;
    width: 100%;
    /* Reduced max-width for the buttons so they don't stretch too far in the wider card */
    max-width: 280px; 
    margin-top: 10px;
`;

const BottomText = styled.p`
    font-size: 0.9rem;
    color: #6b7280;
    margin-top: 10px;
`;

const StyledLink = styled(Link)`
    text-decoration: none;
    width: 100%;
`;