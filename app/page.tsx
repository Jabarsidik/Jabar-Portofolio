const services = [
  { n: "01", kicker: "BUILD", title: "Website bisnis", text: "Landing page, company profile, dan website brand yang membuat bisnis terlihat siap dipercaya." },
  { n: "02", kicker: "FIX", title: "Website yang bermasalah", text: "Responsive berantakan, bug, layout, deployment, atau detail kecil yang mengganggu pengalaman pengguna." },
  { n: "03", kicker: "EVOLVE", title: "Setelah website live", text: "Maintenance, perubahan kecil, fitur bertahap, dan bantuan teknis tanpa harus membangun ulang semuanya." },
];

const process = [
  { n: "01", title: "DISCOVER", text: "Pahami bisnis, kebutuhan, dan masalah yang benar-benar perlu diselesaikan." },
  { n: "02", title: "DEFINE", text: "Tentukan scope, halaman, biaya, timeline, dan batas revisi sebelum mulai." },
  { n: "03", title: "BUILD", text: "Desain dan development dikerjakan dengan fokus pada struktur dan pengalaman." },
  { n: "04", title: "REFINE", text: "Preview, testing, responsive check, lalu revisi yang memang diperlukan." },
  { n: "05", title: "LAUNCH", text: "Deployment, handover, dan memastikan website siap dipakai." },
];

const fitFor = [
  "Brand & UMKM yang ingin terlihat lebih profesional",
  "Bisnis yang butuh landing page atau company profile",
  "Pemilik website yang punya masalah responsive atau bug",
  "Bisnis yang butuh bantuan deployment, domain, atau perubahan kecil",
];

