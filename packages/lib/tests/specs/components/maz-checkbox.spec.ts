import { mount } from '@vue/test-utils'
import MazCheckbox from '@components/MazCheckbox.vue'

describe('components/MazCheckbox.vue', () => {
  expect(MazCheckbox).toBeTruthy()

  test('Should match with the snapshot', () => {
    const wrapper = mount(MazCheckbox, {
      props: {
        modelValue: false,
      },
    })
    expect(wrapper.html()).toMatchSnapshot()

    wrapper.unmount()
  })

  test('renders correctly', () => {
    const wrapper = mount(MazCheckbox, {
      props: {
        modelValue: true, // You can provide props here
        // Add other props as needed
      },
    })

    // Add your assertions based on your component's rendering and behavior
    // For example, you can assert the existence of specific elements or classes:
    expect(wrapper.find('label').exists()).toBe(true)
    expect(wrapper.find('input').attributes('type')).toBe('checkbox')
    // Add more assertions as needed.

    // Don't forget to clean up the wrapper
    wrapper.unmount()
  })

  test('Should have an uniq id', () => {
    const wrapper = mount(MazCheckbox, {
      props: {
        modelValue: false,
      },
    })

    expect(wrapper.vm.instanceId).toBe('MazCheckbox-9')

    wrapper.unmount()
  })
})
