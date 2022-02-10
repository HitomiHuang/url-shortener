const res = require("express/lib/response")

function codeGenerator() {
  let code = ''
  const box = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890'
  for (let i = 1; i <= 5; i++) {
    code += box[Math.floor(Math.random() * 62)]
  }
  return code
}

// function codeExamine(code, database) {
//    database.findOne({code})
//       .then(data => data ? code = codeGenerator() : code )
//       .then(data => console.log(`${data.code}`))
// }

module.exports = codeGenerator
// module.exports = codeExamine