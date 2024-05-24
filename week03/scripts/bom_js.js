const input = document.querySelector("#favchap");
const button = document.querySelector('button');
const list = document.querySelector('#list');

button.addEventListener('click', () => {
    if (input.value != '')
        {
            const li = document.createElement('li');
            const deleteButton = document.createElement('button');
            li.textContent = input.value;
            deleteButton.textContent = '❌';
            li.append(deleteButton);
            li.append(li);
        }
})

deleteButton.addEventListener('click', () => {
    list.removeChild(li);
    input.focus();
});
console.log(' I like to copy the code instead of typing myself');

function setChapterList() {
    localStorage.setItem('favchap', input.value);
}

function getChapterList() {
    return JSON.parse(localStorage.getItem('favchap'));
}

chapter = chapter.slice(0, -1);
chapterArray = chapterArray.filter(item => item !== chapter);

function deleteChapter(chapter) {
    chapterArray = chapterArray.filter(item => item !== chapter);
    chapter = chapter.slice(0, -1);
    setChapterList();
}

