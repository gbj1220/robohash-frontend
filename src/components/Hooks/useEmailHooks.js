import { useState } from "react";
import { isEmail } from "validator";

function useEmailHooks() {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [isEmailOnBlur, setIsEmailOnBlur] = useState(false);

  function handleEmail(e) {
    let emailValue = e.target.value;
    setEmail(emailValue);

    if (isEmail(emailValue)) {
      setEmailError(false);
      setErrorMessage("");
    } else {
      setEmailError(true);
      setErrorMessage("Email is not valid. Please sign up to enter site.");
    }
  }

  function handleEmailOnBlur() {
    setIsEmailOnBlur(true);
    console.log("onblur");
  }

  return [
    email,
    handleEmail,
    emailError,
    errorMessage,
    isEmailOnBlur,
    handleEmailOnBlur,
  ];
}

export default useEmailHooks;
