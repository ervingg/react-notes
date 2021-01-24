import { useContext } from "react"
import { CSSTransition } from 'react-transition-group'
import { AlertContext } from "../context/alert/alertContext"

export const Alert = () => {
   const {alert, hide} = useContext(AlertContext)

   return (
      <CSSTransition
         in={alert.visible}
         timeout={{
            enter: 500,
            exit: 300
         }}
         classNames={'alert'}
         mountOnEnter
         unmountOnExit
      >
         <div className={`alert alert-${alert.type || 'warning'} alert-dismissible`} role="alert">
            <strong>{alert.title}</strong>
               <p>
                  {alert.text}
               </p>
            <button onClick={hide} type="button" className="close" aria-label="Close">
               <span aria-hidden="true">&times;</span>
            </button>
         </div>
      </CSSTransition>
   )
}