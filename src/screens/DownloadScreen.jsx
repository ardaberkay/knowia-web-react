import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import Google from "../assets/googleplay.svg";
import Apple from "../assets/apple.svg";
import Logo from "../assets/logo.svg";

const DownloadPage = () => {
  const { t } = useTranslation(); // Çeviri fonksiyonunu çekiyoruz

  const playStoreLink = "https://play.google.com/store/apps/details?id=com.arda.knowia";
  const appStoreLink = "https://apps.apple.com/tr/app/knowia-flashcards-öğrenme/id6761316889?l=tr";

  useEffect(() => {
    // Sadece cihaz yönlendirme mantığı kaldı
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;

    // 1. iOS Kontrolü
    if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
      window.location.replace(appStoreLink);
      return;
    }

    // 2. Android Kontrolü
    if (/android/i.test(userAgent)) {
      window.location.replace(playStoreLink);
      return;
    }
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: "100px",
        fontFamily: "sans-serif",
      }}
    >
      <img
        src={Logo}
        alt="Knowia"
        className="w-40 h-40 md:w-48 md:h-48 mb-4 object-contain relative z-10 transition-all duration-500 group-hover:rotate-6 group-hover:scale-110 drop-shadow-[0_0_10px_rgba(255,107,53,0.2)]"
      />
      <h2>{t("download.title")}</h2>
      <p>{t("download.description")}</p>

        <div className="flex gap-4 flex-col sm:flex-row mt-10 justify-center md:justify-center w-full md:px-5">
          <a 
            href={appStoreLink}
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-white text-black flex items-center justify-center gap-3 px-6 py-3 rounded-2xl hover:scale-105 transition-all shadow-lg border border-gray-100 cursor-pointer group w-full sm:w-auto"
          >            
          <img src={Apple} alt="Apple App Store" className="w-6 h-6" />
            <div className="flex flex-col items-start leading-none">
              <span className="text-[10px] font-semibold uppercase opacity-50 mb-0.5">
                Download on the
              </span>
              <span className="text-xl font-bold tracking-tight">
                App Store
              </span>
            </div>
          </a>
          {/* Play Store Butonu */}
          <a 
            href={playStoreLink}
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-white text-black flex items-center justify-center gap-3 px-6 py-3 rounded-2xl hover:scale-105 transition-all shadow-lg border border-gray-100 cursor-pointer group w-full sm:w-auto"
          >            
          <img src={Google} alt="Google Play" className="w-6 h-6" />
            <div className="flex flex-col items-start leading-none">
              <span className="text-[10px] font-semibold uppercase opacity-50 mb-0.5">
                Get it on
              </span>
              <span className="text-xl font-bold tracking-tight">
                Google Play
              </span>
            </div>
          </a>
      </div>
    </div>
  );
};

export default DownloadPage;
