import React from "react";
import { Link } from 'react-router-dom';
import { BodyImg, Body, LogButton, LoginForm, LoginFormH1, BottomTxt } from "../components/FormComp";

function Home () {
    return (
        <BodyImg>
        <Body>
            <LoginForm>
            <LoginFormH1>Welcome</LoginFormH1>

            <LogButton><Link to="/signin">Login</Link></LogButton>

            <BottomTxt>
                Don't have an account? <Link to="/signup">Sign Up</Link>
            </BottomTxt>
            </LoginForm>
        </Body>
        </BodyImg>
        
    );
}

export default Home;