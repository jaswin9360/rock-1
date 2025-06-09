import React from 'react'
import "./Gamepage.css"



function GamePage() {

  return (
    <>
    <div className="card">
      <img
        src="https://www.igrandtheftauto.com/content/images/gallery/gtav-box-art-1280x1580.jpg?etag=67499dbf"
        alt="GTA Grand Theft Auto V"
        className="card-image"
      />
      <br />
      <h2 className="card-title">GTA: Grand Theft Auto V</h2>
      <br />
      <p className="card-sub">For Mac</p>
      <p className="card-sub">Language: English</p>
      <p className="card-sub">Version: 1.70</p>
      <div className="card-rating">
        <span className="star">★</span>
        <span className="rating-value">9.4/10</span>
        <span className="rating-count">(36 reviews)</span>
      </div>
      <p className="card-price">Paid ✅</p>
      <a href="https://vikingf1le.us.to/d/g2ixb9m8gX/Grand_Theft_Auto_V.dmg" target="_blank" rel="noopener noreferrer">
  <button className="download-button">Download for Mac</button>
</a>

    </div>
       <div className="card">
      <img
        src="https://www.igrandtheftauto.com/content/images/gallery/gtav-box-art-1280x1580.jpg?etag=67499dbf"
        alt="GTA Grand Theft Auto V"
        className="card-image"
      />
      <br />
      <h2 className="card-title">GTA: Grand Theft Auto V</h2>
      <br />
      <p className="card-sub">For Window( Pc )</p>
      <p className="card-sub">Language: English</p>
      <p className="card-sub">Version: 1.70</p>
      <div className="card-rating">
        <span className="star">★</span>
        <span className="rating-value">9.4/10</span>
        <span className="rating-count">(36 reviews)</span>
      </div>
      <p className="card-price">Paid ✅</p>
      <a href="https://vikingf1le.us.to/d/2aS783187z/Grand-Theft-Auto-V-Enhanced.rar" target="_blank" rel="noopener noreferrer">
  <button className="download-button">Download for Mac</button>
</a>
    </div>
    </>
  );
};


export default GamePage
