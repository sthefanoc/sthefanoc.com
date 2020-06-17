import React from "react";
import PropTypes from "prop-types";

export default function HTML(props) {
  return (
    <html {...props.htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        {props.headComponents}
      </head>
      <body {...props.bodyAttributes}>
        {props.preBodyComponents}
        <div
          key={`body`}
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
        {props.postBodyComponents}
        <script
          dangerouslySetInnerHTML={{
            __html: `
            // console.log('script from html.js');
            // console.log('Reloading scripts!');
            // window.location.reload()
            if(localStorage.getItem("selectedBodyTheme")){
              if(localStorage.getItem("selectedBodyTheme") === 'dark'){
                document.body.className="dark";
              }
            }
        `
        }}
        />
        {/* <script src="js/script.js" type="text/javascript" id="script"></script>
        <script src="js/styleSwitcher.js" type="text/javastyleSwitcher" id="script"></script> */}

        {/* <link rel="stylesheet" className="alternate-style" title="green" src='/styles/green.css' type="text/css" disabled />
        <link rel="stylesheet" className="alternate-style" title="pink" src='/styles/pink.css' type="text/css" disabled />
        <link rel="stylesheet" className="alternate-style" title="blue" src='/styles/blue.css' type="text/css" disabled />
        <link rel="stylesheet" className="alternate-style" title="yellow" src='/styles/yellow.css' type="text/css" disabled />
        <link rel="stylesheet" className="alternate-style" title="orange" src='/styles/orange.css' type="text/css" disabled /> */}
      </body>
    </html>
  )
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
}
