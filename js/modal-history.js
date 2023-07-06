const modalHistory = document.querySelector('.modal-history');
const spbHistoryBtn = document.querySelector('.spb-history-button');
const closeModalBtn = document.querySelector('.close-modal-button');
spbHistoryBtn.addEventListener('click', function(){
	modalHistory.style.display = 'flex';
})
closeModalBtn.addEventListener('click', function(){
	modalHistory.style.display = 'none';
})