import "./App.css";
import { useEffect, useState, lazy } from "react";
import { ITab } from "./models/ITab";
import { axiosApi } from "./serices/api";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Layout } from "./component/Layout";

type TDataTabs = ITab[] | [];

function App() {
  const [data, setData] = useState<TDataTabs>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  useEffect(() => {
    axiosApi
      .get("")
      .then((res) => {
        setData(res.data);
        setIsLoading(false);
      })
      .catch((e) => {
        console.error(e);
        setIsLoading(false);
      });
  }, []);
  if (isLoading) {
    return (
      <div className="container">
        <div className="loadingContainer">
          <h1>Loading...</h1>
        </div>
      </div>
    );
  }

  data.sort((a, b) => a.order - b.order);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout data={data} />,
      children: data.map((tab) => {
        return {
          path: tab.id,
          key: tab.id,
          lazy: async () => {
            let mod = await import("" + tab.path);
            return {
              ...mod,
              Component: undefined,
              element: <mod.Component tab={tab} />,
            };
          },
        };
      }),
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
