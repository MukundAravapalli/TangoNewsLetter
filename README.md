# Tango Newsletter


## About
The **Tango Newsletter** is a monthly newsletter that gives the subscriber access to curated articles about luxurious pursuits. Once the user enters their name and email, their email is added onto a **MailChimp** server and they just have to sit back and relax as articles of *tropical luxury* reach their mailbox. The newsletter itself is not real, but the MailChimp server is real and running. 

## Visit the Site
Here is a live version of the [Tango Newsletter]('https://flannel-lumberjack-60636-6fd0bc4ba174.herokuapp.com/') that was launched through the Heroku service. 


## Sign Up Page
![Sign Up Page Screenshot](/public/images/SignUpPageScreenshot.png)
This is what the home landing page of the website looks like
## Success Page
![Success Page Screenshot](/public/images/SuccessPage.png)
If everything is successful and your email has been added to the MailChimp server then this is the page that you will see
## Failure Page
![Failure Page Screenshot](/public/images/FailurePageScreen.png)
If things don't turn out well then, this is the page you will see. This usually occurs because there is an error in the code or an error with the API Key. Clicking on the **Try Again** button will lead you back to the Sign Up page.


## Examples
Let us look at some examples of successful Sign Ups. 
![Failure Page Screenshot](/public/images/CatherineSignUp.png)
![Failure Page Screenshot](/public/images/LarrySignUp.png)
![Failure Page Screenshot](/public/images/SteveSignUp.png)
![Failure Page Screenshot](/public/images/MailChimpMailingList.png)

If we look at the bottom of the MailChimp Dashboard, we see that those 3 people have been successfully signed up for the Newsletter.

***

## Origins 
I learnt how to build and launch a NodeJS Web App onto Heroku through Dr. Angela Yu's [Web Developement Bootcamp]('https://www.udemy.com/course/the-complete-web-development-bootcamp/' "Web Developement Bootcamp") on Udemy. I learnt the concepts from her and modified the Web App to my liking. 
***

## Want to Create Your Own Newsletter?
### Download and customize the uploaded code

Apart from the files that I have uploaded in the repository, you will also need to download:
1. node.js which you can download [here]('https://nodejs.org/en' "Node JS Download")
2. Once you have node.js on your system, open the command line and navigate to where you have saved the Tango Newsletter files. Then enter the following commands to install: *express.js, body parser*, and *request*
   ```
   npm init
   npm i express body-parser request
   ```

You will also need to edit some of the code in the `app.js` file. Starting around **line 43**, we see the following code block

```javascript
const jsonData = JSON.stringify(data);
    const url="https://usX.api.mailchimp.com/3.0/lists/enter your auidence ID here";
    const options={
        method:"post",
        auth:"Crabb: enter your API key here"
        
```
Where it has the big `X`, you will need to replace the `X` with the region number, this is at the end of your API Key, and it will say us-- where the -- part is the number. 

At the end of the URL link, you see the phrase `enter your auidence ID here`. You will find this ID in the Settings under the Audience Tab in your MailChimp Profile once you have set that up. 

Finally, you will need to edit the phrase `enter your API key here` in the last line by replacing the phrase with your MailChimp API Key. 

**NEVER post any code that contains your API Key, your Key will get revoked if it ends up publicly posted.**
