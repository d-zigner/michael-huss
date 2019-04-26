import React, { Component } from "react";

class PowerPoint extends Component {
  render() {
    return (
      <div className="mb-0 pb-0">
        <iframe
          src="https://docs.google.com/presentation/d/e/2PACX-1vSRDpiHsbNxSKzbLv-n3cr-HLBTYA6H3POaDfnTUG1icqoBnrxygw3HK3H4Jl_tS2BoaTv_baIZkEJn/embed?start=true&loop=true&delayms=6000000"
          frameborder="0"
          width="100%"
          height="850vw"
          allowfullscreen="true"
          mozallowfullscreen="true"
          webkitallowfullscreen="true"
          title="presentation"
        />
      </div>
    );
  }
}

export default PowerPoint;
