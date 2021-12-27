interface StoryBlokLink {
  id: number
  is_folder: boolean
  is_startpage: boolean
  name: string
  parent_id: number
  position: number
  published: boolean
  real_path: string
  slug: string
  uuid: string
}

interface SfBreadcrumb {
  text: string
  link: string
}

const mapStoryBlokLinksToSfBreadCrumbs = ({
  name: text,
  real_path: link,
}: StoryBlokLink) => ({
  text,
  link,
})

export const breadcrumbsThing = (): number => {
  return 0
}

export const getMatchingRoutes = (routePath: string): string[] => {
  return routePath.split('/').filter(Boolean)
}

export const getSubpath = (routePath: string): string => {
  const subPath = routePath.split('/').filter(Boolean).shift()
  return subPath ? subPath : ''
}

export const getSlug = (fullRoute: string): string => {
  return fullRoute.substring(1)
}

export const buildBreadcrumbs = (
  matchRoute: string,
  links: Record<string, StoryBlokLink>
): SfBreadcrumb[] => {
  const breadcrumbsLinks = []
  // TODO: How to handle error if no links are found?
  if (!links) {
    return []
  }
  const linksArray: StoryBlokLink[] = Object.values(links)
  let currentRouteLink = linksArray.find(
    (link) => link.real_path === matchRoute
  )
  breadcrumbsLinks.push(currentRouteLink)

  while (currentRouteLink.parent_id != 0) {
    const parentLink = linksArray.find(
      (link) => link.id === currentRouteLink.parent_id
    )
    currentRouteLink = parentLink
    breadcrumbsLinks.push(parentLink)
  }

  return breadcrumbsLinks.map(mapStoryBlokLinksToSfBreadCrumbs).reverse()
}

const buildChildLinks = (
  matchRoute: string,
  links: Record<string, StoryBlokLink>
) => {
  const routePathMinusFirstChar = matchRoute.substring(1)
  const allLinksArray = Object.values(links)
  const childLinkRenderValuesArray = []
  const childLinksArray = []
  const currentRouteLink = allLinksArray.find(
    (link) => link.slug === routePathMinusFirstChar
  )
  for (let i = 0; i < allLinksArray.length; i++) {
    if (
      allLinksArray[i].parent_id === currentRouteLink.id &&
      allLinksArray[i].slug != routePathMinusFirstChar + '/'
    ) {
      childLinksArray.push(allLinksArray[i])
      childLinkRenderValuesArray.push({
        text: allLinksArray[i].name,
        link: '/' + allLinksArray[i].slug,
      })
    }
  }
}

export const otherBuildChildLinks = (
  matchRoute: string,
  links: Record<string, StoryBlokLink>
): SfBreadcrumb[] => {
  const linksArray = Object.values(links)
  const currentRouteLink = linksArray.find(
    (link) => link.real_path === matchRoute
  )
  return linksArray
    .filter(
      ({ parent_id, real_path }) =>
        parent_id === currentRouteLink.id && real_path != matchRoute
    )
    .map(mapStoryBlokLinksToSfBreadCrumbs)
}

const testLinks = {
  '0fd111c7-f378-4ce4-85b1-0d99018ed882': {
    id: 49853758,
    is_folder: false,
    is_startpage: false,
    name: "The Murdoch's Story",
    parent_id: 49257597,
    position: 70,
    published: true,
    real_path: '/about-us/the-murdochs-story',
    slug: 'about-us/the-murdochs-story',
    uuid: '6ba783a2-c8e9-4357-ac13-b23286cece6e',
  },
  '6ba783a2-c8e9-4357-ac13-b23286cece6e': {
    id: 70427515,
    slug: 'about-us/suppliers-and-vendors',
    name: 'Suppliers and Vendors',
    is_folder: false,
    parent_id: 49257597,
    published: true,
    position: 40,
    uuid: '0fd111c7-f378-4ce4-85b1-0d99018ed882',
    is_startpage: false,
    real_path: '/about-us/suppliers-and-vendors',
  },
}

const testLinksWithMatch = {
  '6071f56f-6d90-4db7-a3b7-2812b1432834': {
    id: 49853740,
    is_folder: false,
    is_startpage: true,
    name: 'About Us',
    parent_id: 49257597,
    position: -10,
    published: true,
    real_path: '/about-us/',
    slug: 'about-us/',
    uuid: '6071f56f-6d90-4db7-a3b7-2812b1432834',
  },
  '6ba783a2-c8e9-4357-ac13-b23286cece6e': {
    id: 70427515,
    slug: 'about-us/suppliers-and-vendors',
    name: 'Suppliers and Vendors',
    is_folder: false,
    parent_id: 49257597,
    published: true,
    position: 40,
    uuid: '0fd111c7-f378-4ce4-85b1-0d99018ed882',
    is_startpage: false,
    real_path: '/about-us/suppliers-and-vendors',
  },
  'f699e757-76fc-4fc2-9722-d64d71419d25': {
    id: 49856381,
    is_folder: false,
    is_startpage: false,
    name: 'Privacy Policy',
    parent_id: 49257597,
    position: 60,
    published: true,
    real_path: '/about-us/privacy-policy',
    slug: 'about-us/privacy-policy',
    uuid: 'f699e757-76fc-4fc2-9722-d64d71419d25',
  },
  'c26e8a8f-98c3-4bbc-86e9-fd77927bc696': {
    id: 49257597,
    is_folder: true,
    is_startpage: false,
    name: 'About Us',
    parent_id: 0,
    position: 100,
    published: false,
    real_path: '/about-us',
    slug: 'about-us',
    uuid: 'c26e8a8f-98c3-4bbc-86e9-fd77927bc696',
  },
}
