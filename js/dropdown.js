"use strict";

// ETC sns버튼 클릭시 보여지는 소셜리스트
const etc_sns = document.querySelector('.etc__sns');
const sns_list = document.querySelector('.sns--list');
const SHOW = 'show';


etc_sns.addEventListener('mouseover', () => {
    sns_list.classList.add(SHOW)
    sns_list.addEventListener('mouseleave', () => {
        sns_list.classList.remove(SHOW)
    })
})

etc_sns.addEventListener('mouseleave', () => {
    sns_list.classList.remove(SHOW)
    
})


//private rooms btn클릭 이벤트 

const private_btn = document.querySelector('.btn--private');
const private_rooms = document.querySelector('.private_rooms');
const close_btn = document.querySelector('.close')
const VIEW = 'view'

private_btn.addEventListener('click', () => {
    private_rooms.classList.add(VIEW)
    close_btn.addEventListener('click', () => {
        private_rooms.classList.remove(VIEW)
    })

})
