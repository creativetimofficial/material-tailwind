

export default function QuadGallery() {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: `<div class="grid grid-cols-2 gap-2">
  <div><img class="h-40 max-w-full rounded-lg object-cover object-center md:h-60" src="https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1470&amp;q=80" alt="" /></div>
  <div><img class="h-40 max-w-full rounded-lg object-cover object-center md:h-60" src="https://images.unsplash.com/photo-1432462770865-65b70566d673?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1950&amp;q=80" alt="" /></div>
  <div><img class="h-40 max-w-full rounded-lg object-cover object-center md:h-60" src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=2560&amp;q=80" alt="" /></div>
  <div><img class="h-40 max-w-full rounded-lg object-cover object-center md:h-60" src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=2940&amp;q=80" alt="" /></div>
</div>
`
      }}
    />
  );
}
