import { Link, Navigate, useLocation, useNavigate } from 'react-router'
import toast from 'react-hot-toast'
import LoadingSpinner from '../../components/Shared/LoadingSpinner'
import useAuth from '../../hooks/useAuth'
import { FcGoogle } from 'react-icons/fc'
import { TbFidgetSpinner } from 'react-icons/tb'

import { saveOrUpdateUser } from '../../utils'
import { useForm } from 'react-hook-form'

const Login = () => {
  const { signIn, signInWithGoogle, loading, user, setLoading } = useAuth()
  const navigate = useNavigate()
  const location = useLocation()
  const from = location.state || '/'

  // Register form methods
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // Redirect if user already exists
  if (user) return <Navigate to={from} replace={true} />
  if (loading) return <LoadingSpinner />

  const onSubmit = async (data) => {
    const { email, password } = data;
    try {
      setLoading(true); // Manually set loading to true
      const result = await signIn(email, password);
      
      await saveOrUpdateUser({
        name: result?.user?.displayName,
        email: result?.user?.email,
        image: result?.user?.photoURL,
      });

      toast.success('Login Successful');
      navigate(from, { replace: true });
    } catch (err) {
      console.log(err);
      toast.error(err?.message);
    } finally {
      setLoading(false); // Make sure to stop loading
    }
  }

  const handleGoogleSignIn = async () => {
    try {
      setLoading(true);
      const result = await signInWithGoogle();
      await saveOrUpdateUser({
        name: result?.user?.displayName,
        email: result?.user?.email,
        image: result?.user?.photoURL,
        role: 'borrower'
      });

      toast.success('Login Successful');
      navigate(from, { replace: true });
    } catch (err) {
      console.log(err);
      toast.error(err?.message);
    } finally {
      setLoading(false);
    }
  }
  return (
    <div className='flex justify-center items-center min-h-screen bg-base-300'>
      <div className='flex flex-col max-w-md p-6 my-2.5 rounded-md sm:p-10 bg-base-100'>
        <div className='mb-8 text-center'>
          <h1 className='my-3 text-4xl font-bold'>Log In</h1>
          <p className='text-sm text-accent'>
            Sign in to access your account
          </p>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          noValidate=''
          action=''
          className='space-y-6 ng-untouched ng-pristine ng-valid'
        >
          <div className='space-y-4'>
            <div>
              <label htmlFor='email' className='block mb-2 text-sm'>
                Email address
              </label>
              <input
                type='email'
                name='email'
                id='email'
                required
                placeholder='Enter Your Email Here'
                className='w-full px-3 py-2 border rounded-md border-green-300 focus:outline-green-500 bg-base-200 text-gray-900'
                data-temp-mail-org='0'
                {...register('email',{required:'email is required'})}
              />
              {errors.email && (<p className='text-red-500 text-xs mt-1'>{errors.email.message}</p>)}
            </div>
            <div>
              <div className='flex justify-between'>
                <label htmlFor='password' className='text-sm mb-2'>
                  Password
                </label>
              </div>
              <input
                type='password'
                name='password'
                autoComplete='current-password'
                id='password'
                required
                placeholder='*******'
                className='w-full px-3 py-2 border rounded-md border-green-300 focus:outline-green-700 bg-gray-200 text-gray-900'
                {...register('password',{required:'password is required',minLength:{
                  value:6,
                  message:'please 6'
                }})}
              />
              {errors.password && (<p className='text-red-500 text-xs mt-1'>{errors.password.message}</p>)}
            </div>
          </div>

          <div>
            <button
              type='submit'
              className='bg-primary w-full rounded-md py-3 text-base-100'
            >
              {loading ? (
                <TbFidgetSpinner className='animate-spin m-auto' />
              ) : (
                'Continue'
              )}
            </button>
          </div>
        </form>
        <div className='space-y-1'>
          <button className='text-xs hover:underline hover:text-secondary text-accent cursor-pointer'>
            Forgot password?
          </button>
        </div>
        <div className='flex items-center pt-4 space-x-1'>
          <div className='flex-1 h-px sm:w-16 dark:bg-gray-700'></div>
          <p className='px-3 text-sm dark:text-gray-400'>
            Login with social accounts
          </p>
          <div className='flex-1 h-px sm:w-16 dark:bg-gray-700'></div>
        </div>
        <div
          onClick={handleGoogleSignIn}
          className='flex justify-center items-center space-x-2 border m-3 p-2 border-gray-300 border-rounded cursor-pointer'
        >
          <FcGoogle size={32} />

          <p>Continue with Google</p>
        </div>
        <p className='px-6 text-sm text-center text-accent'>
          Don&apos;t have an account yet?{' '}
          <Link
            state={from}
            to='/signup'
            className='hover:underline hover:text-secondary text-gray-600'
          >
            Sign up
          </Link>
          .
        </p>
      </div>
    </div>
  )
}

export default Login
