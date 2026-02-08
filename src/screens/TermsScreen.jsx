import React from "react";
import { Mail } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function TermsScreen() {
  const { t } = useTranslation();
  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto px-6 py-15">
        {/* Başlık Bölümü */}
        <header className="mb-12 border-b border-gray-800 pb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
            {t("termsService.title")}
          </h1>
          <p className="text-[#FF6B35] font-medium">
            {t("termsService.date")} 05.02.2026
          </p>
        </header>

        {/* Metin İçeriği */}
        <article className="prose max-w-none space-y-10 leading-relaxed">
          <p className="text-lg">{t("termsService.headText")}</p>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <span>1.</span>
              {t("termsService.header1")}
            </h2>
            <p>{t("termsService.item11")}</p>
            <p className="mt-2">{t("termsService.item12")}</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <span>2.</span>
              {t("termsService.header2")}
            </h2>
            <ul className="flex flex-col gap-y-2 list-none p-0 ml-4">
              {t("termsService.list1", { returnObjects: true }).map(
                (item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 bg-[#FF6B35] rounded-full" />
                    {item}
                  </li>
                ),
              )}
            </ul>
            <span className="mt-4 block">
              {t("termsService.subText11")}
              <a className="text-[#FF6B35]" href="mailto:knowia.app@gmail.com">
                knowia.app@gmail.com
              </a>{" "}
            </span>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <span>3.</span>
              {t("termsService.header3")}
            </h2>
            <p className="mb-4">{t("termsService.subHeader2")}</p>
            <ul className="flex flex-col gap-y-2 list-none p-0 ml-4">
              {t("termsService.list2", { returnObjects: true }).map(
                (item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 bg-[#FF6B35] rounded-full" />{" "}
                    {item}
                  </li>
                ),
              )}
            </ul>
            <p className="mt-4">{t("termsService.subText21")}</p>
            <p className="mt-2 italic">{t("termsService.subText22")}</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <span>4.</span>
              {t("termsService.header4")}
            </h2>
            <p>{t("termsService.item21")}</p>
            <p className="mt-2 italic">{t("termsService.item22")}</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <span>5.</span>
              {t("termsService.header5")}
            </h2>
            <p className="mb-4 text-gray-300">{t("termsService.subHeader3")}</p>
            <ul className="flex flex-col gap-y-2 list-none p-0 ml-4">
              {t("termsService.list3", { returnObjects: true }).map(
                (item, index) => {
                  const [title, description] = item.split(":");
                  return (
                    <li
                      key={index}
                      className="flex items-start gap-3 text-gray-400"
                    >
                      <div className="w-1.5 h-1.5 bg-[#FF6B35] rounded-full mt-2 flex-shrink-0" />
                      <p>
                        <span className="font-bold text-white">{title}:</span>
                        {description}
                      </p>
                    </li>
                  );
                },
              )}
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <span>6.</span>
              {t("termsService.header6")}
            </h2>
            <p>{t("termsService.item31")}</p>
            <p className="mt-2 text-gray-400">{t("termsService.subText31")}</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <span>7.</span>
              {t("termsService.header7")}
            </h2>
            <p>{t("termsService.item41")}</p>
            <p className="mt-2">{t("termsService.item42")}</p>
            <p className="mt-2 text-gray-400">{t("termsService.subText41")}</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <span>8.</span>
              {t("termsService.header8")}
            </h2>
            <p>{t("termsService.item51")}</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <span>9.</span>
              {t("termsService.header9")}
            </h2>
            <p>{t("termsService.item61")}</p>
            <p className="mt-2 text-gray-400">{t("termsService.subText51")}</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <span>10.</span>
              {t("termsService.header10")}
            </h2>
            <p>{t("termsService.item71")}</p>
            <p className="mt-2">{t("termsService.item72")}</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <span>11.</span>
              {t("termsService.header11")}
            </h2>
            <p>{t("termsService.item81")}</p>
          </section>

          <section className="bg-gradient-to-br from-[#262626] to-[#1C1C1C] p-8 rounded-3xl border border-gray-800 text-center mt-20">
            <h2 className="text-2xl font-bold text-white mb-6">
              {t("termsService.header12")}
            </h2>
            <p className="mb-6 text-gray-400">
              {t("termsService.item91")}
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