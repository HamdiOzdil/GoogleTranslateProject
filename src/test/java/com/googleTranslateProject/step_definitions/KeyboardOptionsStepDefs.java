package com.googleTranslateProject.step_definitions;

import com.googleTranslateProject.pages.TranslatePage;
import com.googleTranslateProject.utilities.BrowserUtils;
import com.googleTranslateProject.utilities.Driver;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.junit.Assert;

import java.util.List;

public class KeyboardOptionsStepDefs {

    TranslatePage translatePage = new TranslatePage();

    @When("user click on Select Input Tool dropdown button")
    public void user_click_on_Select_Input_Tool_dropdown_button() {
        translatePage.clickOnKeyboardDropdownButton();
    }

    @Then("User should see below options")
    public void user_should_see_below_options(List<String> expectedKeyboardOptionsList) {
        List<String> actualKeyboardOptionsList = translatePage.getActualList();
        Assert.assertEquals(expectedKeyboardOptionsList,actualKeyboardOptionsList);
    }

}
