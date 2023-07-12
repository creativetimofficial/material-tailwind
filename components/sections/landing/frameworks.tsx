import { Card, CardBody, CardHeader, Typography } from '@material-tailwind/react';

type CardsProps = {
  children: React.ReactNode;
  img: React.ReactNode;
}

const content = [
  {
    title: 'React',
    img: '/img/react.svg',
    description: 'Open-source JavaScript framework and library developed by Facebook.',
  },
  {
    title: 'Html',
    img: '/img/html.svg',
    description: 'The standard markup language for creating Web pages.',
  },
  {
    title: 'Next.js',
    img: '/img/nextjs.svg',
    description: 'React framework that gives you building blocks to create web apps.',
  },
  {
    title: 'Create React App',
    img: '/img/react-app.svg',
    description: 'Set up a modern web app by running one command.',
  },
  {
    title: 'Remix',
    img: '/img/remix.svg',
    description: 'Full stack web framework that lets you focus on the user interface.',
  },
  {
    title: 'Vite',
    img: '/img/vitejs.svg',
    description: 'Flexible programmatic APIs with full TypeScript typing.',
  },
  {
    title: 'Astro',
    img: '/img/astro.svg',
    description: 'All-in-one web framework designed for speed.',
  },
  {
    title: 'Gatsby',
    img: '/img/gatsby.svg',
    description: 'The Fastest Frontend for the Headless Web.',
  },
]

const Cards: React.FC<CardsProps> = ({ children, img }) => {
  return (
    <>
      <Card color="white" className="mt-4 lg:mt-8 rounded-xl overflow-hidden">
        <div className="bg-[url('/img/header-figma.jpg')] bg-cover bg-center bg-no-repeat h-full w-full absolute top-0"></div>
        <CardHeader
          color="transparent"
          floated={false}
          shadow={false}
          className="flex items-center"
        >
          {img}
        </CardHeader>
        <CardBody className="relative z-10 pl-4 pr-2">
          {children}
        </CardBody>
      </Card>
    </>
  )
}

const Frameworks = () => {
  return (
    <section>
      <div className="mb-10 w-12/12 -mt-20">
        <Typography
          variant="h1"
          className="mb-3 mt-5 relative text-3xl md:text-4xl font-semibold leading-tight tracking-normal text-blue-gray-900"
        >
          Tailwind CSS Framework Integrations
        </Typography>
        <Typography
          variant="paragraph"
          className="mb-5 relative text-md md:text-lg font-normal leading-relaxed tracking-normal text-blue-gray-400"
        >
          Enhance your workflow with seamless integrations for your favorite tools using Material Tailwind.
        </Typography>

        <div className="flex flex-wrap">
          {content.map((item, i) => (
            <div className="w-full lg:w-3/12 lg:px-4 mt-4 lg:mt-0" key={i}>
              <Cards img={<img src={item.img} className="w-8 h-8" />}>
                <Typography className="font-semibold text-gray-900 text-xl">
                  {item.title}
                </Typography>
                <Typography className="mt-1 font-normal text-blue-gray-400">
                  {item.description}
                </Typography>
              </Cards>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Frameworks;
