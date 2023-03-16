import { useSelector } from 'react-redux'
import PrivateRoute from './PrivateRoute'

function NoteItem({ note }) {
  const { user } = useSelector((state) => state.auth)

  return (
    <div className='note'>
      <h4>
        Note from {note.isStaff ? <span>Staff</span> : <span>{user.name}</span>}
      </h4>
      <p>{note.text}</p>
      <div className='note-date'>
        {new Date(note.createdAt).toLocaleString('en-US')}
      </div>
    </div>
  )
}

export default NoteItem
