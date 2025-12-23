import Container from '../../components/Shared/Container'
import LoadingSpinner from '../../components/Shared/LoadingSpinner'
import { useParams, useNavigate, Link } from 'react-router'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

const LoanDetails = () => {
  
  const { id } = useParams()
  const navigate = useNavigate()

  const { data: loan = {}, isLoading } = useQuery({
    queryKey: ['loan', id],
    queryFn: async () => {
      const result = await axios(`${import.meta.env.VITE_API_URL}/loan/${id}`)
      return result.data
    },
  })

  if (isLoading) return <LoadingSpinner />

  const {
    image,
    loan_title,
    description,
    category,
    interest_rate,
    max_loan_limit,
    emi_plans,
    required_documents,
    _id
  } = loan

  

  return (
    <Container>
      <div className=' flex flex-col lg:flex-row justify-between rounded-xl w-full gap-12 bg-base-100'>
        {/* Loan Image */}
        <div className='flex-1'>
          <div className='w-full overflow-hidden rounded-xl flex flex-col justify-center'>
            <img
              className='object-cover w-full h-full'
              src={image}
              alt={loan_title}
            />
          </div>
        </div>

        {/* Loan Info */}
        <div className='flex-1 flex flex-col gap-2 mt-2'>
          <h1 className='font-bold text-2xl'>{loan_title}</h1>
          <p>Category: ${category}</p>
          <hr className='my-2' />

          <p className='text-lg font-semibold text-accent'>{description}</p>

          <hr className='my-2' />

          <div className='flex flex-col gap-2 font-bold'>
            <p>Interest Rate: <span className='font-medium text-sm text-accent'>{interest_rate}</span></p>
            <p>Max Limit: <span className='font-medium text-sm text-accent'>{max_loan_limit}</span> ৳</p>
            <p className=''>
              Available EMI Plans: <span className='font-medium text-sm text-accent'>{emi_plans?.join(', ')}</span>
            </p>
            <p>
              Required Documents: <span className='font-medium text-sm text-accent'> {required_documents?.join(', ')}</span>
            </p>
          </div>

          <hr className='my-2' />

          <div className='flex justify-end'>
            
            <Link to={`/application-form/${id}`} className='btn btn-primary'>apply</Link>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default LoanDetails
