import Worker from './Worker';

const WorkerList = ({ workers, deleteWorker, updateWorker }) => {
  return (
    <>
      <ul>
        {
          workers.map( w => 
            <Worker 
              {...w} 
              deleteWorker={deleteWorker}
              updateWorker={updateWorker}
            />
          )
        }
      </ul>
    </>
  )
}


export default WorkerList;