import { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import { Dialog, Transition } from '@headlessui/react';

// icons
import { FiArrowRight } from 'react-icons/fi';
import { MdInsertChart } from 'react-icons/md';
import { IoMdArrowDropdown } from 'react-icons/io';
import { HiDocumentText } from 'react-icons/hi';
import { FaUserPlus, FaTelegramPlane, FaInstagram } from 'react-icons/fa';
import { BsFillQuestionCircleFill } from 'react-icons/bs';
import { AiOutlineTwitter } from 'react-icons/ai';
import { ImLinkedin2 } from 'react-icons/im';

const HamburgerMenu = () => {
	const [openHamburgerMenu, setOpenHamburgerMenu] = useState(true);
	const [openPrices, setOpenPrices] = useState(false);

	return (
		<Transition.Root show={openHamburgerMenu} as={Fragment}>
			<Dialog
				as='div'
				className='relative z-30 flex h-full flex-col justify-center bg-white font-vazirmatn'
				onClose={setOpenHamburgerMenu}>
				<Transition.Child
					as={Fragment}
					enter='ease-in-out duration-500'
					enterFrom='opacity-0'
					enterTo='opacity-100'
					leave='ease-in-out duration-500'
					leaveFrom='opacity-100'
					leaveTo='opacity-0'>
					<div className='fixed inset-0 backdrop-blur-sm' />
				</Transition.Child>

				<div className='fixed inset-0 w-full drop-shadow-2xl'>
					<div className='pointer-events-none fixed right-0 w-10/12 sm:w-6/12 md:w-5/12'>
						<Transition.Child
							as={Fragment}
							enter='transform transition ease-in-out duration-500 sm:duration-700'
							enterFrom='translate-x-full'
							enterTo='translate-x-0'
							leave='transform transition ease-in-out duration-500 sm:duration-700'
							leaveFrom='translate-x-0'
							leaveTo='translate-x-full'>
							<Dialog.Panel className='pointer-events-auto h-screen bg-white p-4'>
								<button
									className='text-gray-400 outline-none'
									onClick={() => setOpenHamburgerMenu(false)}>
									<FiArrowRight className='h-auto w-7' aria-hidden='true' />
								</button>

								<div>
									<Link
										to='/login'
										className='flex h-9 w-full items-center justify-center rounded-md border-1 border-violet-500 text-violet-500 transition-all ease-in hover:bg-violet-500 hover:text-white'>
										ورود
									</Link>

									<Link
										to='/signup'
										className='mt-4 flex h-9 w-full items-center justify-center rounded-md border-1 border-violet-500 bg-violet-500 tracking-tighter text-white transition-all ease-in hover:border-violet-600 hover:bg-violet-600'>
										ثبت نام
									</Link>
								</div>

								<section className='pointer-events-auto mt-10 flex w-full flex-col items-start gap-7 bg-white'>
									<div className='flex w-full flex-col gap-3'>
										<div
											onClick={() => setOpenPrices(!openPrices)}
											className='flex cursor-pointer items-center gap-5 rounded-md transition-all ease-in hover:text-violet-500'>
											<MdInsertChart className='h-auto w-7 text-gray-400' />
											<div className='flex items-center'>
												<span className='font-light tracking-tighter'>
													قیمت لحظه ای رمزارزها
												</span>
												<IoMdArrowDropdown />
											</div>
										</div>

										{openPrices ? (
											<div className='flex w-full flex-col gap-5 rounded-md border-1 py-2 px-4 text-sm shadow-md shadow-gray-300'>
												<Link
													to='/'
													className='transition-all ease-in hover:text-violet-500'>
													بیت کوین
												</Link>
												<Link
													to='/'
													className='transition-all ease-in hover:text-violet-500'>
													اتریوم
												</Link>
												<Link
													to='/'
													className='transition-all ease-in hover:text-violet-500'>
													تتر
												</Link>
												<Link
													to='/'
													className='transition-all ease-in hover:text-violet-500'>
													بیت کوین کش
												</Link>
												<Link
													to='/prices'
													className='border-t-1 border-gray-700 pt-3 transition-all ease-in hover:text-violet-500'>
													سایر ارز های دیجیتال
												</Link>
											</div>
										) : null}
									</div>

									<Link
										to='/policies/referral'
										className='flex items-center gap-5 rounded-md font-light transition-all ease-in hover:text-violet-500'>
										<FaUserPlus className=' h-auto w-6 text-gray-400' />
										<span>معرفی به دوستان</span>
									</Link>

									<Link
										to='/'
										className='flex items-center gap-5 rounded-md font-light transition-all ease-in hover:text-violet-500'>
										<HiDocumentText className='h-auto w-7 text-gray-400' />
										<span>راهنمای استفاده</span>
									</Link>

									<Link
										to='/'
										className='flex items-center gap-5 rounded-md font-light transition-all ease-in hover:text-violet-500'>
										<BsFillQuestionCircleFill className='h-auto w-5 text-gray-400' />
										<span>سوالی دارید؟</span>
									</Link>
								</section>

								<section className='fixed bottom-5 flex -translate-x-1/2 items-center justify-center gap-4 text-white md:bottom-8'>
									{/* instagram social media */}
									<a
										href='https://www.instagram.com/nobitex_market/'
										target='_blank'
										rel='noreferrer'
										className='flex h-6 w-6 items-center justify-center rounded-full bg-gray-600'>
										<FaInstagram className='h-auto w-4' />
									</a>

									{/* telegram social media */}
									<a
										href='https://t.me/nobitexmarket/'
										target='_blank'
										rel='noreferrer'
										className='flex h-6 w-6 items-center justify-center rounded-full bg-gray-600'>
										<FaTelegramPlane className='h-auto w-4' />
									</a>

									{/* linkedin social media */}
									<a
										href='https://www.linkedin.com/company/nobitexmarket/'
										target='_blank'
										rel='noreferrer'
										className='flex h-6 w-6 items-center justify-center rounded-full bg-gray-600'>
										<ImLinkedin2 className='h-auto w-4' />
									</a>

									{/* twitter social media */}
									<a
										href='https://twitter.com/nobitexmarket/'
										target='_blank'
										rel='noreferrer'
										className='flex h-6 w-6 items-center justify-center rounded-full bg-gray-600'>
										<AiOutlineTwitter className='h-auto w-4' />
									</a>
								</section>
							</Dialog.Panel>
						</Transition.Child>
					</div>
				</div>
			</Dialog>
		</Transition.Root>
	);
};

export default HamburgerMenu;
