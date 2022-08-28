import { Link } from 'react-router-dom';
import Layout from '../Layout/Layout';

// images
import bg1image from '../assets/images/bg-img-1.svg';
import simple_and_practical from '../assets/images/simple-and-practical.png';
import safe_buying_and_selling from '../assets/images/safe-buying-and-selling.png';
import leading_and_fast from '../assets/images/leading-and-fast.png';
import wallet from '../assets/images/wallet.png';
import bank_card from '../assets/images/bank-card.png';
import finger_print from '../assets/images/finger-print.png';
import wage from '../assets/images/wage.png';
import laptop_and_mobile from '../assets/images/laptop-and-mobile.png';

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

				{/* (the best facilities for buying and selling digital currencies) section */}
				<section className='flex flex-col items-center justify-center py-10 px-7 sm:py-8 md:gap-y-16 lg:px-20 xl:px-7'>
					<span className='w-11/12 text-center text-lg font-medium xl:text-3xl'>
						بهترین امکانات خرید و فروش ارزهای دیجیتال
					</span>
					<section className='flex w-full flex-col-reverse items-center justify-between md:flex-row'>
						<ul className='flex w-full flex-col gap-y-7 md:gap-y-10'>
							{/* wallet balance management list item */}
							<li className='flex w-full items-start gap-x-4'>
								<div className='flex h-[4.5rem] w-[4.5rem] items-center justify-center rounded-full bg-white shadow-md md:h-20 md:w-20'>
									<img src={wallet} alt='wallet' />
								</div>
								<div className='flex w-8/12 flex-col gap-y-3 sm:w-10/12 md:w-8/12 lg:w-7/12 xl:w-8/12'>
									<span className='text-base font-medium xl:text-xl'>
										مدیریت موجودی کیف پول
									</span>
									<p className='text-xs leading-relaxed xl:text-base'>
										رمزارزهای دیجیتال محبوب را خرید و فروش کنید و در یکجا وضعیت
										موجودی خود را دنبال کنید
									</p>
								</div>
							</li>

							{/* payment with Shetab cards list item */}
							<li className='flex w-full items-start gap-x-4'>
								<div className='flex h-[4.5rem] w-[4.5rem] items-center justify-center rounded-full bg-white shadow-md md:h-20 md:w-20'>
									<img src={bank_card} alt='bank card' />
								</div>

								<div className='flex w-8/12 flex-col gap-y-3 sm:w-10/12 md:w-8/12 lg:w-7/12 xl:w-8/12'>
									<span className='text-base font-medium xl:text-xl'>
										پرداخت با کارت‌های شتاب
									</span>
									<p className='text-xs leading-relaxed xl:text-base'>
										معامله انواع رمزارز با تومان از طریق واریز و برداشت با
										کارت‌های بانکی عضو شتاب
									</p>
								</div>
							</li>

							{/* secure wallet list item */}
							<li className='flex w-full items-start gap-x-4'>
								<div className='flex h-[4.5rem] w-[4.5rem] items-center justify-center rounded-full bg-white shadow-md md:h-20 md:w-20'>
									<img src={finger_print} alt='finger print' />
								</div>

								<div className='flex w-8/12 flex-col gap-y-3 sm:w-10/12 md:w-8/12 lg:w-7/12 xl:w-8/12'>
									<span className='text-base font-medium xl:text-xl'>
										کیف پول امن
									</span>
									<p className='text-xs leading-relaxed xl:text-base'>
										رمز اختصاصی کیف پول شما به صورت آفلاین نگهداری می شود و در
										برابر هک ایمن خواهد بود
									</p>
								</div>
							</li>

							{/* competitive fee list item */}
							<li className='flex w-full items-start gap-x-4'>
								<div className='flex h-[4.5rem] w-[4.5rem] items-center justify-center rounded-full bg-white shadow-md md:h-20 md:w-20'>
									<img src={wage} alt='wage' />
								</div>
								<div className='flex w-8/12 flex-col gap-y-3 sm:w-10/12 md:w-8/12 lg:w-7/12 xl:w-8/12'>
									<span className='text-base font-medium xl:text-xl'>
										کارمزد رقابتی
									</span>
									<p className='text-xs leading-relaxed xl:text-base'>
										کارمزد خرید و فروش در نوبیتکس بسیار کم است و با بالاتر رفتن
										حجم معاملات کاهش می‌یابد
									</p>
								</div>
							</li>
						</ul>

						{/* laptop and mobile image */}
						<img
							src={laptop_and_mobile}
							alt='laptop and mobile'
							className='my-5 w-full sm:my-7 sm:w-5/12 md:w-11/12 lg:w-10/12 xl:w-11/12'
						/>
					</section>
				</section>
			</main>
		</Layout>
	);
};

export default HomePage;
