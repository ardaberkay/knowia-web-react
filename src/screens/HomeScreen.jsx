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

export default function HomeScreen() {
  return (
    <div className="flex flex-row justify-center items-center h-full mt-8">
      <div className="flex flex-1 flex-col items-center justify-center p-8">
        <div className="absolute w-[350px] h-[350px] bg-[#FF6B35] blur-[120px] rounded-full -z-10 custom-glow"></div>
        <div
          className="floating-icon top-[25%] left-[15%]"
          style={{ animationDelay: "0s" }}
        >
          <GraduationCap
            size={38}
            className="text-[#FF6B35] opacity-40"
            strokeWidth={1.5}
          />
        </div>
        <div
          className="floating-icon bottom-[35%] left-[12%]"
          style={{ animationDelay: "1s" }}
        >
          <Brain
            size={44}
            className="text-[#FF6B35] opacity-30"
            strokeWidth={1.5}
          />
        </div>
        <div
          className="floating-icon top-[22%] left-[44%]"
          style={{ animationDelay: "2s" }}
        >
          <Sparkles
            size={28}
            className="text-[#FF6B35] opacity-50"
            strokeWidth={1.5}
          />
        </div>
        <div
          className="floating-icon bottom-[12%] left-[38%]"
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
        <div className="select-none">
          <h1 className="text-8xl font-bold tracking-tight">Knowia</h1>
        </div>
      </div>
      <div className="flex-1 flex items-center flex-col justify-center">
        <div>
          <h1 className="text-6xl text-white text-right font-semibold">
            Bilgiyi Keşfetmenin <br /> En Dinamik Yolu
          </h1>
        </div>
        <div className="flex gap-4 mt-8 justify-end w-full px-10">
          {/* App Store Butonu */}
          <button className="bg-white text-black flex items-center gap-3 px-6 py-3 rounded-2xl hover:scale-105 transition-all shadow-lg shadow-md border border-gray-100 cursor-pointer group">
            <img src={Apple} alt="Apple App Store" className="w-6 h-6" />
            <div className="flex flex-col items-start leading-none">
              <span className="text-[10px] font-bold uppercase opacity-50 mb-0.5">
                Download on the
              </span>
              <span className="text-xl font-bold tracking-tight">
                App Store
              </span>
            </div>
          </button>

          {/* Play Store Butonu */}
          <button className="bg-white text-black flex items-center gap-3 px-6 py-3 rounded-2xl hover:scale-105 transition-all shadow-lg shadow-md border border-gray-100 cursor-pointer group">
            <img src={Google} alt="Google Play" className="w-6 h-6" />
            <div className="flex flex-col items-start leading-none">
              <span className="text-[10px] font-bold uppercase opacity-50 mb-0.5">
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
