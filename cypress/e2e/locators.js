export const loginPageLocators = {
   imputEmail :'form > div > input[type="text"]',
   imputPassword :'input[type="password"]',
    accountPulldown: "#account_pulldown",
    logOutBtn: '[href="javascript:Logout();"]'
}
export const homePageLocators ={
    loginBtn : 'a.global_action_link',
}
export const storePageLocators = {
    firstStoreElementTitle : "#search_resultsRows > a:nth-child(1) > div:nth-child(2) > .search_name > span",
    birthDayYear : '#ageYear',
    productPageBtn: '#view_product_page_btn > span',
    addToWishlistBtn: '#add_to_wishlist_area > .btnv6_blue_hoverfade > span',
    userWishlistBtn: '#wishlist_link',
    deleteFromWishlistBtn: ".delete",
    acceptDeleteBtn:  '.newmodal_buttons > .btn_green_steamui > span',
    noItemWishlistTitle: '#nothing_to_see_here > h2',
    topSellerBtn :".top_sellers",
    orderDropdown :"#sort_by_trigger",
    ascOrder :"#Price_ASC",
    descOrder : "#Price_DESC",
    firstStoreElementPrice: "#search_resultsRows > a:nth-child(1) > div:nth-child(2) > div:nth-child(4) > div:nth-child(2)"
}
export const navBarLocators = {
    navItemStore :'.supernav_container > [data-tooltip-content=".submenu_store"]',
    chat: '[href="https://steamcommunity.com/chat/"]',
    searchBar : '#store_nav_search_term'

}