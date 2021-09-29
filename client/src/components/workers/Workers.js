import { useState, useEffect } from "react";
import axios from 'axios';
import WorkerList from './WorkerList';
import WorkerForm from './WorkerForm';

const Workers = () => {
  const [workers, setWorkers] = useState([])

  // before it mounts
  useEffect( () => {
      // grab workers from the database
      axios.get('/api/workers')
        .then( res => {
          // and set it to state
          setWorkers(res.data)
        })
        .catch( err => console.log(err) )
    }, [])

  // add worker
  const addWorker = (worker) => {
    // add in the db
    // add in the state in the client
    axios.post('/api/workers', { worker })
      .then(res => {
        setWorkers([...workers, res.data])
      })
      .catch( err => console.log(err) )
  }

  // update worker
  const updateWorker = (id, worker) => {
    // update in the db
    axios.put(`/api/workers/${id}`, { worker })
    .then( res => {
      // update in the state in the client
      const updatedWorkers = workers.map( w => {
        if (w.id == id) {
          return res.data
        }
        return w
      })
      setWorkers(updatedWorkers)
    })
    .catch( err => console.log(err) )
  }

  // delete worker
  const deleteWorker = (id) => {
    // delete in the db
    axios.delete(`/api/workers/${id}`)
      .then( res => {
        // delete in the state in the client
        setWorkers(workers.filter( w => w.id !== id))
      })
      .catch( err => console.log(err) )

  }

  return(
    <>
      <WorkerForm addWorker={addWorker} />
      <WorkerList 
        workers={workers} 
        deleteWorker={deleteWorker}
        updateWorker={updateWorker}
      />
    </>
  )
}

export default Workers;