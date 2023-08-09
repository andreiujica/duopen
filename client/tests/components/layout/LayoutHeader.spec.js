import { shallowMount } from '@vue/test-utils'
import LayoutHeader from '~/components/layout/Header.vue'

describe('LayoutHeader.vue', () => {
  let wrapper

  describe('computedBreadcrumbs computed property', () => {
    it('computes breadcrumbs correctly for nested paths', () => {
      wrapper = shallowMount(LayoutHeader, {
        mocks: {
          $route: {
            path: '/example/path/to/resource',
          },
        },
      })

      const expectedBreadcrumbs = [
        {
          label: 'Example',
          path: '/example',
        },
        {
          label: 'Path',
          path: '/example/path',
        },
        {
          label: 'To',
          path: '/example/path/to',
        },
        {
          label: 'Resource',
          path: '/example/path/to/resource',
        },
      ]

      expect(wrapper.vm.computedBreadcrumbs).toEqual(expectedBreadcrumbs)
    })

    it('computes breadcrumbs correctly for root path', () => {
      wrapper = shallowMount(LayoutHeader, {
        mocks: {
          $route: {
            path: '/',
          },
        },
      })

      expect(wrapper.vm.computedBreadcrumbs).toEqual([])
    })
  })
})
