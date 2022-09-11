var main = document.querySelector(".main")
var words = "Java Python Web CSS HTML Javascript"
var words = words.split(" ")
var i = 0
var tmp = words[i].split("")
console.log(tmp)

function typing() {
	if (tmp.length == 0) {
		deleting()
		return
	}
	main.innerHTML += tmp.shift()
	setTimeout(typing,500)
}

function deleting() {
	if (main.innerText == "") {
		if (i == words.length-1) {
			i = 0
			tmp = words[i].split("")
			typing()
			return
		}
		tmp = words[++i].split("")
		typing()
		return
	}
	main.innerText = main.innerText.slice(0,main.innerText.length-1)
	setTimeout(deleting,300)
}

typing()