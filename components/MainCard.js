import { now } from '../utill/helper';
import Image from 'next/image';
import { Fragment, useState } from 'react';

const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

function MainCard(props) {
  const [showMore, setShowMore] = useState(false);

  function showMoreHandler() {
    setShowMore(!showMore);
  }
  return (
    <section className=' bg-gray-100 bg-opacity-20 hover:bg-gray-100 hover:bg-opacity-30 mx-6 max-w-4xl 896:mx-auto rounded-xl'>
      {props.data && (
        <Fragment>
          <div className='flex-col justify-center items-center text-center my-5 text-xl space-x-2 md:mt-8 lg:mt-10'>
            <h1 className=' text-5xl mt-16 mb-3'>{props.data.name}</h1>
            <span className=''>({props.data.sys.country})</span>
            <p className=' text-sm my-2 text-gray-600'>{now}</p>
          </div>
          <div className='flex-col text-center justify-center items-center'>
            <div>
              <p className=' text-7xl my-5 hover:scale-105 hover:animate-pulse cursor-default lg:text-8xl'>
                {Math.trunc(props.data.main.temp)}°C
              </p>
              <Image
                src={`http://openweathermap.org/img/w/${props.data.weather[0].icon}.png`}
                width={80}
                height={80}
                alt='waether icon'
              />
            </div>

            <div>
              {/* <div className='flex justify-center '>
              <p className=' my-4 text-xl text-gray-200'>
              {Math.trunc(props.data.main.temp_min)}°C |{' '}
              {Math.trunc(props.data.main.temp_max)}
              °C
              </p>
            </div> */}
              <p className='my-4 text-xl'>
                Feels like {Math.trunc(props.data.main.feels_like)}°C
              </p>
            </div>
          </div>
        </Fragment>
      )}
      <div className='text-center text-4xl font-semibold capitalize'>
        {props.data && (
          <p className='pb-5'>{props.data.weather[0].description}</p>
        )}
      </div>
    </section>
  );
}

export default MainCard;
