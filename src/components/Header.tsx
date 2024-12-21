import appLogo from '../assets/logo.svg';

export function Header() {
  // const session = await getServerSession(authOptions);

  return (
    <header className='sticky left-0 top-0 border-b bg-white py-2'>
      <div className='mx-auto flex px-5 sm:max-w-[640px] md:max-w-[768px] lg:max-w-[1024px]'>
        <img
          className='dark:invert'
          src={appLogo}
          alt='Next1.js logo'
          width={110}
          height={50}
        />
        {/* <SignInOutBtn session={session} /> */}
      </div>
    </header>
  );
}
