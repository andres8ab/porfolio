import Image from 'next/image';
import classes from './Home.module.css';
import { Container } from 'react-bootstrap';

const Home = () => {
  return (
    <section className={classes.home}>
      <div>
        <h1 className="fs-1 fw-bold">Andres Ochoa</h1>
        <p>Front-end Developer</p>
      </div>
      <Container fluid className={classes.logos}>
        <Image
          className={classes.other}
          src="/img/html.svg"
          alt="html logo"
          width="60"
          height="60"
        />
        <Image
          className={classes.other}
          src="/img/javascript.svg"
          alt="javascript logo"
          width="60"
          height="60"
        />
        <Image
          className={classes.other}
          src="/img/css.svg"
          alt="css logo"
          width="60"
          height="60"
        />
        <Image
          className={classes.react}
          src="/img/react.svg"
          alt="react logo"
          width="60"
          height="60"
        />
        <Image
          className={classes.react}
          src="/img/redux.svg"
          alt="redux logo"
          width="60"
          height="60"
        />
        <Image
          className={classes.other}
          src="/img/nextjs.svg"
          alt="next logo"
          width="60"
          height="60"
        />
        <Image
          className={classes.other}
          src="/img/Bootstrap.svg"
          alt="bootstrap logo"
          width="60"
          height="60"
        />
        <Image
          className={classes.other}
          src="/img/Tailwind.svg"
          alt="tailwind logo"
          width="60"
          height="60"
        />
      </Container>
    </section>
  );
};

export default Home;
