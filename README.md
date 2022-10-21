# AppShop
Make sure that you have at least Node.js: 16.15.1
To start the app run > 'ng serve --open'.


##  Json server
To start Json server run >  npm install -g json-server

to run the server -> json-server --watch db.json

## Backend
Used Firebase to manage the DB

<!-- SetUp FireBase: -->
                login to Firebase -> cmd: firebase login
                cmd: ng add @angular/fire

environments.ts:
                add the variable object "firebase". This object is on settings of console.firebase
                      firebase: {
                        projectId: xxxx,
                        appId: xxxx,
                        databaseURL: xxxx,
                        storageBucket: xxxx,
                        apiKey: xxxx,
                        authDomain: xxxx,
                        messagingSenderId: xxxx,
                        measurementId: xxxx,

app.module.ts:
                add all the import of Firebase like AngularFireModule, AngularFireModule.initializeApp(environment.firebase)
