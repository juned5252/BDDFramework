package stepDefinition;

import cucumber.api.DataTable;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.interactions.Actions;
import org.testng.Assert;

import java.util.List;
import java.util.Map;
import java.util.concurrent.TimeUnit;

public class DocWithMapDefinition {

    WebDriver driver = LoginStepDefinition.driver;
    @Then("^user enters title and page and email and desc and messageone and messagetwo mapex$")
    public void user_enters_title_and_page_and_email_and_desc_and_message_and_message_map(DataTable details) throws Throwable {
        for (Map<String,String> data:details.asMaps(String.class,String.class)) {
            driver.findElement(By.id("title")).sendKeys(data.get("title"));
            driver.findElement(By.id("pages")).clear();
            driver.findElement(By.id("pages")).sendKeys(data.get("page"));
            driver.findElement(By.id("report_email")).sendKeys(data.get("email"));
            driver.findElement(By.name("description")).sendKeys(data.get("desc"));
            driver.findElement(By.name("welcome_message")).sendKeys(data.get("mess1"));
            driver.findElement(By.name("confirmation_message")).sendKeys(data.get("mess2"));
            driver.findElement(By.xpath("//input[@value = 'Save']")).click();
        }
    }

}
