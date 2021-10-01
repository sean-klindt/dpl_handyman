import { useState } from 'react';
import { Link } from 'react-router-dom';
import WorkerForm from './WorkerForm';
import Services from '../services/Services';
import Comments from '../comments/Comments';

const Worker = ({ id, name, phone, deleteWorker, updateWorker }) => {
  const [editing, setEdit] = useState(false)

  return (
    <>
      <li>
        {name}
        <br />
        {phone}
        <br />
        <Link to="./services/ServiceList">
          <button type="button">View Services</button>
        </Link>
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
        <br />
        <br />
      </li>
      <Services workerId={id}/>
      <Comments serviceId={id}/>
    </>
  )
}

export default Worker;