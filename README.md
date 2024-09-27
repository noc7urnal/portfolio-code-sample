# Todos


# Fixed todos:
1. Figure out how to see state variable names in React DevTools. SOLUTION: click magic wand near state names in dev tools

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Note
If you see an error grabbing resources when running `npm install` or `yarn` see below to set up jfrog artifactory

# Design-System Tokens

## Initital setup
## Jfrog

### Login to Jrog using the following link
https://discovery.jfrog.io/ui/login/

click `use 'SAML SSO'`


#### Troubleshooting jFrog Login
- if you see this message when attempting to login
<img width="570" alt="access-denied-no-role" src="https://user-images.githubusercontent.com/12303665/233374968-f36e697e-69da-49ed-b3b3-20eb7923074d.png">
- you will need to create a help desk ticket, so an admin can assign you a role to jFrog from SSO/Okta

### Generate JFrog Artifactory token

- On the upper-right corner click in `Welcome->Edit Profile` menu. 
- Under Authentication Settings click on the button Generate An Identity Token
- Add `_npmrc` on the description textbox, and click in Next
### Note
- Remember/copy this Token or store it somewhere safe


## Create file
- Create an invisible file on the root of your mac user account called `.npmrc`

- Add this to the file
```
@wbd:registry=https://discovery.jfrog.io/artifactory/api/npm/npm/
@discovery:registry=https://discovery.jfrog.io/artifactory/api/npm/npm/
@discovery-dni:registry=https://discovery.jfrog.io/artifactory/api/npm/npm/
@3rdparty:registry=https://discovery.jfrog.io/artifactory/api/npm/npm/
@hbo:registry=https://discovery.jfrog.io/artifactory/api/npm/npm/
//discovery.jfrog.io/artifactory/api/npm/npm/:_authToken=*****************************
//discovery.jfrog.io/artifactory/api/npm/npm/:username=*****************************
//discovery.jfrog.io/artifactory/api/npm/npm/:email=ENTER_YOUR_EMAIL_HERE
//discovery.jfrog.io/artifactory/api/npm/npm/:always-auth=true
```
Replacing the auth token ***'s with the identity token gathered from jfrog
and replacing the username ***'s with the username shown in the jfrog dialog box where the token is gathered from.

Save the file in the root directory and restart your CLI.

## Pulling design tokens
Run `npm v @wbd/design-systems` to verify that you can see the design-systems package

You should be able to run `yarn` now from the project root and pull the design-systems resources into node_modules

## Upgrading to the latest package
`yarn upgrade @wbd/design-systems --latest`

## Generating SCSS variables with style-dictionary

You should being to run `node generate-design-tokens.js` fron the project root directory now, which should convert the design-token.json files in the `@wbd/design-systems` package into corresponding _token.scss files under the `src/style` directory.

- This is done through a libray called style-dictionary, more information can be found on it here.
https://amzn.github.io/style-dictionary/#/

Style dictionary uses a config.json file to describe the output of the generated files.
In the config it references some custom filters, formats and transforms that were set up in the generate-design-tokens.js to better format and arrange our tokens into more organized files.


