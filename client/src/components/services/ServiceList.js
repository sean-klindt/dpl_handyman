import Service from './Service';

const ServiceList = ({ services, deleteService, updateService }) => {
  return (
    <>
      <ul>
        {
          services.map( s => 
            <Service 
              {...s} 
              deleteService={deleteService}
              updateService={updateService}
            />
          )
        }
      </ul>
    </>
  )
}


export default ServiceList;