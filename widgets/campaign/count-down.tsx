import { Card, CardBody } from '@material-tailwind/react';
import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie';

interface TimeLeft {
  days: string;
  hours: string;
  minutes: string;
  seconds: string;
  bundlesLeft: string;
}

const CountBlack = ({time}: {time: TimeLeft}) => {
  return (
    <>
      <div className="flex flex-wrap justify-center sm:justify-start items-center mt-4 gap-2">
        <div className="flex mb-4 gap-2">
          <div className="sm:w-auto flex justify-center sm:mb-0">
            <Card className="!bg-gray-900 border-gray-700 border text-white p-1 rounded-md shadow">
              <CardBody className="p-3 text-center">
                <p className="text-xl sm:text-3xl font-medium">{time.days}</p>
                <p className="text-xs">Days</p>
              </CardBody>
            </Card>
          </div>
          <div className="sm:w-auto flex justify-center sm:mb-0">
            <Card className="!bg-gray-900 border-gray-700 border text-white p-1 rounded-md shadow">
              <CardBody className="p-3 text-center">
                <p className="text-xl sm:text-3xl font-medium">{time.hours}</p>
                <p className="text-xs">Hours</p>
              </CardBody>
            </Card>
          </div>
          <div className="sm:w-auto flex justify-center">
          <Card className="!bg-gray-900 border-gray-700 border text-white p-1 rounded-md shadow">
            <CardBody className="p-3 text-center">
              <p className="text-xl sm:text-3xl font-medium">{time.minutes}</p>
              <p className="text-xs">Minutes</p>
            </CardBody>
          </Card>
        </div>
        </div>

        <div className="flex mb-4 gap-2">
          <div className="sm:w-auto flex justify-center">
            <Card className="!bg-gray-900 border-gray-700 border text-white p-1 rounded-md shadow">
              <CardBody className="p-3 text-center">
                <p className="text-xl sm:text-3xl font-medium">{time.seconds}</p>
                <p className="text-xs">Seconds</p>
              </CardBody>
            </Card>
          </div>
          <div className=" sm:w-auto flex justify-center">
            <Card className="!bg-gray-900 border-gray-700 border text-white p-1 rounded-md shadow">
              <CardBody className="p-3 text-center">
                <p className="text-xl sm:text-3xl font-medium">{time.bundlesLeft}</p>
                <p className="text-xs">Bundles Left</p>
              </CardBody>
            </Card>
          </div>
        </div>
      </div>
    </>
  )
}

const CountWhite = ({time}: {time: TimeLeft}) => {
  return (
    <>
      <div className="flex flex-wrap justify-center sm:justify-start items-center mt-4 gap-3">
        <div className="flex mb-4 gap-3">
          <div className="sm:w-auto flex justify-center sm:mb-0">
            <Card className="border-gray-700 text-primary p-1 rounded-md shadow">
              <CardBody className="p-3 text-center">
                <p className="text-3xl sm:text-5xl">{time.days}</p>
                <p className="text-md mt-3 text-blue-gray-500">Days</p>
              </CardBody>
            </Card>
          </div>
          <div className="sm:w-auto flex justify-center sm:mb-0">
            <Card className="border-gray-700 text-primary p-1 rounded-md shadow">
              <CardBody className="p-3 text-center">
                <p className="text-3xl sm:text-5xl">{time.hours}</p>
                <p className="text-md mt-3 text-blue-gray-500">Hours</p>
              </CardBody>
            </Card>
          </div>
          <div className="sm:w-auto flex justify-center">
          <Card className="border-gray-700  text-primary p-1 rounded-md shadow">
            <CardBody className="p-3 text-center">
              <p className="text-3xl sm:text-5xl">{time.minutes}</p>
              <p className="text-md mt-3 text-blue-gray-500">Minutes</p>
            </CardBody>
          </Card>
        </div>
        </div>

        <div className="flex mb-4 gap-3">
          <div className="sm:w-auto flex justify-center">
            <Card className="border-gray-700 text-primary p-1 rounded-md shadow">
              <CardBody className="p-3 text-center">
                <p className="text-3xl sm:text-5xl">{time.seconds}</p>
                <p className="text-md mt-3 text-blue-gray-500">Seconds</p>
              </CardBody>
            </Card>
          </div>
          <div className="sm:w-auto flex justify-center">
            <Card className="border-gray-700 text-primary p-1 rounded-md shadow">
              <CardBody className="p-3 text-center">
                <p className="text-3xl sm:text-5xl">24/<span className="text-3xl">50</span></p>
                <p className="text-md mt-3 text-blue-gray-500">Bundles Left</p>
              </CardBody>
            </Card>
          </div>
        </div>
      </div>
    </>
  )
}

const CountPlain = ({time}: {time: TimeLeft}) => {
  return (
    <>
      <div className="flex justify-center items-center gap-1 ml-2">
        <div className="text-center">
          <span className="text-base">{time.days}</span>
          <span>d</span>
        </div>:
        <div className="text-center">
          <span className="text-base">{time.hours}</span>
          <span>h</span>
        </div>:
        <div className="text-center">
          <span className="text-base">{time.minutes}</span>
          <span>m</span>
        </div>:
        <div className="text-center">
          <span className="text-base">{time.seconds}</span>
          <span>s</span>
        </div>
      </div>
    </>
  )
}

const CountDown = ({type}: {type:string}) => {
  const [hasMounted, setHasMounted] = useState(false);
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: '00',
    hours: '00',
    minutes: '00',
    seconds: '00',
    bundlesLeft: '24/50',
  });

  // Initialize state from cookie or set to default values
  const getInitialTime = (): TimeLeft => {
    const savedTime = Cookies.get('countdownTime');
    return savedTime ? JSON.parse(savedTime) : {
      days: '00',
      hours: '00',
      minutes: '00',
      seconds: '00',
      bundlesLeft: '24/50',
    };
  };

  const targetDate = new Date(`${process.env.NEXT_PUBLIC_BF_COUNT_DOWN}`).getTime();

  useEffect(() => {
    setHasMounted(true); // Set this state to true when the component mounts

    // Load the saved countdown time from localStorage when the component mounts
    const savedTime = getInitialTime();
    if (savedTime) {
      setTimeLeft(savedTime);
    }

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;
      
      if (distance < 0) {
        clearInterval(interval);
        const expiredTime = {
          days: '00',
          hours: '00',
          minutes: '00',
          seconds: '00',
          bundlesLeft: 'Sold Out',
        };
        setTimeLeft(expiredTime);
        Cookies.set('countdownTime', JSON.stringify(expiredTime), { expires: 1 });
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      const newTimeLeft = {
        days: String(days).padStart(2, '0'),
        hours: String(hours).padStart(2, '0'),
        minutes: String(minutes).padStart(2, '0'),
        seconds: String(seconds).padStart(2, '0'),
        bundlesLeft: '24/50',
      };

      setTimeLeft(newTimeLeft);
      Cookies.set('countdownTime', JSON.stringify(newTimeLeft), { expires: 1 });

    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  if (!hasMounted) {
    return null; // Do not render anything until the component has mounted
  }

  return (
    <>
      {type === 'white' ? <CountWhite time={timeLeft} /> : null}
      {type === 'black' ? <CountBlack time={timeLeft} /> : null}
      {type === 'plain' ? <CountPlain time={timeLeft} /> : null}
    </>
  );
};

export default CountDown;
