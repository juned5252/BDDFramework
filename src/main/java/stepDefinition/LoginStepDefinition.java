package stepDefinition;

import cucumber.api.DataTable;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.openqa.selenium.*;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.testng.Assert;
import org.testng.annotations.BeforeMethod;

import java.util.List;
import java.util.concurrent.TimeUnit;

public class LoginStepDefinition {

    public  static WebDriver driver;

     @Given("^user is already on login page$")
    public void user_already_on_login_page(){
        System.setProperty("webdriver.chrome.driver","/Users/junedalam/Documents/FreeCrmBDDFramework/webDrivers/chromedriver");
        driver = new ChromeDriver();
        driver.get("https://www.freecrm.com");
    }

    @When("^title of login page is Free CRM$")
    public void title_of_login_page_is_free_crm(){
        String title = driver.getTitle();
        Assert.assertEquals(title,"#1 Free CRM software in the cloud for sales and service");
    }

    @Then("^user enters \"(.*)\" and \"(.*)\"$")
    public void user_enters_username_and_pasword(String username, String password){
        // Write code here that turns the phrase above into concrete actions
       driver.findElement(By.name("username")).sendKeys(username);
       driver.findElement(By.name("password")).sendKeys(password);
    }

    @Then("^user clicks on login button$")
	 public void user_clicks_on_login_button() {
	 WebElement loginBtn = driver.findElement(By.xpath("//input[@value = 'Login']"));
	 JavascriptExecutor js = (JavascriptExecutor)driver;
	 js.executeScript("arguments[0].click();", loginBtn);
	 }

    @Then("^user is on home page$")
    public void user_is_on_home_page(){
        // Write code here that turns the phrase above into concrete actions
        driver.manage().timeouts().pageLoadTimeout(5, TimeUnit.SECONDS);
        String title = driver.getTitle();
        Assert.assertEquals(title,"CRMPRO");
    }

    @Then("^user moves to new contact page$")
    public void user_moves_to_new_contact_page() throws Throwable {
       driver.switchTo().frame("mainpanel");
       Actions actions = new Actions(driver);
       actions.moveToElement(driver.findElement(By.xpath("//a[contains(text(),'Contacts')]"))).build().perform();
       driver.findElement(By.xpath("//a[contains(text(),'New Contact')]")).click();
    }

    @Then("^user enters contacts \"([^\"]*)\" and \"([^\"]*)\" and \"([^\"]*)\"$")
    public void user_enters_contact_details(String first, String last, String position){
        driver.findElement(By.id("first_name")).sendKeys(first);
        driver.findElement(By.id("surname")).sendKeys(last);
        driver.findElement(By.id("company_position")).sendKeys(position);
        driver.findElement(By.xpath("//input[@type = 'submit' and @value = 'Save']")).click();
    }

    @Then("^user goes to the form page$")
    public void user_goes_to_the_form_page() throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        driver.switchTo().frame("mainpanel");
        Actions actions = new Actions(driver);
        actions.moveToElement(driver.findElement(By.xpath("//a[contains(text(),'Forms')]"))).build().perform();
        driver.findElement(By.xpath("//a[contains(text(),'New Form')]")).click();
    }


    @Then("^user enters title and page and email and desc and message1 and message2$")
    public void user_enters_doc_details(DataTable details){
        List<List<String>> data = details.raw();
        driver.findElement(By.id("title")).sendKeys(data.get(0).get(0));
        driver.findElement(By.id("pages")).clear();
        driver.findElement(By.id("pages")).sendKeys(data.get(0).get(1));
        driver.findElement(By.id("report_email")).sendKeys(data.get(0).get(2));
        driver.findElement(By.name("description")).sendKeys(data.get(0).get(3));
        driver.findElement(By.name("welcome_message")).sendKeys(data.get(0).get(4));
        driver.findElement(By.name("confirmation_message")).sendKeys(data.get(0).get(5));
    }

    @Then("^user goes and clicks save$")
    public void user_goes_and_clicks_save() throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        driver.findElement(By.xpath("//input[@value = 'Save']")).click();
    }

    @Then("^broswer gets closed$")
    public void broswer_gets_closed() throws Throwable {
        driver.quit();
    }
}
