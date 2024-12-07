import React from 'react';
import styles from './Formations.module.css';

export const Formations = () => {
  return (
    <section id="formations" className={styles.container}>
      <h2 className={styles.title}> Mes Formations  </h2>
      <div className={styles.content}>
        <img src="./assets/formations/formation.JPG" alt="2024 Graduation" className={styles.formationImage}/>
        <ul className={styles.formationItems}>
          <li className={styles.formationItem}>
            <img src="./assets/formations/UT1.png" alt="UT1 icon" className={styles.formationUniversityImage}/>
              <div className={styles.formationItemText}>
                <h3>Master MIAGE (Méthodes Informatiques Appliquées à la Gestion des Entreprises) </h3>
                Faculté d'informatique | Université de Toulouse 1 Capitole (UT1) 
                <br />
                Toulouse, France | 09/2022 – 10/2024 
                <br /><br />
                <p>M2 MIAGE IPM (Ingénierie des Processus Métier)</p>
                <p> M1 MIAGE IM (Ingénierie Métier)</p>

              </div>
          </li>
          <li className={styles.formationItem}>
            <img src="./assets/formations/UT1.png" alt="UT1 icon" className={styles.formationUniversityImage} /> 
              <div className={styles.formationItemText}>
                <h3>Année préparatoire chinois pour Master MIAGE</h3>
                 Faculté d'informatique | Université de Toulouse 1 Capitole (UT1) 
                 <br />
                 Toulouse, France | 09/2021 - 06/2022
              </div>
          </li>
          <li className={styles.formationItem}>
            <img src="./assets/formations/CUEB.png" alt="CUEB icon" className={styles.formationUniversityImage}/>
              <div className={styles.formationItemText}>
                <h3>Licence en Gestion des Ressources Humaines </h3>
                School of Labor Economics | Capital University of Economics and Business (CUEB)
                <br />
                Pékin, Chine | 09/2017 - 07/2021 
              </div>
          </li>
          <li className={styles.formationItem}>
            <img src="./assets/formations/DCU.png" alt="DCU icon" className={styles.formationUniversityImage}/>
              <div className={styles.formationItemText}>
                <h3>Étudiante en échange à Dublin  </h3>
                Business school | Dublin City University (DCU) 
                <br />
                Dublin, Irlande | 08/2019 - 01/2020 
                <p>
                </p>
              </div>
          </li>
        </ul>
      </div>
    </section>
  )
}
