const { Builder, By, Capabilities, until } = require("selenium-webdriver");
const { Options: ChromeOptions } = require("selenium-webdriver/chrome");

async function example() {
  let driver = await new Builder()
    .forBrowser("chrome")
    .setChromeOptions(new ChromeOptions())
    .withCapabilities(Capabilities.chrome().set("binary", "C:\\Program Files\\BraveSoftware\\Brave-Browser\\Application\\brave.exe"))
    .build();

  try {
    // Navigate to the registration page
    await driver.get("http://localhost:4200/registerclient");

    // Wait for the registration form to load
    await driver.wait(until.elementLocated(By.id("name")), 10000);

    // Find registration form elements
    const nameInput = await driver.findElement(By.id("name"));
    const emailInput = await driver.findElement(By.id("email"));
    const passwordInput = await driver.findElement(By.id("password"));
    const submitButton = await driver.findElement(By.xpath("//button[@type='submit']"));

    // Fill in registration form with valid details
    await nameInput.sendKeys("Test1 User");
    await emailInput.sendKeys("test1@example.com");
    await passwordInput.sendKeys("password1");

    // Submit the form
    await submitButton.click();

    // Wait for registration to complete and navigate to the home page
    await driver.wait(until.urlIs("http://localhost:4200/home"), 10000);

    // Add delay
    await delay(20000); // Longer delay

    // Attempt to log in with correct credentials
    await driver.get("http://localhost:4200/loginClient");

    // Find login form elements
    const loginEmailInput = await driver.findElement(By.id("email"));
    const loginPasswordInput = await driver.findElement(By.id("password"));
    const loginSubmitButton = await driver.findElement(By.xpath("//button[@type='submit']"));

    // Fill in login form with correct email and password
    await loginEmailInput.sendKeys("test1@example.com");
    await loginPasswordInput.sendKeys("password1");

    // Submit the login form
    await loginSubmitButton.click();

    // Wait for login to complete and check if redirection to home page occurred
    await driver.wait(until.urlIs("http://localhost:4200/home"), 10000);

    // Add delay
    await delay(20000); // Longer delay

    // Click the "VIEW ALL BID" button
    const viewAllBidButton = await driver.findElement(By.xpath("//a[contains(@class, 'primary-btnxd')]"));
    await viewAllBidButton.click();

    // Wait for the page to load
    await driver.wait(until.urlContains("http://localhost:4200/commanddetails/"), 10000);

    // Add delay
    await delay(20000); // Longer delay

    // Extract the id from the URL
    const url = await driver.getCurrentUrl();
    const id = url.split('/').pop();

    // Log the id to ensure it's correct
    console.log("ID extracted from URL:", id);

    // Add delay
    await delay(20000); // Longer delay

    // Click the "Command Now" button
    const commandNowButton = await driver.findElement(By.xpath("//a[contains(@class, 'primary-btn1')]"));
    await driver.executeScript("arguments[0].scrollIntoView(true);", commandNowButton);
    await commandNowButton.click();

    // Wait for the redirection to the "ThankYou" page
    await driver.wait(until.urlIs("http://localhost:4200/ThankYou"), 10000);

    console.log("Redirected to ThankYou page after clicking Command Now button.");
  } catch (error) {
    console.error("An error occurred:", error);
  } finally {
    await driver.quit();
  }
}

// Function to add delay
async function delay(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

example();
