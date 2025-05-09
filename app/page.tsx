// import About from "./components/about/about";
import Advantages from "./components/advantages/advantages";
import Header from "./components/header/header";
import Carousel from "./components/carousel/carousel";
import Hero from "./components/hero/hero";
import styles from "./page.module.css";
import Footer from "./components/footer/footer";
import Reservation from "./components/reservation/reservation";

export default function Home() {
  return (
    <div className={styles.home_layout}>
      <Header />
      <main className={styles.main}>
        <section id="home" className={styles.home_section}>
          <Hero />
        </section>
        <section id="advantages" className={styles.home_section}>
          <Advantages />
        </section>
        {/* <section id="about" className={styles.home_section}>
          <About />
        </section> */}
        <section id="interior" className={styles.home_section}>
          <Carousel />
        </section>
        <section id="reservation" className={styles.home_section}>
          <Reservation />
        </section>
      </main>
      <section id="contacts" className={styles.home_section}>
        <Footer />
      </section>
    </div>
  );
}
