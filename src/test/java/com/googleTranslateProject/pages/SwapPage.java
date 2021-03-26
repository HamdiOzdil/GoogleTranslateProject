package com.googleTranslateProject.pages;

import com.googleTranslateProject.utilities.BrowserUtils;
import org.junit.Assert;

public class SwapPage extends BasePage{

    TranslatePage translatePage = new TranslatePage();

    String selectedLanguageName, targetLanguageName, changedSelectedLang, changedTargetLang;

    public void pressSwapButton(){
        selectedLanguageName = selectedLanguage.getText();
        targetLanguageName = targetLanguage.getText();

        BrowserUtils.waitForClickablility(swapBtn,5);
        swapBtn.click();
        BrowserUtils.waitFor(3);
        changedSelectedLang = targetLanguage.getText();
        changedTargetLang = selectedLanguage.getText();
    }

    public void verifyLanguagesAreSwapped(){
        boolean result;

        if(selectedLanguageName.equals(changedSelectedLang)
                &&targetLanguageName.equals(changedTargetLang)){
            result = true;
        }else{
            result = false;
        }
        Assert.assertTrue(result);
    }
    public void verifyMeaningSwapped(String sourceWord, String targetWord){
        //source text before swapping
        BrowserUtils.waitForVisibility(translatePage.targetWordOutputBox,6);
        BrowserUtils.waitForVisibility(translatePage.sourceWordInputBox,6);
        String sourceTextSwapped = translatePage.targetWordOutputBox.getText();
        System.out.println("sourceTextSwapped = " + sourceTextSwapped);
        System.out.println("sourceWord = " + sourceWord);

        //target text before swapping
        String targetTextSwapped = translatePage.sourceWordInputBox.getAttribute("value");
        System.out.println("targetTextSwapped = " + targetTextSwapped);
        System.out.println("targetWord = " + targetWord);

        //assert after swapping
        Assert.assertEquals(sourceWord,sourceTextSwapped);
        Assert.assertEquals(targetWord,targetTextSwapped);
    }
}
