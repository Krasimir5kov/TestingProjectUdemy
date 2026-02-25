const { LoginPage } = require("./LoginPage");
const { DashBoardPage } = require("./DashBoardPage");
const { CartPage } = require("./Cartpage");
const {OrderReviewPage} = require("./OrderReviewPage");
const { OrderViewHistory } = require("./OrderViewHistory");
class POManager {
  constructor(page) {
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
  getOrderViewHistory() {
    return this.OrderViewHistory;
  }
}

module.exports = { POManager };
