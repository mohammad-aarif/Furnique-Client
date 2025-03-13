export const firebaseErrorMessage = (errorCode) => {
    const errorMessages = {
      "auth/email-already-in-use": "This email is already registered. Try logging in.",
      "auth/weak-password": "Password should be at least 6 characters.",
      "auth/invalid-email": "Enter a valid email address.",
      "auth/user-not-found": "Email or Password Incorrect. Try again.",
      "auth/wrong-password": "Email or Password Incorrect. Try again.",
      "auth/network-request-failed": "Network error. Check your connection.",
    };
  
    return errorMessages[errorCode] || "Something went wrong. Try again.";
  };