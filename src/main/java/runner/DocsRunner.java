package runner;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

import javax.swing.text.html.HTML;

@RunWith(Cucumber.class)
@CucumberOptions(
        features = "/Users/junedalam/Documents/FreeCrmBDDFramework/src/main/java/features/docs.feature",
        glue = {"stepDefinition"},
        format ={"pretty","html:test-output"} ,
        monochrome = true ,
        dryRun = false,
        strict = true
)

public class DocsRunner {
}
