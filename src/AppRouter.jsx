import { Navigate, Route, Routes } from "react-router-dom";
import { BaseLayout } from "./layout/BaseLayout";
import { DemoPage } from "./pages/DemoPage";
import { HomePage } from "./pages/HomePage";

function AppRouter() {
  return (
    <>
      <Routes>
        <Route
          path="/demo-servicio"
          element={
            <BaseLayout>
              <DemoPage />
            </BaseLayout>
          }
        ></Route>
        <Route
          path="/home"
          element={
            <BaseLayout>
              <HomePage />
            </BaseLayout>
          }
        ></Route>
        <Route path="/*" element={<Navigate to="/home" />} />
      </Routes>
    </>
  );
}

export default AppRouter;
