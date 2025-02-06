
export default function TabsDemo() {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: `<div class="relative tab-group">
  <div class="flex bg-slate-100 p-0.5 relative rounded-lg" role="tablist">
    <div class="absolute top-1 left-0.5 h-8 bg-white rounded-md shadow-sm transition-all duration-300 transform scale-x-0 translate-x-0 tab-indicator z-0"></div>

    <a href="#" class="tab-link text-sm active inline-block py-2 px-4 text-slate-800 transition-all duration-300 relative z-1 mr-1" data-tab-target="tab1-group">
      HTML
    </a>
    <a href="#" class="tab-link text-sm inline-block py-2 px-4 text-slate-800 transition-all duration-300 relative z-1 mr-1" data-tab-target="tab2-group">
      React
    </a>
    <a href="#" class="tab-link text-sm inline-block py-2 px-4 text-slate-800 transition-all duration-300 relative z-1 mr-1" data-tab-target="tab3-group">
      Vue
    </a>
    <a href="#" class="tab-link text-sm inline-block py-2 px-4 text-slate-800 transition-all duration-300 relative z-1 mr-1" data-tab-target="tab4-group">
      Angular
    </a>
    <a href="#" class="tab-link text-sm inline-block py-2 px-4 text-slate-800 transition-all duration-300 relative z-1 mr-1" data-tab-target="tab5-group">
      Svelte
    </a>
  </div>
  <div class="mt-4 tab-content-container">
    <div id="tab1-group" class="tab-content text-slate-800 block">
      <p>It really matters and then like it really doesn't matter. What matters is the people who are sparked by it. And the people who are like offended by it, it doesn't matter..</p>
    </div>
    <div id="tab2-group" class="tab-content text-slate-800 hidden">
      <p>Because it's about motivating the doers. Because I'm here to follow my dreams and inspire other people to follow their dreams, too.</p>
    </div>
    <div id="tab3-group" class="tab-content text-slate-800 hidden">
      <p>We're not always in the position that we want to be at. We're constantly growing. We're constantly making mistakes. We're constantly trying to express ourselves and actualize our dreams.</p>
    </div>
      <div id="tab4-group" class="tab-content text-slate-800 hidden">
      <p>Because it's about motivating the doers. Because I'm here to follow my dreams and inspire other people to follow their dreams, too.</p>
    </div>
      <div id="tab5-group" class="tab-content text-slate-800 hidden">
      <p>We're not always in the position that we want to be at. We're constantly growing. We're constantly making mistakes. We're constantly trying to express ourselves and actualize our dreams.</p>
    </div>
  </div>
</div>
`
      }}
    />
  );
}
