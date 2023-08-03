function Header() {
    return (
        <div className='flex justify-center py-4 px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8'>
            <div className='flex justify-between w-full'>
                <div><img src="./generic_logo.png" className="w-24" /></div>
                <div className='flex items-center gap-8'>
                    <a className="group font-medium tracking-wide text-[#071952] hover:text-[#35A29F] transition-all duration-150 ease-in-out hidden md:block" href="#">
                        <span className="bg-left-bottom bg-gradient-to-r from-[#35A29F] to-[#35A29F] bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
                            Discover
                        </span>
                    </a>
                    <a className="group font-medium tracking-wide text-[#071952] hover:text-[#35A29F] transition-all duration-150 ease-in-out hidden md:block" href="#">
                        <span className="bg-left-bottom bg-gradient-to-r from-[#35A29F] to-[#35A29F] bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
                            For Job Seekers
                        </span>
                    </a>
                    <a className="group font-medium tracking-wide text-[#071952] hover:text-[#35A29F] transition-all duration-150 ease-in-out hidden md:block" href="#">
                        <span className="bg-left-bottom bg-gradient-to-r from-[#35A29F] to-[#35A29F] bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
                            For Companies
                        </span>
                    </a>
                    <button className='py-[0.5rem] px-6 font-medium tracking-wide text-[#071952] transition-all duration-200 ease-in-out rounded shadow-sm border border-[#071952] hover:bg-[#14848a49] hover:text-[#071952] focus:shadow-outline focus:outline-none'>Login</button>
                    <button className='py-[0.5rem] px-6 font-medium tracking-wide text-white transition-all duration-200 ease-in-out rounded shadow-md bg-[#0B666A] hover:bg-[#071952] focus:shadow-outline focus:outline-none'>Sign up</button>
                </div>
            </div>
        </div>
    )
}

export default Header