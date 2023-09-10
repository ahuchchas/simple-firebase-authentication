/*
---------------------
    INITIAL SETUP
---------------------
1. goto https://console.firebase.google.com/
2. create a new firebase project
3. go to docs: Build > Authentication > Web > Get started
4. register web app
5. install firebase: npm install firebase
6. dangerous step: get firebase config and put it in firebase.init.js
7. export app from firebase.init.js
-------------------------
    SET THE PROVIDER
-------------------------
8. create auth using getAuth from firebase using app from firebase.init.js
9. create a google auth provider: const provider = new GoogleAuthProvider();
10. goto firebase > Build > Authentication > sign in method
11. enable google sign in method 
12. create a button for google sign in method with a click handler
13. inside the handler, call signInWithPopUp with auth, provider
14. after signInWithPopUp .then result, error
-------------------------
    DISPLAY DATA
-------------------------
store the result user data and display 
-------------------------
    ADD A NEW SIGN IN METHOD
-------------------------
enable the sign in method
create github, fb, twitter etc. app
get client id and secret
*/
