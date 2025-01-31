export default function TabsDemo() {
            return (
              <div
                className="w-full place-items-center"
                dangerouslySetInnerHTML={{
                  __html: 
`
<div class="relative tab-group">
  <div class="flex bg-stone-100 p-0.5 relative rounded-lg" role="tablist">
    <div class="absolute top-1 left-0.5 h-8 bg-white rounded-md shadow-sm transition-all duration-300 transform scale-x-0 translate-x-0 tab-indicator z-0"></div>

    <a href="#" class="tab-link text-sm active inline-block py-2 px-4 text-stone-800 transition-all duration-300 relative z-1 mr-1" data-dui-tab-target="tab1-group">
      HTML
    </a>
    <a href="#" class="tab-link text-sm inline-block py-2 px-4 text-stone-800 transition-all duration-300 relative z-1 mr-1" data-dui-tab-target="tab2-group">
      React
    </a>
    <a href="#" class="tab-link text-sm inline-block py-2 px-4 text-stone-800 transition-all duration-300 relative z-1 mr-1" data-dui-tab-target="tab3-group">
      Vue
    </a>
    <a href="#" class="tab-link text-sm inline-block py-2 px-4 text-stone-800 transition-all duration-300 relative z-1 mr-1" data-dui-tab-target="tab4-group">
      Angular
    </a>
    <a href="#" class="tab-link text-sm inline-block py-2 px-4 text-stone-800 transition-all duration-300 relative z-1 mr-1" data-dui-tab-target="tab5-group">
      Svelte
    </a>
  </div>
  <div class="mt-4 tab-content-container">
    <div id="tab1-group" class="tab-content text-stone-500 text-sm block">
      <p>Content for HTML.</p>
    </div>
    <div id="tab2-group" class="tab-content text-stone-500 text-sm hidden">
      <p>Content for React.</p>
    </div>
    <div id="tab3-group" class="tab-content text-stone-500 text-sm hidden">
      <p>Content for Vue.</p>
    </div>
      <div id="tab4-group" class="tab-content text-stone-500 text-sm hidden">
      <p>Content for Angular.</p>
    </div>
      <div id="tab5-group" class="tab-content text-stone-500 text-sm hidden">
      <p>Content for Svelte.</p>
    </div>
  </div>
</div>
`
                }}
              />
            );
          }