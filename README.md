# Password-Generator

## Introduction

This was my third homework assignment. We had to modify an existing js. file that would respond to event listeners such as clicks, window methods such as alert and confirm, and concatenate strings that would generate a random password based on user choice. In order to complete the acceptance criteria, we must accomplish the following:

```
GIVEN I need a new, secure password
WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria
WHEN prompted for password criteria
THEN I select which criteria to include in the password
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters
WHEN asked for character types to include in the password
THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page
```

## Variables

Prior to beginning this assignment, one must observe what queires are being selected in the js. #Generate focused on the generate button (element) from the html. We added an event listener (method) to apply a function (writePassword) to begin when "clicked" (event). Next, we would identify what variables would exist inside of the wrtiePassword function. We identified password which required a generatePassword function and passwordText which selected the password text area. To apply the input of the password into the passwordText, we must define passwordText.value = password.

## generatePassword()
 
The next step is to identify the logic for the password. We know that when we click the button, the writePassword function begins its process. The next function that follows is generatePassword. Here the user is asked how many characters they would like (window.alert). To set these parameters, we knew that it couldn't be less than 8 and no greater than 128. We implement an if arguement to specify the actions the js must take when an answered is passed.

## Object

Once the user has answer the first alert, the user is then asked to choose what KIND (key value pairs) of characters they wish to use in the password. We use window.confirm to answer "Ok" which would be yes or true and "Cancel" which would be no or false. The if arugements that follow will concatenate the key value pairs if true. Once the passwordText has been concatenate, we must use randomization to choose the characters from the length of passwordText.

## Password

After each character is randomly selected, it becomes the new valvue of password. Password is then passed into the passwordText.value.

## Misc
  
Comments were added for clarity. I also added some spacing for legibility purposes.  

## Lessons Learned

I learned about the importance of understanding variables and queries. Every week, these assignments get more challenging. I was also taught a new method of determining how my code is functioning by using Debugging from the Sources in the DevTool. This allowed me to take my code step by step to understand what is being communicated in realtime.

## URL

https://wstaylor27.github.io/Password-Generator/

![image](https://user-images.githubusercontent.com/54382901/130334737-ca87d76d-6c2e-427e-b780-1570ec2092e5.png)
