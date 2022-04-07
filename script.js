import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js'
    import { getAuth, signInWithPopup, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js";
    
    function googleSignIn(callback){

      const firebaseConfig = {
      apiKey: "",
      authDomain: "",
      projectId: "",
      storageBucket: "",
      messagingSenderId: "",
      appId: "",
      measurementId: ""
    };

    const firebase = initializeApp(firebaseConfig);
    const provider = new GoogleAuthProvider();
    const auth = getAuth(firebase);
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
        callback(true,user)
      }).catch((error) => {
        callback(false,error)
      });
    }
    googleSignIn((success,result)=>{
      console.log(result)
    })
