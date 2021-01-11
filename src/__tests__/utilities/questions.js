import {shuffle} from '../../utilities/questions';

describe('shuffle function', () => {
    test('returns array with three elements when given array with three elements', () => {
        expect(shuffle(['a', 'b', 'c'])).toHaveLength(3)
    })

    test('returns array with unique values', () => {
        const shuffledArray = shuffle(['a', 'b', 'c'])
        expect(shuffledArray.length).toEqual(new Set(shuffledArray).size)
    })
})
