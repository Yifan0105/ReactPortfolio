import React from 'react'
import styles from './Profil.module.css'

export const Profil = () => {
  return (
    <section className={styles.container} >
        <div className={styles.content} >
            <h1 className={styles.title} >Bonjour，je suis Yifan</h1>
              <div className={styles.description}>
                Développeuse full stack avec une expérience concrète dans la conception et le développement d’applications web au sein d’une équipe agile.
                <br/><br/>
                Je suis actuellement à la recherche d'une opportunité professionnelle en CDI ou CDD en tant que Développeuse. Je suis disponible immédiatement, mobile partout en France, et titulaire d'un titre de séjour valide (APS) me permettant de travailler sur le territoire français. 
                <br/><br/>
                Passionnée par le développement web et constamment à la recherche de nouveaux défis techniques, je suis prête à apporter mes compétences et mon enthousiasme à une équipe dynamique et innovante.
              </div>
                <a href="YifanCV2024.pdf" download className={styles.contactBtn}>
                  Télécharger mon CV
                </a>
        </div>
        <img src="/ReactPortfolio/assets/profil/profilImage1.JPG" alt="profil" className={styles.profilImg} />
        <div className={styles.topBlur}  />
        <div className={styles.bottomblur} />
    </section>
  )
}

