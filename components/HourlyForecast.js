import Image from 'next/image';
import { Fragment, useRef } from 'react';

function HourlyForecast(props) {
  return (
    <div className=' pb-12'>
      {props.data && (
        <Fragment>
          <h1 className=' text-3xl text-center font-semibold my-8'>Hourly</h1>
          <div className='flex justify-evenly '>
            <div className='hourly-card'>
              <p>{props.data.list[0].dt_txt.slice(10, 16)}</p>
              <Image
                src={`http://openweathermap.org/img/w/${props.data.list[0].weather[0].icon}.png`}
                width={40}
                height={40}
                alt='icon'
              />
              <p>{Math.trunc(props.data.list[0].main.temp)}°C</p>
            </div>
            {/* <div className='flex flex-1 flex-col justify-center items-center border-l-2 border-gray-300 hover:opacity-90 hover:scale-105'> */}
            <div className='border-div'></div>
            <div className='hourly-card'>
              <p>{props.data.list[1].dt_txt.slice(10, 16)}</p>
              <Image
                src={`http://openweathermap.org/img/w/${props.data.list[1].weather[0].icon}.png`}
                width={40}
                height={40}
                alt='icon'
              />
              <p>{Math.trunc(props.data.list[1].main.temp)}°C</p>
            </div>
            <div className='border-div'></div>
            <div className='hourly-card'>
              <p>{props.data.list[2].dt_txt.slice(10, 16)}</p>
              <Image
                src={`http://openweathermap.org/img/w/${props.data.list[2].weather[0].icon}.png`}
                width={40}
                height={40}
                alt='icon'
              />
              <p>{Math.trunc(props.data.list[2].main.temp)}°C</p>
            </div>
            <div className='border-div'></div>
            <div className='hourly-card'>
              <p>{props.data.list[3].dt_txt.slice(10, 16)}</p>
              <Image
                src={`http://openweathermap.org/img/w/${props.data.list[3].weather[0].icon}.png`}
                width={40}
                height={40}
                alt='icon'
              />
              <p>{Math.trunc(props.data.list[3].main.temp)}°C</p>
            </div>
            <div className='border-div'></div>
            <div className='hourly-card'>
              <p>{props.data.list[4].dt_txt.slice(10, 16)}</p>
              <Image
                src={`http://openweathermap.org/img/w/${props.data.list[4].weather[0].icon}.png`}
                width={40}
                height={40}
                alt='icon'
              />
              <p>{Math.trunc(props.data.list[4].main.temp)}°C</p>
            </div>
            <div className='border-div'></div>
            <div className='flex flex-1 flex-col justify-center items-center hover:opacity-90 hover:scale-105 mr-1 xl:mr-2'>
              <p>{props.data.list[5].dt_txt.slice(10, 16)}</p>
              <Image
                src={`http://openweathermap.org/img/w/${props.data.list[5].weather[0].icon}.png`}
                width={40}
                height={40}
                alt='icon'
              />
              <p>{Math.trunc(props.data.list[5].main.temp)}°C</p>
            </div>
          </div>
        </Fragment>
      )}
    </div>
  );
}

export default HourlyForecast;
