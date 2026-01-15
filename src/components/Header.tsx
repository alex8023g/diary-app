import appLogo from '../assets/logo.svg';
import { TabsView } from './TabsView';

export function Header() {
  return (
    <header className='sticky left-0 top-0 z-20 border-b bg-white'>
      <div className='mx-auto flex px-5 py-2 sm:max-w-[640px] md:max-w-[768px] lg:max-w-[1024px]'>
        <img
          className='mr-auto dark:invert'
          src={appLogo}
          alt='Next1.js logo'
          width={110}
          height={50}
        />
        <TabsView />
      </div>
    </header>
  );
}
