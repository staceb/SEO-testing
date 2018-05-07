"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var protractor_1 = require("protractor");
var BlogistPage = (function () {
    function BlogistPage() {
    }
    BlogistPage.prototype.navigateTo = function () {
        return protractor_1.browser.get('/');
    };
    BlogistPage.prototype.getParagraphText = function () {
        return protractor_1.element(protractor_1.by.css('app-root h1')).getText();
    };
    return BlogistPage;
}());
exports.BlogistPage = BlogistPage;
//# sourceMappingURL=app.po.js.map