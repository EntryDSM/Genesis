import React, { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
const MainRouter = React.lazy(() => import("./MainRouter"));

const RootRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <MainRouter />
            </Suspense>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default RootRouter;
