"use client";
import React, { useState } from "react";

import styles from "./Header.module.scss";
import IconLogo from "@/components/icons/Icon-Logo/IconLogo";
import IconClose from "@/components/icons/Icon-Close/IconClose";
import IconHamburguer from "@/components/icons/Icon-Hamburger/IconHamburguer";
import classNames from "classnames";

const MobileHeader = () => {
  const [displaySidebar, setDisplaySidebar] = useState(false);
  const toggleSidebar = () => setDisplaySidebar((prevState) => !prevState);
  const sidebarMenu = (
    <div
      className={classNames(styles.sidebar, {
        [styles.show]: displaySidebar,
      })}
    >
      <div className={styles.sidebar_overlay} onClick={toggleSidebar}></div>
      <div className={styles.sidebar_menu}>
        <button className={styles.close_button} onClick={toggleSidebar}>
          <IconClose />
        </button>
        <ul className={styles.mobile_menu}>
          <li className={styles.mobile_menu_item}>
            <span className={styles.item_number}>00</span>home
          </li>
          <li className={styles.mobile_menu_item}>
            <span className={styles.item_number}>01</span>destination
          </li>
          <li className={styles.mobile_menu_item}>
            <span className={styles.item_number}>02</span>crew
          </li>
          <li className={styles.mobile_menu_item}>
            <span className={styles.item_number}>03</span>technology
          </li>
        </ul>
      </div>
    </div>
  );
  return (
    <header className={styles.header}>
      <div className={styles.navbar_menu}>
        <IconLogo className={styles.menu_logo} />
        <button className={styles.hamburger_button} onClick={toggleSidebar}>
          <IconHamburguer />
        </button>
      </div>
      {sidebarMenu}
      <div className={styles.header_content}>
        <div className={styles.page_description}>
          <h2>SO, YOU WANT TO TRAVEL TO</h2>
          <h1>SPACE</h1>
          <p>
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>
        <button className={styles.header_cta}>EXPLORE</button>
      </div>
    </header>
  );
};

export default MobileHeader;
