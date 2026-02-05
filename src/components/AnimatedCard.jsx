import React from "react";
import "../components/AnimatedCard.css";
import Logo from "../assets/logo.svg";
import Lottie from "lottie-react";
import learningAnim from "../assets/goldbadge.json";
import { useEffect, useRef } from "react";

const AnimatedCard = () => {
  const lottieRef = useRef();

  useEffect(() => {
    const triggerAnimation = () => {
      setTimeout(() => {
        if (lottieRef.current) {
          lottieRef.current.goToAndPlay(0, true);
        }
      }, 1400);
    };
    triggerAnimation();
    const interval = setInterval(triggerAnimation, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="card-container select-none" style={{ caretColor: 'transparent' }}>
      <div className="card-inner">
        <div className="front" style={{ caretColor: 'transparent' }}>
          <img src={Logo} alt="Logo" className="w-26 h-26 object-contain" style={{ caretColor: 'transparent' }}/>
          <p className="heading">Kartı Çevir</p>
        </div>

        <div className="back">
          <div className="w-44 h-44 flex -mt-16  items-center justify-center overflow-hidden">
            <Lottie
              lottieRef={lottieRef}
              animationData={learningAnim}
              loop={false}
              autoplay={false}
              style={{ width: "100%", height: "100%" }}
            />
          </div>
          <div className="flex flex-col items-center justify-center -mt-6 gap-2">
          <p className="heading">Bilgiyi Kap!</p>
          <p className="subtitle text-sm opacity-80">
            Aralıklı tekrar yöntemiyle öğren
          </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimatedCard;
