import styles from './ProjectsStyles.module.css';
import viberr from '../../assets/pokemon.jpg';
import freshBurger from '../../assets/fresh-burger.png';
import hipsster from '../../assets/hipsster.png';
import fitLift from '../../assets/calculator.jpg';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={viberr}
          link="https://velvety-kelpie-c3ddad.netlify.app/"
          h3="Pokémon Quiz Game "
          //p="Streaming App"
        />
        <ProjectCard
          src={freshBurger}
          link="https://65f69bbdc265724a21aa22ed--glittering-starship-2ea374.netlify.app/"
          h3="Grocery Website"
          //p="Hamburger Restaurant"
        />
        {/* <ProjectCard
          src={hipsster}
          link="https://github.com/Ade-mir/company-landing-page-2"
          h3="Hipsster"
          p="Glasses Shop"
        /> */}
        <ProjectCard
          src={fitLift}
          link="https://65f6a233a4d56559fa6a2f38--tranquil-cheesecake-f20237.netlify.app/"
          h3="Sleekest calculator"
          //p="Fitness App"
        />
      </div>
    </section>
  );
}

export default Projects;
