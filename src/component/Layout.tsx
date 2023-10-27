import { FC } from "react";
import { Outlet, useLocation, Navigate } from "react-router-dom";
import { Sidebar } from "./Sidebar";
import { ITab } from "../models/ITab";
import LayoutCss from "./Layout.module.css";

interface IProps {
  data: ITab[];
}

export const Layout: FC<IProps> = ({ data }) => {
  const { pathname } = useLocation();
  const toRedirect = !data.find((tab) => {
    return pathname.includes(tab.id);
  });

  return (
    <div className="container">
      {toRedirect && <Navigate to={data[0].id} />}
      <h2 className={LayoutCss.title}>Backendless</h2>
      <div className={LayoutCss.mainContent}>
        <Sidebar data={data} />
        <div className={LayoutCss.dummyContent}>
          <Outlet />
        </div>
      </div>
    </div>
  );
};
