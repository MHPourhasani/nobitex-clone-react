import { Link } from 'react-router-dom';
import Layout from '../Layout/Layout';

// images
import bg1image from '../assets/images/bg-img-1.svg';
import simple_and_practical from '../assets/images/simple-and-practical.png';
import safe_buying_and_selling from '../assets/images/safe-buying-and-selling.png';
import leading_and_fast from '../assets/images/leading-and-fast.png';

// icons
import { AiFillPlayCircle } from 'react-icons/ai';

const HomePage = () => {
	return (
		<Layout>
			<main className='flex w-full flex-col items-center justify-center overflow-hidden bg-gray-100 py-10 font-vazirmatn md:py-16'>
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

				{/* why choose Nobitex? section */}
				<section className='z-30 flex flex-col items-center justify-center bg-white p-6 lg:px-14 xl:px-6 xl:py-14'>
					<span className='my-14 text-xl font-medium sm:mt-3 md:mb-8 xl:text-3xl'>
						چرا نوبیتکس را انتخاب کنیم؟
					</span>
					<section className='flex flex-col items-center justify-center gap-y-12 sm:mb-5 sm:flex-row sm:gap-x-5 md:gap-x-2 lg:gap-x-3'>
						{/* simple and practical part */}
						<div className='flex flex-col items-center justify-center gap-x-5 text-center'>
							<img
								src={simple_and_practical}
								alt='simple and practical image'
								aria-hidden
								className='w-5/12 sm:w-8/12 md:my-3 md:w-7/12 lg:w-5/12 xl:my-4'
							/>
							<span className='my-4 text-base font-medium xl:text-lg'>
								ساده و کاربردی
							</span>
							<p className='w-2/3 text-xs leading-relaxed text-gray-600 sm:w-11/12 xl:w-8/12 xl:text-base'>
								محیط ساده و کاربردی نوبیتکس، معامله ارزدیجیتال را برای شما لذت بخش
								خواهد کرد.
							</p>
						</div>

						{/* safe buying and selling part */}
						<div className='flex flex-col items-center justify-center gap-x-5 text-center'>
							<img
								src={safe_buying_and_selling}
								alt='safe buying and selling iamge'
								aria-hidden
								className='w-1/3 sm:w-1/2 md:my-3 md:w-5/12 lg:w-4/12 xl:h-36 xl:w-2/6'
							/>
							<span className='my-4 text-base font-medium xl:text-lg'>
								خرید و فروش امن
							</span>
							<p className='w-2/3 text-xs leading-relaxed text-gray-600 sm:w-11/12 xl:w-8/12 xl:text-base'>
								اولویت نوبیتکس امنیت است. با خیالی آسوده و بدون نگرانی خرید و فروش
								کنید.
							</p>
						</div>

						{/* leading and fast part */}
						<div className='flex flex-col items-center justify-center gap-x-5 text-center'>
							<img
								src={leading_and_fast}
								alt='leading and fast image'
								aria-hidden
								className='w-5/12 sm:w-8/12 md:my-3 md:w-6/12 lg:w-5/12 xl:my-4 xl:w-4/12'
							/>
							<span className='my-4 text-base font-medium xl:text-lg'>
								پیشرو و سریع
							</span>
							<p className='w-2/3 text-xs leading-relaxed text-gray-600 sm:w-11/12 xl:w-8/12 xl:text-base'>
								تنوع رمزارزها و سرعت معاملات، نوبیتکس را جزو بهترین بازارهای آنلاین
								قرار داده است.
							</p>
						</div>
					</section>
				</section>
			</main>
		</Layout>
	);
};

export default HomePage;
