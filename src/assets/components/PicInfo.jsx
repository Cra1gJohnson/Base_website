import React from 'react';
import './PicInfo.css';

function PicInfo({ pic, info}) {
  return (
    <div id="info">
        <img src={pic} className="pic" alt="pic"></img>
        <div className="info">{info}</div>
    </div>
  );
};

export default PicInfo;

