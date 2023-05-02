export function DefaultVideo() {
  return (
    <video className="h-full w-full rounded-lg" controls>
      <source src="/demo.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
}
