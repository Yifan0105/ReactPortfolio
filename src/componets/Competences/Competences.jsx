import React from 'react';
import styles from './Competences.module.css';
import skills from '../../data/skills.json';
import techC from '../../data/techC.json';

export const Competences = () => {
  return (
    <section id = "competences" className={styles.container}>
        <h2 className={styles.title}> Mes Compétences </h2>
        <div className={styles.techSkillscontainer}>
        <h2 className={styles.titleA}>☆ Tech Skills </h2>
        <div className={styles.content}>
        <div className={styles.skills}>
          {skills.map((skill, id) => {
            return (
              <div key={id} className={styles.skill}>
                <div className={styles.skillImageContainer}>
                  <img src={skill.imageSrc} alt={skill.title} />
                </div>
                <p>{skill.title}</p>
              </div>
            );
          })}
        </div>
        <ul className={styles.techC}>
          {techC.map((techCItem, id) => {
            return (
              <li key={id} className={styles.techCItem}>
                <div className={styles.techCItemDetails}>
                  <h3>{techCItem.title}:</h3>
                  <p>{techCItem.skills}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
      </div>
      <div className={styles.softSkillsContainer}>
      <h2 className={styles.titleA}>☆ Soft Skills</h2>
        <div className={styles.cardsContainer}>
          <div className={styles.card}>
            <h3>Capacité d'apprentissage rapide</h3>
          </div>
          <div className={styles.card}>
            <h3>Travail en équipe</h3>
          </div>
          <div className={styles.card}>
            <h3>Esprit d'initiative</h3>
          </div>
          <div className={styles.card}>
            <h3>Sens de l'organisation</h3>
          </div>
          <div className={styles.card}>
            <h3>Résolution de problèmes</h3>
          </div>
          <div className={styles.card}>
            <h3>Capacité à travailler dans un environnement international</h3>
          </div>
          <div className={styles.card}>
            <h3>Adaptabilité</h3>
          </div>
        </div>
      </div>
    </section>
  )
}
