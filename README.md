# Email Services

Go into ModalDialog.js file and make changes for the email services to run.

# Phone Number

Comments were placed in the files where the phone numbers needs to be updated.

# Recaptcha

To test the recaptcha on the Contact Us page, start the server in terminal with the syntax:

```
npm run server
```

Also, go to the [Google Recaptcha Website](https://www.google.com/recaptcha/admin/create) to create your own site key and secret key.

Use .env to store the values as `REACT_APP_SITE_KEY` and `REACT_APP_SECRET_KEY`.

Also, change the port to your own backend port at `ContactForm.js`.