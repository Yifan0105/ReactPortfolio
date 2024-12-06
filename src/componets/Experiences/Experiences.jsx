import React from 'react';
import styles from './Experiences.module.css';
import history from "../../data/history.json";

export const Experiences = () => {
  return (
    <section className={styles.container} id="experiences">
      <h2 className={styles.title}> Mes Experiences professionnelles </h2>
      <div className={styles.content}>
      <ul className={styles.history}>
          {history.map((historyItem, id) => {
            return (
              <li key={id} className={styles.historyItem}>
                <img
                  src={historyItem.imageSrc}
                  alt={`${historyItem.organisation} Logo`}
                />
                <div className={styles.historyItemDetails}>
                  <h3>{`${historyItem.role} - ${historyItem.organisation} - ${historyItem.location} `}</h3>
                  <p>{`${historyItem.startDate} - ${historyItem.endDate}`} </p>
                  <p className={styles.keywordText}> ☆  {historyItem.keyword}</p>
                  <ul>
                    {historyItem.experiences.map((experience, id) => {
                      return <li key={id}>{experience}</li>;
                    })}
                  </ul>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  )
}

