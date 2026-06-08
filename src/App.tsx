import { motion, useScroll, useTransform } from 'motion/react';
import {
  Zap,
  Cpu,
  Network,
  Bot,
  Database,
  Globe,
  Camera,
  Clapperboard,
  ArrowRight,
  CheckCircle2,
  Menu,
  X,
  Linkedin,
  Twitter,
  Github,
  Instagram,
  MessageCircle
} from 'lucide-react';
import { useState, useRef } from 'react';

// --- Components ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between glass rounded-[1.5rem] px-8 py-4">
        <div className="flex items-center gap-4">
          <img
            src="/logo.jpeg"
            alt="Mono Digital Logo"
            className="w-10 h-10 rounded-xl object-cover"
            referrerPolicy="no-referrer"
          />
          <span className="font-display text-lg tracking-tighter text-white font-bold hidden sm:block">Mono Digital</span>
        </div>

        <div className="hidden md:flex items-center gap-10">
          {['Ana Sayfa', 'Hizmetler', 'Paketler', 'Hakkımızda'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(' ', '-')}`}
              className="text-sm font-medium text-slate-400 hover:text-white transition-colors relative group"
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-brand-blue group-hover:w-full transition-all duration-300" />
            </a>
          ))}
          <a
            href="#contact-details"
            className="bg-white text-black hover:bg-brand-blue hover:text-white px-8 py-2.5 rounded-xl text-sm font-bold transition-all cursor-pointer font-display uppercase tracking-wider inline-block"
          >
            İletişime Geç
          </a>
        </div>

        <button className="md:hidden text-white cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden mt-2 glass rounded-[1.5rem] p-6 flex flex-col gap-4"
        >
          {['Ana Sayfa', 'Hizmetler', 'Paketler', 'Hakkımızda'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(' ', '-')}`}
              className="text-lg font-medium text-slate-400 font-display"
              onClick={() => setIsOpen(false)}
            >
              {item}
            </a>
          ))}
          <a
            href="#contact-details"
            className="bg-white text-black w-full py-4 rounded-xl font-bold font-display uppercase tracking-wider cursor-pointer text-center inline-block"
            onClick={() => setIsOpen(false)}
          >
            İletişime Geç
          </a>
        </motion.div>
      )}
    </nav>
  );
};

