import DesktopNavBar from "./desktop";
import { MobileNavBar } from "./mobile";

interface NavBarProps {
    show: boolean,
    onChangeVisibility?: (open: boolean) => void
}

export function NavBar({ show, onChangeVisibility }: NavBarProps) {
  return (
    <>
      <div className="hidden md:block">
        <DesktopNavBar />
      </div>
      <div className="block sm:hidden">
        <MobileNavBar show={show} />
      </div>
    </>
  );
}