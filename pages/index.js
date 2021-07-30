import Layout from '../components/Layout'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <div id="myCarousel" className="carousel slide" data-ride="carousel">
      <Layout>
      <div className="carousel-inner">
        <div className="item-active" >
          <Image className="banner-img-wide" src="/mpl.jpg" width={1500} height={1200}
            alt style={{ margin: '0px auto' }} />
        </div>
      </div>
      <section className="main-team-store" style={{ backgroundImage: 'linear-gradient' }}>
        <div style={{ height: '', width: '' }}>
          <div className="content">
            <div className="container">
              <section className="standing-cup" style={{ paddingTop: 0, paddingBottom: '3rem' }}>
                <div className="main-sponsor-slider-background2" style={{ paddingTop: 10 }}>
                  <div className="container">
                    <div className="row">
                      <div className="col-xs-12 text-center">
                        <a href="https://www.samsung.com/id/offer/galaxy-a-series-2021/?cid=id_partnership_display_mpl_galaxy-a-series_launch_053-a-series-season7-2021-lc-r1-mpl-rea-
                          c-new-lp_image_800x200-20210319_none&utm_source=other&utm_medium=display&utm_campaign=053-a-series-season7-2021-lc-r1-mpl-rea-c-new-lp&utm_term=1-cold-mass-none&utm_content=none-800x200"
                          target="_blank">
                          <img className="ads-desktop" src="https://id-mpl.com/uploads/SEASON-7/abs/samsung-d.png" alt style={{ maxWidth: 1200 }} />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>
      <div className="row">
        <div className="col-md-4">
          <div className="item img-top">
            <div className="img-wrap text-center perfect-center">
              <a href="https://id-mpl.com/news/2021-05-03-login-hadir-di-final-mpl-s7-eri-raply-ceyii-gpx-ingin-rasakan-atmosfir-mpl">
                <img className="news lazy" src="https://esports.id/img/article/753620210502222759.jpg" alt style={{ maxHeight: 250, width: 435 }} />
              </a>
            </div>
            <div className="info">
              <a href="https://id-mpl.com/news/2021-05-03-login-hadir-di-final-mpl-s7-eri-raply-ceyii-gpx-ingin-rasakan-atmosfir-mpl" 
                className="name font-subtitle">Login Hadir di Final MPL S7, Eri, Raply &amp; Ceyii GPX Ingin Rasakan Atmosfir MPL</a>
              <div className="wrap">
                <a href="https://id-mpl.com/news/2021-05-03-login-hadir-di-final-mpl-s7-eri-raply-ceyii-gpx-ingin-rasakan-atmosfir-mpl">
                  3 Mei 2021
                </a>
              </div>
              <div className="clear" />
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="item img-top">
            <div className="img-wrap text-center perfect-center">
              <a href="https://id-mpl.com/news/2021-05-03-3-alasan-luminaire-tak-akan-pensiun-pasca-mpl-id-season-7">
                <img className="news lazy" src="https://oneesports.azureedge.net/cdn-data/sites/2/2021/04/Luminaire-evos.jpg" alt style={{ maxHeight: 250, width: 435 }} />
              </a>
            </div>
            <div className="info">
              <a href="https://id-mpl.com/news/2021-05-03-3-alasan-luminaire-tak-akan-pensiun-pasca-mpl-id-season-7" 
                className="name font-subtitle">3 alasan Luminaire tak akan pensiun pasca MPL ID Season 7</a>
              <div className="wrap">
                <a href="https://id-mpl.com/news/2021-05-03-3-alasan-luminaire-tak-akan-pensiun-pasca-mpl-id-season-7">
                  3 Mei 2021
                </a>
              </div>
              <div className="clear" />
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="item img-top">
            <div className="img-wrap text-center perfect-center">
              <a href="https://id-mpl.com/news/2021-05-03-evos-ferxiic-ungkap-rahasianya-tak-gugup-main-di-mpl-season-7">
                <img className="news lazy" src="https://esports.id/img/article/17020210502221009.JPG" alt style={{ maxHeight: 250, width: 435 }} />
              </a>
            </div>
            <div className="info">
              <a href="https://id-mpl.com/news/2021-05-03-evos-ferxiic-ungkap-rahasianya-tak-gugup-main-di-mpl-season-7" 
                className="name font-subtitle">EVOS Ferxiic Ungkap Rahasianya Tak Gugup Main di MPL Season 7</a>
              <div className="wrap">
                <a href="https://id-mpl.com/news/2021-05-03-evos-ferxiic-ungkap-rahasianya-tak-gugup-main-di-mpl-season-7">
                  3 Mei 2021
                </a>
              </div>
              <div className="clear" />
            </div>
          </div>
        </div>
      </div>
      <Link href="/berita">
        <div className={styles.btn}>
          <a className="btn btn-danger">LIHAT SEMUA BERITA</a>
        </div>
      </Link>
      </Layout>
    </div>

  )
}
