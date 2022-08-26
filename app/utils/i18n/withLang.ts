// Prefix url with language code

function withLang(pathname: string = '', language: string = 'en-US') {
  return pathname.startsWith('/')
    ? `/${language}${pathname}`
    : `/${language}${pathname ? '/' + pathname : ''}`
}

export default withLang
