import Carousel from "packages/material-tailwind-react/src/components/Carousel";

export default function Test() {
  return (
    <div className="h-screen w-screen">
      <Carousel
        autoplay={true}
        autoplayDelay={5000}
        loop
        transitionDuration={3}
        prevArrow={() => null}
        nextArrow={() => null}
        navigation={() => null}
      >
        <img
          src="https://d33wubrfki0l68.cloudfront.net/dd23708ebc4053551bb33e18b7174e73b6e1710b/dea24/static/images/wallpapers/shared-colors@2x.png"
          alt="image"
          className="pointer-events-none h-full w-full cursor-grab"
        />
        <img
          src="https://d33wubrfki0l68.cloudfront.net/49de349d12db851952c5556f3c637ca772745316/cfc56/static/images/wallpapers/bridge-02@2x.png"
          alt="image"
          className="pointer-events-none h-full w-full cursor-grab"
        />
        <img
          src="https://d33wubrfki0l68.cloudfront.net/594de66469079c21fc54c14db0591305a1198dd6/3f4b1/static/images/wallpapers/bridge-01@2x.png"
          alt="image"
          className="pointer-events-none h-full w-full cursor-grab"
        />
      </Carousel>
    </div>
  );
}
