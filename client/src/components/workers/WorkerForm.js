import { useState, useEffect } from 'react';

const WorkerForm = ({ addWorker, id, name, phone, updateWorker, setEdit }) => {
  const [worker, setWorker] = useState({ name: "", phone: "" })

  useEffect( () => {
    if (id) {
      setWorker({ name, phone })
    }
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (id) {
      updateWorker(id, worker)
      setEdit(false)
    } else {
      addWorker(worker)
    }
    setWorker({ name: "", phone: "" })
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input 
          name="name"
          value={worker.name}
          onChange={(e) => setWorker({...worker, name: e.target.value })}

          required
          placeholder="Name"
        />
        <input 
          name="phone"
          value={worker.phone}
          onChange={(e) => setWorker({...worker, phone: e.target.value })}

          required
          placeholder="Phone"
        />
        <button type="submit">Submit</button>
      </form>

    </>
  )
}

export default WorkerForm;