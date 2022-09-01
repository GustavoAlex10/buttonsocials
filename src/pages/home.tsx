import React from "react";
import { Container } from "../components/container";
import LnkFull from "../components/linkFull";
import google from "../_assets/icons/go.svg";




const Home = () => {


    return (
        <Container backgroundColor="#fff">
            <LnkFull src={google}/>
            <LnkFull src={google}/>
        </Container>
    )
}

export default Home;