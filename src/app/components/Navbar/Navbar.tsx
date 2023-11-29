"use client";

import Link from "next/link";
import "./Navbar.scss";
import classNames from "classnames";
import { usePathname } from "next/navigation";

const navList = {
  hierarchy: "Иерархия",
  positions: "Должности",
  stafflist: "Список персонала",
  equipment: "Наборы экипировки",
};

export default function Navbar() {
  const activeTab = usePathname().slice(1);

  return (
    <nav className="nav">
      <ul className="nav__list">
        {Object.entries(navList).map(([name, value]) => (
          <div
            className={classNames("nav__item", {
              "nav__item--active": activeTab === name,
            })}
            key={name}
          >
            <Link
              href={`/${name}`}
              className="nav__link"
            >
              {value}
            </Link>
          </div>
        ))}
      </ul>
    </nav>
  );
}
