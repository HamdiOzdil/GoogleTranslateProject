package com.googleTranslateProject.step_definitions;

import com.googleTranslateProject.pages.TextLength;
import com.googleTranslateProject.pages.TranslatePage;
import io.cucumber.java.en.*;

public class SourceTextLength {
    TextLength textLength = new TextLength();
    TranslatePage translatePage = new TranslatePage();

    @Given("input text to source Translate Box")
    public void input_text_to_source_Translate_Box() throws InterruptedException {
        translatePage.sourceWordInputBox.sendKeys(textLength.generateRandomWords());
        Thread.sleep(5000);
    }

    @When("calculate length of source text")
    public void calculate_length_of_source_text() throws InterruptedException {
        String inputText = translatePage.sourceWordInputBox.getText();
        System.out.println(translatePage.sourceWordInputBox.isDisplayed());
        int lenghtOfText = inputText.length();
        System.out.println("inputText = " + inputText);
        System.out.println("lenghtoOfText = " + lenghtOfText);
        Thread.sleep(3000);
    }

    @Then("verify length of source text is matching number displayed")
    public void verify_length_of_source_text_is_matching_number_displayed() {
        System.out.println("length = " + textLength.letterCount.getText());

    }




}
