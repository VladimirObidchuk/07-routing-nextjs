"use client";

import React from "react";
import css from "./TagsMenu.module.css";
import { TAGS } from "@/constants/tags";
import Link from "next/link";

const TagsMenu = () => {
  return (
    <div className={css.menuContainer}>
      <button className={css.menuButton}>Notes ▾</button>
      <ul className={css.menuList}>
        {TAGS.map((tag) => (
          <li className={css.menuItem} key={tag}>
            <Link href={`/notes/filter/${tag}`} className={css.menuLink}>
              {tag}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TagsMenu;