export default function Home() {
  return (
    <main>
      <nav className="nav wrap">
        <a className="brand" href="#">JABAR<span>.</span></a>
        <div className="navRight">
          <span className="availability">INDEPENDENT WEB DEVELOPER · KARAWANG</span>
          <a className="navLink" href="#contact">Let's talk <span>↗</span></a>
        </div>
      </nav>

      <section className="hero wrap">
        <div className="heroTop">
          <div>
            <p className="eyebrow">WEB DEVELOPER · 2026</p>
            <p className="heroLocation">KARAWANG, WEST JAVA / ID</p>
          </div>
          <span className="heroIndex">01—05</span>
        </div>

        <div className="heroStatement">
          <p className="heroSmall">I BUILD WEBSITES<br />FOR BUSINESSES THAT<br />WANT TO BE TAKEN SERIOUSLY.</p>
          <h1>Jabar<br /><em>Sidik.</em></h1>
        </div>

        <div className="heroBottom">
          <p className="lead">Saya membantu bisnis membangun, memperbaiki, dan merawat website yang jelas, responsif, dan punya tujuan.</p>
          <a className="circleLink" href="#work"><span>Selected<br />work</span><b>↓</b></a>
        </div>
      </section>

      <section id="work" className="workSection">
        <div className="wrap">
          <div className="sectionHead">
            <p className="eyebrow">01 / SELECTED WORK</p>
            <p className="muted">REAL CLIENT PROJECT</p>
          </div>

          <article className="case">
            <div className="caseVisual">
              <div className="caseFrame">
                <div className="frameTop"><span>01 / CLIENT PROJECT</span><span>ECOMMERCE</span></div>
                <div className="frameCenter">
                  <span className="frameEyebrow">CLOTHING / DIGITAL STORE</span>
                  <strong>LORD<br /><i>CORPS</i></strong>
                  <span className="frameLine">A PRODUCTION WEB PROJECT</span>
                </div>
                <div className="frameBottom"><span>NEXT.JS</span><span>MIDTRANS</span><span>MONGODB</span><span>CLOUDINARY</span></div>
              </div>
            </div>

            <div className="caseInfo">
              <div className="caseTop">
                <span className="caseNo">CASE / 001</span>
                <span className="caseStatus">CLIENT PROJECT</span>
              </div>
              <h2>LORD<span>CORPS</span></h2>
              <p className="caseIntro">Website e-commerce untuk brand clothing. Sebuah project production dengan kebutuhan katalog, checkout, pembayaran, shipping, dan kebutuhan admin.</p>
              <div className="caseFacts">
                <div><span>ROLE</span><strong>Web development</strong></div>
                <div><span>STACK</span><strong>Next.js / MongoDB / Midtrans</strong></div>
                <div><span>STATUS</span><strong>Production project</strong></div>
              </div>
              <p className="caseNote">Detail case study publik, screenshot, dan live link akan ditampilkan setelah mendapat izin owner.</p>
            </div>
          </article>

          <div className="workCaption">
            <span>ONE REAL PROJECT IS BETTER THAN TEN CLAIMS.</span>
            <span>More work will be added as projects are completed.</span>
          </div>
        </div>
      </section>

      <section className="manifesto wrap">
        <p className="eyebrow">02 / APPROACH</p>
        <div className="manifestoGrid">
          <h2>Website bukan sekadar<br /><em>“jadi online”.</em></h2>
          <div>
            <p>Orang pertama kali melihat bisnis Anda sering kali lewat layar. Karena itu, website harus terasa jelas, meyakinkan, dan masuk akal untuk dipakai.</p>
            <p>Saya tidak mengejar website yang ramai. Saya mengejar website yang punya alasan di balik setiap bagian.</p>
          </div>
        </div>
      </section>

      <section className="services wrap">
        <div className="sectionHead">
          <p className="eyebrow">03 / SERVICES</p>
          <p className="muted">BUILD / FIX / EVOLVE</p>
        </div>
        <div className="serviceList">
          {services.map((s) => (
            <article className="service" key={s.n}>
              <div className="serviceNo">{s.n}</div>
              <div className="serviceKicker">{s.kicker}</div>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
              <span className="serviceArrow">↗</span>
            </article>
          ))}
        </div>
      </section>

      <section className="fit wrap">
        <div className="sectionHead">
          <p className="eyebrow">04 / FIT</p>
          <p className="muted">IS THIS FOR YOU?</p>
        </div>
        <div className="fitGrid">
          <div>
            <span className="bigNumber">04</span>
            <h2>Mulai dari masalahnya.<br /><em>Bukan dari fiturnya.</em></h2>
          </div>
          <div className="fitList">
            {fitFor.map((item, i) => (
              <div className="fitItem" key={item}>
                <span>0{i + 1}</span>
                <strong>{item}</strong>
                <b>↗</b>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="process">
        <div className="wrap">
          <div className="sectionHead">
            <p className="eyebrow">05 / PROCESS</p>
            <p className="muted">FROM IDEA TO LIVE</p>
          </div>
          <div className="processLead">
            <h2>Clear enough<br /><em>to trust.</em></h2>
            <p>Scope, biaya, revisi, dan hasil akhir dibicarakan sebelum pekerjaan dimulai. Tidak ada kejutan yang sengaja disimpan sampai akhir.</p>
          </div>
          <div className="processList">
            {process.map((item) => (
              <div className="processItem" key={item.n}>
                <span className="processNo">{item.n}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                <span className="processMark">+</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="trust wrap">
        <div className="trustMark">J / S</div>
        <div className="trustCopy">
          <p className="eyebrow">THE PROMISE</p>
          <h2>Serius di awal.<br /><em>Tetap ada setelah live.</em></h2>
          <p>Website bisa selesai dalam beberapa minggu. Hubungan dengan orang yang mengerjakannya seharusnya tidak hilang setelah tombol publish ditekan.</p>
          <div className="trustTags"><span>Clear scope</span><span>Open communication</span><span>After-launch support</span></div>
        </div>
      </section>

      <section id="contact" className="contact">
        <div className="wrap contactInner">
          <div className="contactMetaTop">
            <span className="eyebrow">LET'S MAKE SOMETHING USEFUL</span>
            <span>AVAILABLE FOR SELECT PROJECTS</span>
          </div>
          <h2>Have something that<br /><em>needs to look more serious?</em></h2>
          <p className="contactLead">Ceritakan kebutuhan, masalah, atau ide Anda. Kita lihat dulu apakah saya orang yang tepat untuk mengerjakannya.</p>
          <div className="contactLinks">
            <a href="mailto:jabar.sidik0617@gmail.com">jabar.sidik0617@gmail.com <span>↗</span></a>
            <a href="https://wa.me/6289655606307">WhatsApp <span>↗</span></a>
          </div>
        </div>
      </section>

      <footer className="footer wrap">
        <span>© 2026 Jabar Sidik</span>
        <span>Web Developer · Karawang</span>
        <span>Built with Next.js</span>
      </footer>
    </main>
  );
}
