import classes from "./About.module.css";

const About = () => {
  return (
    <section className={classes.about}>
      <h1>About me</h1>
      <p>
        My name is Andres Ochoa, I&lsquo;m a self-taught front-end developer
        highly motivated to keep innovating. <br />
        <br />I have always been passionate for applying new systems and tools
        that can help any business to achieve their goals. <br /> <br />
        I&lsquo;m excited to work in new proyects with you. <br />
        <br />
        If you are interested in working with me you can contact me by email or
        my social networks.
      </p>
    </section>
  );
};

export default About;
