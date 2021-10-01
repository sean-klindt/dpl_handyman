import { useState } from 'react';
import ServiceForm from './ServiceForm';
// import Services from '../services/Services';
import Comments from '../comments/Comments';

const Service = ({ id, title, rate, worker_id, deleteService, updateService }) => {
  const [editing, setEdit] = useState(false)

  return (
    <>
      <li>
        {title}
        <br />
        {rate}
        {
          editing ?
          <>
            <ServiceForm
              id={id}
              title={title}
              rate={rate}
              updateService={updateService}
              setEdit={setEdit}
            />
          </>
          :
          <button onClick={() => setEdit(true)}>Edit</button>
        }
        <button onClick={() => deleteService(id)}>Delete</button>
      </li>
      <Comments serviceId={id}/>

      {/* <Services workerId={worker_id}/> */}
    </>
    
  )
}

export default Service;