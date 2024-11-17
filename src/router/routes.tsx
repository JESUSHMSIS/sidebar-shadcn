import MainLayout from "@/layout/MainLayout";
import About from "@/Pages/About";
import Home from "@/Pages/Home";
import { Routes, Route } from "react-router-dom";

type Props = {};

const AppRoutes = (props: Props) => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
