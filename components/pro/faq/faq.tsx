export default function SectionFAQ() {
  return (
    <div className="my-20">
      <div className="container mx-auto">
        <div className="mb-16 text-center">
          <h2 className="tracking-normal text-4xl font-semibold leading-[1.3] text-blue-gray-900">
            Frequently asked questions
          </h2>
          <p className="text-xl font-normal leading-relaxed text-gray-700 lg:px-52">
            A lot of people don't appreciate the moment until it’s passed. I'm not <br/>trying my hardest, and I'm not trying to do
          </p>
        </div>

        <div className="accordion w-3/4 md:w-2/3 lg:1/2 mx-auto">
          <div className="accordion-item relative mb-3">
            <h6 className="mb-0">
              <button
                className="accordion-button text-left font-semibold"
                type="button"
                aria-expanded="false"
              >
                <span>Is there a free trial available?</span>
                <i className="fa fa-plus collapse-close absolute right-0 pt-1 text-xs" />
                <i className="fa fa-minus collapse-open absolute right-0 pt-1 text-xs" />
              </button>
            </h6>
            <div className="collapse open">
              <div className="py-4 text-md opacity-60">
                Yes, you can try us for free for 30 days. If you want, we'll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.
              </div>
            </div>
          </div>
          <div className="accordion-item relative mb-3">
            <h6 className="mb-0">
              <button
                className="accordion-button collapsed text-left font-semibold"
                type="button"
                aria-expanded="false"
              >
                <span>How do I order?</span>
                <i className="fa fa-plus collapse-close absolute right-0 pt-1 text-xs" />
                <i className="fa fa-minus collapse-open absolute right-0 pt-1 text-xs" />
              </button>
            </h6>
            <div className="collapse">
              <div className="py-4 text-lg opacity-60">
                We're not always in the position that we want to be at. We're constantly
                growing. We're constantly making mistakes. We're constantly trying to
                express ourselves and actualize our dreams. If you have the opportunity
                to play this game of life you need to appreciate every moment. A lot of
                people don't appreciate the moment until it's passed.
              </div>
            </div>
          </div>
          <div className="accordion-item relative mb-3">
            <h6 className="accordion-header">
              <button
                className="accordion-button collapsed text-left font-semibold"
                type="button"
                aria-expanded="false"
              >
                <span>How can i make the payment?</span>
                <i className="fa fa-plus collapse-close absolute right-0 pt-1 text-xs" />
                <i className="fa fa-minus collapse-open absolute right-0 pt-1 text-xs" />
              </button>
            </h6>
            <div className="collapse">
              <div className="py-4 text-sm opacity-60">
                It really matters and then like it really doesn't matter. What matters
                is the people who are sparked by it. And the people who are like
                offended by it, it doesn't matter. Because it's about motivating the
                doers. Because I'm here to follow my dreams and inspire other people to
                follow their dreams, too.
              </div>
            </div>
          </div>
          <div className="accordion-item relative mb-3">
            <h6 className="accordion-header">
              <button
                className="accordion-button collapsed text-left font-semibold"
                type="button"
                aria-expanded="false"
              >
                <span>How much time does it take to receive the order?</span>
                <i className="fa fa-plus collapse-close absolute right-0 pt-1 text-xs" />
                <i className="fa fa-minus collapse-open absolute right-0 pt-1 text-xs" />
              </button>
            </h6>
            <div className="collapse">
              <div className="py-4 text-sm opacity-60">
                The time is now for it to be okay to be great. People in this world shun
                people for being great. For being a bright color. For standing out. But
                the time is now to be okay to be the greatest you. Would you believe in
                what you believe in, if you were the only one who believed it? If
                everything I did failed - which it doesn't, it actually succeeds - just
                the fact that I'm willing to fail is an inspiration. People are so
                scared to lose that they don't even try. Like, one thing people can't
                say is that I'm not trying, and I'm not trying my hardest, and I'm not
                trying to do the best way I know how.
              </div>
            </div>
          </div>
          <div className="accordion-item relative mb-3">
            <h6 className="accordion-header">
              <button
                className="accordion-button collapsed text-left font-semibold"
                type="button"
                aria-expanded="false"
              >
                <span>Can I resell the products?</span>
                <i className="fa fa-plus collapse-close absolute right-0 pt-1 text-xs" />
                <i className="fa fa-minus collapse-open absolute right-0 pt-1 text-xs" />
              </button>
            </h6>
            <div className="collapse">
              <div className="py-4 text-sm opacity-60">
                I always felt like I could do anything. That's the main thing people are
                controlled by! Thoughts- their perception of themselves! They're slowed
                down by their perception of themselves. If you're taught you can't do
                anything, you won't do anything. I was taught I could do everything.
              </div>
            </div>
          </div>
          <div className="accordion-item relative mb-3">
            <h6 className="accordion-header">
              <button
                className="accordion-button collapsed text-left font-semibold"
                type="button"
                aria-expanded="false"
              >
                <span>Where do I find the shipping details?</span>
                <i className="fa fa-plus collapse-close absolute right-0 pt-1 text-xs" />
                <i className="fa fa-minus collapse-open absolute right-0 pt-1 text-xs" />
              </button>
            </h6>
            <div className="collapse">
              <div className="py-4 text-sm opacity-60">
                I always felt like I could do anything. That's the main thing people are
                controlled by! Thoughts- their perception of themselves! They're slowed
                down by their perception of themselves. If you're taught you can't do
                anything, you won't do anything. I was taught I could do everything.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
