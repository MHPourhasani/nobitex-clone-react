import { Link } from 'react-router-dom';
import nobitexLogo from '../../assets/images/nobitex-logo.png';

// icons
import { MdMenu } from 'react-icons/md';
import { IoMdArrowDropdown } from 'react-icons/io';

const Header = () => {
	return (
		<header className='flex h-14 w-full items-center justify-between bg-black bg-opacity-95 px-2.5 font-vazirmatn text-white md:px-6 lg:h-16 lg:px-8 xl:px-16'>
			<section className='lg:hidden'>
				<MdMenu className='h-auto w-8' />
			</section>

			<section className='flex items-center'>
				<Link to='/' className='mr-5 flex cursor-pointer items-center justify-center'>
					<img src={nobitexLogo} alt='nobitex-logo' className='md: h-auto w-8 xl:w-10' />
					<span className='mr-3 md:mr-4 md:text-xl'>نوبیتکس</span>
				</Link>

				<ul className='hidden lg:mr-7 lg:flex lg:items-center lg:gap-x-10 lg:text-xs lg:text-gray-200 xl:text-[15px]'>
					<li className='cursor-pointer hover:text-violet-400'>
						<Link to='/' className='flex items-center'>
							<span>قیمت لحظه ای رمزارز ها</span>
							<IoMdArrowDropdown />
						</Link>
					</li>
					<li className='cursor-pointer hover:text-violet-400'>
						<Link to='/'>معرفی به دوستان</Link>
					</li>
					<li className='cursor-pointer hover:text-violet-400'>
						<Link to='/'>راهنمای استفاده</Link>
					</li>
					<li className='cursor-pointer hover:text-violet-400'>
						<Link to='/'>سوالی دارید؟</Link>
					</li>
				</ul>
			</section>

			<section className='flex items-center'>
				<Link to='/login' className='hidden sm:block sm:text-xs xl:text-[15px]'>
					ورود
				</Link>
				<Link
					to='/signup'
					className='rounded-sm bg-violet-500 px-4 py-1 text-xs tracking-tighter hover:bg-violet-600 lg:mr-5 xl:mr-6 xl:rounded xl:py-2.5 xl:px-6 xl:text-[15px]'>
					ثبت نام
				</Link>
			</section>
		</header>
	);
};

export default Header;
