const windmillConfig = require('../../config')

describe('windmill configuration', () => {
  it('should include right defaults for `content` field', () => {
    expect(
      windmillConfig({
        content: ['./app/**/*.{ts,tsx,jsx,js}'],
      }).content
    ).toEqual({
      files: [
        './app/**/*.{ts,tsx,jsx,js}',
        'node_modules/windmill-react-ui-kit/lib/defaultTheme.js',
        'node_modules/windmill-react-ui-kit/dist/index.js',
      ],
    })
  })

  it('should include right defaults for `content` when passing as object', () => {
    expect(
      windmillConfig({
        content: {
          files: ['./app/**/*.{ts,tsx,jsx,js}'],
        },
      }).content
    ).toEqual({
      files: [
        './app/**/*.{ts,tsx,jsx,js}',
        'node_modules/windmill-react-ui-kit/lib/defaultTheme.js',
        'node_modules/windmill-react-ui-kit/dist/index.js',
      ],
    })
  })

  it('should include right defaults for `content` with additional fields', () => {
    expect(
      windmillConfig({
        content: {
          relative: true,
          files: ['./app/**/*.{ts,tsx,jsx,js}'],
        },
      }).content
    ).toEqual({
      relative: true,
      files: [
        './app/**/*.{ts,tsx,jsx,js}',
        'node_modules/windmill-react-ui-kit/lib/defaultTheme.js',
        'node_modules/windmill-react-ui-kit/dist/index.js',
      ],
    })
  })
})
