var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _a = require("selenium-webdriver"), Builder = _a.Builder, By = _a.By, Capabilities = _a.Capabilities, until = _a.until;
var ChromeOptions = require("selenium-webdriver/chrome").Options;
function example() {
    return __awaiter(this, void 0, void 0, function () {
        var driver, nameInput, emailInput, passwordInput, submitButton, loginEmailInput, loginPasswordInput, loginSubmitButton, viewAllBidButton, url, id, commandNowButton, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, new Builder()
                        .forBrowser("chrome")
                        .setChromeOptions(new ChromeOptions())
                        .withCapabilities(Capabilities.chrome().set("binary", "C:\\Program Files\\BraveSoftware\\Brave-Browser\\Application\\brave.exe"))
                        .build()];
                case 1:
                    driver = _a.sent();
                    _a.label = 2;
                case 2:
                    _a.trys.push([2, 34, 35, 37]);
                    // Navigate to the registration page
                    return [4 /*yield*/, driver.get("http://localhost:4200/registerclient")];
                case 3:
                    // Navigate to the registration page
                    _a.sent();
                    // Wait for the registration form to load
                    return [4 /*yield*/, driver.wait(until.elementLocated(By.id("name")), 10000)];
                case 4:
                    // Wait for the registration form to load
                    _a.sent();
                    return [4 /*yield*/, driver.findElement(By.id("name"))];
                case 5:
                    nameInput = _a.sent();
                    return [4 /*yield*/, driver.findElement(By.id("email"))];
                case 6:
                    emailInput = _a.sent();
                    return [4 /*yield*/, driver.findElement(By.id("password"))];
                case 7:
                    passwordInput = _a.sent();
                    return [4 /*yield*/, driver.findElement(By.xpath("//button[@type='submit']"))];
                case 8:
                    submitButton = _a.sent();
                    // Fill in registration form with valid details
                    return [4 /*yield*/, nameInput.sendKeys("Test1 User")];
                case 9:
                    // Fill in registration form with valid details
                    _a.sent();
                    return [4 /*yield*/, emailInput.sendKeys("test1@example.com")];
                case 10:
                    _a.sent();
                    return [4 /*yield*/, passwordInput.sendKeys("password1")];
                case 11:
                    _a.sent();
                    // Submit the form
                    return [4 /*yield*/, submitButton.click()];
                case 12:
                    // Submit the form
                    _a.sent();
                    // Wait for registration to complete and navigate to the home page
                    return [4 /*yield*/, driver.wait(until.urlIs("http://localhost:4200/home"), 10000)];
                case 13:
                    // Wait for registration to complete and navigate to the home page
                    _a.sent();
                    // Add delay
                    return [4 /*yield*/, delay(20000)];
                case 14:
                    // Add delay
                    _a.sent(); // Longer delay
                    // Attempt to log in with correct credentials
                    return [4 /*yield*/, driver.get("http://localhost:4200/loginClient")];
                case 15:
                    // Attempt to log in with correct credentials
                    _a.sent();
                    return [4 /*yield*/, driver.findElement(By.id("email"))];
                case 16:
                    loginEmailInput = _a.sent();
                    return [4 /*yield*/, driver.findElement(By.id("password"))];
                case 17:
                    loginPasswordInput = _a.sent();
                    return [4 /*yield*/, driver.findElement(By.xpath("//button[@type='submit']"))];
                case 18:
                    loginSubmitButton = _a.sent();
                    // Fill in login form with correct email and password
                    return [4 /*yield*/, loginEmailInput.sendKeys("test1@example.com")];
                case 19:
                    // Fill in login form with correct email and password
                    _a.sent();
                    return [4 /*yield*/, loginPasswordInput.sendKeys("password1")];
                case 20:
                    _a.sent();
                    // Submit the login form
                    return [4 /*yield*/, loginSubmitButton.click()];
                case 21:
                    // Submit the login form
                    _a.sent();
                    // Wait for login to complete and check if redirection to home page occurred
                    return [4 /*yield*/, driver.wait(until.urlIs("http://localhost:4200/home"), 10000)];
                case 22:
                    // Wait for login to complete and check if redirection to home page occurred
                    _a.sent();
                    // Add delay
                    return [4 /*yield*/, delay(20000)];
                case 23:
                    // Add delay
                    _a.sent(); // Longer delay
                    return [4 /*yield*/, driver.findElement(By.xpath("//a[contains(@class, 'primary-btnxd')]"))];
                case 24:
                    viewAllBidButton = _a.sent();
                    return [4 /*yield*/, viewAllBidButton.click()];
                case 25:
                    _a.sent();
                    // Wait for the page to load
                    return [4 /*yield*/, driver.wait(until.urlContains("http://localhost:4200/commanddetails/"), 10000)];
                case 26:
                    // Wait for the page to load
                    _a.sent();
                    // Add delay
                    return [4 /*yield*/, delay(20000)];
                case 27:
                    // Add delay
                    _a.sent(); // Longer delay
                    return [4 /*yield*/, driver.getCurrentUrl()];
                case 28:
                    url = _a.sent();
                    id = url.split('/').pop();
                    // Log the id to ensure it's correct
                    console.log("ID extracted from URL:", id);
                    // Add delay
                    return [4 /*yield*/, delay(20000)];
                case 29:
                    // Add delay
                    _a.sent(); // Longer delay
                    return [4 /*yield*/, driver.findElement(By.xpath("//a[contains(@class, 'primary-btn1')]"))];
                case 30:
                    commandNowButton = _a.sent();
                    return [4 /*yield*/, driver.executeScript("arguments[0].scrollIntoView(true);", commandNowButton)];
                case 31:
                    _a.sent();
                    return [4 /*yield*/, commandNowButton.click()];
                case 32:
                    _a.sent();
                    // Wait for the redirection to the "ThankYou" page
                    return [4 /*yield*/, driver.wait(until.urlIs("http://localhost:4200/ThankYou"), 10000)];
                case 33:
                    // Wait for the redirection to the "ThankYou" page
                    _a.sent();
                    console.log("Redirected to ThankYou page after clicking Command Now button.");
                    return [3 /*break*/, 37];
                case 34:
                    error_1 = _a.sent();
                    console.error("An error occurred:", error_1);
                    return [3 /*break*/, 37];
                case 35: return [4 /*yield*/, driver.quit()];
                case 36:
                    _a.sent();
                    return [7 /*endfinally*/];
                case 37: return [2 /*return*/];
            }
        });
    });
}
// Function to add delay
function delay(ms) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, new Promise(function (resolve) { return setTimeout(resolve, ms); })];
        });
    });
}
example();
