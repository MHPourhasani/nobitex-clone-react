import { Link } from 'react-router-dom';

// images
import nobitexLogo from '../../assets/images/nobitex-logo-lg.png';
import directDownload from '../../assets/images/direct-download.svg';
import bazarDownload from '../../assets/images/bazar-download.svg';
import myketDownload from '../../assets/images/myket-download.svg';
import simulatorDownload from '../../assets/images/simulator-download.svg';

// icons
import { AiOutlineTwitter } from 'react-icons/ai';
import { ImLinkedin2 } from 'react-icons/im';
import { FaTelegramPlane, FaInstagram } from 'react-icons/fa';
import { VscGlobe } from 'react-icons/vsc';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';

const Footer = () => {
	return (
		<footer className='w-full font-vazirmatn'>
			{/* contact support and FAQ section */}
			<section className='flex w-full flex-col items-center justify-between bg-gray-700 p-4 md:p-7 lg:flex-row xl:p-6'>
				<span className='text-xs text-white md:my-1 md:text-base lg:text-xl'>
					هفت روز هفته، در 24 ساعت شبانه‌روز پاسخگوی شما هستیم
				</span>

				<div className='mt-2 flex items-center lg:mt-0'>
					<span className='hidden lg:mx-5 lg:block lg:text-white'>
						support@nobitex.ir
					</span>
					<Link
						to='/contact'
						className='mx-1 rounded-sm border-2 border-teal-500 bg-white px-5 py-0.5 text-xs text-teal-500 hover:bg-teal-500 hover:text-white lg:rounded-md lg:px-4 lg:py-1 lg:text-base'>
						تماس با پشتیبانی
					</Link>
					<Link
						to='/faq'
						className='rounded-sm border-2 border-transparent bg-teal-500 px-5 py-0.5 text-xs text-white hover:bg-teal-600 lg:rounded-md lg:px-4 lg:py-1 lg:text-base'>
						سوالات متداول
					</Link>
				</div>
			</section>

			<section className='bg-black bg-opacity-95 px-4 md:px-5'>
				{/* (about nobitex) and (facilities and services) and (help and support) menus on screens smaller than 768 pixels  */}
				<section className='py-5 md:hidden'>
					{/* about nobitex details */}
					<details className='my-2 w-full'>
						<summary className='flex w-full items-center justify-between text-white'>
							<span className='text-sm font-medium'>درباره نوبیتکس</span>
							<MdOutlineKeyboardArrowDown className='h-auto w-5' />
						</summary>
						<ul className='text-xs text-gray-400 delay-1000'>
							<li className='my-3 hover:text-white'>
								<a href='https://nobitex.ir/about/'>درباره ما</a>
							</li>
							<li className='my-3 hover:text-white'>
								<a href='https://nobitex.ir/about/'>امنیت کیف پول</a>
							</li>
							<li className='my-3 hover:text-white'>
								<a href='https://nobitex.ir/policies/terms/'>قوانین و مقررات</a>
							</li>
							<li className='my-3 hover:text-white'>
								<a href='https://nobitex.ir/contact'>تماس با ما</a>
							</li>
							<li className='my-3 text-violet-300 hover:text-white'>
								<a href='https://jobs.nobitex.ir/jobs/'>فرصت‌های شغلی</a>
							</li>
						</ul>
					</details>

					{/* facilities and services details */}
					<details className='my-2 w-full'>
						<summary className='flex w-full items-center justify-between text-white'>
							<span className='text-sm font-medium'>امکانات و خدمات</span>
							<MdOutlineKeyboardArrowDown className='h-auto w-5' />
						</summary>
						<ul className='text-xs text-gray-400'>
							<li className='my-3 hover:text-white'>
								<a href='https://testnet.nobitex.ir/'>بازار آزمایشی نوبیتکس</a>
							</li>
							<li className='my-3 hover:text-white'>
								<a href='https://nobitex.ir/policies/referral/'>معرفی به دوستان</a>
							</li>
							<li className='my-3 hover:text-white'>
								<a href='https://apidocs.nobitex.ir/#api'>مستندات API</a>
							</li>
							<li className='my-3 hover:text-white'>
								<a href='https://nobitex.ir/annual-report/2021/'>گزارش سال 2021</a>
							</li>
							<li className='my-3 hover:text-white'>
								<a href='https://nobitex.ir/changes/'>گزارش تغییرات</a>
							</li>
						</ul>
					</details>

					{/* help and support section */}
					<details className='my-2 w-full'>
						<summary className='flex w-full items-center justify-between text-white'>
							<span className='text-sm font-medium'>راهنما و پشتیبانی</span>
							<MdOutlineKeyboardArrowDown className='h-auto w-5' />
						</summary>
						<ul className='text-xs text-gray-400'>
							<li className='my-3 hover:text-white'>
								<a href='https://nobitex.ir/faq/'>سوالات متداول</a>
							</li>
							<li className='my-3 hover:text-white'>
								<a href='https://nobitex.ir/policies/user-levels/'>
									احراز هویت و سطوح کاربری
								</a>
							</li>
							<li className='my-3 hover:text-white'>
								<a href='https://nobitex.ir/pricing/'>قیمت ها و کارمزدها</a>
							</li>
							<li className='my-3 hover:text-white'>
								<a href='https://help.nobitex.ir/kb/security/'>
									راهنمای امنیت حساب کاربری
								</a>
							</li>
							<li className='my-3 hover:text-white'>
								<a href='https://blog.nobitex.ir/'>نوبیتکس بلاگ</a>
							</li>
						</ul>
					</details>
				</section>

				{/* (about nobitex) and (facilities and services) and (help and support) sections on screens larger than 767 pixels  */}
				<section className='hidden md:flex md:items-start md:gap-x-32 md:py-10'>
					<div className='hidden xl:flex xl:items-center xl:gap-x-4'>
						<img src={nobitexLogo} alt='nobitex logo' />
						<span className='text-4xl font-medium text-white'>نوبیتکس</span>
					</div>

					{/* about nobitex section */}
					<div>
						<span className='text-2xl font-medium text-white md:text-xl'>
							درباره نوبیتکس
						</span>

						<ul className='mt-6 text-gray-500'>
							<li className='my-3 hover:text-white'>
								<a href='https://nobitex.ir/about/'>درباره ما</a>
							</li>
							<li className='my-3 hover:text-white'>
								<a href='https://nobitex.ir/about/'>امنیت کیف پول</a>
							</li>
							<li className='my-3 hover:text-white'>
								<a href='https://nobitex.ir/policies/terms/'>قوانین و مقررات</a>
							</li>
							<li className='my-3 hover:text-white'>
								<a href='https://nobitex.ir/contact'>تماس با ما</a>
							</li>
							<li className='my-3 text-violet-300 hover:text-white'>
								<a href='https://jobs.nobitex.ir/jobs/'>فرصت‌های شغلی</a>
							</li>
						</ul>
					</div>

					{/* facilities and services section */}
					<div>
						<span className='text-2xl font-medium text-white md:text-xl'>
							امکانات و خدمات
						</span>

						<ul className='mt-6 text-gray-500'>
							<li className='my-1.5 hover:text-white'>
								<a href='https://testnet.nobitex.ir/'>بازار آزمایشی نوبیتکس</a>
							</li>
							<li className='my-1.5 hover:text-white'>
								<a href='https://nobitex.ir/policies/referral/'>معرفی به دوستان</a>
							</li>
							<li className='my-1.5 hover:text-white'>
								<a href='https://apidocs.nobitex.ir/#api'>مستندات API</a>
							</li>
							<li className='my-1.5 hover:text-white'>
								<a href='https://nobitex.ir/annual-report/2021/'>گزارش سال 2021</a>
							</li>
							<li className='my-1.5 hover:text-white'>
								<a href='https://nobitex.ir/changes/'>گزارش تغییرات</a>
							</li>
						</ul>
					</div>

					{/* help and support section */}
					<div>
						<span className='text-2xl font-medium text-white md:text-xl'>
							راهنما و پشتیبانی
						</span>

						<ul className='mt-6 text-gray-500'>
							<li className='my-1.5 hover:text-white'>
								<a href='https://nobitex.ir/faq/'>سوالات متداول</a>
							</li>
							<li className='my-1.5 hover:text-white'>
								<a href='https://nobitex.ir/policies/user-levels/'>
									احراز هویت و سطوح کاربری
								</a>
							</li>
							<li className='my-1.5 hover:text-white'>
								<a href='https://nobitex.ir/pricing/'>قیمت ها و کارمزدها</a>
							</li>
							<li className='my-1.5 hover:text-white'>
								<a href='https://help.nobitex.ir/kb/security/'>
									راهنمای امنیت حساب کاربری
								</a>
							</li>
							<li className='my-1.5 hover:text-white'>
								<a href='https://blog.nobitex.ir/'>نوبیتکس بلاگ</a>
							</li>
						</ul>
					</div>
				</section>

				{/* download app section */}
				<section className='flex flex-col items-center justify-between xl:flex-row'>
					<span className='mb-5 text-xs tracking-tight text-white md:text-base'>
						با اپلیکیشن موبایل نوبیتکس از هیچ معامله‌ای عقب نمی‌مونی!
					</span>

					{/* direct download app */}
					<div className='flex flex-wrap items-center gap-4 sm:gap-x-4 md:mb-6 md:gap-x-6'>
						<a href='https://cdn.nobitex.ir/nobitex.apk'>
							<img
								src={directDownload}
								alt='direct download'
								className='h-auto w-32 rounded-sm md:w-40'
							/>
						</a>

						{/* bazar download app */}
						<a href='https://cdn.nobitex.ir/nobitex.apk'>
							<img
								src={bazarDownload}
								alt='bazar download'
								className='h-auto w-32 rounded-sm bg-black md:w-40'
							/>
						</a>

						{/* myket download app */}
						<a href='https://myket.ir/app/market.nobitex'>
							<img
								src={myketDownload}
								alt='myket download'
								className='h-auto w-32 rounded-sm bg-black md:w-40'
							/>
						</a>

						{/* simulator download app */}
						<a href='https://cdn.nobitex.ir/nobitextestnet.apk'>
							<img
								src={simulatorDownload}
								alt='simulator download'
								className='h-auto w-32 rounded-sm md:w-40'
							/>
						</a>
					</div>
				</section>

				<section className='flex flex-col items-center justify-between px-5 py-10 md:border-t-2 md:border-gray-400 xl:flex-row'>
					{/* social media section */}
					<div className='flex items-center gap-x-4 md:gap-x-6'>
						{/* twitter social media */}
						<Link
							to='https://www.linkedin.com/company/nobitexmarket/'
							className='flex h-8 w-8 items-center justify-center rounded-full bg-gray-600 text-white hover:border-4 hover:bg-transparent md:h-11 md:w-11'>
							<AiOutlineTwitter className='h-auto w-5 md:w-7' />
						</Link>

						{/* linkedin social media */}
						<Link
							to='https://www.linkedin.com/company/nobitexmarket/'
							className='flex h-8 w-8 items-center justify-center rounded-full bg-gray-600 text-white hover:border-4 hover:bg-transparent md:h-11 md:w-11'>
							<ImLinkedin2 className='h-auto w-4 md:w-5' />
						</Link>

						{/* telegram social media */}
						<Link
							to='https://www.linkedin.com/company/nobitexmarket/'
							className='flex h-8 w-8 items-center justify-center rounded-full bg-gray-600 text-white hover:border-4 hover:bg-transparent md:h-11 md:w-11'>
							<FaTelegramPlane className='h-auto w-4 md:w-6' />
						</Link>

						{/* instagram social media */}
						<Link
							to='https://www.linkedin.com/company/nobitexmarket/'
							className='flex h-8 w-8 items-center justify-center rounded-full bg-gray-600 text-white hover:border-4 hover:bg-transparent md:h-11 md:w-11'>
							<FaInstagram className='h-auto w-5 md:w-7' />
						</Link>
					</div>

					<div className='flex flex-col-reverse items-center gap-x-4 font-light text-gray-400 xl:flex-row'>
						{/* copy write text */}
						<span dir='ltr' className='text-xs md:text-base'>
							© 2016-2022 NOBITEX, v3.42.123
						</span>

						<div className='my-3 flex items-center gap-x-2'>
							{/* nobitex logo */}
							<div className='flex items-center gap-x-2 xl:hidden'>
								<img src={nobitexLogo} alt='nobitex logo' className='h-auto w-8' />
								<span className='text-2xl font-medium text-white'>نوبیتکس</span>
							</div>

							{/* change language button */}
							<button className='flex items-center gap-x-2 rounded-md border-2 border-gray-400 py-0.5 px-4 md:px-5 md:py-1'>
								<VscGlobe className='h-auto w-4 text-white md:w-6' />
								<span className='text-xs text-gray-300 md:text-base'>English</span>
							</button>
						</div>
					</div>
				</section>
			</section>
		</footer>
	);
};

export default Footer;
