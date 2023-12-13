export function CommentBoxTextarea() {
  return (
    <div className="relative w-[32rem]">
      <div className="relative w-full min-w-[200px]">
        <textarea
          rows={8}
          className="peer h-full min-h-[100px] w-full !resize-none  rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:outline-0 disabled:resize-none disabled:border-0 disabled:bg-blue-gray-50"
          placeholder=" "
        ></textarea>
        <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-gray-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-gray-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
          Your Comment
        </label>
      </div>
      <div className="flex w-full justify-between py-1.5">
        <button
          className="relative h-8 max-h-[32px] w-8 max-w-[32px] select-none rounded-lg text-center align-middle font-sans text-xs font-medium uppercase text-blue-gray-500 transition-all hover:bg-blue-gray-500/10 active:bg-blue-gray-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          type="button"
        >
          <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform">
            <svg
              width="17"
              height="17"
              viewBox="0 0 17 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M11.586 2.58601C11.7705 2.39499 11.9911 2.24263 12.2351 2.13781C12.4792 2.03299 12.7416 1.97782 13.0072 1.97551C13.2727 1.9732 13.5361 2.02381 13.7819 2.12437C14.0277 2.22493 14.251 2.37344 14.4387 2.56122C14.6265 2.74901 14.775 2.97231 14.8756 3.2181C14.9762 3.4639 15.0268 3.72726 15.0245 3.99281C15.0222 4.25837 14.967 4.52081 14.8622 4.76482C14.7573 5.00883 14.605 5.22952 14.414 5.41401L11.414 8.41401C11.0389 8.78895 10.5303 8.99958 9.99996 8.99958C9.46963 8.99958 8.96101 8.78895 8.58596 8.41401C8.39736 8.23185 8.14475 8.13106 7.88256 8.13334C7.62036 8.13562 7.36955 8.24079 7.18414 8.42619C6.99873 8.6116 6.89356 8.86241 6.89128 9.12461C6.88901 9.38681 6.9898 9.63941 7.17196 9.82801C7.92207 10.5779 8.9393 10.9992 9.99996 10.9992C11.0606 10.9992 12.0778 10.5779 12.828 9.82801L15.828 6.82801C16.5566 6.0736 16.9598 5.06319 16.9507 4.01441C16.9415 2.96562 16.5209 1.96237 15.7792 1.22074C15.0376 0.479105 14.0344 0.0584287 12.9856 0.049315C11.9368 0.0402014 10.9264 0.443379 10.172 1.17201L8.67196 2.67201C8.57645 2.76426 8.50027 2.8746 8.44786 2.99661C8.39545 3.11861 8.36786 3.24983 8.36671 3.38261C8.36555 3.51539 8.39086 3.64707 8.44114 3.76997C8.49142 3.89286 8.56567 4.00451 8.65956 4.09841C8.75346 4.1923 8.86511 4.26655 8.988 4.31683C9.1109 4.36711 9.24258 4.39242 9.37536 4.39126C9.50814 4.39011 9.63936 4.36252 9.76136 4.31011C9.88337 4.2577 9.99371 4.18152 10.086 4.08601L11.586 2.58601ZM6.58596 7.58601C6.96101 7.21107 7.46963 7.00044 7.99996 7.00044C8.53029 7.00044 9.0389 7.21107 9.41396 7.58601C9.5062 7.68152 9.61655 7.7577 9.73855 7.81011C9.86056 7.86252 9.99178 7.89011 10.1246 7.89126C10.2573 7.89242 10.389 7.86711 10.5119 7.81683C10.6348 7.76655 10.7465 7.6923 10.8404 7.59841C10.9342 7.50451 11.0085 7.39286 11.0588 7.26997C11.1091 7.14707 11.1344 7.01539 11.1332 6.88261C11.1321 6.74983 11.1045 6.61861 11.0521 6.49661C10.9997 6.3746 10.9235 6.26426 10.828 6.17201C10.0778 5.42213 9.06062 5.00087 7.99996 5.00087C6.9393 5.00087 5.92207 5.42213 5.17196 6.17201L2.17196 9.17201C1.78992 9.541 1.48519 9.98238 1.27555 10.4704C1.06592 10.9584 0.955572 11.4833 0.950957 12.0144C0.946341 12.5455 1.04755 13.0722 1.24867 13.5638C1.4498 14.0554 1.74681 14.502 2.12238 14.8776C2.49795 15.2532 2.94456 15.5502 3.43614 15.7513C3.92773 15.9524 4.45445 16.0536 4.98556 16.049C5.51668 16.0444 6.04156 15.9341 6.52958 15.7244C7.01759 15.5148 7.45897 15.2101 7.82796 14.828L9.32796 13.328C9.42347 13.2358 9.49965 13.1254 9.55206 13.0034C9.60447 12.8814 9.63205 12.7502 9.63321 12.6174C9.63436 12.4846 9.60906 12.353 9.55878 12.2301C9.5085 12.1072 9.43425 11.9955 9.34035 11.9016C9.24646 11.8077 9.13481 11.7335 9.01191 11.6832C8.88902 11.6329 8.75734 11.6076 8.62456 11.6088C8.49178 11.6099 8.36056 11.6375 8.23855 11.6899C8.11655 11.7423 8.00621 11.8185 7.91396 11.914L6.41396 13.414C6.22947 13.605 6.00878 13.7574 5.76477 13.8622C5.52076 13.967 5.25832 14.0222 4.99276 14.0245C4.7272 14.0268 4.46384 13.9762 4.21805 13.8757C3.97226 13.7751 3.74895 13.6266 3.56117 13.4388C3.37338 13.251 3.22488 13.0277 3.12432 12.7819C3.02375 12.5361 2.97315 12.2728 2.97546 12.0072C2.97777 11.7417 3.03294 11.4792 3.13776 11.2352C3.24257 10.9912 3.39494 10.7705 3.58596 10.586L6.58596 7.58601Z"
                fill="#90A4AE"
              ></path>
            </svg>
          </span>
        </button>
        <div className="flex gap-2">
          <button
            className="select-none rounded-md px-4 py-2 text-center align-middle font-sans text-xs font-bold uppercase text-gray-900 transition-all hover:bg-gray-900/10 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button"
          >
            Close
          </button>
          <button
            className="select-none rounded-md bg-gray-900 py-2 px-4 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button"
          >
            Post Comment
          </button>
        </div>
      </div>
    </div>
  );
}
