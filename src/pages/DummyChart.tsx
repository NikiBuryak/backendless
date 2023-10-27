import { useRouteError, isRouteErrorResponse } from "react-router-dom";
import { ITab } from "../models/ITab";
import Dummy from "./Dummy.module.css";
import chart from "../media/chart.webp";

interface IProps {
  tab: ITab;
}

export function Component({ tab }: IProps): JSX.Element {
  return (
    <div className={Dummy.wrapper}>
      <h2 className={Dummy.title}>{tab.title}</h2>
      <img className={Dummy.chart} src={chart} alt="Chart" />
    </div>
  );
}

Component.displayName = "DummyChart";

export function ErrorBoundary() {
  let error = useRouteError();
  return isRouteErrorResponse(error) ? (
    <h1>
      {error.status} {error.statusText}
    </h1>
  ) : (
    <h1>Something gone wrong!</h1>
  );
}

ErrorBoundary.displayName = "DummyChartError";
