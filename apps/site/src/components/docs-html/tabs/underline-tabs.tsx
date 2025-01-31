export default function UnderlineTabs() {
            return (
              <div
                className="w-full place-items-center"
                dangerouslySetInnerHTML={{
                  __html: 
`
<div class="relative tab-group">
  <div class="flex border-b border-stone-200 relative" role="tablist">
    <div class="absolute bottom-0 h-0.5 bg-stone-800 transition-transform duration-300 transform scale-x-0 translate-x-0 tab-indicator"></div>

    <a href="#" class="tab-link text-sm active inline-block py-2 px-4 text-stone-800 hover:text-stone-500 transition-colors duration-300 mr-1" data-dui-tab-target="tab1-group4">
      HTML
    </a>
    <a href="#" class="tab-link text-sm inline-block py-2 px-4 text-stone-800 hover:text-stone-500 transition-colors duration-300 mr-1" data-dui-tab-target="tab2-group4">
      React
    </a>
    <a href="#" class="tab-link text-sm inline-block py-2 px-4 text-stone-800 hover:text-stone-500 transition-colors duration-300 mr-1" data-dui-tab-target="tab3-group4">
      Vue
    </a>
    <a href="#" class="tab-link text-sm inline-block py-2 px-4 text-stone-800 hover:text-stone-500 transition-colors duration-300 mr-1" data-dui-tab-target="tab4-group4">
      Angular
    </a>
    <a href="#" class="tab-link text-sm inline-block py-2 px-4 text-stone-800 hover:text-stone-500 transition-colors duration-300 mr-1" data-dui-tab-target="tab5-group4">
      Svelte
    </a>
  </div>
  <div class="mt-4 tab-content-container">
    <div id="tab1-group4" class="tab-content text-stone-500 text-sm block">
      <p>Content for HTML.</p>
    </div>
    <div id="tab2-group4" class="tab-content text-stone-500 text-sm hidden">
      <p>Content for React.</p>
    </div>
      <div id="tab3-group4" class="tab-content text-stone-500 text-sm hidden">
      <p>Content for Vue.</p>
    </div>
      <div id="tab4-group4" class="tab-content text-stone-500 text-sm hidden">
      <p>Content for Angular.</p>
    </div>
      <div id="tab5-group4" class="tab-content text-stone-500 text-sm hidden">
      <p>Content for Svelte.</p>
    </div>
  </div>
</div>
`
                }}
              />
            );
          }