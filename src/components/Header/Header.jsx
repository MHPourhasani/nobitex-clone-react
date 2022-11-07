import { useState } from 'react';
import { Link } from 'react-router-dom';

// component
import HamburgerMenu from '../Hamburger Menu/HamburgerMenu';

// image
import nobitexLogo from '../../assets/images/nobitex-logo.png';

// icons
import { MdMenu } from 'react-icons/md';
import { IoMdArrowDropdown } from 'react-icons/io';

const Header = () => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<header className='flex h-14 w-full items-center justify-between bg-black bg-opacity-95 px-2.5 font-vazirmatn text-white md:px-8 xl:h-20'>
			<section onClick={() => setIsOpen(!isOpen)} className='cursor-pointer lg:hidden'>
				<MdMenu className='h-auto w-8' />
				{isOpen ? <HamburgerMenu /> : null}
			</section>

			<section className='flex items-center'>
				<Link
					to='/'
					className='flex cursor-pointer items-center justify-center gap-2.5 md:gap-3.5'>
					<img src={nobitexLogo} alt='nobitex-logo' className='h-auto w-8 xl:w-11' />
					<span className='md:text-xl'>نوبیتـکس</span>
				</Link>

				<ul className='hidden xl:mr-7 xl:flex xl:items-center xl:gap-10 xl:text-[15px] xl:text-gray-200'>
					<li className='cursor-pointer transition-all ease-in hover:text-violet-400'>
						<Link to='/prices' className='flex items-center'>
							<span className='tracking-tighter'>قیمت لحظه ای رمزارز ها</span>
							<IoMdArrowDropdown />
						</Link>
					</li>
					<li className='cursor-pointer transition-all ease-in hover:text-violet-400'>
						<Link to='/policies/referral'>معرفی به دوستان</Link>
					</li>
					<li className='cursor-pointer transition-all ease-in hover:text-violet-400'>
						<Link to='/'>راهنمای استفاده</Link>
					</li>
					<li className='cursor-pointer transition-all ease-in hover:text-violet-400'>
						<Link to='/'>سوالی دارید؟</Link>
					</li>
				</ul>
			</section>

			<section className='flex items-center gap-5'>
				<Link to='/login' className='hidden sm:block sm:text-xs xl:text-[15px]'>
					ورود
				</Link>
				<Link
					to='/signup'
					className='rounded-sm bg-violet-500 px-4 py-1 text-xs tracking-tighter transition-all ease-in hover:bg-violet-600 xl:rounded xl:py-2.5 xl:px-6 xl:text-[15px]'>
					ثبت نام
				</Link>
			</section>
		</header>
	);
};

export default Header;
