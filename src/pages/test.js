import React from "react";
import {navigate} from 'gatsby';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Test = () => (
  <div>
    <Header></Header>
    <h1>This is a test page!</h1>
    <h2>This is a subtitle</h2>
    <button onClick={() => navigate('/')}>Back to Home</button>
    <Footer></Footer>
  </div>
)


export default Test;
