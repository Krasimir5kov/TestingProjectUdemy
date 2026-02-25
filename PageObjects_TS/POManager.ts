import { LoginPage } from "./LoginPage";
//const { DashBoardPage } = require("./DashBoardPage");
import { DashBoardPage } from "./DashBoardPage";

//const { CartPage } = require("./Cartpage");
import { CartPage } from "./CartPage";
//const {OrderReviewPage} = require("./OrderReviewPage");
import { OrderReviewPage } from "./OrderReviewPage";

//const { OrderViewHistory } = require("./OrderViewHistory");
import { OrderViewHistory } from "./OrderViewHistory";  
import {Page,Expect,test,Locator} from '@playwright/test'

export class POManager {
  page:Page
  OrderViewHistory: OrderViewHistory
  OrderReviewPage:OrderReviewPage
  loginPage: LoginPage
  dashboardPage:DashBoardPage
  cartPage:CartPage
  constructor(page:Page) {
    this.page = page;
    this.OrderViewHistory = new OrderViewHistory(page);
    this.OrderReviewPage = new OrderReviewPage(page);
    this.loginPage = new LoginPage(page);
    this.dashboardPage = new DashBoardPage(page);
    this.cartPage = new CartPage(page);
  }

  getLoginPage() {
    return this.loginPage;
  }

  getDashBoardPage() {
    return this.dashboardPage;
  }
  getCartPage() {
    return this.cartPage;
  }
  getOrderReviewPage() {
    return this.OrderReviewPage;
  }
  getOrderViewHistory(page: Page, orderIdTrimmed: string) {
    return this.OrderViewHistory;
  }
}

module.exports = { POManager };
