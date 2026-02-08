import React from "react";
import AnimatedCard from "../components/AnimatedCard";
import {
  Zap,
  Brain,
  DraftingCompass,
  Sparkles,
  GraduationCap,
} from "lucide-react";
import Google from "../assets/googleplay.svg";
import Apple from "../assets/apple.svg";
import { useTranslation } from "react-i18next";

export default function HomeScreen() {
  const { t } = useTranslation();
  return (
    <div className="flex md:flex-row flex-col pb-12 justify-center items-center h-full mt-8  ">
      <div className="flex flex-1 flex-col items-center justify-center p-8">
        <div
          className="absolute 
          md:w-[350px] md:h-[350px] md:left-auto md:translate-x-0
          w-[80vw] h-[80vw] left-1/2 -translate-x-1/2
          bg-[#FF6B35] blur-[120px] rounded-full -z-10 custom-glow"
        ></div>
        <div
          className="floating-icon md:top-[25%] md:left-[15%] top-[28%] left-[6%]"
          style={{ animationDelay: "0s" }}
        >
          <GraduationCap
            size={38}
            className="text-[#FF6B35] opacity-40"
            strokeWidth={1.5}
          />
        </div>
        <div
          className="floating-icon md:bottom-[35%] md:left-[12%] bottom-[36%] left-[12%]"
          style={{ animationDelay: "1s" }}
        >
          <Brain
            size={44}
            className="text-[#FF6B35] opacity-30"
            strokeWidth={1.5}
          />
        </div>
        <div
          className="floating-icon md:top-[22%] md:left-[44%] top-[16%] right-[8%]"
          style={{ animationDelay: "2s" }}
        >
          <Sparkles
            size={28}
            className="text-[#FF6B35] opacity-50"
            strokeWidth={1.5}
          />
        </div>
        <div
          className="floating-icon md:bottom-[12%] md:left-[38%] bottom-[32%] right-[8%]"
          style={{ animationDelay: "3s" }}
        >
          <DraftingCompass
            size={34}
            className="text-[#FF6B35] opacity-25"
            strokeWidth={1.5}
          />
        </div>
        <div
          className="floating-icon bottom-[45%] left-[45%]"
          style={{ animationDelay: "2s" }}
        >
          <Zap
            size={36}
            className="text-[#FF6B35] opacity-15"
            strokeWidth={1.5}
          />
        </div>
        <div className="mb-2">
          <AnimatedCard />
        </div>
        <div className="select-none mt-10 md:mt-0">
          <h1 className="text-5xl md:text-8xl font-bold tracking-tight">
            Knowia
          </h1>
        </div>
      </div>
      <div className="flex-1 flex items-center flex-col justify-center">
        <div>
          <h1 className=" text-4xl md:text-6xl text-white text-right font-semibold">
            {t("home.titleone", { defaultValue: "Bilgiyi Keşfetmenin" })} <br /> {t("home.titletwo", { defaultValue: "En Dinamik Yolu" })}
          </h1>
        </div>
        <div className="flex gap-4 flex-col sm:flex-row mt-10 justify-center md:justify-end w-full md:px-5">
          {/* App Store Butonu */}
          <button className="bg-white text-black flex items-center justify-center gap-3 px-6 py-3 rounded-2xl hover:scale-105 transition-all shadow-lg border border-gray-100 cursor-pointer group w-full sm:w-auto">
            <img src={Apple} alt="Apple App Store" className="w-6 h-6" />
            <div className="flex flex-col items-start leading-none">
              <span className="text-[10px] font-semibold uppercase opacity-50 mb-0.5">
                Download on the
              </span>
              <span className="text-xl font-bold tracking-tight">
                App Store
              </span>
            </div>
          </button>
          {/* Play Store Butonu */}
          <button className="bg-white text-black flex items-center justify-center gap-3 px-6 py-3 rounded-2xl hover:scale-105 transition-all shadow-lg border border-gray-100 cursor-pointer group w-full sm:w-auto">
            <img src={Google} alt="Google Play" className="w-6 h-6" />
            <div className="flex flex-col items-start leading-none">
              <span className="text-[10px] font-semibold uppercase opacity-50 mb-0.5">
                Get it on
              </span>
              <span className="text-xl font-bold tracking-tight">
                Google Play
              </span>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
