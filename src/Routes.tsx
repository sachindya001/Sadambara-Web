import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import MainLayout from "./components/MainLayout";
import PageLoader from "./components/PageLoader";
import HomePage from "./views/HomePage";
import RanwalaProfile from "./views/RanwalaProfile";
import AboutSadambara from "./views/AboutSadambara";
import GlobalMap from "./views/GlobalMap";

function withLayout(Layout: React.ComponentType<any>, Component: React.ComponentType<any>) {
  return (
    <Layout>
      <Suspense fallback={<PageLoader />}>
        <Component />
      </Suspense>
    </Layout>
  );
}

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={withLayout(MainLayout, HomePage)}
      />
      <Route
        path="/foundation"
        element={withLayout(MainLayout, RanwalaProfile)}
      />
      <Route
        path="/about"
        element={withLayout(MainLayout, AboutSadambara)}
      />
      <Route
        path="/global-map"
        element={withLayout(MainLayout, GlobalMap)}
      />
    </Routes>
  );
};

export default AppRoutes;