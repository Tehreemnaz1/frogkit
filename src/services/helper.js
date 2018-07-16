export function formatUkZip (zip = '') {
  const tmp = zip.replace(/^\s+|\s+$/g, '')
  switch (tmp.length) {
    case 5:
      /* if it contains spaces return it as it is */
      if(tmp.includes(' ')) return tmp
      return tmp.slice(0, 2).concat(' ').concat(tmp.slice(2))
    case 6:
      /* To prevent reformating zip code with 5 chars: XX XXX  */
      if (tmp[2] === ' ') return tmp
      /* Format code to the right format: XXX XX => XX XXX */
      if(tmp[3] === ' ') return tmp.slice(0, 2).concat(' ').concat(tmp.slice(2,3)).concat(tmp.slice(4))
      /* Format code to right format with 6 chars: XXXXXX => XXX XXX */
      return tmp.slice(0, 3).concat(' ').concat(tmp.slice(3))
    case 7:
      if(tmp[2] === ' ') return tmp.slice(0, 2).concat(tmp.slice(3,4)).concat(' ').concat(tmp.slice(4))
      /* To prevent reformating zip code with  chars: XXX XXX  */
      if (tmp[3] === ' ') return tmp
      /* Format code to the right format: XXXX XX => XXX XXX */
      if(tmp[4] === ' ') return tmp.slice(0,3).concat(' ').concat(tmp.slice(3,4)).concat(tmp.slice(5))
      /* Format code to right format with 6 chars: XXXXXXX => XXXX XXX */
      return tmp.slice(0, 4).concat(' ').concat(tmp.slice(4))
      case 8:
      /* Format code to right format with 7 chars: XXX XXXX => XXXX XXX */
        if (tmp[3] === ' ') return tmp.slice(0, 3).concat(tmp.slice(4,5)).concat(' ').concat(tmp.slice(5))
    default:
      return tmp
  }
}