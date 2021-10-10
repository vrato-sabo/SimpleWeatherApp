import { Fragment, useContext, useRef, useState } from 'react';
import { ErrorContext } from '../store/error-contex';
import { ShowContext } from '../store/show-context';
import bothApiCalls from '../utill/helper';
import submitHandler from '../utill/helper';
import HourlyForecast from './HourlyForecast';
import MainCard from './MainCard';
import Nav from './Nav';
import LoadingSpinner from './UI/LoadingSpinner';

function Searchbar(props) {
  const inputRef = useRef();
  const [currentData, setCurrentData] = useState();
  const [fiveData, setFiveDaysData] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const showCtx = useContext(ShowContext);
  const showSearchbar = showCtx.showSearchbar;
  const setShowSearchbar = showCtx.setShowSearchbar;
  const errorCtx = useContext(ErrorContext);
  const showError = errorCtx.showError;
  const setShowError = errorCtx.setShowError;

  async function submitHandler(e) {
    e.preventDefault();
    const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

    const input = inputRef.current.value;

    try {
      setIsLoading(true);

      const currentWatherResponse = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${API_KEY}&units=metric`
      );

      const currentData = await currentWatherResponse.json();

      const fiveDaysResponse = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${input}&appid=${API_KEY}&units=metric`
      );

      const fiveDaysData = await fiveDaysResponse.json();

      if (currentData.cod !== '404' || fiveDaysData.cod !== '404') {
        setCurrentData(currentData);
        setFiveDaysData(fiveDaysData);
        setIsLoading(false);
        // console.log(currentData);
        // console.log(fiveDaysData);
      } else {
        setShowError(true);
      }
    } catch (error) {}

    setIsLoading(false);
    setShowSearchbar(false);
  }

  return (
    <div>
      {showError && (
        <div className='text-center text-2xl mt-10'>
          <h1>
            We couldn&apos;t find the city you&apos;ve entered. Please enter
            different city.
          </h1>
        </div>
      )}
      {showSearchbar && (
        <div className='flex justify-center items-center mt-20 md:max-w-5xl md:mx-auto'>
          <form
            onSubmit={submitHandler}
            className='flex justify-center items-center h-20 flex-1'>
            <input
              className='text-center placeholder-gray-200 text-gray-400 text-opacity-80 text-5xl font-sans outline-none bg-white w-9/12 lg:w-1/2 rounded-full'
              type='text'
              placeholder='e.g. Bratislava'
              autoFocus={true}
              ref={inputRef}
            />
          </form>
        </div>
      )}
      <div>
        {isLoading ? (
          <div className='flex justify-center text-center mt-24'>
            <LoadingSpinner />
          </div>
        ) : (
          <Fragment>
            <MainCard data={currentData} />
            <HourlyForecast data={fiveData} />
          </Fragment>
        )}
      </div>
    </div>
  );
}

export default Searchbar;
