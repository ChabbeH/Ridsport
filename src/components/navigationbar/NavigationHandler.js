import { useWindowDimensions } from "../useWindowDimensions";
import { MobileNavigation } from "../MobileNavigation";
import { NavigationBar } from "./NavigationBar";

export const NavigationHandler = () => {
  const { width } = useWindowDimensions();
  const determineDimension = () => {
    return width > 800 ? <NavigationBar /> : <MobileNavigation />;
  };
  return determineDimension();
};
