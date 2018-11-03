package runner;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(
        features = "/Users/junedalam/Documents/FreeCrmBDDFramework/src/main/java/features/login.feature",
        glue = {"stepDefinition"},
        format = {"pretty","html:test-output"},
        monochrome = true,
        dryRun = false,
        strict = true
)
public class TestRunner {

}
