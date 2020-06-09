import React from "react";
import { withPrefix } from "gatsby";

export const onRenderBody = ({ setPostBodyComponents }) => {
  setPostBodyComponents(<script src={withPrefix('script.js')} type="text/javascript" /> )
}

