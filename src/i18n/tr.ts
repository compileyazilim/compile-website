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
    h1a: "Çalışan",
    h1accent: "sigorta",
    h1b: "yazılımları geliştiriyoruz.",
    lead: "Sigorta sektörü için uçtan uca dijital ürünler — eczane işlemleri, yatarak & ayakta tedavi, DAP, e-fatura, provizyon ve daha fazlası. Angular, Java ve PL/SQL ile.",
    btnPrimary: "Çalışmalarımızı gör →",
    btnSecondary: "Bize ulaşın",
    stat1val: "10+",
    stat1lbl: "Canlı proje",
    stat2val: "6",
    stat2lbl: "Yıllık deneyim",
    stat3val: "100%",
    stat3lbl: "Sigortaya odaklı",
    cardLabel: "Kapsam Alanları",
    cardBadge: "Aktif",
    cardFooterTitle: "Sigorta sektörü",
    cardFooterSub: "Aktif iş birlikleri",
    domains: [
      { name: "Eczane", desc: "Provizyon & onay süreçleri" },
      { name: "Yatarak / ÖSS", desc: "Hastane & uygunluk akışları" },
      { name: "DAP & Self Servis", desc: "Dijital başvuru portalları" },
      { name: "Anlaşmalı Kurumlar", desc: "Fiyat teklif & ağ yönetimi" },
    ],
  },

  services: {
    tag: "Ne yapıyoruz",
    titleA: "Derin domain.",
    titleAccent: "Temiz kod.",
    titleB: "Teslim edildi.",
    subtitle:
      "Karmaşık sigorta yazılımlarını tasarlıyor, geliştiriyor ve bakımını yapıyoruz — arayüzden veritabanına, uçtan uca.",
    items: [
      {
        num: "01",
        title: "Sigorta UI Geliştirme",
        desc: "Sağlık sigortası iş akışları için kurumsal düzeyde Angular uygulamaları. TSS, ÖSS, eczane, yatarak tedavi ve self servis — gerçek dünya karmaşıklığını ölçeklenebilir şekilde karşılayacak biçimde inşa edildi.",
        tags: ["Angular", "TypeScript", "Kurumsal UI"],
      },
      {
        num: "02",
        title: "Java & PL/SQL Entegrasyonu",
        desc: "PL/SQL iş mantığını temiz REST endpoint'lerine bağlayan Java dispatcher katmanı. Sağlam, sürdürülebilir ve sigorta backend sistemleriyle derin entegre.",
        tags: ["Java", "PL/SQL", "REST API"],
      },
      {
        num: "03",
        title: "Sigorta Domain Uzmanlığı",
        desc: "Sigorta sistemlerinde altı yıl — provizyon akışları, e-fatura yapıları, anlaşmalı kurum ağları, fiyatlandırma ve teklif yönetimi. Tek bir satır kod yazmadan önce domain'i biliyoruz.",
        tags: ["Provizyon", "e-Fatura", "Anlaşmalı Kurum"],
      },
      {
        num: "04",
        title: "Uçtan Uca Teslimat",
        desc: "Gereksinimlerden üretime kadar. Angular frontend, Java middleware ve PL/SQL backend — katmanlar arasında hiçbir şey kaybolmadan tam stack üzerinde çalışıyoruz.",
        tags: ["Full Stack", "Mimari", "Destek"],
      },
    ],
  },

  projects: {
    tag: "Çalışmalarımız",
    titleA: "10+ proje.",
    titleAccent: "tek domain.",
    subtitle:
      "On yıllık sigorta yazılımı deneyimi — her proje aynı özen, domain bilgisi ve üretim kalitesiyle inşa edildi.",
    client: "Sigorta sektörü müşterisi",
    items: [
      {
        tag: "Eczane İşlemleri",
        title: "Eczane Provizyon Modülü",
        desc: "Anlaşmalı eczane onay akışları, provizyon işleme ve tam operasyon ekranları — backend sigorta servisleriyle derin entegre ve gerçek zamanlı doğrulama ile.",
      },
      {
        tag: "Yatarak & Ayakta Tedavi",
        title: "Hastane Uygunluk Akışları",
        desc: "Uygunluk kontrolleri, onay zincirleri ve sağlık sigortası operasyonları için hasta journey ekranlarını kapsayan yatarak ve ayakta tedavi sigorta iş akışları.",
      },
      {
        tag: "Dijital Self Servis",
        title: "DAP & Self Servis Portal",
        desc: "Dijital başvuru platformu ve self servis sigorta yönetimi. Birleşik Angular platformunda çok adımlı akışlar, belge yönetimi ve poliçe yönetimi.",
      },
      {
        tag: "Anlaşmalı Kurum",
        title: "Anlaşmalı Kurum Yönetimi",
        desc: "Anlaşmalı hastane, klinik ve eczaneleri yönetmek için uçtan uca platform — fiyat müzakereleri, teklif akışları, anlaşma takibi ve ağ durum izleme.",
      },
    ],
  },

  about: {
    tag: "Hakkımızda",
    titleA: "Küçük ekip.",
    titleAccent: "derin uzmanlık.",
    titleB: "",
    p1: "Compile, sigorta sektörü için dijital ürünler geliştirme konusunda altı yıllık uygulamalı deneyime sahip beş kişilik bir yazılım ekibidir.",
    p2: "Tam stack üzerinde çalışıyoruz — frontend'de Angular, middleware dispatcher olarak Java ve veri katmanında PL/SQL. Sigorta iş akışlarını içeriden tanıyoruz: provizyon, e-fatura, icmal, DAP ve aradaki her şey.",
    p3: "Küçüklüğümüz en büyük avantajımız. Her proje ilk günden itibaren kıdemli ilgi görür — junior yok, el değiştirme yok, sürpriz yok.",
    values: [
      {
        title: "Domain Bilgisi",
        desc: "Sigorta sistemlerinde altı yıl. Akışları, edge case'leri ve uyumluluk gereksinimlerini siz anlatmadan önce biliyoruz.",
      },
      {
        title: "Tam Stack Sahipliği",
        desc: "Angular, Java, PL/SQL — tüm stack'e sahibiz. Katmanlar arasında parmak işaret etme yok, ekipler arasında bağlam kaybı yok.",
      },
      {
        title: "Sadece Kıdemli Ekip",
        desc: "Beş deneyimli mühendis. Her özellik daha önce yapmış kişiler tarafından inşa edilir, incelenir ve yayına alınır.",
      },
      {
        title: "Üretim Zihniyeti",
        desc: "Uzun vadeli için inşa ediyoruz. Temiz mimari, uygun hata yönetimi ve sürdürülebilir kod — sadece demo günü için değil.",
      },
    ],
  },

  contact: {
    eyebrow: "Birlikte çalışalım",
    titleA: "Bir sigorta",
    titleB: "projeniz mi var?",
    titleAccent: "Konuşalım",
    sub: "Yeni bir modüle, tam bir platforma ya da mevcut bir sistemi çözmeye ihtiyacınız olsun — sigorta yazılımını biliyoruz ve projeniz hakkında konuşmak isteriz.",
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
