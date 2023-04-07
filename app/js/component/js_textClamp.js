export default function(fromIndex) {
    const target = 'js_textClamp';
    let targets = document.querySelectorAll(`.${target}`);
    
    if(!targets) {
        return
    }

    const togglerLabel = 'Show more...';
    const togglerClasses = ['btn-reset', 'btn-text'];

    if(fromIndex) {
        targets = Array.prototype.slice.call(targets, targets.length - fromIndex);
    }

    targets.forEach((elem) => {

        if(!isTextClamped(elem)) {
            return
        }

        const control = toggler(togglerLabel, togglerClasses);

        insertAfter(control, elem);

        control.addEventListener('click', function(e) {
            elem.classList.remove(target);
            control.remove()
        });
    });
}

const toggler = (label, btnClasses) => {
    const btn = document.createElement('button');

    btn.classList.add(...btnClasses);
    btn.textContent = label;
    btn.setAttribute('type', 'button');

    return btn;
}

const isTextClamped = elm => elm.scrollHeight > elm.clientHeight;

function insertAfter(newNode, existingNode) {
    existingNode.parentNode.insertBefore(newNode, existingNode.nextSibling);
}