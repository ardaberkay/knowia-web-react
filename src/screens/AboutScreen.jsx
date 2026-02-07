import aboutMockup from "../assets/aboutmobil.png";

export default function About() {
  return (
    <section className="mt-20">
      <div className="max-w-6xl mx-auto px-2 grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* METİN */}
        <div className="text-white">
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight leading-tight">
            Neden Knowia?
          </h2>

          <div className="mt-8 space-y-6 text-gray-300 text-lg leading-relaxed max-w-xl">
            <p className="text-xl text-white">
              Knowia, öğrenmeyi daha sade, daha kalıcı ve sürdürülebilir hale
              getirmek amacıyla geliştirilen bir öğrenme uygulamasıdır.
            </p>

            <p>
              Bu proje, öğrenme sürecinde sıkça karşılaşılan unutma, düzensiz
              tekrar ve motivasyon kaybı gibi kişisel ihtiyaçlardan yola
              çıkılarak ortaya çıktı. Amaç, öğrenmeyi zorunluluk haline getiren
              karmaşık yöntemler yerine, kullanıcıya kontrol ve esneklik tanıyan
              bir öğrenme deneyimi sunmaktı.
            </p>
            <div className="block md:hidden relative flex justify-center lg:justify-end items-start lg:mt-[15%]">
              <img
                src={aboutMockup}
                alt="Knowia uygulama ekranı"
                className="w-[300px] sm:w-[340px] md:w-[380px] lg:w-[400px] drop-shadow-xl rounded-4xl"
              />
            </div>
            <p>
              Knowia, kart tabanlı yapısı ve tekrar odaklı yaklaşımıyla bilgiyi
              küçük ve yönetilebilir parçalara ayırır. Kullanıcılar, kendi
              ihtiyaçlarına göre desteler oluşturabilir ya da hazır destelerle
              öğrenmeye başlayabilir. İster yalnızca kendileri için içerik
              üretebilir, ister bu içerikleri paylaşarak ya da diğer
              kullanıcılar tarafından paylaşılan destelerden faydalanarak
              öğrenme sürecini zenginleştirebilir.
            </p>

            <p>
              Knowia, tekrar aralıklarını ve öğrenme akışını kullanıcının
              tercihleri doğrultusunda şekillendirerek öğrenmeyi kişisel bir
              sürece dönüştürür. Bu sayede her kullanıcı, öğrenme sürecini kendi
              zamanına, hedeflerine ve ihtiyaçlarına uygun şekilde yönetebilir.
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
            Sade arayüzü ve akıcı etkileşimleri sayesinde Knowia, odağı
            dağıtmadan ilerlemeyi hedefler. Öğrenme süreci, zamanla baskı
            oluşturan bir görev olmaktan çıkar; düzenli ve ulaşılabilir bir
            alışkanlığa dönüşür.
          </p>

          <p className="text-gray-400">
            Knowia, gelişmeye devam eden bir üründür. Kullanıcı geri
            bildirimleriyle şekillenir ve zamanla daha güçlü, daha esnek ve daha
            kişisel bir öğrenme deneyimi sunmayı amaçlar.
          </p>
        </div>
      </div>
    </section>
  );
}
