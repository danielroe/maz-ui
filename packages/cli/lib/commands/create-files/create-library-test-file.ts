import { writeFile } from 'node:fs/promises'
import { resolve } from 'node:path'
import { exit } from 'node:process'

export async function createLibraryTestFile({
  filename,
  filenameKebab,
}: {
  filename: string
  filenameKebab: string
}): Promise<void> {
  const testComponentTemplate = `import { shallowMount, type VueWrapper } from '@vue/test-utils'
import ${filename} from '@components/${filename}.vue'

describe('${filename}', () => {
  let wrapper: VueWrapper

  beforeEach(() => {
    wrapper = shallowMount(${filename})
  })

  test('Should match with the snapshot', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })
})`

  try {
    const TEST_FILE_OUTPUT = resolve(
      __dirname,
      `../../../../lib/tests/specs/components/${filenameKebab}.spec.ts`,
    )

    await writeFile(TEST_FILE_OUTPUT, testComponentTemplate)
  } catch (error) {
    console.error(`Error: Failed to create file "${filename}".`, error)
    exit(1)
  }
}
