import { useState, useEffect } from "react";
import axios from 'axios';
import ServiceList from './ServiceList';
import ServiceForm from './ServiceForm';

const Services = ({ workerId }) => {
  const [services, setServices] = useState([])

  useEffect( () => {
    axios.get(`/api/workers/${workerId}/services`)
      .then( res => {
        setServices(res.data)
      })
      .catch( err => console.log(err))
  }, [])

  const addService = (service) => {
    axios.post(`/api/workers/${workerId}/services`, { service })
      .then(res => {
        setServices([...services, res.data])
      })
      .catch( err => console.log(err))
  }

  const updateService = (id, service) => {
    axios.put(`/api/worker/${workerId}/services/${id}`, { service })
      .then( res => {
        let updatedServices = services.map( s => {
          if (s.id === id) {
            return res.data
          }
          return s
        })
        setServices(updatedServices)
      })
      .catch( err => console.log(err))
  }

  const deleteService = (id) => {
    axios.delete(`/api/workers/${workerId}/services/${id}`)
      .then( res => {
        setServices( services.filter( s => s.id !== id))
      })
      .catch( err => console.log(err))
  }

  return(
    <>
      <ServiceForm addService={addService} />
      <ServiceList 
        services={services} 
        deleteService={deleteService}
        updateService={updateService}
      />
    </>
  )
}

export default Services;