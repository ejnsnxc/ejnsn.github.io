
const detail = document.getElementById('fan-detail');
const rows = document.querySelectorAll('tbody tr[data-name]');

function el(tag, className, text) {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (text !== undefined) node.textContent = text;
    return node;
}

function showFan(row) {
    const d = row.dataset;

    rows.forEach((r) => r.classList.toggle('selected', r === row));

    const photo = el('img', 'fan-photo');
    photo.src = d.picture;
    photo.alt = 'Portrait of ' + d.name;

    const heart = el('span', 'heart', '\u2764\uFE0F');
    heart.setAttribute('aria-label', 'loves');

    const cover = el('div', 'album-cover');
    cover.append(el('strong', 'album-title', d.album),
                 el('span', 'album-artist', d.artist),
                 el('span', 'album-year', d.year));

    const pictograph = el('div', 'pictograph');
    pictograph.append(photo, heart, cover);

    detail.replaceChildren(
        el('h2', '', d.name + ' loves ' + d.album),
        pictograph,
        el('p', 'age-message', d.message)
    );
}

rows.forEach((row) => {
    row.addEventListener('click', () => showFan(row));
    row.addEventListener('keydown', (event) => {
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            showFan(row);
        }
    });
});