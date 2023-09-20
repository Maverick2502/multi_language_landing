import classnames from "classnames";
import Image from "next/image";
import logo_cyrillic from "@public/icons/logo_cyrillic.png";
import logo_en from "@public/icons/logo_en.png";
import classes from "./header.module.scss";
import { useHeaderVisibility, useLogoImage } from "@hooks";
import { Switcher } from "./Switcher";

function Header() {
  const visible = useHeaderVisibility();
  const logo_image = useLogoImage({ logo_cyrillic, logo_en });

  const is_header_visible = visible ? "visible" : "hidden";

  return (
    <header className={classnames(classes["header"], classes[is_header_visible])} role="banner">
      <nav className={classes["nav"]}>
        <Image
          priority
          className={classes["nav_logo"]}
          width={138}
          height={45}
          draggable="false"
          src={logo_image}
          alt="Logotype of Humo"
        />
        <Switcher />
      </nav>
    </header>
  );
}

export default Header;
