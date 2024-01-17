import Laptop from '../assets/laptop.jpg'

function Analytics() {
  return (
    <div className="w-full bg-white py-16 px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <img src={Laptop} alt='/' className='w-[500px] mx-auto my-4'/>
        <div className='flex flex-col justify-center'>
            <p className='text-[#00df9a] font-bold'>DATA ANALYTICS DASHBOARD</p>
            <h1 className='text-xl sm:text-2xl md:text-3xl font-bold py-2'>Manage Data Analytics Centrally</h1>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing</p>
            <button className='text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3 bg-black'>Get Started</button>
        </div>
      </div>
    </div>
  )
}

export default Analytics
