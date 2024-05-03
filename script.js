function chooseFile() {
  document.getElementById('fileInput').click()
}

document.getElementById('fileInput').addEventListener('change', function () {
  var file = this.files[0]
  console.log('Выбранный файл:', file)
})
