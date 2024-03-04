import image from '../assets/SD=15481.jpg'

const Header = () => {
	return (
		<nav className="py-6 md:py-8 fixed top-0 w-full !bg-[#191D26] z-50">
			<div className="container mx-auto flex items-center justify-between gap-x-6">
				<a href="/">
				<img className="inline-block h-8 w-8 rounded-full ring-2 ring-white" src={image} alt="img"/>

				</a>
			</div>
		</nav>

	);
};

export default Header;