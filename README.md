- nom :Becquelin
- prénom :Jules
- URL Netlify :https://creative-pothos-8444c2.netlify.app

# Travail

N'oublier pas votre nom, prénom et l'URL de publication Netlify...

# Complétez le CSS

**Faire plusieurs commits** pour chaque étape du CSS

Pour styler l'accordéon ouvert, utilisez l'attribut `open` (entre crochet en CSS `[open]` :

```css
details {
/* fermé et ouvert */
}

details[open] {
/* ouvert */
}
```

Compléter le fichier [accordeon.css](/src/css/components/accordeon.css) et visualiser l'effet sur [index.html](/index.html) .

Vous devez obtenir comme la premiére video sur Moodle.

# Manuellement sans JS

Simplement, cliquez sur les `summary`...

# Refermer les autres par code JS

Testez dans la console :

```js
accordeon = document.querySelector(".accordeon");
accordeon.querySelectorAll("details").forEach((det) => (det.open = false));
```

À faire, adapter le code dans les fichiers [script.js](/src/js/script.js) pour le faire suite à un clic sur un des `summary`.

**Commit** : referme les détails suite à un clic sur un `summary`

# Version avec [triangle CSS](https://css-tricks.com/snippets/css/css-triangle/)

Voir seconde video sur Moodle.

**Faire plusieurs commits** pour chaque étape du CSS
