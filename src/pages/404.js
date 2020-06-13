import React from "react";
import PrimaryLayout from '../layouts/PrimaryLayout';
// import { withPrefix } from 'gatsby';

export default function Page404({data}) {
  console.log('This is the 404 page');
  return (
    <PrimaryLayout>
      <section className="404 section" id="404">
        <div className="container">
          <div className="section-title padd-15">
            <h1>This is not the page you're looking for...</h1>
          </div>
          <div className="row">
            <img src="https://media.giphy.com/media/l2JJKs3I69qfaQleE/giphy.gif" alt=""/>
          </div>
          <br/>
          <p>Sorry...
              I couldn't find that page.
              You can look for what you want in the menu! :):)
          </p>
        {/* JS Template */}
        {/* <script src={withPrefix('js/script.js')} type="text/javascript"></script> */}
        {/* JS StyleSwitcher */}
        {/* <script src={withPrefix('js/styleSwitcher.js')} type="text/javascript"></script> */}
        </div>
      </section>
    </PrimaryLayout>
)}
