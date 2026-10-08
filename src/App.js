import './App.css';
import Tag from './component/tag';
import Random from './component/random';

function App() {
  return (
    <div className='relative w-full min-h-screen flex flex-col background overflow-hidden items-center '>

      <h1 className='absolute bg-white rounded-lg w-11/12 text-center mt-[40px] 

      text-4xl px-10 py-2 font-bold mx-auto'>RANDOM GIF'S</h1>
      
      <div className='flex flex-col w-full mb-8 mt-[130px] items-center h-full gap-y-10 '>
        <Random className/>
        <Tag />
      </div>

    </div>
  );
}

export default App;
