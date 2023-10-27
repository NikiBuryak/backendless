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
      <table className={Dummy.table}>
        <tbody>
          <tr>
            <td>Row 1, Cell 1</td>
            <td>Row 1, Cell 2</td>
            <td>Row 1, Cell 3</td>
            <td>Row 1, Cell 4</td>
          </tr>
          <tr>
            <td>Row 2, Cell 1</td>
            <td>Row 2, Cell 2</td>
            <td>Row 2, Cell 3</td>
            <td>Row 2, Cell 4</td>
          </tr>
          <tr>
            <td>Row 3, Cell 1</td>
            <td>Row 3, Cell 2</td>
            <td>Row 3, Cell 3</td>
            <td>Row 3, Cell 4</td>
          </tr>
          <tr>
            <td>Row 4, Cell 1</td>
            <td>Row 4, Cell 2</td>
            <td>Row 4, Cell 3</td>
            <td>Row 4, Cell 4</td>
          </tr>
          <tr>
            <td>Row 5, Cell 1</td>
            <td>Row 5, Cell 2</td>
            <td>Row 5, Cell 3</td>
            <td>Row 5, Cell 4</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

Component.displayName = "DummyTable";

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
