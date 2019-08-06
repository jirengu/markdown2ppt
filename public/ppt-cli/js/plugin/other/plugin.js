ImgCt = (function(){
  var isInit = false
  var nodeList = []
  var ct = document.createElement('div')
  var img = document.createElement('img')
  var close = document.createElement('span')
  
  
  function init(nodes){
    if(isInit) return
    if(nodes.length === undefined){
      nodeList.push(nodes)
    }else{
      nodes.forEach(function(node){
        nodeList.push(node)
      })
    }
    isInit = true
    
    setStyle()
    bindEvent()
  }
  function setStyle(){
    close.innerText = 'x';
    ct.appendChild(img)
    ct.appendChild(close)
    ct.id='__img-ct__'
    ct.setAttribute('style', 'background: rgba(0, 0, 0, 0.8);position: fixed;top: 0px;left: 0px;right: 0px;bottom: 0px;display:none;z-index:999;')
    img.setAttribute('style', 'position: absolute;top: 50%;left: 50%;transform: translate(-50%, -50%);box-shadow: 0px 0px 9px 1px rgba(0, 0, 0, 0.6);max-width:90%;max-height:90%;')
    close.setAttribute('style', 'color: #fff;font-size: 3em;font-family: fantasy;position: absolute;right: 20px;top: 20px;cursor: pointer;')
    document.body.appendChild(ct);
    
  }
  
  function bindEvent(){
    nodeList.forEach(function(node){
      node.setAttribute('style', 'cursor:pointer')
      node.addEventListener('click', function(){
        img.src = node.src
        ct.style.display="block"
        console.log(node.src)
      })
    })
    close.addEventListener('click', function(){
      ct.style.display="none"
    })
  }
  
  return {
    init: init
  }
})()

ImgCt.init(document.querySelectorAll('section img'))