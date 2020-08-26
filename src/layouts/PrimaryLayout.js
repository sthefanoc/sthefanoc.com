import React from "react";
import Header from '../components/Header';
import Footer from '../components/Footer';
import SEO from '../components/SEO';


const PrimaryLayout = (props) => {
    return (
        <div>
          <SEO />
          <Header></Header>
          <main>
            <div className={props.column}>
                {props.children}
            </div>
          </main>
          <Footer></Footer>
        </div>
    )
}

export default PrimaryLayout;
  
