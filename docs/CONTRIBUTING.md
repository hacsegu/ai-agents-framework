# Como contribuir

Por ahora el indice lo mantiene un solo curador (revision manual de todo). Cuando se abra a la comunidad, el flujo sera:

1. Abrir un Issue con el recurso sugerido: titulo, categoria, link, descripcion en 1-2 lineas.
2. El mantenedor revisa y decide si entra al indice.
3. Si entra, se agrega a `data.json` con un Pull Request y se hace merge.

## Formato de un recurso

Cada entrada en `data.json` (dentro de `resources`) debe tener:

```json
{
  "id": "slug-unico-sin-espacios",
  "category": "id-de-categoria-existente",
  "title": "Nombre del recurso",
  "description": "1-2 lineas: que es y para que sirve.",
  "link": "https://...",
  "tags": ["Tag1", "Tag2"],
  "status": "active",
  "dateAdded": "YYYY-MM-DD",
  "lastUpdated": "YYYY-MM-DD"
}
```

`status` puede ser `active`, `beta` o `deprecated`.

## Reglas de calidad

- Descripciones especificas, no genericas copiadas del sitio del recurso.
- Sin duplicados (revisar por `id` y por `link`).
- Categoria debe existir en el array `categories` de `data.json`.
- Nunca confiar en ediciones directas a `main` — siempre via revision.
