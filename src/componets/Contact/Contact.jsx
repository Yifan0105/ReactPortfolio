import React from 'react';
import styles from './Contact.module.css';

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
      <h2>Contact</h2>
      <p>N’hésitez pas à me contacter !</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={"/ReactPortfolio/assets/contact/emailIcon.png"} alt="Email icon" />
          <a href="mailto:yifanshi0105@gmail.com">yifanshi0105@gmail.com</a>
        </li>
        <li className={styles.link}>
          <img
            src={"/ReactPortfolio/assets/contact/linkedinIcon.png"}
            alt="LinkedIn icon"
          />
          <a href="https://www.linkedin.com/in/yifan-shi-55278a200/ " target='_blank'>https://www.linkedin.com/in/yifan-shi-55278a200/ </a>
        </li>
        <li className={styles.link}>
          <img src={"/ReactPortfolio/assets/contact/githubIcon.png"} alt="Github icon" />
          <a href="https://github.com/Yifan0105" target='_blank'>https://github.com/Yifan0105</a>
        </li>
      </ul>
    </footer>
  )
}
