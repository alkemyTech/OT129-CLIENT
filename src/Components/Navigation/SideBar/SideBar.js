import React from "react";
import ReactDOM from "react-dom";

const SideBar = (props) => {
  const CONTENT = (
    <aside
      aria-labelledby="offcanvasNavbarLabel"
      className="offcanvas offcanvas-start"
      id="offcanvasNavbar"
      tabIndex="-1"
    >
      <div className="offcanvas-header">
        <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
          Menú
        </h5>
        <button
          aria-label="Close"
          className="btn-close text-reset"
          data-bs-dismiss="offcanvas"
          type="button"
        />
      </div>
      {props.children}
    </aside>
  );

  return ReactDOM.createPortal(CONTENT, document.getElementById("drawer-hook"));
};

export default SideBar;
