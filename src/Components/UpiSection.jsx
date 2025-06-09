import React from "react";
import qrImage from "./image.jpg";
import "./UpiSection.css"
function UpiSection() {

  const token = "jaswin"

  localStorage.setItem('token', token);

  return (
    <div className="container">
      <h2 className="title">UPI Payment (Ask in Whatsapp)</h2>
      <p className="subtitle">PhonePe, Paytm, Google Pay, etc.</p>

      <div className="qr-container">
        <img src={qrImage} alt="Telegram QR Code" className="qr-image" />
      </div>

      <div className="telegram-box">
        <span className="telegram-label">Whatsapp:</span> DM in this account for UPI details
      </div>
      <br />
      <button onClick={() => setTimeout(() => { window.location.href = "/home/download/subscription/user" }, 1000)}>check</button>
    </div>
  );
}

export default UpiSection;
