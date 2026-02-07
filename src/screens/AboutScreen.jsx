import aboutMockup from "../assets/aboutmobil.png";
import { useTranslation } from "react-i18next";

export default function About() {
  const { t } = useTranslation();
  return (
    <section className="mt-20">
      <div className="max-w-6xl mx-auto px-2 grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* METİN */}
        <div className="text-white">
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight leading-tight">
            {t("about.title")}
          </h2>

          <div className="mt-8 space-y-6 text-gray-300 text-lg leading-relaxed max-w-xl">
            <p className="text-xl text-white">
              {t("about.description1")}
            </p>

            <p>
              {t("about.description2")}
            </p>
            <div className="block md:hidden relative flex justify-center lg:justify-end items-start lg:mt-[15%]">
              <img
                src={aboutMockup}
                alt="Knowia uygulama ekranı"
                className="w-[300px] sm:w-[340px] md:w-[380px] lg:w-[400px] drop-shadow-xl rounded-4xl"
              />
            </div>
            <p>
              {t("about.description3")}
            </p>

            <p>
              {t("about.description4")}
            </p>
          </div>
        </div>

        {/* GÖRSEL */}
        <div className="hidden md:block relative flex justify-center lg:justify-end  items-start lg:mt-[16%] ml-20">
          <img
            src={aboutMockup}
            alt="Knowia uygulama ekranı"
            className="w-[300px] sm:w-[340px] md:w-[380px] lg:w-[400px] drop-shadow-xl rounded-4xl"
          />
        </div>
      </div>
      <div className="max-w-6xl mx-auto px-2 mt-5">
        <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
          <p>
            {t("about.description5")}
          </p>

          <p className="text-gray-400">
            {t("about.description6")}
          </p>
        </div>
      </div>
    </section>
  );
}
