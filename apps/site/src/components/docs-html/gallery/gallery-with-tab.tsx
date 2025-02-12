

export default function GalleryWithTab() {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: `<div class="relative tab-group">
  <div class="flex w-8/12 mx-auto justify-between bg-slate-100 p-0.5 relative rounded-lg" role="tablist">
    <div class="absolute top-1 left-0.5 h-8 bg-white rounded-md shadow-sm transition-all duration-300 transform scale-x-0 translate-x-0 tab-indicator z-0"></div>

    <a href="#" class="tab-link text-sm active inline-block py-2 px-4 text-slate-800 transition-all duration-300 relative z-1 mr-1" data-tab-target="tab1-group">
      App
    </a>
    <a href="#" class="tab-link text-sm inline-block py-2 px-4 text-slate-800 transition-all duration-300 relative z-1 mr-1" data-tab-target="tab2-group">
      Messages
    </a>
    <a href="#" class="tab-link text-sm inline-block py-2 px-4 text-slate-800 transition-all duration-300 relative z-1 mr-1" data-tab-target="tab3-group">
      Settings
    </a>
    <a href="#" class="tab-link text-sm inline-block py-2 px-4 text-slate-800 transition-all duration-300 relative z-1 mr-1" data-tab-target="tab4-group">
      Profile
    </a>
    <a href="#" class="tab-link text-sm inline-block py-2 px-4 text-slate-800 transition-all duration-300 relative z-1 mr-1" data-tab-target="tab5-group">
      Dashboard
    </a>
  </div>
  <div class="mt-4 tab-content-container">
    <div id="tab1-group" class="tab-content text-slate-500 text-sm block grid grid-cols-2 gap-4 md:grid-cols-3">
      <div><img class="h-40 w-full max-w-full rounded-lg object-cover object-center" src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=2940&amp;q=80" alt="image-photo"></div>
      <div><img class="h-40 w-full max-w-full rounded-lg object-cover object-center" src="https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=2762&amp;q=80" alt="image-photo"></div>
      <div><img class="h-40 w-full max-w-full rounded-lg object-cover object-center" src="https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=2832&amp;q=80" alt="image-photo"></div>
      <div><img class="h-40 w-full max-w-full rounded-lg object-cover object-center" src="https://demos.creative-tim.com/material-kit-pro/assets/img/examples/blog5.jpg" alt="image-photo"></div>
      <div><img class="h-40 w-full max-w-full rounded-lg object-cover object-center" src="https://material-taillwind-pro-ct-tailwind-team.vercel.app/img/content2.jpg" alt="image-photo"></div>
      <div><img class="h-40 w-full max-w-full rounded-lg object-cover object-center" src="https://images.unsplash.com/photo-1620064916958-605375619af8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1493&amp;q=80" alt="image-photo"></div>
    </div>
    <div id="tab2-group" class="tab-content text-slate-500 text-sm hidden grid grid-cols-2 gap-4 md:grid-cols-3">
      <div><img class="h-40 w-full max-w-full rounded-lg object-cover object-center" src="https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1470&amp;q=80" alt="image-photo"></div>
      <div><img class="h-40 w-full max-w-full rounded-lg object-cover object-center" src="https://images.unsplash.com/photo-1432462770865-65b70566d673?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1950&amp;q=80" alt="image-photo"></div>
      <div><img class="h-40 w-full max-w-full rounded-lg object-cover object-center" src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=2560&amp;q=80" alt="image-photo"></div>
      <div><img class="h-40 w-full max-w-full rounded-lg object-cover object-center" src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=2940&amp;q=80" alt="image-photo"></div>
      <div><img class="h-40 w-full max-w-full rounded-lg object-cover object-center" src="https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=2762&amp;q=80" alt="image-photo"></div>
      <div><img class="h-40 w-full max-w-full rounded-lg object-cover object-center" src="https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=2832&amp;q=80" alt="image-photo"></div>
    </div>
    <div id="tab3-group" class="tab-content text-slate-500 text-sm hidden grid grid-cols-2 gap-4 md:grid-cols-3">
      <div><img class="h-40 w-full max-w-full rounded-lg object-cover object-center" src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=2940&amp;q=80" alt="image-photo"></div>
      <div><img class="h-40 w-full max-w-full rounded-lg object-cover object-center" src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=2940&amp;q=80" alt="image-photo"></div>
      <div><img class="h-40 w-full max-w-full rounded-lg object-cover object-center" src="https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=2832&amp;q=80" alt="image-photo"></div>
      <div><img class="h-40 w-full max-w-full rounded-lg object-cover object-center" src="https://demos.creative-tim.com/material-kit-pro/assets/img/examples/blog5.jpg" alt="image-photo"></div>
      <div><img class="h-40 w-full max-w-full rounded-lg object-cover object-center" src="https://material-taillwind-pro-ct-tailwind-team.vercel.app/img/content2.jpg" alt="image-photo"></div>
      <div><img class="h-40 w-full max-w-full rounded-lg object-cover object-center" src="https://images.unsplash.com/photo-1620064916958-605375619af8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1493&amp;q=80" alt="image-photo"></div>
    </div>
    <div id="tab4-group" class="tab-content text-slate-500 text-sm hidden grid grid-cols-2 gap-4 md:grid-cols-3">
      <div><img class="h-40 w-full max-w-full rounded-lg object-cover object-center" src="https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1470&amp;q=80" alt="image-photo"></div>
      <div><img class="h-40 w-full max-w-full rounded-lg object-cover object-center" src="https://images.unsplash.com/photo-1432462770865-65b70566d673?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1950&amp;q=80" alt="image-photo"></div>
      <div><img class="h-40 w-full max-w-full rounded-lg object-cover object-center" src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=2560&amp;q=80" alt="image-photo"></div>
      <div><img class="h-40 w-full max-w-full rounded-lg object-cover object-center" src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=2940&amp;q=80" alt="image-photo"></div>
      <div><img class="h-40 w-full max-w-full rounded-lg object-cover object-center" src="https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=2762&amp;q=80" alt="image-photo"></div>
      <div><img class="h-40 w-full max-w-full rounded-lg object-cover object-center" src="https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=2832&amp;q=80" alt="image-photo"></div>
    </div>
    <div id="tab5-group" class="tab-content text-slate-500 text-sm hidden grid grid-cols-2 gap-4 md:grid-cols-3">
      <div><img class="h-40 w-full max-w-full rounded-lg object-cover object-center" src="https://demos.creative-tim.com/material-kit-pro/assets/img/examples/blog5.jpg" alt="image-photo"></div>
      <div><img class="h-40 w-full max-w-full rounded-lg object-cover object-center" src="https://material-taillwind-pro-ct-tailwind-team.vercel.app/img/content2.jpg" alt="image-photo"></div>
      <div><img class="h-40 w-full max-w-full rounded-lg object-cover object-center" src="https://images.unsplash.com/photo-1620064916958-605375619af8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1493&amp;q=80" alt="image-photo"></div>
      <div><img class="h-40 w-full max-w-full rounded-lg object-cover object-center" src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=2940&amp;q=80" alt="image-photo"></div>
      <div><img class="h-40 w-full max-w-full rounded-lg object-cover object-center" src="https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=2762&amp;q=80" alt="image-photo"></div>
      <div><img class="h-40 w-full max-w-full rounded-lg object-cover object-center" src="https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=2832&amp;q=80" alt="image-photo"></div>
    </div>
  </div>
</div>`
      }}
    />
  );
}
