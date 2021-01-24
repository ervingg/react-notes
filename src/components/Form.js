import { useContext, useState } from "react"
import { AlertContext } from "../context/alert/alertContext";
import { FirebaseContext } from "../context/firebase/firebaseContext";

export const Form = () => {
   const [value, setValue] = useState('');

   const alert = useContext(AlertContext);
   const firebase = useContext(FirebaseContext);

   const submitHandler = event => {
      event.preventDefault();

      if (value.trim()) {
         firebase.addNote(value.trim())
            .then(() => {
               alert.show('Success!','Note has been created', 'success');
            })
            .catch(() => {
               alert.show('Warning!', 'Note has not been created', 'danger');
            })
         setValue('')
      } else {
         alert.show('Warning!', 'Enter a title for your note')
      }
   }

   return (
      <form onSubmit={submitHandler}>
         <div className="from-group">
            <input 
               type="text"
               className="form-control"
               placeholder="Enter note text"
               value={value}
               onChange={e => setValue(e.target.value)}
            />
         </div>
      </form>
   )
}