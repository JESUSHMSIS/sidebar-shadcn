import SidebarComponent from "@/components/SidebarComponent";
import { SidebarTrigger, SidebarProvider } from "@/components/ui/sidebar";
import { Outlet } from "react-router-dom";
const MainLayout = () => {
  return (
    <SidebarProvider>
      <SidebarComponent />
      <SidebarTrigger />
      <main className="m-[auto]">
        <Outlet />
      </main>
    </SidebarProvider>
  );
};

export default MainLayout;
