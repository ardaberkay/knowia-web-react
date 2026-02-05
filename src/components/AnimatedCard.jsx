import React from 'react';
import '../components/AnimatedCard.css'; // Az önce oluşturduğumuz CSS dosyasını import ediyoruz

const AnimatedCard = () => {
  return (
    <div className="card-container">
      <div className="card-inner">
        <div className="front">
          <p className="heading">Ön Yüz</p>
          <p>Sürekli Dönüyorum</p>
        </div>
        <div className="back">
          <p className="heading">Arka Yüz</p>
          <p>Beni Durdurdun!</p>
        </div>
      </div>
    </div>
  );
};

export default AnimatedCard;