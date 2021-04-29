import { useState } from "react";
import { isEmail } from "validator";

function useEmailHooks() {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

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

  return [email, handleEmail, emailError, errorMessage];
}

export default useEmailHooks;
