package com.googleTranslateProject.step_definitions;

import com.googleTranslateProject.pages.HistoryPage;
import com.googleTranslateProject.utilities.BrowserUtils;
import com.googleTranslateProject.utilities.Driver;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.junit.Assert;

public class HistorySteps {


    @When("History Button is clicked")
    public void history_Button_is_clicked() {
        try{
            Driver.get().switchTo().frame(new HistoryPage().popUpFrame);
        BrowserUtils.waitForClickablility(new HistoryPage().approveMessage,10);
        new HistoryPage().approveMessage.click();
        } catch (Exception e) {
            BrowserUtils.waitForClickablility(new HistoryPage().historyButton, 10);
            new HistoryPage().historyButton.click();
        }
    }


    @Then("{string} message should appear")
    public void message_should_appear(String message) {
        BrowserUtils.waitForVisibility(new HistoryPage().historyMessage,10);
        Assert.assertEquals(message, new HistoryPage().historyMessage.getText());

    }




}
