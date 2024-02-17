addEventListener('DOMContentLoaded', (e) => {
    const link = document.getElementById('copyable');
    link.addEventListener('click', (e) => {
        navigator.clipboard.writeText(link.text);
    });
})