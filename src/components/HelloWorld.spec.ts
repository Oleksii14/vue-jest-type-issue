import HelloWorld from './HelloWorld.vue'

import { shallowMount } from '@vue/test-utils'

describe('HelloWorld', () => {
  it("renders", () => {
    shallowMount(HelloWorld, {
      props: {
        msg: 'test'
      }
    })
  })
})