function idGenerator() {
  let id = ''
  const box = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890'
  for (let i = 1; i <= 5; i++) {
    id += box[Math.floor(Math.random() * 62)]
  }
  return id
}


console.log(id)
