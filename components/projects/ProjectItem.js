import Link from "next/link";
import Image from "next/image";
import Card from "../ui/card/Card";
import classes from "./ProjectItem.module.css";

const ProjectItem = () => {
  return (
    <Link href="https://todoelectricovictor.netlify.app/" target="_blank">
      <Card className={classes.card}>
        <Image
          src="/img/victor.png"
          alt="Todo Electrico Victor Web"
          width="1000"
          height="1000"
        />
        <div className={classes.logos}>
          <Image src="/img/html.svg" alt="html logo" width="20" height="20" />
          <Image src="/img/css.svg" alt="css logo" width="20" height="20" />
          <Image
            src="/img/javascript.svg"
            alt="javascript logo"
            width="20"
            height="20"
          />
        </div>
      </Card>
      <Image
        src="/img/github.png"
        className={classes.github}
        alt="github logo"
        width="200"
        height="200"
      />
    </Link>
  );
};

export default ProjectItem;