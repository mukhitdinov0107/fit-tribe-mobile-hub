
import BottomNavigation from "./BottomNavigation";
import { Toaster } from "@/components/ui/toaster";

interface LayoutProps {
  children: React.ReactNode;
  hideNav?: boolean;
}

const Layout = ({ children, hideNav = false }: LayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen bg-[#35179d]">
      <main className="flex-grow max-w-md mx-auto w-full px-4 py-4 pb-20">
        {children}
      </main>
      
      {!hideNav && <BottomNavigation />}
      <Toaster />
    </div>
  );
};

export default Layout;
