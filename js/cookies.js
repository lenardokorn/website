window.onload = onPageLoad();

function onPageLoad() {
    if (!document.cookie.includes('cookies_accepted=true')) {
        // * Display modal
        let cookieModal = new bootstrap.Modal(document.getElementById('cookie-modal'), {
            backdrop: 'static',
            keyboard: false,
        });
        cookieModal.show();

        // * Add a cookie when the Understood button is pressed
        let buttons = document.getElementsByClassName('cookies-understood');
        for (let i = 0; i < buttons.length; i++) {
            buttons[i].onclick = function () {
                let d = new Date();
                d.setTime(d.getTime() + 365 * 24 * 60 * 60 * 1000);
                document.cookie = 'cookies_accepted=true; expires=' + d.toUTCString() + '; path=/;';
            };
        }
    }
}
