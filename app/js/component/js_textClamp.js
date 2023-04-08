import createElement from "./config/createElement";

const target = 'js_textClamp';
const targetToggler = target + 'Toggler';
const hide = 'hide';
let windowWidth = window.innerWidth;

export default function init(fromIndex = 0) {
    const nodes = document.querySelectorAll(`.${target}`);
    
    if(!nodes) {
        return
    }

    const $targets = Array.prototype.slice.call(nodes, fromIndex ? nodes.length - fromIndex : 0);

    $targets.forEach((node) => {
        const togglerInited = node.parentNode.querySelector('.' + targetToggler);
        const isOverflow = isTextClamped(node);

        if(togglerInited) {
            
            if(isOverflow) {
                togglerInited.classList.remove(hide);
            } else {
                togglerInited.classList.add(hide);
            }

            return
        }

        if(!isOverflow) {
            return
        }

        const $toggler = createElement({
            tag: 'button',
            classList: ['btn-reset', 'btn-text', targetToggler],
            text: 'Show more...',
            attrs: {
                type: 'button'
            }
        });

        insertAfter($toggler, node);

        $toggler.addEventListener('click', function(e) {
            node.classList.remove(target);
            $toggler.remove()
        });
    });

    window.removeEventListener('resize', onResize);
    window.addEventListener('resize', onResize);
}

function onResize() {
    if(windowWidth === window.innerWidth) {
        return
    }

    windowWidth = window.innerWidth;

    init();
}

const isTextClamped = elm => elm.scrollHeight > elm.clientHeight;

function insertAfter(newNode, existingNode) {
    existingNode.parentNode.insertBefore(newNode, existingNode.nextSibling);
}