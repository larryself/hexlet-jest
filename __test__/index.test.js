import reverse from '../src/index';

test('reverse', () => {
    expect(reverse('hello')).toBe('olleh');
    expect(reverse('')).toBe('');
});

