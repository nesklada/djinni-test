const $toggler = document.getElementById('js_themeSwitcher');

export default function() {
    const systemDarkTheme = window.matchMedia('(prefers-color-scheme: dark)');

    systemThemeChange(systemDarkTheme.matches);

    systemDarkTheme.addEventListener('change', function(e) {
        systemThemeChange(e.matches)
    });

    $toggler.addEventListener('change', onChange);
}

function systemThemeChange(bool) {
    $toggler.checked = bool || false;

    onChange($toggler);
}

function onChange(e) {
    const isDark = (e.target ? e.target.checked : e.checked) || false;

    document.body.setAttribute('data-theme', isDark ? 'dark' : '');
}
