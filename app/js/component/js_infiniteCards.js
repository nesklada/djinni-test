import createElement from './config/createElement';
import randomInt from './config/randomInt';
import { js_textClamp } from './js_textClamp';

const loremText = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, nostrum modi, explicabo quia nemo facere quas velit obcaecati laboriosam, eaque debitis totam sint. Molestias, dignissimos excepturi possimus esse debitis labore.';

const state = {
    page: 1,
    limit: 8,
    target: document.getElementById('js_infiniteCards')
}

export default function() {

    if(!state.target) {
        return
    }

    infiniteScroll();
}

function infiniteScroll() {
    let obserTarget = state.target.lastChild.previousSibling;

    const observer = new IntersectionObserver((entries) => {
        if(!entries[0].isIntersecting) {
            return false
        }

        observer.unobserve(obserTarget);

        state.page++;

        setCardsToRow().then(function() {
            js_textClamp(state.limit);

            obserTarget = state.target.lastChild.previousSibling;
            observer.observe(obserTarget);
        });
    });

    observer.observe(obserTarget);
}

function getData() {
    return fetch(`https://picsum.photos/v2/list?page=${state.page}&limit=${state.limit}`).then(data => data.json());
}

function setCardsToRow() {
    return getData().then(data => {
        if(!data || !data.length) {
            return
        }

        data.forEach(card => {
            const $col = createElement({
                classList: ['col-12', 'col-md-6', 'mb-4', 'd-flex', 'flex-column']
            });
            $col.appendChild($card(card));
            
            state.target.appendChild($col);
        });
    })
}

function $card(data) {
    const testContent = loremText.slice(0, randomInt(loremText.length / (randomInt(2, 6)), loremText.length));

    const $card = createElement({
        classList: 'card'
    });

    const $img = createElement({
        tag: 'img',
        classList: 'card-media-item',
        attrs: {
            loading: 'lazy',
            src: data.download_url,
            alt: data.author
        }
    });

    const $media = createElement({
        classList: 'card-media'
    });

    const $body = createElement({
        classList: 'card-body'
    });

    const $title = createElement({
        tag: 'h4',
        classList: 'card-title',
        text: data.author
    });

    const $content = createElement({
        tag: 'p',
        classList: ['card-text', 'js_textClamp'],
        text: testContent
    });

    const $footer = createElement({
        classList: 'card-footer'
    });

    const $btnSave = createElement({
        tag: 'button',
        classList: ['btn', 'btn-warning'],
        attrs: {
            type: 'button'
        },
        text: 'Save to collection'
    });

    const $btnShare = createElement({
        tag: 'button',
        classList: ['btn','btn-outline', 'btn-outline-secondary'],
        attrs: {
            type: 'button'
        },
        text: 'Share'
    });

    $card.appendChild($media).appendChild($img);
    $card.appendChild($body);
    $card.appendChild($footer);
    $body.appendChild($title);
    $body.appendChild($content);
    $footer.appendChild($btnSave);
    $footer.appendChild($btnShare);

    return $card;
}