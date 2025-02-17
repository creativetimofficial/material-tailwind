import type { MetadataRoute } from 'next'
import routes from '../routes'

export default function sitemap(): MetadataRoute.Sitemap {
  const routePrefix = "https://www.material-tailwind.com/docs/v3"
  const folders = ['react', 'html']

  const docsSitemap = folders.flatMap(folder => 
    routes.flatMap(route => 
      (route.pages || route.categories.flatMap(category => category.pages)).map(page => ({
        url: `${routePrefix}/${folder}${page.path.replace('/docs/v3/','').replace('/docs/', '').replace('/react/', '')}`,
        lastModified: '2025-02-17T14:50:08.275Z',
        changeFrequency: 'monthly',
        priority: 1,
      }))
    )
  )

  console.log(docsSitemap)

  return docsSitemap as MetadataRoute.Sitemap
  
}