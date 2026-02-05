import React from "react";
import { Mail, ArrowLeft } from "lucide-react";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto px-6 py-15">
        {/* Başlık Bölümü */}
        <header className="mb-12 border-b border-gray-800 pb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
            Gizlilik Politikası
          </h1>
          <p className="text-[#FF6B35] font-medium">
            Son Güncelleme: 05.02.2026
          </p>
        </header>

        {/* Metin İçeriği */}
        <article className="prose max-w-none space-y-10 leading-relaxed">
          <p className="text-lg">
            Knowia (“Uygulama”), kullanıcılarının gizliliğine saygı duyar ve
            kişisel verilerin korunmasını önemser. Bu Gizlilik Politikası,
            Knowia mobil uygulamasını kullandığınızda hangi bilgilerin
            toplandığını, nasıl kullanıldığını ve nasıl saklandığını açıklar.
          </p>
          <section>
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <span>1.</span>Toplanan Bilgiler
            </h2>
            <p className="mb-4">Aşağıdaki bilgileri toplayabiliriz:</p>
            <ul className="flex flex-col md:grid-cols-2 gap-x-8 gap-y-2 list-none p-0 ml-4">
              {[
                "E-posta adresi",
                "Kullanıcı adı",
                "Profil fotoğrafı",
                "Öğrenme ilerlemesi ve uygulama içi aktiviteler",
                "Kullanıcı tarafından oluşturulan kartlar ve desteler",
                "Geri bildirim formları veya e-posta yoluyla gönderilen mesajlar",
                "Cihaz türü, işletim sistemi ve uygulama sürümü gibi teknik bilgiler",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 bg-[#FF6B35] rounded-full" />{" "}
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <span>2.</span>Bilgilerin Kullanım Amacı
            </h2>
            <p className="mb-4">
              Toplanan bilgiler aşağıdaki amaçlarla kullanılır:
            </p>
            <ul className="space-y-3 list-none p-0 ml-4">
              {[
                "Kullanıcı hesabı oluşturmak ve yönetmek",
                "Öğrenme ilerlemesini cihazlar arasında senkronize etmek",
                "Kart ve deste oluşturma, düzenleme ve paylaşma özelliklerini sağlamak",
                "Paylaşılan içeriklerde kullanıcı adı ve profil fotoğrafını göstermek",
                "Hesap doğrulama, şifre sıfırlama ve bilgilendirme e-postaları göndermek",
                "Push bildirimleri ile hatırlatma ve bilgilendirme yapmak",
                "Uygulama performansını ve kullanıcı deneyimini geliştirmek",
                "Kullanıcı geri bildirimlerine yanıt vermek",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 bg-[#FF6B35] rounded-full" />{" "}
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-4">
              Kişisel veriler; kullanıcı sözleşmesinin ifası, uygulama
              hizmetlerinin sunulması, kullanıcı onayı ve meşru menfaat
              kapsamında işlenmektedir.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <span>3.</span>Kimlik Doğrulama ve Üçüncü Taraf Hizmetler
            </h2>
            <p>
              Knowia, uygulamanın çalışması için üçüncü taraf hizmetler
              kullanabilir:
            </p>
            <div className="bg-[#262626] p-6 rounded-xl border border-gray-800 mt-4 space-y-4">
              <p>
                <strong>Supabase</strong> (kimlik doğrulama, veritabanı ve dosya
                depolama)
              </p>
              <p>E-posta gönderim servisleri</p>
              <p>Push bildirim servisleri</p>
              <p className="text-sm text-gray-500 border-t border-gray-700 pt-4 italic">
                Bu hizmetler yalnızca gerekli verileri işler ve geçerli veri
                koruma düzenlemelerine uygun şekilde çalışır.
                <br />
                Kullanıcı verileri, hizmet sağlayıcıların yurt dışındaki (Avrupa
                Birliği veya ABD) sunucularında işlenebilir.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <span>4.</span>İçerik Paylaşımı ve Görünürlük
            </h2>
            <p>
              Kullanıcılar, oluşturdukları kart ve desteleri diğer
              kullanıcılarla paylaşabilir.
            </p>
            <div className="mt-4 p-4 border-l-2 border-[#FF6B35] bg-[#262626]/50">
              <p className="font-semibold mb-2">
                Paylaşılan içeriklerde aşağıdaki bilgiler diğer kullanıcılar
                tarafından görülebilir:
              </p>
              <ul className="list-disc list-inside ml-4 text-gray-400">
                <li>Kullanıcı adı</li>
                <li>Profil fotoğrafı</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <span>5.</span>Veri Saklama
            </h2>
            <p>
              Kişisel veriler, hizmetin sağlanması için gerekli olduğu sürece
              saklanır.
            </p>
            <p className="mt-2">
              Kişisel veriler, yetkisiz erişim, kayıp veya kötüye kullanıma
              karşı uygun teknik ve idari güvenlik önlemleriyle korunur.
            </p>
            <p className="mt-2">
              Kullanıcılar, uygulama içerisindeki profil sekmesindeki “Hesabı Sil” seçeneği
              üzerinden hesap silme talebi oluşturabilir. Talep oluşturulduktan
              sonra hesap pasif hale getirilir ve uygulamaya erişim engellenir.
              Hesap ve ilişkili veriler makul bir süre(en geç 30 gün) içerisinde kalıcı olarak
              silinir.
            </p>
            <p className="text-sm text-gray-500 pt-4 italic">Alternatif olarak, destek ekibimizle e-posta yoluyla iletişime geçerek de hesap silme talebinde bulunabilirler.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <span>6.</span>Çocukların Gizliliği
            </h2>
            <p>Knowia 13 yaş ve üzeri kullanıcılar için tasarlanmıştır.</p>
            <p className="mt-2">
              13 yaş altındaki çocuklardan bilerek kişisel veri toplanmaz.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <span>7.</span>Reklamlar ve Premium Özellikler
            </h2>
            <p>Knowia şu anda ücretsizdir.</p>
            <p className="mt-2 text-gray-400">
              Gelecekte isteğe bağlı premium özellikler veya reklamlar
              sunulabilir. Bu tür değişiklikler bu Gizlilik Politikası’nda
              güncellenecektir.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <span>8.</span>Kullanıcı Hakları
            </h2>
            <p>
              Bulunduğunuz ülkeye bağlı olarak aşağıdaki haklara sahip
              olabilirsiniz:
            </p>
            <ul className="list-disc list-inside mt-2 space-y-1 ml-4">
              <li>Kişisel verilerinize erişme</li>
              <li>Verilerin düzeltilmesini veya silinmesini talep etme</li>
              <li>Verilerinizin işlenmesine ilişkin onayınızı geri çekme</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <span>9.</span>Politika Güncellemeleri
            </h2>
            <p>
              Knowia, bu Gizlilik Politikası’nı zaman zaman güncelleyebilir.
              Önemli değişiklikler uygulama içinden veya e-posta yoluyla
              kullanıcıya bildirilebilir.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <span>10.</span>Veri Sorumlusu
            </h2>
            <p>Knowia uygulamasının veri sorumlusu Knowia’dır (Türkiye).</p>
          </section>

          <section className="bg-gradient-to-br from-[#262626] to-[#1C1C1C] p-8 rounded-3xl border border-gray-800 text-center mt-20">
            <h2 className="text-2xl font-bold text-white mb-6">İletişim</h2>
            <p className="mb-6 text-gray-400">
              Gizlilik politikası, kişisel veriler ve diğer ilgili talepler
              için:
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
