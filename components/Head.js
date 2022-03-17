const viewport = document.createElement('meta'),
      charset = document.createElement('meta'),
      title = document.createElement('title'),
      link = document.createElement('link')


viewport.setAttribute('name', 'viewport');
viewport.setAttribute('content', 'width=device-width, initial-scale=1.0');
charset.setAttribute('charset', 'UTF-8');
link.setAttribute('rel', 'stylesheet');
link.setAttribute('href', 'css/style.css')

document.head.appendChild(viewport)
document.head.appendChild(charset)
document.head.appendChild(title)
document.head.appendChild(link)

export { title }