export default function SectionContent2() {
  return (
    <section className="py-12 px-8">
      <div className="max-w-screen-md mx-auto">
        <h2 className="antialiased tracking-normal font-sans text-4xl font-semibold leading-[1.3] text-blue-gray-900 mb-6">
          Introduction
        </h2>
        <p className="antialiased text-base leading-relaxed mb-8">
          It really matters and then like it really doesn’t matter. What matters is the people who are sparked by it. 
          And the people who are like offended by it, it doesn’t matter. Because it's about motivating the doers. 
          Because I’m here to follow my dreams and inspire other people to follow their dreams, too.
          <br />
          <br />
          Society has put up so many boundaries, so many limitations on{" "}
          <a
            href="#"
            className="hover:text-pink-500 transition-colors underline underline-offset-4"
          >
            what’s right and wrong 
          </a>{" "}
          that it’s almost impossible to get a pure thought out. It’s like a little kid, a little boy, looking at colors, and no one told him what colors are good, before somebody tells you  {" "}
          <a
            href="#"
            className="hover:text-pink-500 transition-colors underline underline-offset-4"
          >
            you shouldn’t like pink
          </a>
          , because that’s for girls, or you’d instantly become a gay two-year-old. 
        </p>
        <img
          src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8dGVhbXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
          alt="team work"
          className="w-full h-full mb-4 rounded-xl"
        />
        <p className="antialiased text-sm font-light leading-normal text-inherit">
          Photo by Marvin Meyer on{" "}
          <a
            href="https://unsplash.com/s/photos/team?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
            target="_blank"
            rel="noreferrer"
            className="hover:text-pink-500 transition-colors underline underline-offset-4"
          >
            Unsplash
          </a>
        </p>
        <figure className="my-10 border-l-2 border-pink-500 py-4 pl-6">
          <blockquote cite="#">
            <p className="antialiased text-xl leading-relaxed text-blue-gray-900 font-medium italic mb-8">
              "In a world older and more complete than ours they move finished and
              complete, gifted with extensions of the senses we have lost or never
              attained, living by voices we shall never hear."
            </p>
          </blockquote>
          <figcaption>
            <p className="antialiased text-base leading-relaxed opacity-80">
              — Olivia Rhype, Product Designer
            </p>
          </figcaption>
        </figure>
        <p className="antialiased text-base leading-relaxed">
          Why would anyone pick blue over pink? Pink is obviously a better color. 
          Everyone’s born confident, and everything’s taken away from you{" "}
          <a
            href="#"
            className="hover:text-pink-500 transition-colors underline underline-offset-4"
          >
            If everything I did failed
          </a>
          - which it doesn't, it actually succeeds - just the fact that I'm willing to fail is an inspiration. 
        </p>
      </div>
    </section>
  )
}