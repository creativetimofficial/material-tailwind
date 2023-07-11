import Image from 'next/image';
import { Card, CardBody, CardFooter, Typography } from '@material-tailwind/react'; 

interface CardsProps {
  title: string;
  subtitle: string;
  children: React.ReactNode;
  img: string;
  minHeight: string;
  inverseTitle?: boolean;
}

export default function ContentCards({ title, subtitle, children, img, minHeight, inverseTitle }: CardsProps) {
  return (
    <>
      <Card className={`border bg-white shadow-md rounded-2xl ${minHeight} relative overflow-hidden`}>
        <div className="bg-[url('/img/header-figma.jpg')] bg-cover bg-center bg-no-repeat h-full w-full absolute top-40"></div>
        <CardBody className="z-10">
          <Typography variant="h4" className={`font-semibold ${inverseTitle ? 'text-3xl md:text-4xl' : 'text-xl' } text-blue-gray-900`}>
            {subtitle}
          </Typography>

          <Typography variant="h2" className={`mt-3 font-semibold ${inverseTitle ? 'text-xl' : 'text-3xl md:text-4xl' } text-blue-gray-900`}>
            {title}
          </Typography>
          <Typography variant="paragraph" className="py-4 text-lg font-normal text-blue-gray-400">
            {children}
          </Typography>
        </CardBody>

        <CardFooter className="py-0 z-10">
          <Image src={img} width={1000} height={500} alt={title} />
        </CardFooter>
      </Card>
    </>
  );
}
