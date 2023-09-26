import Link from "next/link";
import cl from "./Header.module.css";
import LogoIcon from "../Icons/LogoIcon";
import Findbar from "../Findbar/Findbar";
import Typography from "../Typography/Typography";

export default function Header() {
  return (
    <header className={cl.head}>
      <nav className={cl.nav_wrapper}>
        <div className={cl.brand_wrapper}>
          <Link href={"/"}>
            <LogoIcon />
          </Link>
        </div>
        <ul className={cl._ul}>
          <li>
            <Link className={cl.header_link} href={"/locations"}>
              <Typography tag={"span"} variant={"title-head"}>
                Locations
              </Typography>
            </Link>
          </li>
          <li>
            <Link className={cl.header_link} href={"/characters/?page=1"}>
              Characters
            </Link>
          </li>
          <li>
            <Link className={cl.header_link} href={"/"}>
              Home
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
