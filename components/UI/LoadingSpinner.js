import classes from './LoadingSpinner.module.css';

function LoadingSpinner() {
  return (
    <div>
      <div className={classes['lds-ring']}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}

export default LoadingSpinner;
