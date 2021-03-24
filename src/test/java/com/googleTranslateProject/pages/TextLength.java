package com.googleTranslateProject.pages;

import java.util.Random;

public class TextLength extends BasePage{

    public static String[] generateRandomWords(){
        Random randomNumber = new Random();

        // Obtain a number between [0 - 49].
        int numberOfWords = randomNumber.nextInt(50);

        numberOfWords += 1;

        String[] randomStrings = new String[numberOfWords];

        Random random = new Random();
        for(int i = 0; i < numberOfWords; i++) {
            char[] word = new char[random.nextInt(8)+3];
            for(int j = 0; j < word.length; j++) {
                word[j] = (char)('a' + random.nextInt(26));
            }
            randomStrings[i] = new String(word);
        }
        return randomStrings;
    }
}
