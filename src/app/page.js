// pages/ChooseRoom.js
import { Special_Elite } from 'next/font/google';
import Link from 'next/link';

const specialElite = Special_Elite({
  weight: '400',
  subsets: ['latin']
})

const ChooseRoom = () => {
  return (
    <div>
      <div className="container max-w-4xl mx-auto md:px-8 px-4 py-4 pb-10 bg-white border-black min-h-screen">
        <h1 className={'text-center md:text-4xl text-2xl font-bold ' + specialElite.className}>
          <img src="/llama-court.webp" alt="A picture of a llama judge" className="max-w-sm my-6 inline-block" /><br />
          Llama court is now in session
        </h1>
        <p className="text-center text-lg">
          Watch autonomous AI agents debate fictional court cases
        </p>
        <ul className="flex place-content-center py-6">
          <li>
            <Link
              className={'text-center md:text-2xl text-xl underline px-2 sm:px-4 ' + specialElite.className}
              href="/A"
            >
              Courtroom&nbsp;A
            </Link>
          </li>
          <li>
            <Link
              className={'text-center md:text-2xl text-xl underline px-2 sm:px-4 ' + specialElite.className}
              href="/B"
            >
              Courtroom&nbsp;B
            </Link>
          </li>
          <li>
            <Link
              className={'text-center md:text-2xl text-xl underline px-2 sm:px-4 ' + specialElite.className}
              href="/C"
            >
              Courtroom&nbsp;C
            </Link>
          </li>
        </ul>

        <div className={`mt-8 text-center text-lg italic`}><Link href="/about">How does it work?</Link></div>

        <footer className={`mt-10 text-xl text-center`}>
          Built with 🤖 by <a
            href="https://replicate.com/?utm_source=project&utm_campaign=llama-court"
            title="Replicate"
            className="inline-block -ml-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="m-3 -mb-2 w-40 fill-current"
              viewBox="0 0 512 120"
            >
              <polygon points="86.96 0 86.96 10.74 12.03 10.74 12.03 95.41 0 95.41 0 0 86.96 0"></polygon>
              <polygon points="86.96 20.37 86.96 31.11 34.75 31.11 34.75 95.41 22.71 95.41 22.71 20.37 86.96 20.37"></polygon>
              <polygon points="86.96 40.67 86.96 51.47 57.46 51.47 57.46 95.41 45.42 95.41 45.42 40.67 86.96 40.67"></polygon>
              <path d="m121.21,39.62c14.32,0,26.35,9.5,26.35,27.16,0,1.17,0,2.16-.12,3.95h-43.02c.56,8.95,7.78,14.87,16.85,14.87,7.65,0,12.78-3.52,15.61-8.33l9.2,6.54c-4.94,7.78-13.45,12.71-24.93,12.71-16.6,0-28.57-11.79-28.57-28.45.06-16.11,12.03-28.45,28.64-28.45m-16.17,22.28h30.43c-1.3-7.9-7.65-12.16-14.69-12.16s-14.13,4.07-15.74,12.16"></path>
              <path d="m159.78,40.67h12.03v7.34c3.09-4.38,9.75-8.39,17.59-8.39,15,0,26.35,12.78,26.35,28.45s-11.36,28.45-26.35,28.45c-7.9,0-14.57-4.07-17.59-8.46v30.18h-12.03V40.67Zm27.46,9.87c-9.75,0-16.42,7.65-16.42,17.53s6.67,17.53,16.42,17.53,16.29-7.65,16.29-17.53-6.67-17.53-16.29-17.53"></path>
              <rect x="228.04" y="13.33" width="12.03" height="82.02"></rect>
              <path d="m262.3,28.76c-4.38,0-8.08-3.58-8.08-8.08s3.7-7.96,8.08-7.96,7.96,3.64,7.96,7.96c0,4.51-3.46,8.08-7.96,8.08m-5.99,11.91h12.03v54.68h-12.03v-54.68Z"></path>
              <path d="m309.45,96.46c-16.42,0-28.88-12.28-28.88-28.45s12.47-28.45,28.88-28.45c11.29,0,20.8,6.05,25.49,15.12l-10.49,5.68c-2.65-5.55-7.96-9.63-15-9.63-9.75,0-16.6,7.53-16.6,17.28s6.91,17.28,16.6,17.28c6.97,0,12.34-4.07,15-9.63l10.49,5.68c-4.69,9.13-14.26,15.12-25.49,15.12"></path>
              <path d="m368.39,39.62c7.9,0,14.44,4.07,17.53,8.39v-7.34h12.03v54.68h-12.03v-7.34c-3.09,4.38-9.63,8.46-17.53,8.46-15,0-26.35-12.78-26.35-28.45s11.36-28.39,26.35-28.39m2.22,10.92c-9.75,0-16.29,7.65-16.29,17.53s6.54,17.53,16.29,17.53,16.29-7.65,16.29-17.53-6.6-17.53-16.29-17.53"></path>
              <polygon points="418.56 95.41 418.56 51.41 407.14 51.41 407.14 40.67 418.56 40.67 418.56 25.49 430.6 25.49 430.6 40.67 451.33 40.67 451.33 51.41 430.6 51.41 430.6 84.61 451.33 84.61 451.33 95.41 418.56 95.41"></polygon>
              <path d="m485.65,39.62c14.32,0,26.35,9.5,26.35,27.16,0,1.17,0,2.16-.12,3.95h-43.02c.56,8.95,7.78,14.87,16.85,14.87,7.65,0,12.78-3.52,15.61-8.33l9.2,6.54c-4.94,7.78-13.45,12.71-24.93,12.71-16.6,0-28.57-11.79-28.57-28.45.12-16.11,12.03-28.45,28.64-28.45m-16.17,22.28h30.43c-1.3-7.9-7.65-12.16-14.69-12.16s-14.07,4.07-15.74,12.16"></path>
            </svg>
          </a>
        </footer>
      </div>
    </div >
  );
};

export default ChooseRoom;
