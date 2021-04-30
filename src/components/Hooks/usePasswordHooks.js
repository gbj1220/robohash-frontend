import { useState } from "react";
import { isStrongPassword } from "validator";

function usePasswordHooks() {
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState(false);
  const [passwordErrorMessage, setPasswordErrorMessage] = useState("");

  function passwordOnChange(e) {
    let passwordValue = e.target.value;
    let passwordName = e.target.name;
    setPassword(passwordValue);

    if (isStrongPassword(passwordValue)) {
      setPasswordError(false);
      setPasswordErrorMessage("");
    } else {
      setPasswordError(true);
      setPasswordErrorMessage(
        `${passwordName} must include at least 8 characters, 1 lowercase letter, 1 uppercase letter, and 1 symbol.`
      );
    }
  }

  return [password, passwordOnChange, passwordError, passwordErrorMessage];
}

export default usePasswordHooks;
