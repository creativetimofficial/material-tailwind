export default function ComponentNavTabs() {
  return (
    <div className="nav-tabs w-7/12">
      <nav>
        <ul role="tablist" className="tabs p-1" tab-panel="">
          <li className="nav-item">
            <a
              className="nav-link active mb-0 px-0 py-1"
              aria-selected="true"
              aria-controls="html"
              role="tab"
            >
              {`HTML`}
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link mb-0 px-0 py-1"
              aria-selected="false"
              aria-controls="react"
              role="tab"
            >
              {`React`}
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link mb-0 px-0 py-1"
              aria-selected="false"
              aria-controls="vue"
              role="tab"
            >
              {`Vue`}
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link mb-0 px-0 py-1"
              aria-selected="false"
              aria-controls="angular"
              role="tab"
            >
              {`Angular`}
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link mb-0 px-0 py-1"
              aria-selected="false"
              aria-controls="svelte"
              role="tab"
            >
              {`Svelte`}
            </a>
          </li>
        </ul>
      </nav>
      <div className="tabs-content p-5">
        <div className="active tab-panel" id="html" role="tabpanel">
          Because it&apos;s about motivating the doers. Because
          I&apos;m here to follow my dreams and inspire people.
        </div>
        <div className="tab-panel" id="react" role="tabpanel">
          The reading of all good books is like a conversation with
          the finest minds of past centuries.
        </div>
        <div className="tab-panel" id="vue" role="tabpanel">
          Comparing yourself to others is the thief of joy.
        </div>
        <div className="tab-panel" id="angular" role="tabpanel">
          It&apos;s better to choose, commit, and get started instead
          of waiting for the best possible option.
        </div>
        <div className="tab-panel" id="svelte" role="tabpanel">
          If you think you can learn a lot from reading books, try
          writing one.
        </div>
      </div>
    </div>
  )
}
