let $ = (tag, ...args) => args.reduce((a, b) => b(a), a, document.createElement(tag))

let text = t => n => n.innerText = t
let append = d => n => d.appendChild(n)
let on = (e, f) => n => n.addEventListener(e, f, false)

$('h1', on('click', x => alert(x.target.innerText)), text('Hello World'), append(document.body))
