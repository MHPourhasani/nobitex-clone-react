import { Link } from 'react-router-dom';
import Layout from '../Layout/Layout';

// images
import bg1image from '../assets/images/bg-img-1.svg';

// icons
import { AiFillPlayCircle } from 'react-icons/ai';

const HomePage = () => {
	return (
		<Layout>
			<main className='flex w-full flex-col items-center justify-center bg-gray-100 py-10 font-vazirmatn md:py-16'>
				{/* title and description span */}
				<span className='z-30 text-center md:my-2'>
					<p className='text-2xl font-medium sm:tracking-tight md:text-3xl xl:text-5xl xl:font-normal'>
						خرید و فروش امن بیت‌کوین و ارزهای دیجیتال
					</p>
					<p className='my-1.5 md:text-xl xl:my-3 xl:text-2xl'>
						به بزرگترین بازار ارز دیجیتال ایران بپیوندید
					</p>
				</span>

				{/* email input section */}
				<section className='z-20 flex w-full flex-col items-center justify-center md:w-5/12 md:flex-row lg:w-4/12'>
					<input
						type='text'
						placeholder='ایمیل خود را وارد کنید'
						className='my-2 h-10 w-11/12 rounded-sm bg-white px-5 text-gray-600 outline-none drop-shadow-sm placeholder:text-gray-500 sm:w-8/12 sm:rounded-r-sm sm:rounded-l-none sm:drop-shadow-md xl:w-10/12'
					/>
					<Link
						to='/signup'
						className='flex h-10 w-11/12 items-center justify-center rounded-sm bg-teal-500 text-white sm:w-8/12 sm:rounded-l-sm sm:rounded-r-none md:w-4/12'>
						<span className='md:hidden'>همین حالا شروع کنید</span>
						<span className='md:block'>شروع کنید</span>
					</Link>
				</section>

				{/* how to work nobitex link */}
				<a
					href='https://www.aparat.com/nobitex/'
					className='z-10 my-4 flex items-center text-violet-500'>
					<p className='hover:border-b-[1px] hover:border-violet-400 xl:text-xl'>
						نوبیتکس چطور کار می کند؟
					</p>
					<AiFillPlayCircle className='mr-2 h-auto w-6 xl:w-8' />
				</a>

				{/* bg image */}
				<img
					src={bg1image}
					alt='bg image 1'
					aria-hidden
					className='z-0 h-auto w-full scale-150 sm:-translate-y-24 sm:scale-75 md:scale-100 lg:scale-90 xl:scale-150'
				/>
			</main>
		</Layout>
	);
};

export default HomePage;
