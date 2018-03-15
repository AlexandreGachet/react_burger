# Burger builder in React

## Demo

![demo](https://user-images.githubusercontent.com/1861212/37476687-1a23e0c2-2876-11e8-8752-de1a87eb8773.gif)

Wanna test it? This is [right here](https://react-burger-f3cc9.firebaseapp.com/).

## Setup

### Installation

To install the required dependencies, run the command:

```
npm install
```

### Firebase

If you want to use your own database, you'll need to create a new Firebase project on [Google Firebase Console](https://console.firebase.google.com/).

* From the `Authentication` tab, activate `email/password` authentication
* From the `Database` tab, add the following setup:

```
{
  "rules": {
    "ingredients": {
      ".read": "true",
      ".write": "true"
    },
    "orders": {
      ".read": "auth != null",
      ".write": "auth != null",
      ".indexOn": ["userId"]
    }
  }
}
```

Do not forget to replace the `baseUrl` value in `axios-orders.js` with your own database base url, accessible from the `Database` tab in Firebase console.

## Features

* React basics
* Lists and conditional content
* Styling of React components
* Access http content with async requests
* Redux
* Forms and form validation
* Authentication
* Basic unit testing
* Saga middleware
