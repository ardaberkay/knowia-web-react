import React from "react";
import { Mail, ArrowLeft } from "lucide-react";
import { useTranslation } from "react-i18next";

const PrivacyPolicy = () => {
  const { t } = useTranslation();
  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto px-6 py-15">
        {/* Başlık Bölümü */}
        <header className="mb-12 border-b border-gray-800 pb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
            {t("privacyPolicy.title", { defaultValue: "Gizlilik Politikası" })}
          </h1>
          <p className="text-[#FF6B35] font-medium">
            {t("privacyPolicy.date")} 05.02.2026
          </p>
        </header>

        {/* Metin İçeriği */}
        <article className="prose max-w-none space-y-10 leading-relaxed">
          <p className="text-lg">
            {t("privacyPolicy.headText")}
          </p>
          <section>
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <span>1.</span>{t("privacyPolicy.header1")}
            </h2>
            <p className="mb-4">{t("privacyPolicy.subHeader1")}</p>
            <ul className="flex flex-col md:grid-cols-2 gap-x-8 gap-y-2 list-none p-0 ml-4">
              {t("privacyPolicy.list1", { returnObjects: true }).map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 bg-[#FF6B35] rounded-full" />{" "}
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <span>2.</span>{t("privacyPolicy.header2")}
            </h2>
            <p className="mb-4">
              {t("privacyPolicy.subHeader2")}
            </p>
            <ul className="space-y-3 list-none p-0 ml-4">
              {t("privacyPolicy.list2", { returnObjects: true }).map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 bg-[#FF6B35] rounded-full" />{" "}
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-4">
              {t("privacyPolicy.subText")}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <span>3.</span>{t("privacyPolicy.header3")}
            </h2>
            <p>
              {t("privacyPolicy.subHeader3")}
            </p>
            <div className="bg-[#262626] p-6 rounded-xl border border-gray-800 mt-4 space-y-4">
              <p>
                <strong>{t("privacyPolicy.item31")}</strong> {t("privacyPolicy.item32")}
              </p>
              <p>{t("privacyPolicy.item33")}</p>
              <p>{t("privacyPolicy.item34")}</p>
              <p className="text-sm text-gray-500 border-t border-gray-700 pt-4 italic">
                {t("privacyPolicy.subText2")}
                <br />
                {t("privacyPolicy.subText3")}
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <span>4.</span>{t("privacyPolicy.header4")}
            </h2>
            <p>
              {t("privacyPolicy.subHeader4")}
            </p>
            <div className="mt-4 p-4 border-l-2 border-[#FF6B35] bg-[#262626]/50">
              <p className="font-semibold mb-2">
                {t("privacyPolicy.item41")}
              </p>
              <ul className="list-disc list-inside ml-4 text-gray-400">
                <li>{t("privacyPolicy.item42")}</li>
                <li>{t("privacyPolicy.item43")}</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <span>5.</span>{t("privacyPolicy.header5")}
            </h2>
            <p>
              {t("privacyPolicy.item51")}
            </p>
            <p className="mt-2">
              {t("privacyPolicy.item52")}
            </p>
            <p className="mt-2">
              {t("privacyPolicy.item53")}
            </p>
            <p className="mt-4 italic text-gray-400">
              {t("privacyPolicy.subText4")}
            </p>
            <p className="text-sm text-gray-500 pt-4 italic">
              {t("privacyPolicy.subText5")}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <span>6.</span>{t("privacyPolicy.header6")}
            </h2>
            <p>{t("privacyPolicy.item61")}</p>
            <p className="mt-2">
              {t("privacyPolicy.item62")}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <span>7.</span>{t("privacyPolicy.header7")}
            </h2>
            <p>{t("privacyPolicy.item71")}</p>
            <p className="mt-2 text-gray-400">
              {t("privacyPolicy.subText6")}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <span>8.</span>{t("privacyPolicy.header8")}
            </h2>
            <p>
              {t("privacyPolicy.subHeader5")}
            </p>
            <ul className="list-disc list-inside mt-2 space-y-1 ml-4">
              <li>{t("privacyPolicy.item81")}</li>
              <li>{t("privacyPolicy.item82")}</li>
              <li>{t("privacyPolicy.item83")}</li>
            </ul>
            <p className="mt-4 text-gray-400 italic">
              {t("privacyPolicy.subText7")}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <span>9.</span>{t("privacyPolicy.header9")}
            </h2>
            <p>
              {t("privacyPolicy.item91")}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <span>10.</span>{t("privacyPolicy.header10")}
            </h2>
            <p>{t("privacyPolicy.item101")}</p>
          </section>

          <section className="bg-gradient-to-br from-[#262626] to-[#1C1C1C] p-8 rounded-3xl border border-gray-800 text-center mt-20">
            <h2 className="text-2xl font-bold text-white mb-6">{t("privacyPolicy.header11")}</h2>
            <p className="mb-6 text-gray-400">
              {t("privacyPolicy.item111")}
            </p>
            <a
              href="mailto:knowia.app@gmail.com"
              className="inline-flex items-center gap-2 bg-[#FF6B35] text-white px-8 py-3 rounded-full font-bold hover:bg-[#e85a2a] transition-all shadow-lg shadow-[#FF6B35]/20"
            >
              <Mail size={18} /> knowia.app@gmail.com
            </a>
          </section>
        </article>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
