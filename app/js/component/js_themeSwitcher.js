import { theme } from "./config/localStorageAnchors";

export default function() {
    const toggler = document.getElementById('js_themeSwitcher');
    const localStorageTheme = localStorage.getItem(theme);
    const isDark = localStorageTheme && +localStorageTheme === 1;

    if(isDark) {
        toggler.checked = true;

        onChange(toggler);
    }

    toggler.addEventListener('change', onChange);

    function onChange(e) {
        const isDark = e.checked || e.target.checked;

        document.body.setAttribute('data-theme', isDark ? 'dark' : '');

        localStorage.setItem(theme, isDark ? 1 : 0);
    }
}