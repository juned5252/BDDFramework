package runner;

import com.cucumber.listener.Reporter;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.AfterClass;
import org.junit.runner.RunWith;

import java.io.File;

@RunWith(Cucumber.class)
@CucumberOptions(
        features = "/Users/junedalam/Documents/FreeCrmBDDFramework/src/main/java/features/login.feature",
        glue = {"stepDefinition"},
        format = {"pretty","html:test-output","com.cucumber.listener.ExtentCucumberFormatter:/Users/junedalam/Documents/FreeCrmBDDFramework/test-output/report.html"},
        monochrome = true,
        dryRun = false,
        strict = true
)
public class TestRunner {
    @AfterClass
    public static void reportSetup()
    {
        Reporter.loadXMLConfig(new File("src/test/resources/extent-config.xml"));
	        /*Properties p = System.getProperties();
	        p.list(System.out);*/

        Reporter.setSystemInfo("User Name",System.getProperty("user.name"));
        Reporter.setSystemInfo("Time Zone", System.getProperty("user.timezone"));
        Reporter.setSystemInfo("64 Bit", 	"OSX");
        Reporter.setSystemInfo("2.53.0", "Selenium");
        Reporter.setSystemInfo("3.3.9", "Maven");
        Reporter.setSystemInfo("1.8.0_66", "Java Version");
        Reporter.setTestRunnerOutput("Cucumber JUnit Test Runner");
    }
}
