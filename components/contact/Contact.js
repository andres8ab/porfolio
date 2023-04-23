import Link from "next/link";
import Image from "next/image";
import classes from "./Contact.module.css";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <section className={classes.contact}>
      <h1>Contact</h1>
      <ContactForm />
      <div className={classes.logos}>
        <Link
          className={classes.logo}
          href="https://www.linkedin.com/in/andres-ochoa-bawab-5a36b3272/"
          target="_blank"
        >
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/0/01/LinkedIn_Logo.svg"
            alt="linkedin"
            width="100"
            height="100"
          />
        </Link>
        <Link
          className={classes.logo}
          href="https://github.com/andres8ab"
          target="_blank"
        >
          <Image
            src="/img/github.png"
            alt="github logo"
            width="100"
            height="100"
          />
        </Link>
      </div>
    </section>
  );
};

export default Contact;
