import './counts.css'

export default function Counts() {
  return (
    <div className=" bg-gray-100 text-black w-full flex flex-row justify-center">
      <div className="max-w-7xl w-full flex flex-row pt-20 pb-14 justify-between counts-items">
        <div className="p-7 bg-white">
            <span>232</span>
            <p className='text-gray-500'>Happy Clients</p>
        </div>
        <div className="p-7 bg-white">
            <span>521</span>
            <p className='text-gray-500'>Projects</p>
        </div>
        <div className="p-7 bg-white">
            <span>1463</span>
            <p className='text-gray-500'>Hours Of Support</p>
        </div>
        <div className="p-7 bg-white">
            <span>15</span>
            <p className='text-gray-500'>Hard Workers</p>
        </div>
      </div>
    </div>
  );
}
