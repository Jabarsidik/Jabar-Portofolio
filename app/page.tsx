const services = [
  { n: "01", title: "Website Bisnis", text: "Landing page dan company profile yang rapi, cepat, responsif, dan jelas arah kontaknya." },
  { n: "02", title: "Quick Fix", text: "Perbaikan kecil untuk responsive, layout, bug, deployment, atau masalah website yang mengganggu." },
  { n: "03", title: "Maintenance", text: "Bantuan setelah website live: bug fixing, perubahan kecil, deployment, dan pengembangan bertahap." },
];
const process = ["Konsultasi kebutuhan", "Scope + harga jelas", "DP & development", "Preview + revisi", "Handover", "Support setelah live"];
const fitFor = [
  "Brand & UMKM yang butuh website profesional",
  "Bisnis yang ingin punya landing page / company profile",
  "Pemilik website yang punya bug atau tampilan mobile bermasalah",
  "Bisnis yang butuh bantuan deployment, domain, atau perubahan kecil",
];
const principles = [
  { title: "Scope jelas", text: "Fitur, halaman, revisi, timeline, dan hasil akhir dibicarakan sebelum mulai." },
  { title: "Komunikasi terbuka", text: "Kalau ada kendala teknis atau perubahan kebutuhan, dibahas dulu—bukan tiba-tiba muncul di akhir." },
  { title: "Bisa dilanjutkan", text: "Setelah live, website tetap bisa dirawat dan dikembangkan bertahap sesuai kebutuhan bisnis." },
];

export default function Home() {
  return <main>
    <nav className="nav"><a className="brand" href="#">JABAR<span>.</span></a><a className="navLink" href="#contact">Mari ngobrol ↗</a></nav>
    <section className="hero wrap">
      <p className="eyebrow">WEB DEVELOPER · KARAWANG</p>
      <h1>Website yang bukan cuma terlihat bagus.<br/><em>Tapi membantu bisnis dipercaya.</em></h1>
      <p className="lead">Saya Jabar Sidik. Saya membantu bisnis membangun, memperbaiki, dan merawat website yang jelas, responsif, dan siap dipakai.</p>
      <div className="actions"><a className="button primary" href="#work">Lihat pekerjaan</a><a className="button ghost" href="#process">Cara kerja ↓</a></div>
    </section>

    <section id="work" className="section wrap">
      <div className="sectionHead"><p className="eyebrow">01 / PROJECT</p><p className="muted">Case study</p></div>
      <article className="case"><div className="caseTop"><span>CLIENT PROJECT</span><span>E-COMMERCE · FASHION</span></div><div className="caseBody"><div><h2>LORDCORPS</h2><p className="caseTag">Website e-commerce untuk brand clothing.</p></div><p className="caseText">Mengerjakan pengembangan dan perbaikan production website dengan alur katalog, checkout, pembayaran, shipping, dan kebutuhan admin.</p></div><div className="caseFoot"><span>Next.js · MongoDB · Cloudinary · Midtrans</span><span className="note">Public case study mengikuti izin owner.</span></div></article>
    </section>

    <section className="section wrap"><div className="sectionHead"><p className="eyebrow">02 / SERVICES</p><p className="muted">Practical, not complicated.</p></div><div className="serviceGrid">{services.map(s=><div className="service" key={s.n}><span>{s.n}</span><h3>{s.title}</h3><p>{s.text}</p></div>)}</div></section>

    <section className="section wrap fitSection"><div className="sectionHead"><p className="eyebrow">03 / FIT</p><p className="muted">Mungkin kita cocok.</p></div><div className="fitGrid"><div><h2>Kalau masalahnya ada di website, kita bisa mulai dari masalahnya.</h2><p className="sectionCopy">Tidak semua bisnis membutuhkan website yang besar. Kadang yang dibutuhkan hanya halaman yang lebih meyakinkan, tampilan mobile yang beres, atau perbaikan kecil yang selama ini mengganggu.</p></div><div className="fitList">{fitFor.map((x,i)=><div className="fitItem" key={x}><span>0{i+1}</span><strong>{x}</strong></div>)}</div></div></section>

    <section id="process" className="section wrap processSection"><div className="sectionHead"><p className="eyebrow">04 / PROCESS</p><p className="muted">No mystery.</p></div><div className="processGrid">{process.map((x,i)=><div className="step" key={x}><span>0{i+1}</span><strong>{x}</strong></div>)}</div><p className="processNote">Scope, biaya, revisi, dan hasil akhir dibicarakan sebelum pekerjaan dimulai. Setelah website live, komunikasi tidak berhenti.</p></section>

    <section className="section wrap principles"><div className="sectionHead"><p className="eyebrow">05 / PRINCIPLES</p><p className="muted">How I work.</p></div><div className="principleGrid">{principles.map((x,i)=><div className="principle" key={x.title}><span>0{i+1}</span><h3>{x.title}</h3><p>{x.text}</p></div>)}</div></section>

    <section className="trust wrap"><div><p className="eyebrow">WHY WORK WITH ME</p><h2>Bangun dulu kepercayaan.<br/><em>Baru bangun websitenya.</em></h2></div><div className="trustText"><p>Anda tidak perlu menebak siapa yang mengerjakan website, apa yang akan dikerjakan, atau kapan pekerjaan dianggap selesai.</p><p>Saya lebih suka proses yang sederhana: kebutuhan jelas, scope jelas, komunikasi terbuka, lalu website dikerjakan dan dirawat secara bertahap.</p></div></section>

    <section id="contact" className="contact"><div className="wrap contactInner"><p className="eyebrow">06 / CONTACT</p><h2>Punya website yang ingin<br/><em>dibangun atau dibereskan?</em></h2><p className="lead">Ceritakan masalah atau kebutuhan Anda. Kita lihat dulu apakah saya bisa membantu.</p><div className="contactLinks"><a href="mailto:jabar.sidik0617@gmail.com">jabar.sidik0617@gmail.com ↗</a><a href="https://wa.me/6289655606307">WhatsApp ↗</a></div><p className="contactMeta">Tidak yakin kebutuhan Anda masuk scope yang mana? Tidak masalah. Kirim konteks singkat dulu, lalu kita tentukan langkah yang paling masuk akal.</p></div></section>
    <footer className="footer wrap"><span>© 2026 Jabar Sidik</span><span>Web Developer · Karawang</span></footer>
  </main>;
}