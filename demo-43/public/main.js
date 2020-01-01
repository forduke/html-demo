getJSON.onclick = () => {
  const request = new XMLHttpRequest();
  request.open('GET', "/5.json");
  request.onreadystatechange = () => {
    if (request.readyState === 4 && request.status === 200) {
      const bool = JSON.parse(request.response)
      myName.textContent = bool.name
    }
  };
  request.send();
};
getXML.onclick = () => {
  const request = new XMLHttpRequest();
  request.open('GET', "/4.xml");
  request.onreadystatechange = () => {
    if (request.readyState === 4 && request.status === 200) {
      console.log(request.responseXML)
      const dom = request.responseXML;
      dom.getElementsByTagName('warning')[0].textContent
      console.log(text.trim())
    }
  };
  request.send();
};
getHTML.onclick = () => {
  const request = new XMLHttpRequest();
  request.open('GET', "/3.html");
  request.onload = () => {
    const div = document.createElement('div')
    div.innerHTML = request.response
    document.body.appendChild(div)
  };
  request.onerror = () => {
    console.log('失败了')
  };
  request.send();
};
getJS.onclick = () => {
  const request = new XMLHttpRequest();
  request.open('GET', "/2.js");
  request.onload = () => {
    const script = document.createElement('script')
    script.innerHTML = request.response
    document.body.appendChild(script)
  };
  request.onerror = () => {
    console.log('失败了')
  };
  request.send();
};
getCSS.onclick = () => {
  const request = new XMLHttpRequest();
  request.open('GET', "/style.css");
  request.onreadystatechange = () => {
    if (request.status >= 200 && request.status < 300) {
      const style = document.createElement('style')
      style.innerHTML = request.response
      document.head.appendChild(style)
    } else {
      alert('css 加载失败')
    }
  };
  request.send();
};
