
import { useLocalStorage } from "./useLocalStorage";

//initialValue as an object( display the form by multiple key-value pairs )
export const useForm =(key,initialValue,cb)=>{
    const [values, setValues, setStoredValue]=useLocalStorage(key,initialValue)
    //once input changes,store the value in localStorage and
    // change the reset the state to display the instant value
    const handleChanges = e => {
        //localStorage.setItem([e.target.name],e.target.value)
        setValues({ ...values, [e.target.name]: e.target.value });
    };
    const clearForm = ()=> {
       
        setValues(initialValue);
       
    };
    const handleSubmit=e=>{
        e.preventDefault()
        cb()
    }
    return [values, handleChanges, clearForm,handleSubmit ]

}