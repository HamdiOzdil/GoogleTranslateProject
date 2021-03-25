package com.googleTranslateProject.step_definitions;

import com.googleTranslateProject.pages.TextLength;
import com.googleTranslateProject.pages.TranslatePage;
import io.cucumber.java.en.*;

public class SourceTextLength {
    TextLength textLength = new TextLength();

    @Given("input text to source Translate Box")
    public void input_text_to_source_Translate_Box() throws InterruptedException {
        textLength.sendText();
        Thread.sleep(5000);
    }

    @When("calculate length of source text")
    public void calculate_length_of_source_text() throws InterruptedException {
        textLength.calculateTextLength();
    }

    @Then("verify length of source text is matching number displayed")
    public void verify_length_of_source_text_is_matching_number_displayed() throws InterruptedException {
        textLength.verifyTextLength();

    }




}
