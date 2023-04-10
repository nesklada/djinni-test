import createElement from "./config/createElement";
import insertAfter from "./config/insertAfter";
import { debounce } from "lodash-es";

const target = 'js_textClamp';
const targetToggler = target + 'Toggler';
const hide = 'hide';
let windowWidth = window.innerWidth;


export default function init() {
    setTimeout(js_textClamp, 300);

    window.addEventListener('resize', debounce(onResize, 200));
}

export function js_textClamp(fromIndex = 0) {
    const nodes = document.querySelectorAll(`.${target}`);
    
    if(!nodes) {
        return
    }

    const $targets = Array.prototype.slice.call(nodes, fromIndex ? nodes.length - fromIndex : 0);

    $targets.forEach((node) => {
        const existToggler = node.parentNode.querySelector('.' + targetToggler);
        const isOverflow = isTextClamped(node);

        if(existToggler) {
            
            if(isOverflow) {
                existToggler.classList.remove(hide);
            } else {
                existToggler.classList.add(hide);
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