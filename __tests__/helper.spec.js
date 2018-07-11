import { formatUkZip } from '@/services/helper'

describe('should format uk zip code', () => {
  test('should return zip as it is if it does not match format', () => {
    const formatted = formatUkZip('test')
    expect(formatted).toBe('test')
  })
  test('should format zip with 5 chars', () => {
    const formatted = formatUkZip('A99AA')
    expect(formatted).toBe('A9 9AA')
  })
  test('should not break formatted zip code (5 ==> 6)', () => {
    const formatted = formatUkZip('A9 9AA')
    expect(formatted).toBe('A9 9AA')
  })
  test('should format zip with 6 chars', () => {
    const formatted = formatUkZip('A999AA')
    expect(formatted).toBe('A99 9AA')
  })
  test('should not break formatted zip code (6 ==> 7)', () => {
    const formatted = formatUkZip('A99 9AA')
    expect(formatted).toBe('A99 9AA')
  })
  test('should format zip with 7 chars', () => {
    const formatted = formatUkZip('AA999AA')
    expect(formatted).toBe('AA99 9AA')
  })
})
