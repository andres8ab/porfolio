import Image from "next/image";
import classes from "./Home.module.css";

const Home = () => {
  return (
    <section className={classes.home}>
      <div>
        <h1>Andres Ochoa</h1>
        <p>Front-end Developer</p>
      </div>
      <div className={classes.logos}>
        <Image
          className={classes.other}
          src="https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg"
          alt="html logo"
          width="12"
          height="12"
        />
        <Image
          className={classes.other}
          src="https://upload.wikimedia.org/wikipedia/commons/b/ba/Javascript_badge.svg"
          alt="javascript logo"
          width="12"
          height="12"
        />
        <Image
          className={classes.other}
          src="https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg"
          alt="css logo"
          width="12"
          height="12"
        />
        <Image
          className={classes.react}
          src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
          alt="react logo"
          width="12"
          height="12"
        />
        <Image
          className={classes.react}
          src="https://cdn.worldvectorlogo.com/logos/redux.svg"
          alt="redux logo"
          width="12"
          height="12"
        />
        <Image
          className={classes.other}
          src="https://www.svgrepo.com/show/354113/nextjs-icon.svg"
          alt="next logo"
          width="12"
          height="12"
        />
        <Image
          className={classes.other}
          src="/img/Bootstrap.svg"
          alt="bootstrap logo"
          width="12"
          height="12"
        />
        <Image
          className={classes.other}
          src="/img/Tailwind.svg"
          alt="tailwind logo"
          width="12"
          height="12"
        />
      </div>
    </section>
  );
};

export default Home;
