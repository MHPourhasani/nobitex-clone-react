import Layout from '../Layout/Layout';
import { Link } from 'react-router-dom';

// images
import referral_header_img from '../assets/images/referral-header-img.png';
import recivel_link_img from '../assets/images/recive-link-img.png';
import invite_friends_img from '../assets/images/Invite-friends-img.png';
import money_img from '../assets/images/money-logo.png';
import user_logo from '../assets/images/user-logo.png';

const ReferralPage = () => {
	const rulesForInvitingFriends = [
		'در حال حاضر ۳۰٪ از کارمزد تمامی معاملات انجام شده توسط کاربر معرفی شده در بازارهای نوبیتکس به فرد ارجاع دهنده تعلق می‌گیرد',
		'برای هر معامله دقیقاً ۳۰٪ ارزش معادل ریالی کارمزد کسر شده از طرف دعوت شده به فرد ارجاع دهنده تعلق می‌گیرد. مبلغ کارمزد بر اساس درصد کارمزد کاربر دعوت شده و ارزش معادل ریالی کارمزد در لحظه انجام معامله با دقت یک ریال محاسبه می‌شود. در بازارهای تتر قیمت خرید لحظه‌ای استاندارد تتر در نوبیتکس برای تعیین ارزش ریالی کارمزد لحاظ می‌شود.',
		'هدیه‌ی ارجاع به صورت تجمیعی پس از رسیدن مجموع مبالغ آن به حد نصاب ده هزار تومان به حساب کیف پول ریال معرف در نوبیتکس واریز می‌شود. در صورت کمتر بودن مجموع مبالغ از این حد نصاب، مجموع مبالغ پس از گذشت هفت روز به حساب معرف واریز می‌شود.',
		'ملاک ثبت رابطه‌ی دعوت، وجود کد دعوت در فرم ثبت‌نام یا استفاده از همان پیوند معرف برای ثبت‌نام است. در صورتی که به هر دلیل ثبت‌نام بدون کد یا پیوند معرف صورت بگیرد، مبلغی برای معرف در نظر گرفته نمی‌شود.',
		'فرد معرفی شده می‌تواند حداکثر تا ۲۴ ساعت پس از زمان ثبت‌نام با ورود به سامانه کد معرف خود را ثبت نماید. مسئولیت اطمینان از ثبت معرف برای کاربران دعوت شده صرفاً بر عهده‌ی معرف بوده و نوبیتکس مسئولیتی در قبال عدم ورود کد معرف توسط فرد معرفی شده ندارد.',
		'محدودیتی در تعداد دوستان معرفی شده توسط یک معرف وجود ندارد',
		'محاسبه‌ی درصد ارجاع دهنده در لحظه‌ی انجام هر معامله صورت می‌گیرد. هر گونه تغییر در درصد تعیین شده برای ارجاع یا ثبت معرف برای کاربران تاثیری در سهم معرف در کارمزد معاملات انجام شده پیش از آن تاریخ نخواهد داشت.',
		'نوبیتکس این حق را برای خود محفوظ می‌داند که هر زمان در صورت صلاحدید قوانین طرح معرفی دوستان را تغییر دهد',
	];

	return (
		<Layout>
			<section className='flex w-full flex-col items-center justify-center bg-gray-100 font-vazirmatn xl:pb-20'>
				{/* Invite friends header */}
				<div className='flex w-full flex-col items-center justify-center bg-zinc-900 pt-11 text-white md:flex-row md:items-start md:px-14 md:pt-14 lg:px-0 xl:items-center xl:justify-between xl:px-10 xl:pt-0 2xl:justify-center'>
					<span className='flex flex-col items-center justify-center md:mb-14 md:items-start xl:mb-0'>
						<p className='text-2xl font-semibold md:text-3xl xl:text-5xl'>
							دوستانتان را دعوت کنید
						</p>
						<p className='my-1.5 w-10/12 text-center text-xs text-gray-200 sm:w-full md:my-2.5 md:w-9/12 md:text-right md:text-sm lg:w-10/12 lg:text-base xl:text-lg xl:lg:w-11/12'>
							با معرفی دوستانتان هر بار که معامله می‌کنند تا 30% از کارمزدشان به شما
							تعلق می‌گیرد
						</p>
						<Link
							to='/login'
							className='my-1 rounded-sm bg-teal-500 px-4 py-1 text-xs md:rounded-md md:px-6 md:py-2 md:text-sm xl:px-9 xl:py-2.5 xl:text-lg'>
							دعوت از دوستان
						</Link>
					</span>

					<img
						src={referral_header_img}
						alt='referral header img'
						className='mt-2 w-9/12 sm:w-5/12 lg:w-4/12 xl:w-6/12 2xl:max-w-xl'
					/>
				</div>

				{/* How to invite our friends to Nobitex? */}
				<div className='flex w-11/12 -translate-y-8 flex-col items-center gap-8 rounded-md border-1 bg-white py-8 xl:border-none xl:py-16 2xl:max-w-7xl'>
					<span className='w-8/12 text-center text-xl font-medium text-gray-900 xl:text-3xl'>
						چگونه دوستانمان را به نوبیتکس دعوت کنیم؟
					</span>

					<ul className='flex flex-col justify-center gap-10 px-3 sm:w-full sm:px-5 md:flex-row'>
						<li className='flex items-start gap-5 sm:items-center md:flex-col'>
							<span className='flex h-20 w-20 flex-auto shrink-0 items-center justify-center rounded-full border-8 border-violet-100 p-4 sm:grow-0 md:h-24 md:w-24 md:p-6 xl:h-36 xl:w-36 xl:border-[14px]'>
								<img src={recivel_link_img} alt='recivel link img' />
							</span>

							<div className='flex-auto md:flex md:flex-col md:items-center'>
								<span className='flex items-center gap-2 font-medium'>
									<p className='rounded-full bg-violet-600 px-2.5 py-0.5 text-xs text-white'>
										مرحله 1
									</p>
									<p className='text-violet-600 xl:text-2xl'>دریافت لینک</p>
								</span>
								<p className='my-3 text-xs md:text-center xl:w-11/12 xl:text-base'>
									ثبت نام کنید و لینک دعوت خود را با کارمزد دلخواه خود بسازید
								</p>
							</div>
						</li>

						<li className='flex items-start gap-5 sm:items-center md:flex-col'>
							<span className='flex h-20 w-20 flex-auto shrink-0 items-center justify-center rounded-full border-8 border-violet-100 p-4 sm:grow-0 md:h-24 md:w-24 md:p-6 xl:h-36 xl:w-36 xl:border-[14px]'>
								<img src={invite_friends_img} alt='invite friends img' />
							</span>

							<div className='md:flex md:flex-col md:items-center'>
								<span className='flex items-center gap-2 font-medium'>
									<p className='rounded-full bg-violet-600 px-2.5 py-0.5 text-xs text-white'>
										مرحله 2
									</p>
									<p className='text-violet-600 xl:text-2xl'>دعوت از دوستان</p>
								</span>
								<p className='my-3 text-xs md:text-center xl:w-11/12 xl:text-base'>
									لینک معرفی به دوستانتان را در وبسایت یا شبکه های اجتماعی به
									اشتراک بگذارید
								</p>
							</div>
						</li>

						<li className='flex items-start gap-5 sm:items-center md:flex-col'>
							<span className='flex h-20 w-20 flex-auto shrink-0 items-center justify-center rounded-full border-8 border-violet-100 p-4 sm:grow-0 md:h-24 md:w-24 md:p-6 xl:h-36 xl:w-36 xl:border-[14px]'>
								<img src={money_img} alt='money img' />
							</span>

							<div className='md:flex md:flex-col md:items-center'>
								<span className='flex items-center gap-2 font-medium'>
									<p className='rounded-full bg-violet-600 px-2.5 py-0.5 text-xs text-white'>
										مرحله 3
									</p>
									<p className='text-violet-600 xl:text-2xl'>دریافت پاداش</p>
								</span>
								<p className='my-3 text-xs md:text-center xl:w-11/12 xl:text-base'>
									برای هر معامله کاربری که دعوت کردید تا ۳۰٪ از کارمزدش به شما
									تعلق می‌گیرد
								</p>
							</div>
						</li>
					</ul>
				</div>

				{/* Rules for inviting friends */}
				<div className='-my-4 flex w-full flex-col items-center gap-5 border-t-1 bg-white py-8 xl:w-11/12 xl:rounded-md xl:border-none xl:py-16 2xl:max-w-7xl'>
					<span className='flex w-10/12 items-center gap-2 sm:w-11/12'>
						<img src={user_logo} alt='user' className='h-auto w-9 md:w-12' />
						<p className='text-xl font-medium text-violet-600 xl:text-3xl'>
							قوانین دعوت از دوستان
						</p>
					</span>

					<ul className='w-10/12 sm:w-11/12 md:pr-10 xl:pr-14'>
						{rulesForInvitingFriends.map((rule) => (
							<li className='mb-5 text-justify font-light md:list-disc md:text-xl'>
								{rule}
							</li>
						))}
					</ul>
				</div>
			</section>
		</Layout>
	);
};

export default ReferralPage;
