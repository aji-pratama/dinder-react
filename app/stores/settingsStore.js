import firebase from 'firebase'
import MobxFirebaseStore from 'mobx-firebase-store'

const config = {
    apiKey: "AIzaSyAdLzHYeZ560KpMa_HNyGerzjPacMnLlzk",
    authDomain: "dinder-e3816.firebaseapp.com",
    databaseURL: "https://dinder-e3816.firebaseio.com",
    storageBucket: "dinder-e3816.appspot.com",
    messagingSenderId: "714249892932"
  };

export default class SettingStore extends MobxFirebaseStore {
  constructor() {
    firebase.initializeApp(config)
    super(firebase.database().ref())

    this.splashTime = 5000
    this.splashImg = require('../../images/splash.jpg')
  }

  get SplashTime(){
    return this.splashTime
  }

  get SplashImg(){
    return this.splashImg
  }
}
