import Vue from 'vue'
import HelloWorld from '../../../../src/components/containers/HelloWorld.vue'
import { CombinedVueInstance } from 'vue/types/vue'
import Assert from 'power-assert'
import { getStubVueContext } from '../../fixtures/stubber'

describe('HelloWorld.vue', () => {
  let appInstance: CombinedVueInstance<Vue, {}, {}, {}, {}>
  before(function () {
    appInstance = getStubVueContext(HelloWorld)
  })

  it('Should render the hello world element', () => {
    let categoriesWidget = appInstance.$el.getElementsByClassName('hello-container')
    Assert.equal(categoriesWidget.length, 1)
  })
})
