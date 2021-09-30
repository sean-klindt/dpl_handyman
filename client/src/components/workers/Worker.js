import { useState } from 'react';
import WorkerForm from './WorkerForm';
import Services from '../services/Services';

const Worker = ({ id, name, phone, deleteWorker, updateWorker }) => {
  const [editing, setEdit] = useState(false)

  return (
    <>
      <li>
        {name}
        <br />
        {phone}
        {
          editing ?
          <>
            <WorkerForm
              id={id}
              name={name}
              phone={phone}
              updateWorker={updateWorker}
              setEdit={setEdit}
            />
          </>
          :
          <button onClick={() => setEdit(true)}>Edit</button>
        }
        <button onClick={() => deleteWorker(id)}>Delete</button>
      </li>
      <Services workerId={id}/>
    </>
  )
}

export default Worker;