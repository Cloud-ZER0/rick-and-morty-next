import { fetchInfo } from "../Utils/FetchHelpers";
import cl from "./Footer.module.css";
import styles from './Footer.module.css'
import Link from "next/link";


export default async function Footer() {

  const info = await fetchInfo();


  return (
    <footer className={cl._footer}>
      <section className={cl.main}>
        <div className={styles.info_div}>
          <span>{'Characters: ' + info.characters}</span>
          <span>{'Locations: '+ info.locations}</span>
          <span>{'Episodes: ' + info.episodes}</span>
        </div>
        <div className={cl.links_div}>
          <Link href={'https://github.com/Cloud-ZER0'}>GitHub</Link>
        </div>
      </section>
    </footer>
  );
}
