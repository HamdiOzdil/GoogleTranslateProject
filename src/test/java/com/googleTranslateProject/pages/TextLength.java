package com.googleTranslateProject.pages;

import org.junit.Assert;

import java.util.Random;

public class TextLength extends BasePage{

    TranslatePage translatePage = new TranslatePage();

    public int generateNumber(){
        Random randomNumber = new Random();
        // Obtain a number between [0 - 49].
        int numberOfWords = randomNumber.nextInt(50);

        numberOfWords += 1;

        return numberOfWords;
    }

    public String getString(int n) {
        // chose a Character random from this String
        String AlphaNumericString = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
                                    + " 0123456789abcdefghijklmnopqrstuvxyz";

        // create StringBuffer size of AlphaNumericString
        StringBuilder sb = new StringBuilder(n);

        for (int i = 0; i < n; i++) {

            // generate a random number between
            // 0 to AlphaNumericString variable length
            int index
                    = (int)(AlphaNumericString.length()
                    * Math.random());

            // add Character one by one in end of sb
            sb.append(AlphaNumericString
                    .charAt(index));
        }

        return sb.toString();
        }


    String inputText = getString(generateNumber());

    public void sendText(){

        System.out.println(inputText);

        translatePage.sourceWordInputBox.sendKeys(inputText);
    }

    public int calculateTextLength() {
        int lenghtOfText = inputText.length();

        System.out.println(lenghtOfText);

        return lenghtOfText;


    }
    public void verifyTextLength() {

        int expectedLength = Integer.parseInt(letterCount.getText());

        Assert.assertEquals(expectedLength,calculateTextLength());

        System.out.println(expectedLength);
    }
}