const Background = () => {
  return (
    <div className="fixed inset-0 -z-10 bg-brand-dark overflow-hidden">
      {/* Grid Overlay */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`,
          backgroundSize: '80px 80px'
        }}
      />

      {/* Moving Particles */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-white/10 rounded-full"
          animate={{
            y: [-100, 1000],
            opacity: [0, 0.4, 0],
          }}
          transition={{
            duration: Math.random() * 20 + 20,
            repeat: Infinity,
            ease: "linear",
            delay: Math.random() * 20
          }}
          style={{
            left: `${Math.random() * 100}%`,
            top: -100
          }}
        />
      ))}

      {/* Animated Node Connections (Moving lines) */}
      <svg className="absolute inset-0 w-full h-full opacity-10 pointer-events-none">
        <motion.path
          d="M-100,100 L200,300 L500,100 L800,400 L1200,200"
          stroke="rgba(79,70,229,0.3)"
          strokeWidth="1"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        />
        <motion.path
          d="M100,-100 L300,400 L600,200 L900,600 L1300,100"
          stroke="rgba(147,51,234,0.3)"
          strokeWidth="1"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear", delay: 2 }}
        />
      </svg>

      {/* Glowing Orbs */}
      <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-brand-blue/10 blur-[160px] rounded-full" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[700px] h-[700px] bg-brand-purple/10 blur-[180px] rounded-full" />
    </div>
  );
};

export default function App() {
  return (
    <main className="relative min-h-screen">
      <Background />
      <Navbar />

      {/* Hero Section */}
      <section id="ana-sayfa" className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
          {/* Central Logo Focal Point */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative mb-12"
          >
            <motion.div
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="relative z-10"
            >
              <img
                src="/logo.jpeg"
                alt="Mono Digital Hero Logo"
                className="w-32 h-32 md:w-48 md:h-48 rounded-[2.5rem] object-cover shadow-2xl border border-white/10 hover:border-brand-blue/50 transition-colors duration-500 cursor-pointer"
                referrerPolicy="no-referrer"
              />
              {/* Soft Pulse Glow */}
              <motion.div
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.2, 0.4, 0.2]
                }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute inset-0 bg-brand-blue/30 blur-3xl -z-10 rounded-full"
              />
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="inline-flex items-center gap-2 px-4 py-1 glass rounded-full mb-6"
          >
            <span className="w-1.5 h-1.5 bg-brand-blue rounded-full animate-ping" />
            <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-blue-400 font-bold">Premium Digital Studio</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-4xl md:text-6xl font-bold tracking-tighter mb-6 leading-tight text-white font-display"
          >
            Modern Markalar İçin <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-purple text-glow">Dijital Altyapı.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="max-w-2xl text-base md:text-lg text-slate-400 mb-10 leading-relaxed font-normal"
          >
            Tasarım, strateji ve dijital performansı tek bir yapıda birleştiriyoruz.
            Mono Digital, markanızın geleceğini bugünden inşa eden kreatif çözüm ortağınızdır.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a
              href="#contact-details"
              className="bg-white text-black px-10 py-3.5 rounded-full font-bold text-base hover:bg-brand-blue hover:text-white transition-all shadow-[0_0_30px_rgba(255,255,255,0.1)] cursor-pointer inline-block uppercase tracking-wider font-display"
            >
              İletişime Geç
            </a>
            <a
              href="#hizmetler"
              className="glass px-10 py-3.5 rounded-full font-bold text-base border border-zinc-700 text-white hover:border-brand-purple transition-all cursor-pointer inline-block uppercase tracking-wider font-display"
            >
              Hizmetleri İncele
            </a>
          </motion.div>

          {/* Digital Growth System Visual */}
          <div className="relative w-full max-w-6xl mt-24 min-h-[400px] md:min-h-[500px] glass rounded-[3rem] overflow-hidden border-white/5 shadow-2xl p-4 md:p-12 group">
            <div className="absolute inset-0 bg-gradient-to-tr from-brand-blue/5 via-transparent to-brand-purple/5 opacity-50" />

            {/* Connection Lines (Desktop Only) */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20 hidden lg:block">
              <motion.path
                d="M 250 250 Q 400 250 450 200"
                stroke="white" strokeWidth="1" fill="none" strokeDasharray="4 4"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <motion.path
                d="M 650 200 Q 750 200 850 300"
                stroke="white" strokeWidth="1" fill="none" strokeDasharray="4 4"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, repeat: Infinity, delay: 1 }}
              />
            </svg>

            <div className="relative h-full w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">

              {/* 1. Website Card */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                whileHover={{ y: -5 }}
                className="glass p-5 rounded-3xl border-white/10 flex flex-col gap-4 bg-white/[0.02]"
              >
                <div className="flex items-center gap-2 mb-2">
                  <Globe size={14} className="text-brand-blue" />
                  <span className="text-[10px] font-mono font-bold tracking-widest text-zinc-500 uppercase">Modern_Web_Sitesi</span>
                </div>
                <div className="flex-1 bg-zinc-900/50 rounded-xl border border-white/5 overflow-hidden p-2">
                  <div className="h-2 w-12 bg-white/10 rounded-full mb-3" />
                  <div className="space-y-2">
                    <div className="h-1.5 w-full bg-white/5 rounded-full" />
                    <div className="h-1.5 w-4/5 bg-white/5 rounded-full" />
                    <div className="h-1.5 w-3/4 bg-white/5 rounded-full" />
                  </div>
                  <div className="mt-4 h-12 w-full bg-brand-blue/10 rounded-lg flex items-center justify-center">
                    <div className="w-8 h-1 bg-brand-blue/40 rounded-full" />
                  </div>
                </div>
              </motion.div>

              {/* 2. Meta Ads Card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                whileHover={{ y: -5 }}
                className="glass p-5 rounded-3xl border-white/10 flex flex-col gap-4 bg-white/[0.02]"
              >
                <div className="flex items-center gap-2 mb-2">
                  <Zap size={14} className="text-brand-purple" />
                  <span className="text-[10px] font-mono font-bold tracking-widest text-zinc-500 uppercase">Meta_Ads_Manager</span>
                </div>
                <div className="space-y-4">
                  <div className="p-3 bg-zinc-900/50 rounded-xl border border-white/5">
                    <div className="text-[9px] text-zinc-500 font-bold mb-1">CTR</div>
                    <div className="text-lg font-bold text-white font-display">2.48%</div>
                    <div className="h-1 w-full bg-zinc-800 rounded-full mt-2 overflow-hidden">
                      <motion.div animate={{ width: "65%" }} transition={{ duration: 2 }} className="h-full bg-brand-purple" />
                    </div>
                  </div>
                  <div className="p-3 bg-zinc-900/50 rounded-xl border border-white/5">
                    <div className="text-[9px] text-zinc-500 font-bold mb-1">CPA</div>
                    <div className="text-lg font-bold text-white font-display">12.50₺</div>
                  </div>
                </div>
              </motion.div>

              {/* 3. Leads Flow Visual */}
              <div className="lg:col-span-1 flex flex-col justify-center items-center gap-4 relative">
                <div className="text-[9px] font-mono font-bold tracking-[0.3em] text-zinc-600 uppercase mb-4">Lead_Flow</div>
                <div className="space-y-3 w-full">
                  {[1, 2, 3].map((i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: [0, 1, 0], y: -20 }}
                      transition={{ duration: 2, repeat: Infinity, delay: i * 0.6 }}
                      className="w-full p-3 glass rounded-xl border-white/5 flex items-center justify-between"
                    >
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-green-500/50" />
                        <div className="h-1.5 w-16 bg-white/10 rounded-full" />
                      </div>
                      <ArrowRight size={10} className="text-zinc-600" />
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* 4. WhatsApp & Performance */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                whileHover={{ y: -5 }}
                className="space-y-4 h-full"
              >
                <div className="glass p-5 rounded-3xl border-white/10 bg-white/[0.02]">
                  <div className="flex items-center gap-2 mb-4">
                    <MessageCircle size={14} className="text-green-500" />
                    <span className="text-[10px] font-mono font-bold tracking-widest text-zinc-500 uppercase">Conversion</span>
                  </div>
                  <div className="bg-green-500/10 p-3 rounded-2xl rounded-tr-none border border-green-500/20 max-w-[80%]">
                    <p className="text-[10px] text-green-200">Merhaba, hizmetleriniz hakkında bilgi almak istiyorum.</p>
                  </div>
                </div>

                <div className="glass p-5 rounded-3xl border-white/10 bg-white/[0.02] flex-1">
                  <div className="flex items-center gap-2 mb-4">
                    <Database size={14} className="text-brand-blue" />
                    <span className="text-[10px] font-mono font-bold tracking-widest text-zinc-500 uppercase">Performance</span>
                  </div>
                  <div className="flex items-end gap-1 h-12 mt-2">
                    {[0.3, 0.6, 0.4, 0.8, 0.9].map((h, i) => (
                      <motion.div
                        key={i}
                        initial={{ height: 0 }}
                        animate={{ height: `${h * 100}%` }}
                        className="flex-1 bg-brand-blue/30 rounded-t-sm"
                      />
                    ))}
                  </div>
                </div>
              </motion.div>

            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="hizmetler" className="py-32 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-[10px] font-mono tracking-[0.4em] uppercase text-brand-blue mb-4 block font-bold"
            >
              Uzmanlık Alanlarımız
            </motion.span>
            <h2 className="text-4xl md:text-7xl font-bold mb-6 tracking-tight text-white font-display">Hizmetlerimiz</h2>
            <p className="text-slate-500 max-w-2xl mx-auto text-sm md:text-base font-medium leading-relaxed">
              Modern dünyada markanızın dijital varlığını güçlendirecek,
              veriye dayalı ve kreatif odaklı profesyonel çözümler sunuyoruz.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8 text-left">
            {[
              { icon: Zap, title: "Meta Reklam Yönetimi", desc: "Facebook ve Instagram'da hedef odaklı stratejilerle maksimum dönüşüm sağlıyoruz." },
              { icon: Globe, title: "Web Tasarım", desc: "Hızlı, kullanıcı dostu ve prestijli web deneyimleri tasarlıyoruz." },
              { icon: Bot, title: "Otomasyon Kurulumu", desc: "İş süreçlerinizi hızlandıran, müşteri takibini ve operasyonları otomatikleştiren sistemler kuruyoruz." },
              { icon: Network, title: "Marka Kimliği", desc: "Markanızın görsel dünyasını baştan aşağıya kurumsal bir yapıda kurguluyoruz." },
              { icon: ArrowRight, title: "Performans Pazarlama", desc: "Sürdürülebilir büyüme stratejileri ile dönüşüm oranlarınızı maksimize ediyoruz." },
              { icon: Database, title: "Dijital Danışmanlık", desc: "Dijital büyüme stratejilerinizde uzman görüşümüzle yanınızdayız." },
              { icon: Camera, title: "Profesyonel Kamera Çekimleri", desc: "Markanızın vizyonunu yansıtan, yüksek kaliteli ve profesyonel ekipmanlarla gerçekleştirilen dinamik video çekimleri sunuyoruz." },
              { icon: Clapperboard, title: "Profesyonel Edit", desc: "Çekilen ham görüntüleri akıcı, dikkat çekici ve sosyal medya trendlerine uygun kreatif kurgularla yüksek dönüşümlü videolara dönüştürüyoruz." }
            ].map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="glass p-5 md:p-10 rounded-[1.75rem] md:rounded-[2.5rem] group border-white/5 hover:border-brand-blue/40 transition-all cursor-default relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-blue/5 blur-[50px] rounded-full group-hover:bg-brand-blue/10 transition-colors" />
                <div className="w-12 h-12 md:w-16 md:h-16 bg-white/5 rounded-2xl flex items-center justify-center mb-5 md:mb-8 group-hover:bg-brand-blue/10 transition-colors border border-white/5">
                  <service.icon className="w-6 h-6 md:w-8 md:h-8 text-white group-hover:text-brand-blue transition-all" />
                </div>
                <h3 className="text-base md:text-2xl font-bold mb-3 md:mb-4 text-white font-display tracking-tight leading-tight">{service.title}</h3>
                <p className="text-slate-400 leading-relaxed text-[11px] md:text-sm font-medium">
                  {service.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section id="paketler" className="py-32 px-6 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <span className="text-[10px] font-mono tracking-[0.4em] uppercase text-brand-purple mb-4 block font-bold text-glow">İhtiyacınıza Uygun</span>
            <h2 className="text-4xl md:text-7xl font-bold mb-6 tracking-tight text-white font-display">Çözüm Paketleri</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8 items-stretch">
            {[
              {
                title: "Web Site Kurulumu",
                price: "7.000 TL",
                subtitle: "Tek Seferlik Kurulum",
                features: ["Modern web tasarımı", "Mobil uyumlu yapı", "SEO altyapısı", "Hızlı teslimat"],
                color: "brand-blue",
                whatsapp: "https://wa.me/905055784272?text=Merhaba,%20Web%20Site%20Kurulumu%20paketi%20hakk%C4%B1nda%20detayl%C4%B1%20bilgi%20almak%20istiyorum."
              },
              {
                title: "Dijital Sistem Paketi",
                price: "10.000 TL",
                period: "/ Ay",
                subtitle: "Web + Reklam + Otomasyon",
                features: ["Web sitesi yönetimi", "Meta reklam yönetimi", "Otomasyon sistemleri", "WhatsApp entegrasyonu", "CRM ve müşteri takibi", "Sürekli teknik destek", "Profesyonel video çekimi", "Profesyonel edit", "Kreatif hazırlama"],
                highlight: true,
                color: "brand-purple",
                whatsapp: "https://wa.me/905055784272?text=Merhaba,%20Dijital%20Sistem%20Paketi%20hakk%C4%B1nda%20detayl%C4%B1%20bilgi%20almak%20istiyorum."
              },
              {
                title: "Reklam Yönetimi",
                price: "6.000 TL",
                period: "/ Ay",
                subtitle: "Aylık Yönetim",
                features: ["Meta reklam kurulumu", "Hedef kitle analizi", "Haftalık optimizasyon", "Aylık performans raporu", "Video çekimleri", "Reklam kreatifleri", "Profesyonel edit"],
                color: "brand-blue",
                whatsapp: "https://wa.me/905055784272?text=Merhaba,%20Reklam%20Y%C3%B6netimi%20paketi%20hakk%C4%B1nda%20detayl%C4%B1%20bilgi%20almak%20istiyorum."
              }
            ].map((pkg, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`glass p-6 md:p-12 rounded-[1.75rem] md:rounded-[3rem] border-white/5 ${pkg.highlight ? 'ring-2 ring-brand-purple/50 glow-purple bg-brand-purple/[0.05] lg:-translate-y-4' : ''} relative flex flex-col`}
              >
                {pkg.highlight && (
                  <span className="absolute -top-3 md:-top-4 left-1/2 -translate-x-1/2 px-3 md:px-4 py-1.5 bg-brand-purple text-white text-[9px] md:text-[10px] font-bold uppercase tracking-widest rounded-full whitespace-nowrap shadow-[0_0_24px_rgba(147,51,234,0.45)]">En Çok Tercih Edilen</span>
                )}
                <h3 className="text-lg md:text-2xl font-bold mb-1 text-white font-display leading-tight">{pkg.title}</h3>
                {pkg.subtitle && (
                  <div className="text-[8px] md:text-[10px] font-mono tracking-widest text-slate-500 uppercase mb-4 md:mb-6 font-bold leading-relaxed">
                    {pkg.subtitle}
                  </div>
                )}

                <div className="mb-5 md:mb-8 flex flex-col">
                  <div className="flex flex-wrap items-baseline gap-1">
                    <span className={`${pkg.highlight ? 'text-3xl md:text-5xl text-white' : 'text-3xl md:text-4xl text-white'} font-bold tracking-tight font-display leading-none`}>
                      {pkg.price}
                    </span>
                    {pkg.period && (
                      <span className="text-slate-400 text-sm md:text-base font-semibold">
                        {pkg.period}
                      </span>
                    )}
                  </div>
                </div>

                <div className="space-y-2.5 md:space-y-4 mb-6 md:mb-10 flex-1">
                  {pkg.features.map((feat, fi) => (
                    <div key={fi} className="flex items-start gap-2 md:gap-3 text-[11px] md:text-sm text-slate-400 leading-snug">
                      <div className={`w-1.5 h-1.5 rounded-full mt-1.5 shrink-0 ${pkg.highlight ? 'bg-brand-purple' : 'bg-brand-blue'}`} />
                      {feat}
                    </div>
                  ))}
                </div>
                <a
                  href={pkg.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full py-3 md:py-4 rounded-2xl font-bold text-white transition-all cursor-pointer text-center text-xs md:text-base ${pkg.highlight ? 'bg-brand-purple hover:glow-purple' : 'bg-white/5 border border-white/10 hover:bg-white/10'}`}
                >
                  Detaylı Bilgi Al
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <motion.section
        id="hakkımızda"
        className="py-32 px-6 relative overflow-hidden"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="text-[10px] font-mono tracking-[0.4em] uppercase text-brand-purple mb-4 block font-bold text-glow"
            >
              Neden Biz?
            </motion.span>
            <h2 className="text-4xl md:text-7xl font-bold mb-6 tracking-tight text-white font-display">
              Neden Mono Dijital?
            </h2>
            <p className="text-brand-purple font-display text-lg md:text-2xl font-bold max-w-3xl mx-auto mb-8 leading-relaxed">
              “Büyüme, görünürlük ve müşteri dönüşümü odaklı dijital sistemler kuruyoruz.”
            </p>
            <p className="text-slate-400 max-w-3xl mx-auto text-sm md:text-base font-medium leading-relaxed whitespace-pre-line">
              Mono Dijital olarak yalnızca estetik tasarıma değil, işletmelerin daha profesyonel görünmesine, daha fazla potansiyel müşteri kazanmasına ve daha fazla dönüşüm elde etmesine odaklanıyoruz.
              Web sitesi, reklam yönetimi ve otomasyon sistemlerini tek bir dijital yapı altında birleştirerek markaların dijitalde daha güçlü görünmesini sağlıyoruz.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: CheckCircle2,
                title: "Sonuç Odaklı Yaklaşım",
                desc: "Sadece tasarım değil, müşteri dönüşümü ve işletme büyümesi odaklı sistemler kuruyoruz.",
                borderColor: "hover:border-brand-blue/40",
                glowColor: "bg-brand-blue/5 blur-[40px] group-hover:bg-brand-blue/10",
                iconColor: "text-brand-blue group-hover:scale-110",
                iconBg: "group-hover:bg-brand-blue/10 group-hover:border-brand-blue/20"
              },
              {
                icon: Cpu,
                title: "Modern Dijital Altyapı",
                desc: "Web sitesi, reklam ve otomasyon sistemlerini entegre şekilde planlıyoruz.",
                borderColor: "hover:border-brand-purple/40",
                glowColor: "bg-brand-purple/5 blur-[40px] group-hover:bg-brand-purple/10",
                iconColor: "text-brand-purple group-hover:scale-110",
                iconBg: "group-hover:bg-brand-purple/10 group-hover:border-brand-purple/20"
              },
              {
                icon: Zap,
                title: "Hızlı ve Esnek Süreç",
                desc: "Yavaş ajans süreçleri yerine hızlı ve dinamik çözümler sunuyoruz.",
                borderColor: "hover:border-brand-blue/40",
                glowColor: "bg-brand-blue/5 blur-[40px] group-hover:bg-brand-blue/10",
                iconColor: "text-brand-blue group-hover:scale-110",
                iconBg: "group-hover:bg-brand-blue/10 group-hover:border-brand-blue/20"
              },
              {
                icon: Network,
                title: "Marka + Performans",
                desc: "Markanızın hem premium görünmesini hem de daha fazla dönüşüm üretmesini hedefliyoruz.",
                borderColor: "hover:border-brand-purple/40",
                glowColor: "bg-brand-purple/5 blur-[40px] group-hover:bg-brand-purple/10",
                iconColor: "text-brand-purple group-hover:scale-110",
                iconBg: "group-hover:bg-brand-purple/10 group-hover:border-brand-purple/20"
              }
            ].map((card, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className={`glass p-8 rounded-[2.5rem] group border border-white/5 ${card.borderColor} transition-all duration-500 cursor-default relative overflow-hidden`}
              >
                {/* Glow Effect */}
                <div className={`absolute -right-10 -top-10 w-32 h-32 ${card.glowColor} rounded-full transition-all duration-500`} />

                {/* Icon Container */}
                <div className={`w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center mb-6 border border-white/5 ${card.iconBg} transition-all duration-500`}>
                  <card.icon className={`${card.iconColor} transition-all duration-500`} size={24} />
                </div>

                <h3 className="text-xl font-bold mb-3 text-white font-display tracking-tight group-hover:text-glow transition-all duration-500">
                  {card.title}
                </h3>
                <p className="text-slate-400 leading-relaxed text-sm font-medium">
                  {card.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="py-32 px-6 border-t border-white/5 bg-[#030303] relative overflow-hidden">
        <div className="max-w-7xl mx-auto grid md:grid-cols-12 gap-20 relative z-10">
          <div className="md:col-span-5">
            <div className="flex items-center gap-4 mb-10">
              <img
                src="/logo.jpeg"
                alt="Mono Digital Logo"
                className="w-14 h-14 rounded-[1rem] object-cover shadow-2xl"
                referrerPolicy="no-referrer"
              />
              <span className="font-display text-2xl tracking-tighter text-white font-bold">Mono Digital</span>
            </div>
            <p className="text-slate-500 max-w-sm leading-relaxed text-lg font-medium">
              Modern markalar için yaratıcı ve performans odaklı dijital çözümler üreten
              yeni nesil dijital mimarlık. Dijitalde gücünüzü bizimle keşfedin.
            </p>
          </div>

          <div className="md:col-span-2">
            <h4 className="font-bold text-white mb-10 text-xl font-display">Keşfet</h4>
            <ul className="space-y-6 text-slate-500 font-medium text-base">
              <li><a href="#hizmetler" className="hover:text-brand-blue transition-colors">Hizmetler</a></li>
              <li><a href="#paketler" className="hover:text-brand-blue transition-colors">Paketler</a></li>
              <li><a href="#hakkımızda" className="hover:text-brand-blue transition-colors">Hakkımızda</a></li>
              <li><a href="#ana-sayfa" className="hover:text-brand-blue transition-colors">Ana Sayfa</a></li>
            </ul>
          </div>

          <div id="contact-details" className="md:col-span-3">
            <h4 className="font-bold text-white mb-10 text-xl font-display">İletişim</h4>
            <div className="flex gap-4 mb-10">
              <a
                href="https://instagram.com/mono_digital_35"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 glass rounded-2xl hover:bg-white/10 text-white group hover:-translate-y-1.5 hover:glow-blue transition-all duration-300"
              >
                <Instagram size={24} className="group-hover:scale-110 transition-transform" />
              </a>
              <a
                href="https://wa.me/905055784272"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 glass rounded-2xl hover:bg-white/10 text-white group hover:-translate-y-1.5 hover:glow-purple transition-all duration-300"
              >
                <MessageCircle size={24} className="group-hover:scale-110 transition-transform" />
              </a>
            </div>
            <a
              href="mailto:erenmediax35@gmail.com"
              className="text-base font-mono text-slate-400 font-bold uppercase tracking-widest hover:text-brand-blue transition-colors cursor-pointer block"
            >
              erenmediax35@gmail.com
            </a>
            <a
              href="tel:+905055784272"
              className="text-base font-mono text-slate-400 font-bold uppercase tracking-widest hover:text-brand-blue transition-colors cursor-pointer block mt-4"
            >
              +90 505 578 42 72
            </a>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-32 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 opacity-50">
          <div className="text-xs font-mono text-slate-500 tracking-[0.2em] font-bold">
            © 2026 MONO DIGITAL SYSTEMS LLC. TÜM HAKLARI SAKLIDIR.
          </div>
          <div className="text-xs font-mono text-slate-500 tracking-[0.2em] font-bold">
            IZMIR / TURKEY
          </div>
        </div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-brand-blue/5 blur-[120px] rounded-full" />
      </footer>
    </main>
  );
}
