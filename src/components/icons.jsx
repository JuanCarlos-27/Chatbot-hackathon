export function InfoJobsIcon({ id }) {
  return (
    <svg
      width='64'
      height='64'
      viewBox='0 0 64 64'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={id}
    >
      <g clipPath='url(#clip0_2002_6790)'>
        <rect width='100' height='100' fill='#167DB7' />
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M25.8863 43.0202C26.2761 43.0202 26.5683 42.7753 26.6171 42.4325L30.1245 13.3876V13.2896C30.1245 12.9957 29.9784 12.7998 29.6861 12.7998H29.5887H23.8403C23.4506 12.8488 23.4019 12.9957 23.3532 13.3386L19.8944 42.3835L19.8457 42.4814C19.8457 42.8243 20.138 43.0202 20.479 43.0202H25.8863ZM30.9527 51.1998C35.678 51.1998 39.6239 49.7304 40.4033 43.4121L44.1544 13.3876C44.1544 13.0937 44.0082 12.8978 43.6672 12.8978H43.5698L38.065 12.7998C37.724 12.8488 37.4317 13.0447 37.383 13.3876L33.7294 43.559C33.3397 46.5467 31.8782 46.7427 29.7835 46.8406C29.3885 46.8627 29.0231 46.8748 28.6874 46.886C28.2779 46.8995 27.9126 46.9117 27.5913 46.9386C26.958 46.9386 26.7145 47.0855 26.617 47.7712L26.3248 50.1223V50.3672C26.3248 50.8991 26.7047 50.9536 27.0425 51.002L27.0555 51.0039C27.1282 51.0136 27.1976 51.0234 27.2663 51.0331C27.8875 51.1204 28.4524 51.1998 30.9527 51.1998Z'
          fill='white'
        />
      </g>
      <defs>
        <clipPath id='clip0_2002_6790'>
          <rect width='64' height='64' rx='16' fill='white' />
        </clipPath>
      </defs>
    </svg>
  );
}

export function CloseIcon({ id }) {
  return (
    <svg
      id={id}
      className={id}
      height='24'
      viewBox='0 0 24 24'
      width='24'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59
    12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z'
      ></path>
      <path d='M0 0h24v24H0z' fill='none'></path>
    </svg>
  );
}

export function SendIcon({ isValid }) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      id='sendIcon'
      style={isValid ? {} : { display: 'none' }}
    >
      <path d='M2.01 21L23 12 2.01 3 2 10l15 2-15 2z'></path>
      <path d='M0 0h24v24H0z' fill='none'></path>
    </svg>
  );
}
