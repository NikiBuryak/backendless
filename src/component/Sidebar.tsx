import { ITab } from "../models/ITab";
import { FC } from "react";
import { Link, useLocation } from "react-router-dom";
import SidebarCss from "./Sidebar.module.css";

interface IProps {
  data: ITab[];
}

export const Sidebar: FC<IProps> = ({ data }) => {
  const { pathname } = useLocation();

  return (
    <div className={SidebarCss.sidebarNav}>
      <ul className={SidebarCss.sidebarList}>
        {data.map((tab) => {
          const isActive = pathname.includes(tab.id);

          return (
            <li key={tab.id}>
              <Link
                className={isActive ? SidebarCss.activeBtn : undefined}
                to={tab.id}
              >
                {tab.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
