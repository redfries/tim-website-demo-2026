import Navigation from "@/components/Navigation";
import CampaignCard from "@/components/CampaignCard";
import AnimatedHero from "@/components/AnimatedHero";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F8F6F1]">
      <Navigation />
      
      {/* Animated Hero Sequence */}
      <AnimatedHero />

      {/* Stats Ticker */}
      <section className="bg-[#0A0A0A] text-white py-6 overflow-hidden border-y border-[#C9952A]/20">
        <div className="flex w-[200%] animate-[marquee-h_15s_linear_infinite] [mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)]">
          {[1, 2].map((i) => (
            <div key={i} className="flex-1 flex justify-around items-center whitespace-nowrap text-lg md:text-xl font-medium tracking-wide uppercase">
              <span>100M+ Impressions</span>
              <span className="text-[#C9952A]">——</span>
              <span>50+ Brands</span>
              <span className="text-[#C9952A]">——</span>
              <span>MS Dhoni · Akshay Kumar · Shraddha Kapoor</span>
              <span className="text-[#C9952A]">——</span>
              <span>Starbucks · Dabur · Wakefit</span>
              <span className="text-[#C9952A]">——</span>
            </div>
          ))}
        </div>
      </section>

      {/* Work Section */}
      <section id="work" className="py-32 max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="mb-16">
          <p className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#767676] mb-6">
            02 — CAMPAIGNS
          </p>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <h2 className="font-display text-5xl md:text-7xl font-semibold leading-[1.1] text-[#0A0A0A] max-w-2xl">
              Work that moves <br /> the needle.
            </h2>
            <a href="#all-work" className="text-[#0A0A0A] text-sm font-bold tracking-wide uppercase border-b-2 border-[#0A0A0A] pb-1 hover:text-[#C9952A] hover:border-[#C9952A] transition-colors">
              See All Work →
            </a>
          </div>
        </div>

        {/* Asymmetric Masonry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Large Card 1 */}
          <div className="md:col-span-7">
            <CampaignCard 
              clientName="Yes Madam"
              campaignName="App Film feat. Shraddha Kapoor"
              metric="#1 Trending"
              imageSrc="/images/works/poster-1.jpg"
              videoSrc="/videos/campaigns/Yes Madam App Film 02 [6gAX8hGgmnY].mp4"
              size="large"
            />
          </div>
          
          {/* Medium Card 1 */}
          <div className="md:col-span-5 md:pt-24">
            <CampaignCard 
              clientName="Starbucks"
              campaignName="Launch Campaign"
              metric="12M+ Reach"
              imageSrc="/images/works/poster-2.jpg"
              size="medium"
            />
          </div>

          {/* Medium Card 2 */}
          <div className="md:col-span-4">
            <CampaignCard 
              clientName="Beardo"
              campaignName="Don Beardo Returns"
              metric="32M Views"
              imageSrc="/images/works/other-1.png"
              size="medium"
            />
          </div>

          {/* Large Card 2 */}
          <div className="md:col-span-8">
            <CampaignCard 
              clientName="Wakefit"
              campaignName="Kumbhkaran Sleep Challenge"
              metric="Engagement 4x"
              imageSrc="/images/works/other-3.png"
              size="large"
            />
          </div>
        </div>
      </section>

      {/* TVC Works Section */}
      <section className="py-32 bg-white border-t border-[#0A0A0A]/10">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16">
            <div>
              <p className="text-[#C9952A] font-bold tracking-widest uppercase mb-4 text-sm">
                Broadcast & Digital
              </p>
              <h2 className="font-display text-5xl md:text-7xl font-medium text-[#0A0A0A] uppercase tracking-tighter">
                TVC Works
              </h2>
            </div>
          </div>

          <div className="flex flex-col gap-12">
            {[
              {
                brand: "YES MADAM",
                desc: "Feat. Shraddha Kapoor x Shakti Kapoor",
                tag: "#HarExpertSalonExpertNahiHota",
                videoId: "6gAX8hGgmnY"
              },
              {
                brand: "WELSPUN",
                desc: "Feat. Akshay Kumar",
                tag: "#ApaneBaapkoMatSikha",
                videoId: "On8H9R1vwNI"
              }
            ].map((tvc, idx) => (
              <div key={idx} className="group border border-[#0A0A0A]/10 bg-[#F8F6F1] hover:border-[#C9952A] transition-colors p-4 md:p-6 flex flex-col md:flex-row gap-8 items-center">
                {/* Details Container */}
                <div className="w-full md:w-1/3 flex flex-col justify-center order-2 md:order-1">
                  <h3 className="font-display text-4xl md:text-5xl font-bold text-[#0A0A0A] uppercase mb-4 tracking-tight group-hover:text-[#C9952A] transition-colors">
                    {tvc.brand}
                  </h3>
                  <p className="text-xl text-[#0A0A0A] font-medium mb-4 leading-snug">
                    {tvc.desc}
                  </p>
                  <p className="text-[#767676] text-sm tracking-widest font-bold uppercase">
                    {tvc.tag}
                  </p>
                </div>

                {/* Video Container */}
                <div className="w-full md:w-2/3 aspect-video bg-black relative shadow-lg order-1 md:order-2">
                  <iframe 
                    className="absolute inset-0 w-full h-full"
                    src={`https://www.youtube.com/embed/${tvc.videoId}?controls=1&rel=0&modestbranding=1`}
                    title={`${tvc.brand} TVC`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clients Strip */}
      <section className="py-24 bg-white border-t border-[#E8E4DE] overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 mb-12 text-center">
          <p className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#767676] mb-4">
            03 — TRUSTED BY
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-medium text-[#0A0A0A]">
            Brands you know. <br /> Campaigns they'll remember.
          </h2>
        </div>
        <div className="relative w-full [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="flex w-[200%] animate-[marquee-h_20s_linear_infinite] mb-12 hover:pause transition-all duration-500">
            {[1, 2].map((i) => (
              <div key={i} className="flex-1 flex justify-around items-center px-4">
                <Image src="/images/unmapped/d0c6d9_b34ab30c8bce4e78bce1bad0c22899c9~mv2.png" alt="Logo" width={150} height={80} className="object-contain h-12 md:h-16 w-auto grayscale hover:grayscale-0 transition-all mix-blend-multiply opacity-80 hover:opacity-100" />
                <Image src="/images/unmapped/c95985_b49e57626b154a05bc038ce717090958~mv2.png" alt="Logo" width={150} height={80} className="object-contain h-12 md:h-16 w-auto grayscale hover:grayscale-0 transition-all mix-blend-multiply opacity-80 hover:opacity-100" />
                <Image src="/images/unmapped/c95985_30a68909dbab4a14ab57719ebda25bd6~mv2.png" alt="Logo" width={150} height={80} className="object-contain h-12 md:h-16 w-auto grayscale hover:grayscale-0 transition-all mix-blend-multiply opacity-80 hover:opacity-100" />
                <Image src="/images/unmapped/d0c6d9_5b3f3c093b9e4a3c9ccedafdc4917a7f~mv2.png" alt="Logo" width={150} height={80} className="object-contain h-12 md:h-16 w-auto grayscale hover:grayscale-0 transition-all mix-blend-multiply opacity-80 hover:opacity-100" />
                <Image src="/images/unmapped/d0c6d9_7b928ecacc2e4e5496235ee405669083~mv2.png" alt="Logo" width={150} height={80} className="object-contain h-12 md:h-16 w-auto grayscale hover:grayscale-0 transition-all mix-blend-multiply opacity-80 hover:opacity-100" />
              </div>
            ))}
          </div>
          <div className="flex w-[200%] animate-[marquee-h_25s_linear_infinite_reverse] hover:pause transition-all duration-500">
            {[1, 2].map((i) => (
              <div key={i} className="flex-1 flex justify-around items-center px-4">
                <Image src="/images/unmapped/c95985_888ec07cf7fd41ceafd9a92c45973688~mv2.png" alt="Logo" width={150} height={80} className="object-contain h-12 md:h-16 w-auto grayscale hover:grayscale-0 transition-all mix-blend-multiply opacity-80 hover:opacity-100" />
                <Image src="/images/unmapped/d0c6d9_dc0b95df13014e23a05205a062ab498f~mv2.png" alt="Logo" width={150} height={80} className="object-contain h-12 md:h-16 w-auto grayscale hover:grayscale-0 transition-all mix-blend-multiply opacity-80 hover:opacity-100" />
                <Image src="/images/unmapped/c95985_7f3b86172c974f9894632799f94c0ac8~mv2.png" alt="Logo" width={150} height={80} className="object-contain h-12 md:h-16 w-auto grayscale hover:grayscale-0 transition-all mix-blend-multiply opacity-80 hover:opacity-100" />
                <Image src="/images/unmapped/d0c6d9_374cae460a6e43538ad16f24dab72456~mv2.png" alt="Logo" width={150} height={80} className="object-contain h-12 md:h-16 w-auto grayscale hover:grayscale-0 transition-all mix-blend-multiply opacity-80 hover:opacity-100" />
                <Image src="/images/unmapped/d0c6d9_ad3eead5424346179097599c08234de6~mv2.png" alt="Logo" width={150} height={80} className="object-contain h-12 md:h-16 w-auto grayscale hover:grayscale-0 transition-all mix-blend-multiply opacity-80 hover:opacity-100" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-32 bg-[#F8F6F1]">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <p className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#767676] mb-6">
            04 — WHAT WE DO
          </p>
          <h2 className="font-display text-5xl md:text-7xl font-semibold leading-[1.1] text-[#0A0A0A] mb-16">
            Full-spectrum. <br /> No outsourcing.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div className="flex flex-col gap-6">
              {[
                { title: "Influencer Marketing", desc: "End-to-end campaign management" },
                { title: "Brand Account Management", desc: "Always-on digital presence" },
                { title: "Content Production", desc: "In-house shoots, reels, films" },
                { title: "PR & Events", desc: "On-ground and media coverage" },
                { title: "TVC & Film", desc: "Full production capability" },
                { title: "Digital Strategy", desc: "Data-led planning" }
              ].map((service, idx) => (
                <div key={idx} className="group cursor-pointer border-b border-[#0A0A0A]/10 pb-6 hover:border-[#C9952A] transition-colors flex justify-between items-end">
                  <div>
                    <h3 className="text-3xl font-display font-medium text-[#0A0A0A] group-hover:text-[#C9952A] transition-colors mb-2">
                      {service.title}
                    </h3>
                    <p className="text-[#767676]">{service.desc}</p>
                  </div>
                  <div className="text-3xl text-[#0A0A0A]/10 group-hover:text-[#C9952A] group-hover:-translate-y-2 group-hover:translate-x-2 transition-all duration-300">
                    ↗
                  </div>
                </div>
              ))}
            </div>
            <div className="relative aspect-[3/4] md:aspect-auto md:h-full bg-gray-200 overflow-hidden">
               <Image src="/images/works/other-4.png" alt="Services" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Personalities Grid */}
      <section id="personalities" className="py-32 bg-[#0A0A0A] text-white">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 mb-16">
          <p className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#767676] mb-6">
            05 — FACES
          </p>
          <h2 className="font-display text-5xl md:text-7xl font-semibold leading-[1.1] mb-8">
            When the biggest <br /> names trust you, <br /> results follow.
          </h2>
        </div>

        {/* Auto-scrolling Marquee for Faces */}
        <div className="relative w-full [mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)]">
          <div className="flex w-[200%] animate-[marquee-h_30s_linear_infinite] hover:pause pb-12">
            {[1, 2].map((i) => (
              <div key={i} className="flex-1 flex justify-around items-center gap-4 px-2">
                {[
                  { name: "Priya Sharma", img: "ms-dhoni.jpg", metric: "3M Views · Lifestyle Collab" },
                  { name: "Ananya Patel", img: "vijay-deverakonda.jpg", metric: "5M Reach · Sheba Cat Food" },
                  { name: "Neha Gupta", img: "samyukta-hegde.jpg", metric: "4M Views · Sheba Cat Food" },
                  { name: "Rahul Verma", img: "gaurav-gill.png", metric: "2M Reach · Sheba Cat Food" },
                  { name: "Sneha Rao", img: "ahaana-krishna.jpg", metric: "8M Views · The Sheba Show" },
                  { name: "Aditi Desai", img: "vithika-sheru.png", metric: "4M Reach · The Sheba Show" }
                ].map((face, idx) => (
                  <div key={idx} className="relative w-[300px] md:w-[400px] h-[400px] md:h-[500px] shrink-0 group overflow-hidden bg-zinc-900 cursor-pointer rounded-lg">
                    <Image src={`/images/personalities/${face.img}`} alt={face.name} fill sizes="(max-width: 768px) 300px, 400px" className="object-cover group-hover:scale-105 transition-all duration-700 ease-out opacity-90 group-hover:opacity-100" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-8 flex flex-col justify-end">
                      <h3 className="font-display text-3xl font-medium text-white mb-2 group-hover:-translate-y-2 transition-transform duration-300">
                        {face.name}
                      </h3>
                      <p className="text-[#C9952A] text-sm font-medium opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 delay-100">
                        {face.metric}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-32 bg-white">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <p className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#767676] mb-12">
            06 — HOW WE WORK
          </p>
          
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 md:gap-4 overflow-x-auto pb-8 hide-scrollbar">
            {[
              { num: "01", title: "Research", desc: "Culture & data analysis." },
              { num: "02", title: "Strategy", desc: "Positioning & planning." },
              { num: "03", title: "Create", desc: "In-house production." },
              { num: "04", title: "Launch", desc: "Multi-channel distribution." },
              { num: "05", title: "Optimize", desc: "Real-time scaling." }
            ].map((step, idx, arr) => (
              <div key={idx} className="flex items-center shrink-0">
                <div className="flex flex-col gap-2">
                  <span className="text-[#C9952A] font-display text-4xl font-bold">{step.num}</span>
                  <h3 className="font-display text-2xl font-medium text-[#0A0A0A]">{step.title}</h3>
                  <p className="text-[#767676] text-sm">{step.desc}</p>
                </div>
                {idx < arr.length - 1 && (
                  <div className="hidden md:block w-16 lg:w-32 h-[1px] bg-[#E8E4DE] mx-8 lg:mx-12 mt-4" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About / Positioning */}
      <section id="about" className="py-32 bg-[#F8F6F1]">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 text-center">
          <h2 className="font-display text-5xl md:text-8xl font-semibold leading-[1.1] text-[#0A0A0A] max-w-5xl mx-auto mb-12">
            We're not a vendor. <br />
            We're your <span className="text-[#C9952A]">unfair advantage.</span>
          </h2>
          <p className="text-xl md:text-2xl text-[#767676] max-w-2xl mx-auto mb-12 font-medium">
            We build campaigns that don't just interrupt culture—they become part of it. When the biggest brands in India need to make noise, they call us.
          </p>
          <a href="#contact" className="bg-[#0A0A0A] text-white px-10 py-5 text-sm font-bold tracking-widest hover:bg-[#C9952A] hover:text-[#0A0A0A] transition-colors duration-300 inline-flex items-center gap-3 uppercase">
            Let's Talk
            <span>→</span>
          </a>
        </div>
      </section>

      {/* Footer CTA */}
      <footer id="contact" className="bg-[#0A0A0A] text-white pt-32 pb-12 border-t-[12px] border-[#C9952A]">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-32">
            <div>
              <h2 className="font-display text-6xl md:text-8xl font-semibold leading-[1.1] mb-8">
                Ready to build <br /> something iconic?
              </h2>
              <a href="mailto:hello@timesinfluentialmedia.in" className="text-xl text-[#767676] hover:text-white transition-colors border-b border-[#767676] hover:border-white pb-1">
                hello@timesinfluentialmedia.in
              </a>
            </div>
            
            <form className="flex flex-col gap-4">
              <input type="text" placeholder="Your Name" className="bg-transparent border-b border-white/20 px-4 py-5 text-xl text-white placeholder:text-white/30 focus:outline-none focus:border-[#C9952A] focus:bg-white/5 transition-colors" />
              <input type="text" placeholder="Brand / Company" className="bg-transparent border-b border-white/20 px-4 py-5 text-xl text-white placeholder:text-white/30 focus:outline-none focus:border-[#C9952A] focus:bg-white/5 transition-colors" />
              <textarea placeholder="Brief Idea" rows={3} className="bg-transparent border-b border-white/20 px-4 py-5 text-xl text-white placeholder:text-white/30 focus:outline-none focus:border-[#C9952A] focus:bg-white/5 transition-colors resize-none" />
              <button type="submit" className="self-start mt-6 px-4 text-[#C9952A] text-xl font-bold hover:text-white transition-colors flex items-center gap-3 group">
                Send Enquiry
                <span className="group-hover:translate-x-2 transition-transform">→</span>
              </button>
            </form>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10 text-sm text-[#767676]">
            <div className="flex items-center gap-4 mb-4 md:mb-0">
              <Image src="/images/ui/tim-logo.png" alt="TIM" width={80} height={24} className="brightness-0 invert opacity-50" />
              <p>© 2026 Times Influential Media. All rights reserved.</p>
            </div>
            <div className="flex gap-8">
              <a href="#" className="hover:text-white transition-colors">Instagram</a>
              <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
              <a href="#" className="hover:text-white transition-colors">Twitter</a>
            </div>
          </div>
        </div>
      </footer>

    </main>
  );
}
