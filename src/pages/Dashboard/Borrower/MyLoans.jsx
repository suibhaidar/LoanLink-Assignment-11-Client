import { useQuery } from '@tanstack/react-query';
import BorrowerLoanDataRow from '../../../components/Dashboard/TableRows/BorrowerLoanDataRow'
import useAuth from '../../../hooks/useAuth';
import axios from 'axios';
import LoadingSpinner from '../../../components/Shared/LoadingSpinner';

const MyLoans = () => {

  const { user } = useAuth();

  const { data: applications = {}, isLoading } = useQuery({
    queryKey: ['application', user.email],
    queryFn: async () => {
      const result = await axios(`${import.meta.env.VITE_API_URL}/loan-applications/${user.email}`)
      return result.data
    },
  })
  if (isLoading) return <LoadingSpinner />;
  console.log(applications)
  console.log(user)
  return (
    <>
      <div className='container mx-auto px-4 sm:px-8'>
        <div className='py-8'>
          <div className='-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto'>
            <div className='inline-block min-w-full shadow rounded-lg overflow-hidden'>
              <table className='min-w-full leading-normal'>
                <thead>
                  <tr>
                    <th
                      scope='col'
                      className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                    >
                      Loan ID
                    </th>
                    <th
                      scope='col'
                      className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                    >
                      Loan Info
                    </th>
                    <th
                      scope='col'
                      className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                    >
                      Amount
                    </th>
                    <th
                      scope='col'
                      className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                    >
                      Status
                    </th>

                    <th
                      scope='col'
                      className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                    >
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {
                    applications.map(application =>(<BorrowerLoanDataRow key={application._id} application={application} />))
                  }
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default MyLoans
