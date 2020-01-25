import { output } from './app'
import { readFileSync } from 'fs'

describe('App', () => {
  it('match output', () => {
    const expected_output = readFileSync('src/fixtures/app_output.txt', 'utf-8')
    expect(output).toEqual(expected_output)
  })
})
