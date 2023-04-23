import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

import classes from "./MainNavigation.module.css";

const MainNavigation = () => {
  const router = useRouter();
  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        <Link href="/">
          <Image
            src="/img/AOlogo.png"
            alt="Logo Andres Ochoa"
            width="100"
            height="100"
            priority
          />
        </Link>
      </div>
      <nav>
        <ul>
          <li>
            <Link
              href="/"
              className={router.pathname == "/" ? classes.active : ""}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className={router.pathname == "/about" ? classes.active : ""}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/projects"
              className={router.pathname == "/projects" ? classes.active : ""}
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className={router.pathname == "/contact" ? classes.active : ""}
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
