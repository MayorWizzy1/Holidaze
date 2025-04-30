import { Link } from 'react-router-dom';
import CloseIcon from '@mui/icons-material/Close';

export function BookingDone({ setIsDone }) {
  const username = sessionStorage.getItem('username');
  return (
    <div className="absolute top-0 bottom-0 right-0 left-0 bg-medium-transparent-black">
      <div className="text-2xl font-semibold bg-light-orange text-orange rounded-[10px] py-14 text-center fixed top-36 right-4 left-4 z-10 sm:right-auto sm:left-1/2 sm:-translate-x-1/2 sm:w-1/2 lg:w-1/3 lg:top-56">
        <p className="mb-1.5">Thank you!</p>
        <p className="mb-6">Your booking is confirmed.</p>
        <p className="text-black font-normal text-sm">
          Manage your bookings{' '}
          <Link
            to={`/profile/${username}`}
            className="text-orange underline font-semibold"
          >
            here
          </Link>
        </p>
        <button
          onClick={() => {
            setIsDone(false);
            window.location.reload();
          }}
          className="absolute top-[10px] right-[16px] text-black cursor-pointer"
        >
          <CloseIcon className="!w-5 !h-5" />
        </button>
      </div>
    </div>
  );
}
