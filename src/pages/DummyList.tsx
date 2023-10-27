import { useRouteError, isRouteErrorResponse } from "react-router-dom";
import { ITab } from "../models/ITab";
import Dummy from "./Dummy.module.css";

interface IProps {
  tab: ITab;
}

export function Component({ tab }: IProps): JSX.Element {
  return (
    <div className={Dummy.wrapper}>
      <h2 className={Dummy.title}>{tab.title}</h2>
      <div className={Dummy.list}>
        <ul>
          <li>10</li>
          <li>25</li>
          <li>32</li>
          <li>42</li>
          <li>56</li>
        </ul>
        <ul>
          <li>Apples</li>
          <li>Milk</li>
          <li>Bread</li>
          <li>Eggs</li>
          <li>Chicken</li>
        </ul>
        <ul>
          <li>Finish report</li>
          <li>Call Jane</li>
          <li>Buy groceries</li>
          <li>Exercise</li>
          <li>Pay bills</li>
        </ul>
      </div>
    </div>
  );
}

Component.displayName = "DummyList";

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

ErrorBoundary.displayName = "SampleErrorBoundary";
