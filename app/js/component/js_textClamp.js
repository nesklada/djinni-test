import createElement from "./config/createElement";

export default function(fromIndex = 0) {
    const target = 'js_textClamp';
    const nodes = document.querySelectorAll(`.${target}`);
    
    if(!nodes) {
        return
    }

    const $targets = Array.prototype.slice.call(nodes, fromIndex ? nodes.length - fromIndex : 0);

    $targets.forEach((node) => {

        if(!isTextClamped(node)) {
            return
        }

        const $toggler = createElement({
            tag: 'button',
            classList: ['btn-reset', 'btn-text'],
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

const isTextClamped = elm => elm.scrollHeight > elm.clientHeight;

function insertAfter(newNode, existingNode) {
    existingNode.parentNode.insertBefore(newNode, existingNode.nextSibling);
}