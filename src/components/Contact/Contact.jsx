import React from 'react';

import styles from "./Contact.module.css"

import { getImageUrl } from '../../utils';

const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
    <div className={styles.text}>
      <h2>Contact</h2>
      <p>Feel free to reach out!</p>
    </div>
    <ul className={styles.links}>
      <li className={styles.link}>
        <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
        <a href="mailto:vinaysurisetty02@gmail.com">vinaysurisetty02@gmail.com</a>
      </li>
      <li className={styles.link}>
        <img
          src={getImageUrl("contact/linkedinIcon.png")}
          alt="LinkedIn icon"
        />
        <a href="https://www.linkedin.com/in/v1n4y/">linkedin.com/v1n4y</a>
      </li>
      <li className={styles.link}>
        <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" />
        <a href="https://github.com/0xv1n4y">github.com/0xv1n4y</a>
      </li>
    </ul>
  </footer>
  );
}

export default Contact;

