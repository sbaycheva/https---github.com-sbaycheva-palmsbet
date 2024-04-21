import styles from "@/app/header.module.css"
import navigation from "@/components/data/navigation.json"
import { locales } from "../../config"
import Link from "next/link";

export default function Header() {
  console.log({locales});

  return (
      <div>
          <div className={styles.toolBar}>
              <Link className={styles.imageLogo} href="/"></Link>
          </div>
          <nav className={styles.navBar}>
              {Object.values(navigation).map((element, index) => (
                  <a key={index} href={element.link} className={styles.link}>
                      {element.text}
                  </a>
              ))}
          </nav>
      </div>
  );
}

