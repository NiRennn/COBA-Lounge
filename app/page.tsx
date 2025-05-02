import About from "./components/about/about";
import Advantages from "./components/advantages/advantages";
import Header from "./components/header/header";
import Carousel from "./components/carousel/carousel";
import Hero from "./components/hero/hero";
import styles from "./page.module.css";
import Footer from "./components/footer/footer";

export default function Home() {
  return (
    <div className={styles.home_layout}>
      <Header />
      <main className={styles.main}>
        <section id="home">
          <Hero />
        </section>
        <section id="advantages">
          <Advantages />
        </section>
        {/* <section id="about">
          <About />
        </section> */}
        <section id="interior">
          <Carousel />
        </section>


      </main>
      <section id="contacts">
          <Footer />
        </section>
    </div>
  );
}
