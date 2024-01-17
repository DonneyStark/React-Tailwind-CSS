import {
    FaDribbbleSquare,
    FaFacebookSquare,
    FaGithubSquare,
    FaTwitterSquare,
    FaInstagram
} from 'react-icons/fa'

function Footer() {
  return (
    <div className='max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300'>
      <div>
        <h1 className="w-full text-3xl font-bold text-[#00df9a]">REACT.</h1>
        <p className='py-4'>It is a long established fact that a reader will be content of at its layout. The point of a more-or-les</p>
        <div className='flex justify-between md:w-[75%] my-6'>
            <FaFacebookSquare size={30}/>
            <FaInstagram size={30}/>
            <FaTwitterSquare size={30}/>
            <FaGithubSquare size={30}/>
            <FaDribbbleSquare size={30}/>
        
        </div>
      </div>
      <div className='lg:col-span-2 flex justify-between mt-6'>
        <div className='font-medium text-gray-400'>
            <h6>Solutions</h6>
            <ul>
                <li className='py-2 text-sm'>Analytics</li>
                <li className='py-2 text-sm'>Marketings</li>
                <li className='py-2 text-sm'>Commerce</li>
                <li className='py-2 text-sm'>Insights</li>
            </ul>
        </div>
        <div className='font-medium text-gray-400'>
            <h6>Support</h6>
            <ul>
                <li className='py-2 text-sm'>Pricing</li>
                <li className='py-2 text-sm'>Documentation</li>
                <li className='py-2 text-sm'>Guides</li>
                <li className='py-2 text-sm'>API Status</li>
            </ul>
        </div>
        <div className='font-medium text-gray-400'>
            <h6>Company</h6>
            <ul>
                <li className='py-2 text-sm'>About</li>
                <li className='py-2 text-sm'>Blog</li>
                <li className='py-2 text-sm'>Jobs</li>
                <li className='py-2 text-sm'>Press</li>
                <li className='py-2 text-sm'>Careers</li>
            </ul>
        </div>
        <div className='font-medium text-gray-400'>
            <h6>Legal</h6>
            <ul>
                <li className='py-2 text-sm'>Claim</li>
                <li className='py-2 text-sm'>Policy</li>
                <li className='py-2 text-sm'>Terms</li>
                
            </ul>
        </div>
      </div>
    </div>
  )
}

export default Footer
