const reverse = require('../utils/for_testing').reverse
describe('reverse of', () => {
  test('\'a\'', () => {
    const result = reverse('a')

    expect(result).toBe('a')
  })

  test('\'react\'', () => {
    const result = reverse('react')

    expect(result).toBe('tcaer')
  })

  test('\'saippuakauppias\'', () => {
    const result = reverse('saippuakauppias')

    expect(result).toBe('saippuakauppias')
  })
})