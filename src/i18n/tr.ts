import type { Translations } from "./en";

const tr: Translations = {
  nav: {
    services: "Hizmetler",
    projects: "Projeler",
    about: "Hakkımızda",
    cta: "İletişime geç",
  },

  home: {
    eyebrow: "Sigorta Dijital Ürünleri",
    h1a: "Sigorta",
    h1accent: "platformları",
    h1b: "geliştirip canlıya alıyoruz.",
    lead: "Sigorta sektörü için üretim hazır dijital platformlar inşa ediyoruz — TSS & ÖSS akışları, eczane işlemleri, yatarak/ayakta tedavi ve self servis portallar, uçtan uca.",
    btnPrimary: "Projelerimizi gör →",
    btnSecondary: "Bize ulaşın",
    stat1val: "5+",  stat1lbl: "Canlı proje",
    stat2val: "Tam", stat2lbl: "Stack teslimat",
    stat3val: "100%", stat3lbl: "Sigortaya odaklı",
    cardLabel: "Kapsam Alanları",
    cardBadge: "Aktif",
    cardFooterTitle: "Sigorta sektörü",
    cardFooterSub: "Aktif iş birlikleri",
    domains: [
      { name: "TSS / ÖSS",        desc: "Journey ekranları & iş akışları" },
      { name: "Eczane",            desc: "Provizyon & onay süreçleri"      },
      { name: "Yatarak / Ayakta", desc: "Hastane & uygunluk UX"            },
      { name: "DAP & Self Servis", desc: "Dijital başvuru portalları"       },
    ],
  },

  services: {
    tag: "Ne yapıyoruz",
    titleA: "Sigorta için",
    titleAccent: "tasarlandı",
    titleB: "üretime hazır.",
    subtitle: "Sigorta sektörüne özel dijital ürünleri tasarlıyor, geliştiriyor ve canlıya alıyoruz — ilk wireframe'den go-live'a kadar.",
    items: [
      {
        num: "01", title: "Frontend Platformları",
        desc: "TSS, ÖSS ve sağlık sigortası modülleri için yüksek performanslı web arayüzleri. Karmaşık iş akışları temiz ve sezgisel kullanıcı deneyimlerine dönüştürülüyor.",
        tags: ["React / Next.js", "TypeScript", "Performans"],
      },
      {
        num: "02", title: "Servis Entegrasyonu",
        desc: "Sigorta backend sistemleri, provizyon API'leri ve eczane ağlarıyla kesintisiz entegrasyon. Güçlü veri akışları, derin doğrulama katmanları ve kapsamlı hata yönetimi.",
        tags: ["API Entegrasyonu", "REST / GraphQL", "Hata Yönetimi"],
      },
      {
        num: "03", title: "UI Sistemleri & Tasarım",
        desc: "Sigortaya özel component kütüphaneleri, design token sistemleri ve her ürün ile ekipte tutarlılığı sağlayan arayüz standartları.",
        tags: ["Tasarım Sistemi", "Token'lar", "Storybook"],
      },
      {
        num: "04", title: "Teknik Danışmanlık",
        desc: "Sigorta ekipleri için mimari incelemeler, performans denetimleri ve frontend stratejisi. Derin alan bilgisiyle güvenilir teknik ortaklık.",
        tags: ["Mimari", "Denetim", "Strateji"],
      },
    ],
  },

  projects: {
    tag: "Çalışmalarımız",
    titleA: "Gerçek projeler,",
    titleAccent: "gerçek etki",
    subtitle: "Sigorta sektöründeki müşteriler için teslim edilmiş üretim kalitesinde dijital ürünler.",
    client: "Sigorta sektörü müşterisi",
    items: [
      {
        tag: "Sağlık Sigortası", title: "TSS Journey Ekranları",
        desc: "Uçtan uca tamamlayıcı sağlık sigortası akışı — çok adımlı başvuru, gerçek zamanlı doğrulama, karmaşık uygunluk mantığı ve üretim kalitesinde hata yönetimi.",
      },
      {
        tag: "Eczane İşlemleri", title: "Eczane Provizyon Modülü",
        desc: "Anlaşmalı eczane onay ve provizyon akışları, fatura adımları ve backend sigorta servisleriyle derin entegre tam işlem ekranları.",
      },
      {
        tag: "Dijital Self Servis", title: "DAP & Self Servis Portal",
        desc: "Tek platformda poliçe yönetimi, dijital başvuru ve self servis sigorta modülleri. Temiz mimari, hızlı yükleme süreleri ve güçlü API entegrasyonu.",
      },
    ],
  },

  about: {
    tag: "Hakkımızda",
    titleA: "Karmaşıklığı",
    titleAccent: "netliğe",
    titleB: "dönüştürüyoruz.",
    p1: "Compile, sigorta sektörü için hızlı, güvenilir ve özenle tasarlanmış dijital ürünler geliştirmeye odaklanmış bir yazılım ekibidir.",
    p2: "Sigorta şirketleri ve insurtech ekipleriyle iş birliği yaparak temiz frontend mimarisi, tutarlı UI sistemleri ve performansa dayalı deneyimler sunuyoruz — ilk commit'ten uzun vadeli üretim desteğine kadar.",
    p3: "Derin alan bilgimiz sayesinde iş akışlarınızı, uyumluluk gereksinimlerinizi ve kullanıcılarınızı anlıyoruz — doğru şeyi, doğru şekilde inşa ediyoruz.",
    values: [
      { title: "Güvenilir Teslimat",   desc: "İlk günden üretim zihniyeti. Her özellik demo için değil, canlıya alınmak ve sürdürülmek üzere inşa edilir." },
      { title: "Hız ve Kalite",        desc: "Temiz mimariyle hızlı iterasyon. Teknik borç oluşturmadan hızlı hareket ediyoruz." },
      { title: "Ölçeklenebilir UI",    desc: "Her ekranda, her ekipte tutarlılık için component kütüphaneleri ve design token'ları." },
      { title: "Varsayılan Performans",desc: "Core Web Vitals, erişilebilirlik ve SEO sonradan düşünülmez — her build'in parçasıdır." },
    ],
  },

  contact: {
    eyebrow: "Birlikte çalışalım",
    titleA: "Harika bir şey",
    titleB: "inşa etmeye",
    titleAccent: "hazır mısınız",
    sub: "Yeni bir sigorta platformu başlatıyor ya da mevcut olanı iyileştiriyor olun — projeniz hakkında konuşmak isteriz.",
    email: "developers@compile.com.tr",
    linkedin: "LinkedIn'de bağlanın",
    github: "GitHub'ı keşfedin",
  },

  footer: {
    copy: "Compile. Sigorta dijital ürünleri.",
    services: "Hizmetler",
    projects: "Projeler",
    contact: "İletişim",
  },
};

export default tr;