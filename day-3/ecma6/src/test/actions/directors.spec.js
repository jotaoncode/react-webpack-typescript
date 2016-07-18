import expect from 'expect'
import * as actions from '../../actions'

describe('todo actions', () => {
  it('remove director should create REMOVE_DIRECTOR action', () => {
    expect(actions.removeDirector(1)).toEqual({
      type: 'REMOVE_DIRECTOR',
      id: 1
    })
  })
})
