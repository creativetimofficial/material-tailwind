export default function SectionHeader2() {
  return (
    <header className="h-full min-h-screen w-screen place-items-center bg-white px-8 pt-56 lg:pt-40">
      <div className="container mx-auto grid h-full items-center lg:grid-cols-2">
        <div className="text-center lg:text-left">
          <div className="mb-8 inline-flex items-center rounded-full bg-pink-50 py-1 pl-1 pr-3">
            <p className="text-sm leading-normal mr-3 rounded-full bg-white py-0.5 px-3 font-semibold text-pink-500">New</p>
            <p className="text-sm leading-normal text-pink-500 flex items-center font-semibold">Personalized coaching in-app
              <svg xmlns="http://www.w3.org/2000/svg" className="ml-1.5 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3"><path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
            </p>
          </div>
          <h1 className="tracking-normal font-sans text-5xl font-semibold text-blue-grey-900 mb-8 leading-tight lg:text-6xl">Our company mission is to lead the design apps</h1>
          <p className="text-xl font-normal leading-relaxed text-blue-grey-700 lg:pr-20">It becomes harder for us to give others a hand. We get our heart broken by people we love, even that we give them all we have. Then we lose family over time.</p>
          <div className="mt-12 flex justify-center gap-3 lg:justify-start">
            <button className="button button-pink flex" type="button" data-ripple-light="true">
            <svg className="mr-2" width="20px" height="20px" viewBox="0 0 100 100" version="1.1" xmlns="http://www.w3.org/2000/svg">
              <title>logo-ios</title>
              <g id="logo-ios" stroke="none" fill="none">
                <g id="apple-13" transform="translate(19.000000, 12.000000)" fill="#FFFFFF">
                  <path d="M52.6729543,39.6333241 C52.6394793,33.4882333 55.4179065,28.850113 61.0417109,25.4343132 C57.8950584,20.9301458 53.1416047,18.4520165 46.8650372,17.9664372 C40.92322,17.4976019 34.4290648,21.4324693 32.0523379,21.4324693 C29.5417109,21.4324693 23.7840064,18.1338783 19.2648778,18.1338783 C9.92534538,18.2845754 0,25.5850102 0,40.4370417 C0,44.8240003 0.803400638,49.3560745 2.41020191,54.0332644 C4.55260361,60.1783552 12.2853348,75.2480602 20.3528162,74.9968985 C24.5706695,74.8964338 27.5499469,71.9997016 33.0398512,71.9997016 C38.3623804,71.9997016 41.1240701,74.9968985 45.8273114,74.9968985 C53.9617428,74.8796896 60.9580234,61.1830022 63,55.0211673 C52.0871413,49.8807235 52.6729543,39.9514623 52.6729543,39.6333241 Z M43.1995218,12.1394846 C47.7688629,6.71439078 47.3504251,1.77487636 47.216525,0 C43.1827843,0.234417633 38.5130181,2.74603513 35.8517535,5.84369671 C32.9226886,9.15903181 31.1987248,13.2613404 31.5669501,17.8827166 C35.935441,18.2175989 39.9189692,15.9738873 43.1995218,12.1394846 Z" id="Shape"></path>
                </g>
              </g>
            </svg>
              Download IOS
            </button>
            <button className="button button-pink flex" type="button" data-ripple-light="true">
              <svg className="mr-2" width="20px" height="20px" viewBox="0 0 100 100" version="1.1" xmlns="http://www.w3.org/2000/svg">
                  <title>logo-android</title>
                  <g id="logo-android" stroke="none" fill="none" >
                    <g id="android" transform="translate(13.198379, 7.801288)">
                      <path d="M25.43395,50.8682572 C28.2433938,50.8682572 30.5209543,53.2822528 30.5209543,56.2599937 L30.5209543,79.3890707 C30.5209543,82.3668116 28.2433938,84.7804286 25.43395,84.7804286 C22.6248634,84.7804286 20.3473029,82.3668116 20.3473029,79.3890707 L20.3473029,56.2599937 C20.3473029,53.2826314 22.6248634,50.8686358 25.43395,50.8686358 L25.43395,50.8682572 Z" id="Path" fill="#FFFFFF" fill-rule="nonzero"></path>
                      <path d="M13.5971447,23.73852 C13.5799063,23.9425953 13.5648686,24.1489381 13.5648686,24.3575484 L13.5648686,59.3364288 C13.5648686,63.0982165 16.4546797,66.1287343 20.0420946,66.1287343 L54.5643158,66.1287343 C58.1520975,66.1287343 61.0419086,63.0978385 61.0419086,59.3364288 L61.0419086,24.3575484 C61.0419086,24.1489381 61.0345731,23.9418395 61.0177015,23.73852 L13.5971447,23.73852 Z" id="Path" fill="#FFFFFF" fill-rule="nonzero"></path>
                      <path d="M49.0696418,51.5439032 C51.9504032,51.5439032 54.2857796,53.9098038 54.2857796,56.8282179 L54.2857796,79.4964849 C54.2857796,82.414899 51.9504032,84.7804286 49.0696418,84.7804286 C46.1892466,84.7804286 43.8538702,82.414899 43.8538702,79.4964849 L43.8538702,56.8282179 C43.8538702,53.9101749 46.1892466,51.5442742 49.0696418,51.5442742 L49.0696418,51.5439032 Z M5.21613783,27.3468547 C8.09653302,27.3468547 10.4319094,29.7127554 10.4319094,32.6311695 L10.4319094,55.2994365 C10.4319094,58.2178506 8.09653302,60.5837513 5.21613783,60.5837513 C2.33537636,60.5837513 0,58.2178506 0,55.2998075 L0,32.6315406 C-0.000366276092,29.7131264 2.33501009,27.3468547 5.21613783,27.3468547 Z M69.3910056,27.3468547 C72.2714008,27.3468547 74.6067772,29.7127554 74.6067772,32.6311695 L74.6067772,55.2994365 C74.6067772,58.2178506 72.2714008,60.5837513 69.3910056,60.5837513 C66.5102442,60.5837513 64.1748678,58.2178506 64.1748678,55.2998075 L64.1748678,32.6315406 C64.1748678,29.7131264 66.5102442,27.3468547 69.3910056,27.3468547 Z M13.7815042,22.0343391 C13.9265496,11.4850049 23.0153245,2.83551553 34.6819506,1.69560857 L39.924094,1.69560857 C51.5914527,2.8358866 60.6794951,11.485747 60.8245404,22.0343391 L13.7815042,22.0343391 Z" id="Shape" fill="#FFFFFF" fill-rule="nonzero"></path>
                      <path d="M15.2604772,0 L20.8475899,10.1736514 M59.3463,0 L53.7588154,10.1736514" id="Shape" stroke="#FFFFFF" ></path>
                      <path d="M29.1130804,12.717066 C29.1174454,14.117766 27.9177967,15.2565836 26.4332815,15.260469 C24.9494959,15.2639854 23.742917,14.1318646 23.73853,12.7311647 L23.73853,12.717066 C23.7345278,11.3160136 24.9341766,10.1775484 26.4183269,10.1736613 C27.9021126,10.1697941 29.1086915,11.3015625 29.1130804,12.7029674 L29.1130804,12.717066 Z M49.1726367,12.717066 C49.1770017,14.117766 47.977353,15.2565836 46.4928379,15.260469 C45.0090522,15.2639854 43.8024734,14.1318646 43.7980864,12.7311647 L43.7980864,12.717066 C43.7940842,11.3160136 44.9937329,10.1775484 46.4778833,10.1736613 C47.961669,10.1697941 49.1682478,11.3015625 49.1726367,12.7029674 L49.1726367,12.717066 Z" id="Shape" fill="#F31A69" fill-rule="nonzero"></path>
                    </g>
                  </g>
                </svg>
              Download Andriod
            </button>
          </div>
        </div>
        <div className="hidden justify-center lg:flex">
          <img
            src="./img/iphone.jpg"
            alt="team work"
            className="lg:0 mb-8 h-[40rem] w-96 w-full rounded-xl object-cover lg:h-[40rem]"
          />
        </div>
      </div>
    </header>
  )
}