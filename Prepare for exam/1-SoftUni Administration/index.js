function solve() {
    let stateModules = {}
    let buttonElement = document.querySelector('.form-control button')

    buttonElement.addEventListener('click', addHandler)

    function addHandler(e) {
        e.preventDefault();

        let lectureNameElement = document.querySelector('[name="lecture-name"]');
        let lectureName = lectureNameElement.value;

        let dateElement = document.querySelector('[name="lecture-date"]');
        let date = dateElement.value;

        let moduleElement = document.querySelector('select')


        if (lectureName != '' && date != '' && moduleElement.value != 'Select module') {

            
            
            let li = document.createElement('li')
            li.classList.add('flex')

            let h4 = document.createElement('h4')
            h4.textContent = `${lectureName} - ${date.split('-').join('/').split('T').join(' - ')}`

            let deleteButton = document.createElement('button')
            deleteButton.classList.add('red')
            deleteButton.textContent = 'Del'

            deleteButton.addEventListener('click',del)

            li.appendChild(h4)
            li.appendChild(deleteButton)

            let divModule = undefined;
            let ulElement = undefined;

            if (!stateModules[moduleElement.value]){
                let h3Element = document.createElement('h3')

                h3Element.textContent = `${moduleElement.value.toUpperCase()}-MODULE`

                h3Element.classList.add('module')

                ulElement = document.createElement('ul');

                list = []

                divModule = document.createElement('div')
                divModule.classList.add('module')

                divModule.appendChild(h3Element)
                divModule.appendChild(ulElement)

                stateModules[moduleElement.value] = { divModule, ulElement, list: [] };
            }else{
                divModule = stateModules[moduleElement.value].module
                ulElement = stateModules[moduleElement.value].ulElement
            }

            stateModules[moduleElement.value].list.push({li, date})
            stateModules[moduleElement.value].list.sort((a,b) =>{
                return a.date.localeCompare(b.date)
            }).forEach(({ li }) => {
                ulElement.appendChild(li);
            });



            let newModuleElement = document.querySelector('.modules')
            newModuleElement.appendChild(divModule)

        }

    }

    function del(e){
        let li = e.target.parentNode

        let ul = li.parentNode

        let module = ul.parentNode

        li.remove()

        if(ul.childNodes.length <= 0){
            module.remove()
        }
    }
};