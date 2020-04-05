import React from "react";
import "./SideBarFooter.scss";

export function SideBarFooter() {
  return (
    <React.Fragment>
      <div className="footer-block">
        <div>About Press Copyright</div>
        <div>Creators Advertise</div>
        <div>Developers +UTube</div>
        <div>Legal</div>
      </div>
      <div className="footer-block">
        <div>Terms Privacy</div>
        <div>Policy & Safety</div>
        <div>Test new features</div>
      </div>
      <div className="footer-block">
        <div>www.savanas.net</div>
      </div>
      <div className="footer-block">
        <div>© UTube - A Youtube clone.</div>
      </div>
    </React.Fragment>
  );
}
