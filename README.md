# Expense-Tracker
Expense-Tracker (老爸的私房錢) ver1.1

A expense tracker for daddys to record their private or secret expenses.

## Updates
9/19 Fixed edit bug

9/19 Users can now filter month and category

9/19 Users can now record merchant when they create or edit expenses

## Features
1. You can create your own account
2. You can create, edit and delete your expenses
3. Use filter button to see your different kind of expenses

## Preview
![Login](https://github.com/EasonLin0716/expense-tracker/blob/master/previews/expense-tracker-1.1-login.JPG)
![Cover](https://github.com/EasonLin0716/expense-tracker/blob/master/previews/expense-tracker-1.1-cover.JPG)
![SMCover](https://github.com/EasonLin0716/expense-tracker/blob/master/previews/expense-tracker-1.1-sm-cover.jpg)

## Environment set up
1. Node.js
2. MongoDB

## Install me now!
1. Open your terminal and enter: 

```
   https://github.com/EasonLin0716/expense-tracker.git
```

2. Register your own secret key at Facebook and Google:
   
   https://developers.facebook.com/ 
   
   https://developers.google.com/

3. create a file named `.env` at `\expense-tracker` , get your secret keys and paste the following code: 

```
   FACEBOOK_ID = <Your FB ID>
   FACEBOOK_SECRET = <Your FB SECRET>

   GOOGLE_ID = <Your GOOGLE ID>
   GOOGLE_SECRET = <Your GOOGLE SECRET>
```

4. Back to the terminal, and enter:

```
   npm install
```

5. cd to `.\expense-tracker\models\seeds` folder, and run the seeder js file by the code, wait until the message "all set, ready to go" shows.

```
   node seeder.js
```

or

run this code directly at root

```
   npm run seeder
```

6. Congratulations! Now two naive users are available, those are their information:

```
   AsiaGodTone:
   email: asiagodtone@example.com
   password: 12345678
   BigDaddy:
   email: bigdaddy@example.com
   password: 12345678
```

7. cd back to the root, enter `npm run dev` and see it on http://localhost:3000/ 

## Dependencies
    "bcryptjs": "^2.4.3",
    "body-parser": "^1.19.0",
    "connect-flash": "^0.1.1",
    "dotenv": "^8.1.0",
    "express": "^4.17.1",
    "express-handlebars": "^3.1.0",
    "express-session": "^1.16.2",
    "method-override": "^3.0.0",
    "mongoose": "^5.7.1",
    "passport": "^0.4.0",
    "passport-facebook": "^3.0.0",
    "passport-google-oauth20": "^2.0.0",
    "passport-local": "^1.0.0"

Bootstrap style：https://bootswatch.com/materia/
