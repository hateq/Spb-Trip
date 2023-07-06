const headers = document.querySelectorAll('.accordion-header');
headers.forEach(function(item){
	item.addEventListener('click', function(){
		this.nextElementSibling.classList.toggle('hidden');
	})
})