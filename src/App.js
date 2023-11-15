import './App.css';
import Counter from './components/Counter';
function App() {
  return (
      <div style={{height:'100vh'}} className='d-flex justify-content-center align-items-center w-100 bg-dark'>
      <div className='bg-light p-5 rounded' style={{width:'500px'}}>
        <h1 className='text-primary d-flex justify-content-center align-items-center'>Counter Application</h1>
        <div className='d-flex justify-content-center align-items-center w-100 p-4 mt-4 rounded flex-column'>
         <Counter/>
        </div>
        </div>
        </div>
  );
}

export default App;
