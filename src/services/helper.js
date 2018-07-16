export function formatUkZip (zip = '') {
  const tmp = zip.replace(/\s+/g, '')
  if (tmp.length >= 5) return tmp.slice(0, -3).concat(' ').concat(tmp.slice(-3))
  return zip
}