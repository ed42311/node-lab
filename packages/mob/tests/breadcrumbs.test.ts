import { buildBreadcrumbs, getMatchingRoutes, getSubpath } from '../src'
import { expect } from 'chai'
import 'mocha'

const testAboutPath = {
  fullPath: '/about-us',
  hash: '',
  meta: {},
  name: 'custom___en',
  params: { 0: '/about-us', pathMatch: '/about-us' },
  path: '/about-us',
  query: {},
}

const testPrivacyPath = {
  fullPath: '/about-us/privacy-policy',
  hash: '',
  meta: {},
  name: 'custom___en',
  params: {
    0: '/about-us/privacy-policy',
    pathMatch: '/about-us/privacy-policy',
  },
  path: '/about-us/privacy-policy',
  query: {},
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

describe('Breadcrumbs', () => {
  it('getMatchingRoutes() -- Should return an array of all routes, split at /', () => {
    const testRoute = '/about-us/privacy-policy'
    expect(getMatchingRoutes(testRoute)).to.eql(['about-us', 'privacy-policy'])
  })

  it('getSubpath() -- Should return a subpath string from a nested path', () => {
    const testRoute = '/about-us/privacy-policy'
    expect(getSubpath(testRoute)).to.eql('about-us')
  })

  it('getSubpath() -- Should return a subpath string from a non-nested path', () => {
    const testRoute = '/about-us'
    expect(getSubpath(testRoute)).to.eql('about-us')
  })

  it('getSubpath() -- Should return an empty string if given undefined', () => {
    const testRoute = ''
    expect(getSubpath(testRoute)).to.eql('')
  })

  it('buildBreadcrumbs() -- Should return an array of story link texts', () => {
    const breadCrumbsInput = {
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
    const breadcrumbsExpected = [
      {
        link: '/about-us',
        text: 'About Us',
      },
      {
        link: '/about-us/privacy-policy',
        text: 'Privacy Policy',
      },
    ]
    expect(
      buildBreadcrumbs('/about-us/privacy-policy', breadCrumbsInput)
    ).to.eql(breadcrumbsExpected)
  })
})
