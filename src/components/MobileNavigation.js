import { useState } from "react";
import { HamburgerBar } from "./HamburgerBar";
import { SideBar } from "./SideBar";
import { BackDrop } from "./BackDrop";
import "./navigationbar/MobileNavigation.css";

export const MobileNavigation = () => {
  const [openDrawer, setOpenDrawer] = useState(true);

  return (
    <div>
      <HamburgerBar setOpenDrawer={setOpenDrawer} />
      {openDrawer ? (
        <div>
          <SideBar openDrawer={openDrawer} setOpenDrawer={setOpenDrawer} />
          <BackDrop setOpenDrawer={setOpenDrawer} />
        </div>
      ) : null}
    </div>
  );
};
