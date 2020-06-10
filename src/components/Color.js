import React from 'react';
import { StaticQuery, graphql, withPrefix } from 'gatsby';

import blueSkin from '../../static/skins/blue.css';
import greenSkin from '../../static/skins/green.css';
import orangeSkin from '../../static/skins/orange.css';
import pinkSkin from '../../static/skins/pink.css';
// import yellowSkin from '../../static/skins/yellow.css';

const Color = () => {
    return (
        <link rel="stylesheet" class="alternate-style" title="" href={{blueSkin}} type="text/css" />
    )
};

export default Color;