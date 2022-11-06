import { Link } from 'react-router-dom';
import { Disclosure } from '@headlessui/react';

// image
import nobitexLogo from '../../assets/images/nobitex-logo.png';

// icons
import { AiOutlineTwitter } from 'react-icons/ai';
import { ImLinkedin2 } from 'react-icons/im';
import { FaTelegramPlane, FaInstagram } from 'react-icons/fa';
import { MdPhoneInTalk } from 'react-icons/md';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';

const Footer = () => {
	return (
		<footer className='flex w-full flex-col justify-center bg-black bg-opacity-95 py-4 font-vazirmatn xl:px-4 2xl:items-center'>
			{/* contact us and FAQ btns section */}
			<section className='flex w-full flex-col items-center justify-between rounded-md bg-gray-800 p-2 md:flex-row 2xl:max-w-7xl'>
				<span className='flex items-center gap-2 text-xs text-white md:my-1 md:text-base'>
					<MdPhoneInTalk className='h-auto w-5' />
					<p>هفت روز هفته، 24 ساعت شبانه روز در کنار شما هستیم</p>
				</span>

				<div className='mt-4 flex items-center gap-2 md:mt-0'>
					<Link
						to='/contact'
						className='rounded-md border-1 border-white px-7 py-2 text-sm text-white hover:bg-white hover:text-black hover:transition-all hover:ease-in-out md:py-2.5 lg:text-base'>
						تماس با ما
					</Link>
					<Link
						to='/faq'
						className='rounded-md border-1 border-transparent bg-violet-600 px-7 py-2 text-sm text-white hover:bg-violet-700 hover:transition-all hover:ease-in-out md:py-2.5 lg:text-base'>
						سوالات متداول
					</Link>
				</div>
			</section>

			{/* (nobitex) and (facilities) and (help) menus for screens smaller than 768 pixels */}
			<section className='flex w-full flex-col gap-2.5 p-4 md:hidden'>
				{/* nobitex disclosure */}
				<Disclosure as='div'>
					{({ open }) => (
						<>
							<Disclosure.Button className='flex w-full justify-between pb-1 text-white'>
								<span className='font-medium'>نوبیتکس</span>
								<MdOutlineKeyboardArrowDown
									className={`${
										open ? 'rotate-180 ' : ''
									} h-5 w-5 transition-all delay-150 ease-in`}
								/>
							</Disclosure.Button>
							<Disclosure.Panel>
								<ul className='flex flex-col gap-3.5 pb-2.5 text-xs text-gray-400'>
									<li className='hover:text-white'>
										<a href='https://nobitex.ir/about/'>درباره ما</a>
									</li>
									<li className='hover:text-white'>
										<a href='https://blog.nobitex.ir/'>بلاگ</a>
									</li>
									<li className='hover:text-white'>
										<a href='https://nobitex.ir/policies/terms/'>
											قوانین و مقررات
										</a>
									</li>
									<li className='hover:text-white'>
										<a href='https://nobitex.ir/annual-report/2021/'>
											گزارش سال 2021
										</a>
									</li>
									<li className='hover:text-white'>
										<a href='https://jobs.nobitex.ir/jobs/'>فرصت‌های شغلی</a>
									</li>
								</ul>
							</Disclosure.Panel>
						</>
					)}
				</Disclosure>

				{/* facilities disclosure */}
				<Disclosure as='div'>
					{({ open }) => (
						<>
							<Disclosure.Button className='flex w-full justify-between pb-1 text-white'>
								<span className='font-medium'>امکانات</span>
								<MdOutlineKeyboardArrowDown
									className={`${
										open ? 'rotate-180 ' : ''
									} h-5 w-5 transition-all delay-150 ease-in`}
								/>
							</Disclosure.Button>
							<Disclosure.Panel>
								<ul className='flex flex-col gap-3.5 pb-2.5 text-xs text-gray-400'>
									<li className='hover:text-white'>
										<a href='https://testnet.nobitex.ir/'>
											بازار آزمایشی نوبیتکس
										</a>
									</li>
									<li className='hover:text-white'>
										<Link to='/policies/referral'>معرفی به دوستان</Link>
									</li>
									<li className='hover:text-white'>
										<a href='https://apidocs.nobitex.ir'>مستندات API</a>
									</li>
									<li className='hover:text-white'>
										<a href='https://nobitex.ir/changes/'>گزارش تغییرات</a>
									</li>
								</ul>
							</Disclosure.Panel>
						</>
					)}
				</Disclosure>

				{/* help disclosure */}
				<Disclosure as='div'>
					{({ open }) => (
						<>
							<Disclosure.Button className='flex w-full justify-between pb-1 text-white'>
								<span className='font-medium'>راهنما</span>
								<MdOutlineKeyboardArrowDown
									className={`${
										open ? 'rotate-180 ' : ''
									} h-5 w-5 transition-all delay-150 ease-in`}
								/>
							</Disclosure.Button>
							<Disclosure.Panel>
								<ul className='flex flex-col gap-3.5 pb-2.5 text-xs text-gray-400'>
									<li className='hover:text-white'>
										<a href='https://nobitex.ir/faq/'>سوالات متداول</a>
									</li>
									<li className='hover:text-white'>
										<a href='https://nobitex.ir/policies/user-levels/'>
											احراز هویت و سطوح کاربری
										</a>
									</li>
									<li className='hover:text-white'>
										<a href='https://nobitex.ir/pricing/'>قیمت ها و کارمزدها</a>
									</li>
									<li className='hover:text-white'>
										<a href='https://help.nobitex.ir/kb/security/'>
											امنیت حساب کاربری
										</a>
									</li>
									<li className='hover:text-white'>
										<a href='https://nobitex.ir/why/security'>امنیت کیف پول</a>
									</li>
								</ul>
							</Disclosure.Panel>
						</>
					)}
				</Disclosure>

				{/* contact us disclosure */}
				<Disclosure as='div'>
					{({ open }) => (
						<>
							<Disclosure.Button className='flex w-full justify-between pb-1 text-white'>
								<span className='font-medium'>ارتباط با ما</span>
								<MdOutlineKeyboardArrowDown
									className={`${
										open ? 'rotate-180 ' : ''
									} h-5 w-5 transition-all delay-150 ease-in`}
								/>
							</Disclosure.Button>
							<Disclosure.Panel>
								<ul className='flex flex-col gap-3.5 pb-2.5 text-xs text-gray-400'>
									<li className='hover:text-white'>
										<a href='https://nobitex.ir/contact'>تماس با ما</a>
									</li>
									<li className='hover:text-white'>
										<a href='mailto:support@nobitex.ir'>support@nobitex.ir</a>
									</li>
								</ul>
							</Disclosure.Panel>
						</>
					)}
				</Disclosure>
			</section>

			{/* (about nobitex) and (facilities) and (help) sections for screens larger than 768 pixels */}
			<section className='px-4 md:px-5 2xl:max-w-7xl'>
				<section className='hidden w-full md:grid md:grid-cols-2 md:gap-5 md:py-5 xl:grid-cols-4'>
					{/* about nobitex section */}
					<div>
						<span className='text-2xl font-medium text-white'>نوبیتکس</span>

						<ul className='mt-3 flex flex-col gap-2 text-gray-500'>
							<li className='hover:text-white'>
								<a href='https://nobitex.ir/about/'>درباره ما</a>
							</li>
							<li className='hover:text-white'>
								<a href='https://blog.nobitex.ir/'>بلاگ</a>
							</li>
							<li className='hover:text-white'>
								<a href='https://nobitex.ir/policies/terms/'>قوانین و مقررات</a>
							</li>
							<li className='hover:text-white'>
								<a href='https://nobitex.ir/annual-report/2021/'>گزارش سال 2021</a>
							</li>
							<li className='hover:text-white'>
								<a href='https://jobs.nobitex.ir/jobs/'>فرصت‌های شغلی</a>
							</li>
						</ul>
					</div>

					{/* facilities section */}
					<div>
						<span className='text-2xl font-medium text-white'>امکانات</span>

						<ul className='mt-3 flex flex-col gap-2 text-gray-500'>
							<li className='text-violet-300 hover:text-white'>
								<a href='https://nobitex.ir/application/'>دانلود اپلیکیشن</a>
							</li>
							<li className='hover:text-white'>
								<a href='https://testnet.nobitex.ir/'>بازار آزمایشی نوبیتکس</a>
							</li>
							<li className='hover:text-white'>
								<Link to='/policies/referral'>معرفی به دوستان</Link>
							</li>
							<li className='hover:text-white'>
								<a href='https://apidocs.nobitex.ir/#api'>مستندات API</a>
							</li>
							<li className='hover:text-white'>
								<a href='https://nobitex.ir/changes/'>گزارش تغییرات</a>
							</li>
						</ul>
					</div>

					{/* help section */}
					<div>
						<span className='text-2xl font-medium text-white'>راهنما</span>

						<ul className='mt-3 flex flex-col gap-2 text-gray-500'>
							<li className='hover:text-white'>
								<a href='https://nobitex.ir/faq/'>سوالات متداول</a>
							</li>
							<li className='hover:text-white'>
								<a href='https://nobitex.ir/policies/user-levels/'>
									احراز هویت و سطوح کاربری
								</a>
							</li>
							<li className='hover:text-white'>
								<a href='https://nobitex.ir/pricing/'>قیمت ها و کارمزدها</a>
							</li>
							<li className='hover:text-white'>
								<a href='https://help.nobitex.ir/kb/security/'>امنیت حساب کاربری</a>
							</li>
							<li className='hover:text-white'>
								<a href='https://nobitex.ir/why/security/'>امنیت کیف پول</a>
							</li>
						</ul>
					</div>

					{/* contact us section */}
					<div>
						<span className='text-2xl font-medium text-white'>ارتباط با ما</span>

						<ul className='mt-3 flex flex-col gap-2 text-gray-500'>
							<li className='hover:text-white'>
								<a href='https://nobitex.ir/contact'>تماس با ما</a>
							</li>
							<li className='hover:text-white'>
								<a href='mailto:support@nobitex.ir'>
									support@nobitex.ir
								</a>
							</li>
						</ul>

						{/* social media section for screens larger than 768 pixels */}
						<div className='mt-4 flex flex-col gap-2'>
							<span className='text-white'>با ما در دنیای رمزارزها همراه شو!</span>

							<div className='flex items-center gap-x-4 md:gap-x-8'>
								{/* linkedin social media */}
								<Link
									to='https://www.linkedin.com/company/nobitexmarket/'
									className='flex h-8 w-8 items-center justify-center rounded-md bg-white text-gray-900 md:h-8 md:w-8'>
									<ImLinkedin2 className='h-auto w-4 md:w-5' />
								</Link>

								{/* telegram social media */}
								<Link
									to='https://t.me/nobitexmarket/'
									className='flex h-8 w-8 items-center justify-center rounded-full bg-white text-gray-900 md:h-8 md:w-8'>
									<FaTelegramPlane className='h-auto w-4 md:w-5' />
								</Link>

								{/* instagram social media */}
								<Link
									to='https://www.instagram.com/nobitex_market/'
									className='flex h-8 w-8 items-center justify-center rounded-full bg-white text-gray-900 md:h-8 md:w-8'>
									<FaInstagram className='h-auto w-5 md:w-5' />
								</Link>

								{/* twitter social media */}
								<Link
									to='https://twitter.com/nobitexmarket/'
									className='flex h-8 w-8 items-center justify-center rounded-full bg-white text-gray-900 md:h-8 md:w-8'>
									<AiOutlineTwitter className='h-auto w-5 md:w-5' />
								</Link>
							</div>
						</div>
					</div>
				</section>

				{/* social media section for screens smaller than 768 pixels */}
				<section className='flex flex-col items-center justify-center gap-2 md:hidden'>
					<div className='flex items-center gap-8'>
						{/* linkedin social media */}
						<Link
							to='https://www.linkedin.com/company/nobitexmarket/'
							className='flex h-8 w-8 items-center justify-center rounded-md bg-white text-gray-900 md:h-8 md:w-8'>
							<ImLinkedin2 className='h-auto w-5' />
						</Link>

						{/* telegram social media */}
						<Link
							to='https://t.me/nobitexmarket/'
							className='flex h-8 w-8 items-center justify-center rounded-full bg-white text-gray-900 md:h-8 md:w-8'>
							<FaTelegramPlane className='h-auto w-5' />
						</Link>

						{/* instagram social media */}
						<Link
							to='https://www.instagram.com/nobitex_market/'
							className='flex h-8 w-8 items-center justify-center rounded-full bg-white text-gray-900 md:h-8 md:w-8'>
							<FaInstagram className='h-auto w-5 md:w-5' />
						</Link>

						{/* twitter social media */}
						<Link
							to='https://twitter.com/nobitexmarket/'
							className='flex h-8 w-8 items-center justify-center rounded-full bg-white text-gray-900 md:h-8 md:w-8'>
							<AiOutlineTwitter className='h-auto w-5 md:w-5' />
						</Link>
					</div>

					<span className='text-white'>با ما در دنیای رمزارزها همراه شو!</span>
				</section>

				{/* nobitex logo and download app link section */}
				<section className='my-3 flex items-center justify-between rounded-md bg-gray-700 py-2.5 px-2 md:hidden'>
					<div className='flex items-center gap-x-2 xl:hidden'>
						<img src={nobitexLogo} alt='nobitex logo' className='h-auto w-10' />
						<span className='flex flex-col text-white'>
							<span className='font-medium'>نوبیتکس</span>
							<span className='text-[8px]'>بازار آنلاین رمزارزها</span>
						</span>
					</div>

					<a
						href='https://nobitex.ir/application/'
						rel='noopener noreferrer'
						target='_blank'
						className='rounded-md bg-violet-600 py-1.5 px-2 text-white hover:bg-violet-700 hover:transition-all hover:ease-in-out'>
						دانلود اپلیکیشن
					</a>
				</section>

				{/* copy write text */}
				<section
					dir='ltr'
					className='flex flex-col items-center justify-center pb-5 pt-1 text-xs text-gray-500 md:pb-0 md:text-base'>
					© 2016-2022 NOBITEX, v3.42.123
				</section>
			</section>
		</footer>
	);
};

export default Footer;
