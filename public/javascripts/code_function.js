const res = require("express/lib/response")

function codeGenerator() {
  let code = ''
  const box = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890'
  for (let i = 1; i <= 5; i++) {
    code += box[Math.floor(Math.random() * 62)]
  }
  return code
}

module.exports = codeGenerator
