import Head from 'next/head'
import styles from '../styles/Home.module.css'
import 'normalize.css'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Jiwantoko</title>
      </Head>
      <div className={styles.container}>
        <div className={styles.main}>

          {/* profile */}
          <div className={styles.profile}>
            <img src="/profile.jpg" alt="profile picture"></img>
            <h1>Hai, saya Arifin Jiwantoko</h1>
            <p>Seorang antusias teknologi yang hobi mempelajari hal baru tentang perkembangan teknologi informasi dan memiliki keterampilan dalam bidang pengembangan web.</p>
          </div>

          {/* skill */}
          <div className={styles.skill}>
            <h1>Skill</h1>
              <h3>HTML</h3>
              <div className={styles.skillBar}>
                <div className={styles.skillHTML}>
                  Advance
                </div>
              </div> 
              <h3>CSS</h3>
              <div className={styles.skillBar}>
                <div className={styles.skillCSS}>
                  Intermediate
                </div>
              </div> 
              <h3>Javascript</h3>
              <div className={styles.skillBar}>
                <div className={styles.skillJavascript}>
                  Intermediate
                </div>
              </div> 
              <h3>PHP</h3>
              <div className={styles.skillBar}>
                <div className={styles.skillPHP}>
                  Intermediate
                </div>
              </div> 
              <h3>NodeJS</h3>
              <div className={styles.skillBar}>
                <div className={styles.skillNodeJS}>
                  Beginner
                </div>
              </div> 
              <h3>SQL</h3>
              <div className={styles.skillBar}>
                <div className={styles.skillSQL}>
                  Advance
                </div>
              </div>
              <h3>Sleep</h3>  
              <div className={styles.skillBar}>
                <div className={styles.skillSleep}>
                  Expert
                </div>
              </div>  
          </div>
          
          {/* project */}
          <div className={styles.project}>
            <h1>Project</h1>
            <p>Will be update soon</p>
          </div>

          {/* education and experience */}
          <div className={styles.eductionExperience}>
            <div className={styles.education}>
              <h2>Pendidikan</h2>
              <p><strong>Universitas Gunadarma</strong></p>
              <p>S1 - Sistem Informasi</p>
              <p>September 2013 - September 2017</p>
              <p>IPK: 3.30</p>
            </div>
            <div className={styles.experience}>
              <h2>Pengalaman</h2>
              <p><strong>Usaha Street Food</strong></p>
              <p>September 2017 - Sekarang</p>
            </div>
          </div>

          {/* contact */}
          <div className={styles.contact}>
            <div className={styles.contactHead}>
              <h1>Contact</h1>
              <p>Anda dapat menguhubungi saya melalui media dibawah.</p>
            </div>
            <div className={styles.contactLink}>
              <div>
                <img src="email.png" alt="email logo"></img>
                <a href="mailto:arifin@jiwantoko.com">Arifin@jiwantoko.com</a>
              </div>
              <div>
                <img src="instagram.png" alt="email logo"></img>
                  <a href="https://www.instagram.com/jiwantoko/">@jiwantoko</a>
              </div>
              <div>
                <img src="github.png" alt="email logo"></img>
                <a href="https://github.com/jiwantoko">Jiwantoko</a>
              </div>
            </div>
          </div>

          {/* contact form */}
          <div className={styles.contactHead}>
            <p>Atau isi form dibawah.</p>
          </div>
          
          <div className={styles.contactForm}>
            <form action="https://docs.google.com/forms/u/0/d/e/1FAIpQLSfka1KNFWDeiWD2BCCVomgZQf5kctpX-4YAcJzUvlBTg301Kw/formResponse" method="POST">
              <div>
                <label for="name">Nama</label>
                <input type="text" name="entry.499303997" id="name" ></input>
              </div>
              <div>
                <label for="email">Email</label>
                <input type="text" name="entry.1097391147" id="email" ></input>
              </div>
              <div>
                <label for="subject">Subject</label>
                <input type="text" name="entry.1447426784" id="subject"></input>
              </div>
              <div>
                <label for="pesan">Pesan</label>
                <textarea name="entry.302030122"></textarea>
              </div>
                <input type="submit" name='kirim' value="Kirim"></input>
            </form>
          </div>
        </div>
      </div>
      <div className={styles.footer}>
          Code with { <img src="/love.png" alt="love you.." className={styles.logo} /> } by{' '}Arifin Jiwantoko
      </div>
    </div>
  )
}