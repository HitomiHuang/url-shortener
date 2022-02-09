function copyLink(){
  const copyText = document.querySelector('#copyText').innerText
  console.log(copyText)
  navigator.clipboard.writeText(copyText)
    .then(() => alert('Copied'))
    .catch(error => console.log(error))
}