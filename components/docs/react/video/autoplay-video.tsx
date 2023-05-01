export function AutoplayVideo() {
  return (
    <video className="h-full w-full" controls autoPlay>
      <source src="/demo.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
}
