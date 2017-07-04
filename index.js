let $ = (tag, ...args) => args.reduce((a, b) => (b(a),a), document.createElement(tag))

let text = t => n => n.innerText = t
let append = d => n => d.appendChild(n)

$('h1', text('Hello World'), append(document.body))
