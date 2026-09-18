# Francis Tattoo Studio

Site oficial do estúdio Francis Tattoo — tatuagens fine line, botânico, blackwork e cover-up em Curitiba, Brasil.

🔗 [franciststudio.com](https://franciststudio.com) *(ajustar link real)*

## Sobre

Landing page + blog bilíngue (PT/ES) focado em conversão via WhatsApp e SEO local.

## Stack

- HTML / CSS / JS puro — sem framework, sem build step
- Deploy na [Vercel](https://vercel.com)
- Conteúdo bilíngue: `/` (PT) e `/es` (ES)

## Estrutura

```
├── index.html          # página principal
├── styles.css
├── script.js
├── blog/                # posts em português
├── es/                  # versão em espanhol
├── sitemap.xml
└── vercel.json
```

## Rodando localmente

```bash
npx serve .
```

## Deploy

Push para `main` faz deploy automático via Vercel (integração Git).
