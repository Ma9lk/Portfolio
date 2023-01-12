const getId = (id) => {
	let elId = document.getElementById(id)
	return elId
}

const getClassName = (className) => {
	let elClass = document.querySelectorAll(className)
	return elClass
}


// Выбор тестов для отправки, которые будут показаны
const checkbox = getClassName('.checkbox')
const btnSend = getClassName('.send')
	for (let i=0; i<checkbox.length; i++) {
		checkbox[i].addEventListener('click', function () {
			let checked = this.toggleAttribute('checked')
				btnSend[i].style.display = checked ? 'block' : 'none'
			})
		}




// Input enable/disable
const contacts = getClassName('.submit-form__contact')
const inputWrapper = getClassName('.input-wrapper')
	for (let i=0; i<inputWrapper.length; i++) {
			inputWrapper[i].addEventListener('click', function() {
				for (let c = 0; c < contacts.length; c++) {
					contacts[c].removeAttribute('disabled')
					contacts[c].classList.remove('enable')
				}
			contacts[i].getAttribute('disabled')
			contacts[i].classList.add('enable')
			contacts[i].focus()
			})
		
	}
	for (let contact of contacts){
		contact.addEventListener('focusout', function() {
			contact.getAttribute('disabled')
			contact.classList.remove('enable')
			})
		}

// Пвседоэкран
const settingIcon = getId('setting-icon')
const submitForm = document.querySelector('.hrsc-submit-form')
const arrowIcon = getId('arrow-icon')
const setting = getId('setting')
	settingIcon.addEventListener('click', function() {
		submitForm.classList.add('smooz')
		setting.classList.add('smooth')
	})

	arrowIcon.addEventListener('click', function() {
		submitForm.classList.remove('smooz')
		setting.classList.remove('smooth')
	})
