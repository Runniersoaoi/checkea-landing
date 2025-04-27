import { Navigate, Route, Routes } from "react-router-dom";
import { BaseLayout } from "./layout/BaseLayout";
import { DemoPage } from "./pages/DemoPage";
import { HomePage } from "./pages/HomePage";
import { ValidationPage } from "./pages/ValidationPage";
import { ValidationPageDni } from "./pages/ValidationPageDni";
import { ValidationBackDni } from "./pages/ValidationBackDni";

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
        <Route path="/validation" element={<ValidationPage />}></Route>
        <Route
          path="/validation-front-dni"
          element={<ValidationPageDni />}
        ></Route>
        <Route
          path="/validation-back-dni"
          element={<ValidationBackDni />}
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
