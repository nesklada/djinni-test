import createElement from "./config/createElement";
import insertAfter from "./config/insertAfter";
import { debounce } from "lodash-es";

const target = 'js_textClamp';
const targetToggler = target + 'Toggler';
const hide = 'hide';
let windowWidth = window.innerWidth;


export default function init() {
    js_textClamp();

    window.addEventListener('resize', debounce(onResize, 150));
}

export function js_textClamp(fromIndex = 0) {
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
}

function onResize() {
    if(windowWidth === window.innerWidth) {
        return
    }

    windowWidth = window.innerWidth;

    js_textClamp();
}

const isTextClamped = elm => elm.scrollHeight > elm.clientHeight;