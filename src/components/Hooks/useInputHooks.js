import { useState } from "react";
import { matches } from "validator";

function useInputHooks() {
  const [input, setInput] = useState("");
  const [inputError, setInputError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  function handleInput(e) {
    let inputValue = e.target.value;
    let inputName = e.target.name;
    setInput(inputValue);

    let checkInputNameWithRegEx;
    let errMessage;
    if (inputName === "First Name" || inputName === "Last Name") {
      checkInputNameWithRegEx = /[!@#$%^&*()[\],.?":;{}|<>1234567890]/g;
      errMessage = `${inputName} cannot have any numbers or special characters.`;
    } else {
      checkInputNameWithRegEx = /[!@#$%^&*()[\],.?":;{}|<>]/g;
      errMessage = `${inputName} cannot have any numbers.`;
    }

    if (matches(inputValue, checkInputNameWithRegEx)) {
      setInputError(true);
      setErrorMessage(errMessage);
    } else {
      setInputError(false);
      setErrorMessage("");
    }
  }

  return [input, handleInput, inputError, errorMessage];
}

export default useInputHooks;
