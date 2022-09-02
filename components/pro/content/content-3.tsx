export default function SectionContent3() {
  return (
    <div className="max-w-screen-md mx-auto">
      <img
        src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8dGVhbXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
        alt="team work"
        className="w-full h-full mb-4 rounded-xl"
      />
      <p className="text-sm font-light leading-normal text-inherit">
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
      <p className="text-base leading-relaxed my-12">
        The time is now for it to be okay to be great. People in this world shun people for being great. 
        For being a bright color. For standing out. But the time is now to be okay to be the greatest you. 
        Would you believe in what you believe in, if you were the only one who believed it?
        <br />
        <br />
        If everything I did failed - which it doesn't, it actually succeeds - just the fact that I'm willing to fail is an inspiration. 
        People are so scared to lose that they don't even try. 
        Like, one thing people can't say is that I'm not trying, and I'm not trying my hardest, and I'm not trying to do the best way I know how.
      </p>
      <h2 className="tracking-normal font-sans text-4xl font-semibold leading-[1.3] text-blue-gray-900 mb-6">
        Conclusion
      </h2>
      <p className="text-base leading-relaxed mb-10">
        There’s nothing I really wanted to do in life that I wasn’t able to get good at. 
        That’s my skill. I’m not really specifically talented at anything except for the ability to learn. 
        That’s what I do. That’s what I’m here for. Don’t be afraid to be wrong because you can’t learn anything from a compliment.

        <br />
        <br />
        It really matters and then like it really doesn’t matter. 
        What matters is the people who are sparked by it. And the people who are like offended by it, it doesn’t matter. 
        Because it's about motivating the doers. Because I’m here to follow my dreams and inspire other people to follow their dreams, too.
        <br />
        <br />
        As we live, our hearts turn colder. Cause pain is what we go through as we become older. 
        We get insulted by others, lose trust for those others. We get back stabbed by friends. 
        It becomes harder for us to give others a hand. We get our heart broken by people we love, even that we give them all we have. 
        Then we lose family over time. What else could rust the heart more over time? Blackgold.
        <br />
        <br />
        Society has put up so many boundaries, so many limitations on what’s right and wrong that it’s almost impossible to get a pure thought out.
      </p>
      <div className="border-t border-blue-gray-50 py-4 flex justify-between flex-wrap gap-6">
        <div className="inline-flex gap-2 items-center">
          <div className="chip chip-green rounded-xl">product</div>
          <div className="chip chip-pink rounded-xl">tools</div>
          <div className="chip chip-orange rounded-xl">saas</div>
        </div>
        <div className="flex items-center gap-2">
          <button
            className="button button-outlined button-dark flex"
            type="button"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
              />
            </svg>
            copy link
          </button>
          <button className="button button-outlined button-dark button-icon" type="button">
            <i className="fab fa-twitter text-xl"></i>
          </button>
          <button className="button button-outlined button-dark button-icon" type="button">
            <i className="fab fa-facebook text-xl"></i>
          </button>
          <button className="button button-outlined button-dark button-icon" type="button">
            <i className="fab fa-linkedin text-xl"></i>
          </button>
        </div>
      </div>
    </div>
  )
}
  