import { useState, useEffect } from 'react';

const ServiceForm = ({ addService, id, title, rate, updateService, setEdit }) => {
  const [service, setService] = useState({ title: "", rate: "" })

  useEffect( () => {
    if (id) {
      setService({ title, rate })
    }
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (id) {
      updateService(id, service)
      setEdit(false)
    } else {
      addService(service)
    }
    setService({ title: "", rate: "" })
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input 
          name="name"
          value={service.title}
          onChange={(e) => setService({...service, title: e.target.value })}

          required
          placeholder="Name"
        />
        <input 
          name="rate"
          value={service.rate}
          onChange={(e) => setService({...service, rate: e.target.value })}

          required
          placeholder="Rate"
        />
        <button type="submit">Submit</button>
      </form>

    </>
  )
}

export default ServiceForm;