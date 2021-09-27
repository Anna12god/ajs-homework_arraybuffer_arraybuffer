import getBuffer from '../getBuffer';
import ArrayBufferConverter from '../arrayBufferConverter';

test('should return correct string', () => {
  const arrayBufferConverter = new ArrayBufferConverter();
  arrayBufferConverter.load(getBuffer());

  const received = `${arrayBufferConverter}`;
  const expected = '{"data":{"user":{"id":1,"name":"Hitman","level":10}}}';

  expect(received).toBe(expected);
});
