import expect from 'expect'
import directors from '../../reducers/directors'

describe('directors reducer', () => {
  it('should handle initial state', () => {
    expect(
      directors(undefined, {})
    ).toEqual([])
  })

  it('should handle REMOVE_DIRECTOR', () => {
    expect(
      directors([
        {
          name: 'Run the tests',
          id: 1
        }, {
          name: 'Use Redux',
          id: 0
        }
      ], {
        type: 'REMOVE_DIRECTOR',
        id: 1
      })
    ).toEqual([
      {
        name: 'Use Redux',
        id: 0
      }
    ])
  })
})
