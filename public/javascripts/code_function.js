const Url = require('../../models/url')
let code = 'ikzXx'
examinedCode(code, Url)

function codeGenerator() {
  let code = ''
  const box = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890'
  for (let i = 1; i <= 5; i++) {
    code += box[Math.floor(Math.random() * 62)]
  }
  return code
}

function examinedCode(generatedcode, database){
    database.find({ code: generatedcode })
    .lean()
    .then((response) => {
      do
      {
        generatedcode = codeGenerator()
      }
      while (generatedcode === response[0].code)
    })
    .catch(error => console.log(error))
  
  console.log(generatedcode) 
}

module.exports = codeGenerator
module.exports = examinedCode