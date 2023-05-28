 import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Header  from  "./Header";
import {GiHamburgerMenu}  from "react-icons/gi";


function OffCanvasExample({ name, ...props }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button
        variant="primary"
        onClick={handleShow}
        className="me-2"
        style={{
          backgroundColor: "black",
          padding: "20px  20px",
          marginLeft: "20px",
          color: "white",
        
          border: "none",

        }}
      >
       <GiHamburgerMenu/> Best-
        {name}
      </Button>
      <Offcanvas show={show} onHide={handleClose} {...props}>
        <Offcanvas.Header closeButton>
         😎    </Offcanvas.Header>
        <Offcanvas.Body style={{ backgroundColor: "GrayText" }}>
          <Header />
          <h1>Enjoy on your TV.🧑‍✈️</h1>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default function NavLeft() {
  return (
    <>
      {["top"].map((placement, idx) => (
        <OffCanvasExample key={idx} placement={placement} name={placement} />
      ))}
    </>
  );
}

