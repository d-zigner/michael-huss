import React, { Component } from "react";

class PowerPoint extends Component {
  render() {
    return (
      //<iframe
      //  src="https://docs.google.com/presentation/d/e/2PACX-1vSRDpiHsbNxSKzbLv-n3cr-HLBTYA6H3POaDfnTUG1icqoBnrxygw3HK3H4Jl_tS2BoaTv_baIZkEJn/embed?start=true&loop=true&delayms=6000000"
      //  frameborder="0"
      //  width="100%"
      //  height="800vw"
      //style={{ minHeight: 800 }}
      //        height="800vw"
      //  className="mb-3"
      //  allowfullscreen="true"
      //  mozallowfullscreen="true"
      //  webkitallowfullscreen="true"
      ///>
      //<iframe
      //  title="presentation"
      //  src="https://drive.google.com/file/d/1jdJ08n79D7tRiOsekDTOcw5KPVi5SlJa/preview"
      //  width="100%"
      //  height="1000vw"
      ///>

      <iframe
        src={`https://view.officeapps.live.com/op/embed.aspx?src=[${process.env
          .PUBLIC_URL + "presentation.pptx"}]`}
        width="100%"
        height="600px"
        frameborder="0"
      />
    );
  }
}

export default PowerPoint;
