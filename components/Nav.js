import Link from 'next/link';
import { Fragment, useContext, useState } from 'react';
import { ErrorContext } from '../store/error-contex';
import { ShowContext } from '../store/show-context';
import Searchbar from './Searchbar';

function Nav(props) {
  const showCtx = useContext(ShowContext);
  const errorCtx = useContext(ErrorContext);
  const showSearchbar = showCtx.showSearchbar;
  const [showIt, setShowIt] = useState();

  function clickHandler() {
    errorCtx.setShowError(false);
    showCtx.setShowSearchbar(!showSearchbar);
  }

  function reloadPage() {
    window.location.reload();
  }
  return (
    <Fragment>
      <div className='flex justify-between items-center bg-navgray h-12 w-full shadow-xl pb-2'>
        <Link href='/'>
          <a onClick={reloadPage} className='ml-4 mt-3 text-xl'>
            SimpleWeatherApp
          </a>
        </Link>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='h-6 w-6 mr-4 mt-3 cursor-pointer hover:opacity-70 hover:scale-y-105'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
          onClick={clickHandler}>
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
          />
        </svg>
      </div>
      {showIt && <Searchbar />}
    </Fragment>
  );
}

export default Nav;
