# /assets — La Campesina

Esta pasta é destinada aos arquivos de imagem e mídia do projeto.

## Como usar

Mova o logo para esta pasta e renomeie se quiser seguir o padrão:

```
Logo-LaCampesina (1).svg  →  assets/logo-la-campesina.svg
```

Depois atualize o `src` da imagem no `index.html`:

```html
<!-- Linha 30 em index.html — altere o src abaixo -->
<img
  src="assets/logo-la-campesina.svg"
  alt="Logo La Campesina"
  ...
/>
```

## Estrutura sugerida

```
assets/
  logo-la-campesina.svg     ← logo principal
  favicon.ico               ← ícone da aba do navegador (opcional)
  og-image.jpg              ← imagem para compartilhar em redes sociais (opcional)
```
