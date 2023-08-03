import { ReactNode, useEffect, useState } from 'react';

type Props = {
  children: ReactNode;
  img: string;
};

const Header: React.FC<Props> = ({ children, img }) => {
  const [image, setImage] = useState('');

  useEffect(() => {
    setImage(img);
  }, [img]);

  return (
    <div className={`h-screen min-h-screen bg-cover bg-center bg-no-repeat`} style={{backgroundImage: `url(${image})`}}>
      <div className="relative z-50 h-fit pt-32">
        <div className="container mx-auto px-4">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Header;
