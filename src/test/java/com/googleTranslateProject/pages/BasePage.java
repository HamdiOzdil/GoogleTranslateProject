package com.googleTranslateProject.pages;

import com.googleTranslateProject.utilities.BrowserUtils;
import com.googleTranslateProject.utilities.Driver;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import java.util.ArrayList;
import java.util.List;

public class BasePage {

    public BasePage() {
        PageFactory.initElements(Driver.get(), this);
    }

    @FindBy(xpath = "(//span[@class='zQ0atf'])[1]")
    public WebElement moreButton;

    @FindBy(xpath = "(//input[@aria-label='Search languages'])[1]")
    public WebElement searchArea;

    @FindBy(xpath = "//span[@class='QAJDKf' and @jsname='KTN78e']/..")
    public WebElement actualSearchResults;

    @FindBy(xpath = "//div[@class='PxXj2d']")
    public WebElement allLanguages;

    @FindBy(xpath = "(//i[@class='material-icons-extended VfPpkd-kBDsod'])[6]")
    public WebElement clearSearchText;


    public void verifySearchedLetters(String searchLetters){
    //actual List of searched languages
    String actualSearchResults = "//span[@class='QAJDKf' and @jsname='KTN78e']/..";

    List<String> actualList = BrowserUtils.getElementsText(By.xpath(actualSearchResults));

    //verify letters are displayed on actual list of languages
    System.out.println("searchLetters = " + searchLetters);
    System.out.println("actualList = " + actualList);

    for (String each : actualList) {
        Assert.assertTrue(each.toLowerCase().contains(searchLetters));

        }
    }

    public void getListOfAllLanguages(){
        clearSearchText.click();
        BrowserUtils.scrollToElement(allLanguages);

        String allLanguages = "//div[@class='PxXj2d']";
        List<String> allLanguageslList = BrowserUtils.getElementsText(By.xpath(allLanguages));

        List<String> displayedLanguages = new ArrayList<>();
        for (String eachLanguage: allLanguageslList) {
            if (!eachLanguage.isEmpty()){
                displayedLanguages.add(eachLanguage);
            }
        }
    }

}
