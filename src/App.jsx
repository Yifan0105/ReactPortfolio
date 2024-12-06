import style from './App.module.css';
import {Navbar} from './componets/Navbar/Navbar'; 
import {Profil} from './componets/Profil/Profil';
import {Competences} from './componets/Competences/Competences';
import {Experiences} from './componets/Experiences/Experiences';
import {Formations} from './componets/Formations/Formations';
import {Projets} from './componets/Projets/Projets';
import {Contact} from './componets/Contact/Contact';
import {ExperiencesBA} from './componets/ExperiencesBA/ExperiencesBA';

function App() {

  return (    
    <div className={style.App}>
      <Navbar />
      <Profil />
      <Formations />
      <Experiences />
      <ExperiencesBA />
      <Competences />
      {/* <Projets /> */}
      <Contact />
    </div>
  );

}

export default App
