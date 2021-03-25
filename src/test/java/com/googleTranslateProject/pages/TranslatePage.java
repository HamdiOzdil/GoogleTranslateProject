package com.googleTranslateProject.pages;

import com.googleTranslateProject.utilities.BrowserUtils;
import com.googleTranslateProject.utilities.Driver;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

import java.util.ArrayList;
import java.util.List;

public class TranslatePage extends BasePage{

    @FindBy(xpath = "(//span[@class='zQ0atf'])[1]")
    public WebElement sourceLanguageDropdownButton;

    @FindBy(xpath = "(//span[@class='zQ0atf'])[2]")
    public WebElement targetLanguageDropdownButton;

    @FindBy(xpath = "(//input[@class='KskmCc'])[1]")
    public WebElement searchLanguageInputBoxForSource;

    @FindBy(xpath = "(//input[@class='KskmCc'])[2]")
    public WebElement searchLanguageInputBoxForTarget;

    @FindBy(xpath = "//textarea[@aria-label='Source text']")
    public WebElement sourceWordInputBox;

    @FindBy(xpath = "//span[@jsname='W297wb']")
    public WebElement targetWordOutputBox;

    @FindBy(xpath = "//span[@class='ita-kd-img ita-kd-arrow ita-kd-icon-span']")
    public WebElement keyboardDropdownButton;

    @FindBy(xpath = "//span[@class='ita-kd-menuitem-inputtool-name']")
    public List<WebElement> keyboardOptions;

    public List<String> getActualList(){
        List<String> actualKeyboardOptionsList = new ArrayList<>();
        for (WebElement each : keyboardOptions){
            actualKeyboardOptionsList.add(each.getText());
        }
        return actualKeyboardOptionsList;
    }

    public void clickOnKeyboardDropdownButton(){
        BrowserUtils.waitFor(2);
        keyboardDropdownButton.click();
        BrowserUtils.waitFor(2);
    }

    public void selectSourceLanguage(String sourceLanguage){
        sourceLanguageDropdownButton.click();
        BrowserUtils.waitFor(2);
        searchLanguageInputBoxForSource.sendKeys(sourceLanguage);
        searchLanguageInputBoxForSource.sendKeys(Keys.ENTER);
    }

    public void selectTargetLanguage(String targetLanguage){
        BrowserUtils.waitFor(2);
        targetLanguageDropdownButton.click();
        searchLanguageInputBoxForTarget.sendKeys(targetLanguage);
        searchLanguageInputBoxForTarget.sendKeys(Keys.ENTER);
    }

    public void enterSourceWord(String sourceWord){
        sourceWordInputBox.sendKeys(sourceWord);
    }

    public void verifyTargetWordIsCorrect(String targetWord){
        String expectedResult = targetWord;
        String actaulResult = targetWordOutputBox.getText();
        Assert.assertEquals(expectedResult,actaulResult);
    }

    public void clickOnSourceLanguageDropdownButton(){
        sourceLanguageDropdownButton.click();
    }

    public List<String> createActualLanguagesList(){
        List<String> actualLangugeList = new ArrayList<>();
        String baseLocator = "(//div[@class='ordo2'])";
        for (int i=1 ; i<11 ; i++){
            WebElement language = Driver.get().findElement(By.xpath(baseLocator + "[" + i + "]"));
            actualLangugeList.add(language.getText());
        }
        return actualLangugeList;
    }

    public void verifyLanguages(List<String> expectedLanguagesList, List<String> actualLanguagesList){
        System.out.println("expectedLanguagesList.toString() = " + expectedLanguagesList.toString());
        System.out.println("actualLanguagesList.toString() = " + actualLanguagesList.toString());
        Assert.assertEquals(expectedLanguagesList,actualLanguagesList);
    }

}
