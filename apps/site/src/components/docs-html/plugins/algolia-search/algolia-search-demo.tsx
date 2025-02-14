
export default function AlgoliaSearchDemo() {
  return (
    <div
      className="w-full place-items-center"
      dangerouslySetInnerHTML={{
        __html: `<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@docsearch/css@3" />
 
<div class="group relative">
  <div class="relative h-10 w-full min-w-[200px]">
    <input
      type="email"
      placeholder="Search"
      readonly=""
      class="w-full aria-disabled:cursor-not-allowed outline-none focus:outline-none text-slate-800 dark:text-white placeholder:text-slate-600/60 bg-transparent ring-transparent border border-slate-200 transition-all duration-300 ease-in disabled:opacity-50 disabled:pointer-events-none data-[error=true]:border-red-500 data-[success=true]:border-green-500 text-sm rounded-md py-2 px-2.5 ring shadow-sm data-[icon-placement=start]:ps-9 data-[icon-placement=end]:pe-9 hover:border-slate-800 hover:ring-slate-800/10 focus:border-slate-800 focus:ring-slate-800/10 peer"
    />
  </div>
  <div class="absolute top-[calc(50%-1px)] right-2.5 -translate-y-2/4">
    <kbd class="rounded border border-slate-100 bg-white px-1 pt-px pb-0 text-xs font-medium text-slate-900 shadow shadow-black/5">
      <span class="mr-0.5 inline-block translate-y-[1.5px] text-base">
        ⌘
      </span>
      K
    </kbd>
  </div>
  <div id="docsearch" class="absolute inset-0 w-full opacity-0"></div>
</div>
 
<style>
  docsearch({
    container: '#docsearch',
    appId: 'YOUR_APP_ID',
    indexName: 'YOUR_INDEX_NAME',
    apiKey: 'YOUR_SEARCH_API_KEY',
  });
</style>
 
<script src="https://cdn.jsdelivr.net/npm/@docsearch/js@3"></script>
`}}
    />
  );
}