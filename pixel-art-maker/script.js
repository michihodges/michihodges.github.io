(function () {
    const color = document.querySelector('#colorPicker');
    const submit = document.querySelector('#sizePicker');

    function makeGrid() {
        const canvas = document.querySelector('#pixelCanvas');
        let height = document.querySelector('#inputHeight').value;
        let width = document.querySelector('#inputWidth').value;

        canvas.innerHTML = '';

        for (let row = 0; row < height; row++) {
            const tableRow = document.createElement('tr');
            for (let col = 0; col < width; col++) {
                const tableData = document.createElement('td');
                tableRow.appendChild(tableData);
            }
            canvas.appendChild(tableRow);
        }

        canvas.addEventListener('click', respondToTheClick);
    }

    function respondToTheClick(e) {
        if (e.target.nodeName === 'TD') {
            console.log('A td element was clicked.');
            e.target.style.backgroundColor = color.value;
        }
    }

    submit.addEventListener('submit', function(e) {
        e.preventDefault();
        makeGrid();
    });
}());
