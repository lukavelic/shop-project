import React from "react";
import Header from "./layouts/Header";
import Section from "./layouts/Section";
import Footer from "./layouts/Footer";

const Shop = () => {
    return (
        <div className="shop">
            <Header/>
            <Section className={'shop'}/>
            <Footer/>
        </div>
    )
}

export default Shop;