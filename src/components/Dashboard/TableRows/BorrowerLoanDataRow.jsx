import { useState } from 'react'
import DeleteModal from '../../Modal/DeleteModal'
const BorrowerLoanDataRow = () => {
  let [isOpen, setIsOpen] = useState(false)
  const closeModal = () => setIsOpen(false)

  return (
    <tr>
      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
        <div className='flex items-center'>
          <div className='shrink-0'>
            <div className='block relative'>
              <span>12k1k</span>
            </div>
          </div>
        </div>
      </td>

      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
        <p className='text-gray-900'>ki hobe</p>
      </td>
      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
        <p className='text-gray-900'>50,000</p>
      </td>
      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
        <p className='text-gray-900'>Pending</p>
      </td>
      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
        {/* <p className='text-gray-900'>5</p> */}
        <button className="btn btn-xs bg-green-300">View </button><button onClick={() => setIsOpen(true)} className="btn btn-xs bg-red-200 ml-0.5">Cancel</button>
        <DeleteModal isOpen={isOpen} closeModal={closeModal} />
      </td>


      
    </tr>
  )
}

export default BorrowerLoanDataRow
