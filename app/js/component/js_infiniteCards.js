import randomInt from './config/randomInt';
import js_textClamp from './js_textClamp';

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

        const colClasses = ['col-12', 'col-md-6', 'mb-4', 'd-flex', 'flex-column'];

        data.forEach(card => {
            const colNode = document.createElement('div');
            colNode.classList.add(...colClasses);
            colNode.appendChild($card(card));

            state.target.appendChild(colNode);
        });
    })
}

function $card(data) {
    const content = loremText.slice(0, randomInt(loremText.length / (randomInt(2, 6)), loremText.length));

    const $card = document.createElement('div');
    const $img = document.createElement('img');
    const $media = document.createElement('div');
    const $body = document.createElement('div');
    const $title = document.createElement('h4');
    const $content = document.createElement('p');
    const $footer = document.createElement('div');
    const $btnSave = document.createElement('button');
    const $btnShare = document.createElement('button');

    $card.classList.add('card');
    $media.classList.add('card-media');
    $img.classList.add('card-media-item');
    $body.classList.add('card-body');
    $title.classList.add('card-title');
    $content.classList.add('card-text', 'js_textClamp');
    $footer.classList.add('card-footer');
    $btnSave.classList.add('btn', 'btn-warning');
    $btnShare.classList.add('btn', 'btn-outline-secondary');

    $card.appendChild($media);
    $media.appendChild($img);
    $card.appendChild($body);
    $card.appendChild($footer);
    $body.appendChild($title);
    $body.appendChild($content);
    $footer.appendChild($btnSave);
    $footer.appendChild($btnShare);

    $img.loading = 'lazy';
    $img.src = data.download_url;
    
    $title.innerText = data.author;
    $content.innerText = content;

    $btnSave.innerText = 'Save to collection';
    $btnShare.innerText = 'Share';

    return $card;
}