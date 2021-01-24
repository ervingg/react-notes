import {TransitionGroup, CSSTransition} from 'react-transition-group'

export const Notes = ({notes, onRemove}) => (
   <TransitionGroup component="ul" className="list-group">
      {
         notes.map(note => (
            <CSSTransition
               key={note.id}
               classNames={'note'}
               timeout={800}
            >
               <li 
                  className="list-group-item d-flex justify-content-between align-items-center"
               >
                  <strong>{note.title}</strong>

                  <div>
                     <span className="mr-3 note-date">Date of creation: {note.date}</span>

                     <button
                        type="button" 
                        className="btn btn-outline-danger btn-sm"
                        onClick={() => onRemove(note.id)}
                     >&times;</button>
                  </div>
               </li>
            </CSSTransition>
            ))
      }
   </TransitionGroup>
)