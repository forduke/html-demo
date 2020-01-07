// const request = new XMLHttpRequest()
// request.open('GET', 'http://qq.com:9999/friends.json')
// request.onreadystatechange = () => {
//   if (request.readyState === 4 && request.status === 200){
//     console.log(request.response)
//   }
// }
// request.send()

function jsonp(url) {
  return new Promise((resolve, reject) => {
    const script = document.createElement('script')
    const random = 'QianFunctionName' + Math.random()
    window[random] = (data) => {
      resolve(data)
    }
    script.src = `${url}?callback=${random}`
    script.onload = () => {
      script.remove()
    }
    script.onerror = () => {
      reject()
    }
    document.body.appendChild(script)
  })
}
jsonp('http://qq.com:9999/friends.js')
  .then((data) => {
    console.log(data)
  })


