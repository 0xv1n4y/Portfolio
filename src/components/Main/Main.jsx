import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./Main.module.css";

const Main = () => {
  const Path = getImageUrl("resume/0xv1n4y.pdf");

  const handleDownload = () => {
    window.open(Path, "_blank");
  };

  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I' am Vinay</h1>
        <p className={styles.description}>
          I'm a full-stack developer with 2 years of experience using React and
          NodeJS. Reach out if you'd like to learn more!
        </p>
        <div className={styles.contact}>
          <a
            href="mailto:vinaysurisetty02@gmail.com"
            className={styles.contactBtn}
          >
            Contact Me
          </a>
          <button onClick={handleDownload} className={styles.contactBtn}>
            Resume
          </button>
        </div>
      </div>

      <img
        src={getImageUrl("main/restore.png")}
        alt="Cursor icon"
        className={styles.heroImg}
      />

      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};

export default Main;
