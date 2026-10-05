const services = [
  { n: "01", title: "Website Bisnis", text: "Landing page dan company profile yang rapi, cepat, responsif, dan punya arah komunikasi yang jelas." },
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
  return (
    <main>
      <nav className="nav">
        <a className="brand" href="#">JABAR<span>.</span></a>
        <div className="navRight">
          <span className="availability">AVAILABLE FOR SELECT PROJECTS</span>
          <a className="navLink" href="#contact">Mari ngobrol <span>↗</span></a>
        </div>
      </nav>

      <section className="hero wrap">
        <div className="heroMeta">
          <p className="eyebrow">WEB DEVELOPER · KARAWANG · ID</p>
          <span className="heroIndex">01—06</span>
        </div>
        <h1>Website yang terlihat<br /><em>seperti bisnis yang serius.</em></h1>
        <div className="heroBottom">
          <p className="lead">Saya Jabar Sidik. Saya membantu bisnis membangun, memperbaiki, dan merawat website yang jelas, responsif, dan siap dipakai.</p>
          <div className="actions">
            <a className="button primary" href="#work">Lihat pekerjaan <span>↗</span></a>
            <a className="button ghost" href="#process">Cara kerja <span>↓</span></a>
          </div>
        </div>
      </section>

      <section id="work" className="section workSection wrap">
        <div className="sectionHead"><p className="eyebrow">01 / SELECTED WORK</p><p className="muted">Real client project</p></div>
        <article className="case">
          <div className="caseVisual">
            <div className="caseChrome"><span>CLIENT PROJECT</span><span>01</span></div>
            <div className="caseBrand">LORD<span>CORPS</span></div>
            <div className="caseVisualBottom"><span>E-COMMERCE</span><span>FASHION / CLOTHING</span></div>
          </div>
          <div className="caseInfo">
            <div className="caseTitle"><span className="caseNo">01</span><h2>LORDCORPS</h2></div>
            <div className="caseDetails">
              <div><p className="detailLabel">PROJECT</p><p className="caseTag">Website e-commerce untuk brand clothing.</p></div>
              <div><p className="detailLabel">ROLE</p><p className="caseText">Pengembangan dan perbaikan production website dengan alur katalog, checkout, pembayaran, shipping, dan kebutuhan admin.</p></div>
            </div>
            <div className="caseFoot"><span>Next.js · MongoDB · Cloudinary · Midtrans</span><span className="note">Public case study mengikuti izin owner.</span></div>
          </div>
        </article>
      </section>

      <section className="section servicesSection wrap">
        <div className="sectionHead"><p className="eyebrow">02 / SERVICES</p><p className="muted">Focused solutions</p></div>
        <div className="serviceGrid">{services.map(s => <div className="service" key={s.n}><span>{s.n}</span><h3>{s.title}</h3><p>{s.text}</p><span className="serviceArrow">↗</span></div>)}</div>
      </section>

      <section className="section wrap fitSection">
        <div className="sectionHead"><p className="eyebrow">03 / FIT</p><p className="muted">Maybe we're a fit.</p></div>
        <div className="fitGrid">
          <div><p className="statementNo">03</p><h2>Kalau masalahnya ada di website, <em>kita mulai dari masalahnya.</em></h2><p className="sectionCopy">Tidak semua bisnis membutuhkan website yang besar. Kadang yang dibutuhkan hanya halaman yang lebih meyakinkan, tampilan mobile yang beres, atau perbaikan kecil yang selama ini mengganggu.</p></div>
          <div className="fitList">{fitFor.map((x, i) => <div className="fitItem" key={x}><span>0{i + 1}</span><strong>{x}</strong><b>↗</b></div>)}</div>
        </div>
      </section>

      <section id="process" className="section processSection">
        <div className="wrap">
          <div className="sectionHead"><p className="eyebrow">04 / PROCESS</p><p className="muted">No mystery.</p></div>
          <div className="processIntro"><h2>Jelas dari awal.<br /><em>Tenang sampai selesai.</em></h2><p>Scope, biaya, revisi, dan hasil akhir dibicarakan sebelum pekerjaan dimulai. Setelah website live, komunikasi tidak berhenti.</p></div>
          <div className="processGrid">{process.map((x, i) => <div className="step" key={x}><span>0{i + 1}</span><strong>{x}</strong></div>)}</div>
        </div>
      </section>

      <section className="section principles wrap">
        <div className="sectionHead"><p className="eyebrow">05 / PRINCIPLES</p><p className="muted">How I work.</p></div>
        <div className="principleGrid">{principles.map((x, i) => <div className="principle" key={x.title}><span>0{i + 1}</span><h3>{x.title}</h3><p>{x.text}</p></div>)}</div>
      </section>

      <section className="trust wrap">
        <div><p className="eyebrow">WHY WORK WITH ME</p><h2>Bangun dulu<br /><em>kepercayaan.</em></h2></div>
        <div className="trustText"><p className="trustLead">Baru bangun websitenya.</p><p>Anda tidak perlu menebak siapa yang mengerjakan website, apa yang akan dikerjakan, atau kapan pekerjaan dianggap selesai.</p><p>Saya lebih suka proses yang sederhana: kebutuhan jelas, scope jelas, komunikasi terbuka, lalu website dikerjakan dan dirawat secara bertahap.</p></div>
      </section>

      <section id="contact" className="contact">
        <div className="wrap contactInner">
          <div className="contactTop"><p className="eyebrow">06 / CONTACT</p><span>LET'S MAKE IT CLEAR</span></div>
          <h2>Punya website yang ingin<br /><em>dibangun atau dibereskan?</em></h2>
          <p className="lead">Ceritakan masalah atau kebutuhan Anda. Kita lihat dulu apakah saya bisa membantu.</p>
          <div className="contactLinks"><a href="mailto:jabar.sidik0617@gmail.com">jabar.sidik0617@gmail.com <span>↗</span></a><a href="https://wa.me/6289655606307">WhatsApp <span>↗</span></a></div>
          <p className="contactMeta">Tidak yakin kebutuhan Anda masuk scope yang mana? Tidak masalah. Kirim konteks singkat dulu, lalu kita tentukan langkah yang paling masuk akal.</p>
        </div>
      </section>

      <footer className="footer wrap"><span>© 2026 Jabar Sidik</span><span>Web Developer · Karawang</span><span>Built with Next.js</span></footer>
    </main>
  );
}
