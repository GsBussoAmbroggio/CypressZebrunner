import BasePage from "../BasePage";
import constants from "../Constants";

class NavBarComponent extends BasePage{
    navItemStore = '.supernav_container > [data-tooltip-content=".submenu_store"]'
    constructor() {
        super();
    }

}
export default NavBarComponent;