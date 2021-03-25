package com.googleTranslateProject.step_definitions;

import com.googleTranslateProject.pages.BasePage;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.jsoup.Connection;
import org.junit.Assert;

public class SwapLanguagesSteps {

    BasePage basePage = new BasePage();
    String selectedLanguageName, targetLanguageName, changedSelectedLang, changedTargetLang;

    @When("User presses swap button")
    public void user_presses_swap_button() throws InterruptedException {
        Thread.sleep(3000);

        basePage.cookieBtn.click();  //cannot click

        selectedLanguageName = basePage.selectedLanguage.getText();
        targetLanguageName = basePage.targetLanguage.getText();

        basePage.swapBtn.click();

        changedSelectedLang = basePage.selectedLanguage.getText();
        changedTargetLang = targetLanguageName = basePage.targetLanguage.getText();
    }

    @Then("Both languages should be swapped")
    public void both_languages_should_be_swapped() {
        boolean result;

        if(selectedLanguageName.equals(changedSelectedLang)
                &&targetLanguageName.equals(changedTargetLang)){
            result = true;
        }else{
            result = false;
        }
        Assert.assertTrue(result);
    }

}
