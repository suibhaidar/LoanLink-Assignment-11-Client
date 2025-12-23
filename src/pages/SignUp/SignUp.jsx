import { Link, useLocation, useNavigate } from 'react-router'
import { FcGoogle } from 'react-icons/fc'
import useAuth from '../../hooks/useAuth'
import { toast } from 'react-hot-toast'
import { TbFidgetSpinner } from 'react-icons/tb'
import { useForm } from 'react-hook-form'
import { imageUpload, saveOrUpdateUser } from '../../utils'


const SignUp = () => {
  const { createUser, updateUserProfile, signInWithGoogle, loading } = useAuth()
  const navigate = useNavigate()
  const location = useLocation()
  const from = location.state || '/'

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()


  const onSubmit = async (data) => {
    const { name, email, password, role, image } = data
    const imageFile = image[0]

    console.log(data)

    
        

    try {
      const photoURL = await imageUpload(imageFile)
      const result = await createUser(email, password)
      await saveOrUpdateUser({name,email,image:photoURL})
      await updateUserProfile(name, photoURL)
      

      console.log('User Role:', role)
      navigate(from, { replace: true })
      toast.success('Registration Successful')
      
    } catch (err) {
      console.log(err)
      toast.error(err.message)
    }
  }


  const handleGoogleSignIn = async () => {
    try {
      const {user} = await signInWithGoogle()
      await saveOrUpdateUser({
        name: user?.displayName,
        email: user?.email,
        image: user?.photoURL,
        role: 'borrower'
      })
      
      navigate(from, { replace: true })
      toast.success('Login Successful')
    } catch (err) {
      toast.error(err?.message)
    }
  }

  return (
    <div className='flex justify-center items-center min-h-screen bg-base-300'>
      <div className='flex flex-col max-w-md p-6 my-3 rounded-md sm:p-10 bg-base-100 text-gray-900'>
        <div className='mb-8 text-center'>
          <h1 className='my-3 text-4xl font-bold'>Sign Up</h1>
          <p className='text-sm text-accent'>Welcome to LoanLink</p>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className='space-y-6'
        >
          <div className='space-y-4'>
            {/* Name */}
            <div>
              <label className='block mb-2 text-sm'>Name</label>
              <input
                type='text'
                placeholder='Enter Your Name Here'
                className='w-full px-3 py-2 border rounded-md border-green-300 focus:outline-green-700 bg-gray-200'
                {...register('name', { required: true })}
              />
            </div>

            {/* Image */}
            <div>
              <label className='block mb-2 text-sm'>Photo</label>
              <input
                type='file'
                accept='image/*'
                className='block w-full text-sm text-gray-500
                file:mr-4 file:py-2 file:px-4
                file:rounded-md file:border-0
                file:text-sm file:font-semibold
                file:bg-green-50 file:text-green-700
                border border-dashed border-green-300 rounded-md cursor-pointer py-2'
                {...register('image', { required: true })}
              />
            </div>

            {/* Email */}
            <div>
              <label className='block mb-2 text-sm'>Email</label>
              <input
                type='email'
                placeholder='Enter Your Email Here'
                className='w-full px-3 py-2 border rounded-md border-green-300 focus:outline-green-700 bg-gray-200'
                {...register('email', { required: true })}
              />
            </div>

            {/* Role */}
            <div>
              <label className='block mb-2 text-sm'>Role</label>
              <select
                className='w-full px-3 py-2 border rounded-md border-green-300 bg-gray-200'
                {...register('role', { required: true })}
              >
                <option value=''>Select Role</option>
                <option value='borrower'>Borrower</option>
                <option value='manager'>Manager</option>
              </select>
            </div>

            {/* Password */}
            <div>
              <label className='block mb-2 text-sm'>Password</label>
              <input
                type='password'
                placeholder='*******'
                className='w-full px-3 py-2 border rounded-md border-green-300 focus:outline-green-700 bg-gray-200'
                {...register('password', {
                  required: 'Password is required',
                  minLength: {
                    value: 6,
                    message: 'Password must be at least 6 characters long',
                  },
                  validate: {
                    hasUppercase: value =>
                      /[A-Z]/.test(value) ||
                      'Password must contain at least one uppercase letter',
                    hasLowercase: value =>
                      /[a-z]/.test(value) ||
                      'Password must contain at least one lowercase letter',
                  },
                })}
              />
              {errors.password && (
                <p className='text-red-500 text-xs mt-1'>
                  {errors.password.message}
                </p>
              )}
            </div>
          </div>

          <button
            type='submit'
            className='bg-primary w-full rounded-md py-3 text-white'
          >
            {loading ? (
              <TbFidgetSpinner className='animate-spin m-auto' />
            ) : (
              'Register'
            )}
          </button>
        </form>

        <div
          onClick={handleGoogleSignIn}
          className='flex justify-center items-center space-x-2 border m-3 p-2 cursor-pointer'
        >
          <FcGoogle size={32} />
          <p>Continue with Google</p>
        </div>

        <p className='px-6 text-sm text-center text-accent'>
          Already have an account?{' '}
          <Link to='/login' className='hover:underline hover:text-secondary'>
            Login
          </Link>
        </p>
      </div>
    </div>
  )
}

export default SignUp
