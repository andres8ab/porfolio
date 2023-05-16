import Link from 'next/link';
import Image from 'next/image';
import Card from '../ui/card/Card';
import classes from './ProjectItem.module.css';

const ProjectItem = () => {
  return (
    <div className="d-flex gap-4">
      <div>
        <Card className={classes.card}>
          <Link href="https://todoelectricovictor.netlify.app/" target="_blank">
            <Image
              src="/img/victor.png"
              alt="Todo Electrico Victor Web"
              width="1000"
              height="1000"
            />
            <div className={classes.logos}>
              <Image
                src="/img/html.svg"
                alt="html logo"
                width="20"
                height="20"
              />
              <Image src="/img/css.svg" alt="css logo" width="20" height="20" />
              <Image
                src="/img/javascript.svg"
                alt="javascript logo"
                width="20"
                height="20"
              />
            </div>
          </Link>
        </Card>
        <Link href="https://github.com/andres8ab" target="_blank">
          <Image
            src="/img/github.png"
            className={classes.github}
            alt="github logo"
            width="200"
            height="200"
          />
        </Link>
      </div>
      <Card className={classes.card}>
        <Image src="/img/obapp.jpeg" alt="OB web" width="1000" height="1000" />
        <div className={classes.logos}>
          <Image src="/img/react.svg" alt="react logo" width="20" height="20" />
          <Image
            src="/img/nextjs.svg"
            alt="nextjs logo"
            width="20"
            height="20"
          />
          <Image
            src="/img/Tailwind.svg"
            alt="Tailwind logo"
            width="20"
            height="20"
          />
        </div>
      </Card>
    </div>
  );
};

export default ProjectItem;
