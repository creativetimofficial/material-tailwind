
export default function VerticalTabs() {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: `<div class="tab-group flex mt-10 w-full" data-orientation="vertical">
  <div role="tablist" class="relative bg-slate-100 rounded-lg flex flex-col p-1">
    <div class="absolute top-0 left-0 right-0 mx-1 w-auto bg-white rounded-md shadow-sm transition-all duration-300 transform scale-x-0 translate-x-0 tab-indicator z-0"></div>
    <a href="#" class="tab-link text-sm active px-4 py-2 text-slate-800 relative" data-tab-target="tab-vertical-html">HTML</a>
    <a href="#" class="tab-link text-sm px-4 py-2 text-slate-800 relative" data-tab-target="tab-vertical-react">React</a>
    <a href="#" class="tab-link text-sm px-4 py-2 text-slate-800 relative" data-tab-target="tab-vertical-vue">Vue</a>
    <a href="#" class="tab-link text-sm px-4 py-2 text-slate-800 relative" data-tab-target="tab-vertical-angular">Angular</a>
    <a href="#" class="tab-link text-sm px-4 py-2 text-slate-800 relative" data-tab-target="tab-vertical-svelte">Svelte</a>
  </div>
  <div id="tab-vertical-html" class="tab-content w-full text-slate-800 block p-4">
    It really matters and then like it really doesn't matter. What matters is the people who are sparked by it. And the people who are like offended by it, it doesn't matter.
  </div>
  <div id="tab-vertical-react" class="tab-content w-full text-slate-800 hidden p-4">
    Because it's about motivating the doers. Because I'm here to follow my dreams and inspire other people to follow their dreams, too.
  </div>
  <div id="tab-vertical-vue" class="tab-content w-full text-slate-800 hidden p-4">
    We're not always in the position that we want to be at. We're constantly growing. We're constantly making mistakes. We're constantly trying to express ourselves and actualize our dreams.
  </div>
  <div id="tab-vertical-angular" class="tab-content w-full text-slate-800 hidden p-4">
    Because it's about motivating the doers. Because I'm here to follow my dreams and inspire other people to follow their dreams, too.
  </div>
  <div id="tab-vertical-svelte" class="tab-content w-full text-slate-800 hidden p-4">
    We're not always in the position that we want to be at. We're constantly growing. We're constantly making mistakes. We're constantly trying to express ourselves and actualize our dreams.
  </div>
</div>
`
      }}
    />
  );
}
