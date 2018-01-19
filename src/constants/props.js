const getDefaultSVGProps = (color, size) => ({
  xmlns: 'http://www.w3.org/2000/svg',
  style: {
    flexShrink: 0,
  },
  width: size,
  height: size,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: color,
  strokeWidth: '2',
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
})

export default getDefaultSVGProps
