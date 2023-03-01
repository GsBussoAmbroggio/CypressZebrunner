export const loginPageLocators = {
   imputEmail :'form > div > input[type="text"]',
   imputPassword :'input[type="password"]',
    accountPulldown: "#account_pulldown",
    logOutBtn: '[href="javascript:Logout();"]'
}
export const homePageLocators ={

}
export const storePageLocators = {
    cyberPunkStoreElement : '[href="https://store.steampowered.com/app/1091500/Cyberpunk_2077/?snr=1_7_7_151_150_1"] > .responsive_search_name_combined > .search_name > .title',
    birthDayYear : '#ageYear',
    productPageBtn: '#view_product_page_btn > span',
    addToWishlistBtn: '#add_to_wishlist_area > .btnv6_blue_hoverfade > span',
    userWishlistBtn: '#wishlist_link',
    deleteFromWishlistBtn: ".delete",
    acceptDeleteBtn:  '.newmodal_buttons > .btn_green_steamui > span',
    noItemWishlistTitle: '#nothing_to_see_here > h2'
}
export const navBarLocators = {
    navItemStore :'.supernav_container > [data-tooltip-content=".submenu_store"]',
    searchBar : '#store_nav_search_term'

}