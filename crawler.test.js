const lib = require('./crawler');

const testUrl = 'https://therecount.github.io/interview-materials/project-a/1.html'

describe('webcrawler', () => {
  it('returns expected numbers from test url', () => {
    const result = lib.webcrawler(testUrl);
    expect(result).toEqual([
      '555-555-1234',
      '555-555-2345',
      '555-555-9872'
    ])
  })
});