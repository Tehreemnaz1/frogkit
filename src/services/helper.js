export function formatUkZip (zip = '') {
  switch (zip.length) {
    case 5:
      return zip.slice(0, 2).concat(' ').concat(zip.slice(2))
    case 6:
      if (zip[2] === ' ') return zip
      return zip.slice(0, 3).concat(' ').concat(zip.slice(3))
    case 7:
      if (zip[3] === ' ') return zip
      return zip.slice(0, 4).concat(' ').concat(zip.slice(4))
    default:
      return zip
  }
}