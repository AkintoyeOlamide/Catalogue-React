import categories from '../../reducers/categories';

describe('categories reducer', () => {
  test('should return initial state', () => {
    expect(categories(undefined, {})).toEqual([]);
  });
});

// negative
describe('categories reducer', () => {
  test('should return initial state', () => {
    expect(categories(undefined, {})).toBeFalsy([]);
  });
});
