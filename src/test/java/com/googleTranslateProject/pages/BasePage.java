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
    public List <WebElement> actualSearchResults;

    @FindBy(xpath = "//div[@class='PxXj2d']")
    public List <WebElement> allLanguages;

    @FindBy(xpath = "(//i[@class='material-icons-extended VfPpkd-kBDsod'])[6]")
    public WebElement clearSearchText;

    @FindBy(xpath = "(//div[@class='ySES5'])[1]")
    public WebElement historyButton;

    @FindBy(xpath = "//div[@class='fp93dc']")
    public WebElement historyMessage;

    @FindBy(xpath = "(//span[@class='RveJvd snByac'])[3]")
    public WebElement approveMessage;

    @FindBy(xpath = "//iframe[@class='gb_da gb_fa']")
    public WebElement popUpFrame;

    @FindBy(xpath = "//span[@jsname='qKMVIf']")
    public WebElement letterCount;

    @FindBy(xpath = "//div[@jscontroller='gWGePc']")
    public WebElement displayedText;


    public void verifySearchedLetters(String searchLetters){
    //actual List of searched languages

    List<String> actualList = BrowserUtils.getElementsText(actualSearchResults);

    //verify letters are displayed on actual list of languages
    System.out.println("searchLetters = " + searchLetters);
    System.out.println("actualList = " + actualList);

    for (String each : actualList) {
        Assert.assertTrue(each.toLowerCase().contains(searchLetters));

        }
    }

    public void getListOfAllLanguages(){
        clearSearchText.click();

        List<String> allLanguageslList = BrowserUtils.getElementsText(allLanguages);

        List<String> displayedLanguages = new ArrayList<>();
        for (String eachLanguage: allLanguageslList) {
            if (!eachLanguage.isEmpty()){
                displayedLanguages.add(eachLanguage);
            }
        }
    }

}
