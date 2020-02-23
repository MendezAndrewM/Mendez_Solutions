import { useState } from "react";

//It is very important that the name of this functional component starts with “use”. -per Medium
// If something is no working, consider changeing the name of this functional component to 'useFormInputs'

const useFormInputs = (callback) => {
    const [inputs, setInputs] = useState({});
    const handleSubmit = (event) => {
        if (event) {
          event.preventDefault();
        }
        callback();
    }
    const handleInputChange = (event) => {
        event.persist();
        setInputs(inputs => ({...inputs, 
            [event.target.name]: event.target.value}));
      }
    return {
        handleSubmit,
        handleInputChange,
        inputs
      };
}

export default useFormInputs;