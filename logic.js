function init() {
    initMenus()
}

function initMenus() {
    for(const menu of menus) {
        const _menu = document.querySelector(menu.selector)
        if (menu.label) {
            const _label = document.createElement('span')
            _label.classList.add('label')
            _label.innerHTML = menu.label
            _menu.appendChild(_label)
        }
        for(const entry of menu.entries) {
            const _entry = document.createElement('li')
            
            const _entryInner = document.createElement('a')
            _entry.innerHTML = '<i class="' + entry.icon + '"></i>'
            _entryInner.addEventListener('click', () => {
                transitionPage(entry.target)
            })
            _label = document.createElement('span')
            _label.innerHTML = entry.label

            _entryInner.appendChild(_label)
            _entry.appendChild(_entryInner)
            _menu.appendChild(_entry)
        }
    }
}

function transitionPage() {
    
}

init()
