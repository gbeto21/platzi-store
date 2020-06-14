// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  url_api:'https://platzi-store.herokuapp.com/products',
  firebase: {
    apiKey: "AIzaSyCUcn5RiHNiKZ9WO_ltBcWWQjCxIQNf_IY",
    authDomain: "platzi-store-7c759.firebaseapp.com",
    databaseURL: "https://platzi-store-7c759.firebaseio.com",
    projectId: "platzi-store-7c759",
    storageBucket: "platzi-store-7c759.appspot.com",
    messagingSenderId: "1002680827009",
    appId: "1:1002680827009:web:6d4d9dbdae24f87732e180"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
