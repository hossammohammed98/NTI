import Image from "next/image";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroText}>
        <h1>
          We are expert <br />
          <span>Digital Marketing</span>
        </h1>

        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>

        <div className={styles.heroButtons}>
          <button className={styles.serviceBtn}>Get Services</button>
          <button className={styles.aboutBtn}>About Us</button>
        </div>
      </div>

      <div className={styles.heroImage}>
        <div className={styles.circle}></div>

        <div className={styles.imageWrapper}>
          <Image
            src="/hero.png"
            alt="hero"
            fill
            priority
            className={styles.image}
          />
        </div>
      </div>
    </section>
  );
}