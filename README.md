# Where in the World? (Oficina Next.js)

Aplicação web em **Next.js 14 (App Router)** que lista países a partir de um `data.json`, permite busca/filtragem e exibe detalhes de cada país (população, região, capital, domínios, moedas, idiomas e países fronteiriços). Projeto preparado para desenvolvimento local e deploy (ex.: Vercel).

> Esta aplicação foi criada como **oficina**/exercício de Next.js, estilizada com **CSS Modules**, e usa **Rotas de API** do Next para servir os dados.

---

##  Features

- Next.js 14 com **App Router** (`app/`)
- Componentização (Card, Header, CountryDetails, etc.)
- **API interna** (`/api/country`) que lê `data.json` e retorna lista de países
- Página inicial com grid de cards e navegação para página de **detalhe** (`/country/[code]`)
- Renderização de **bandeira**, população formatada (pt‑BR), capital e região
- Suporte a **Tailwind CSS** e **CSS Modules**
- Fonte **Nunito** via `next/font`
- Estrutura pronta para **deploy na Vercel**

---

##  Stack

- **Next.js 14.1.4**
- **React 18**
- **CSS Modules** para estilos por componente

---

##  Como executar

1) **Instale as dependências**

```bash
npm install
# ou
pnpm install
# ou
yarn
```

2) **Ambiente local (dev server)**

```bash
npm run dev
# http://localhost:3000
```

3) **Build de produção**

```bash
npm run build
npm start
# http://localhost:3000
```

> Não são necessárias variáveis de ambiente para rodar: os dados vêm de `data.json`.

---

##  Scripts

- `dev` — inicia o servidor de desenvolvimento (`next dev`)
- `build` — gera o build de produção (`next build`)
- `start` — inicia o servidor em produção (`next start`)
- `lint` — executa ESLint

---

##  Estrutura do projeto

```
├─ README.md
      ├─ app/api/country/route.js
      ├─ app/country/[code]/page.jsx
      ├─ app/country/[code]/page.module.css
  ├─ app/favicon.ico
  ├─ app/globals.css
  ├─ app/home.module.css
  ├─ app/layout.jsx
  ├─ app/page.jsx
    ├─ components/BackArrow/BackArrow.jsx
    ├─ components/BackArrow/backArrow.module.css
    ├─ components/BorderButton/BorderButton.jsx
    ├─ components/BorderButton/borderButton.module.css
    ├─ components/Card/Card.jsx
    ├─ components/Card/card.module.css
    ├─ components/CountryDetails/CountryDetails.jsx
    ├─ components/CountryDetails/countryDetails.module.css
    ├─ components/Header/Header.jsx
    ├─ components/Header/header.module.css
├─ data.json
├─ next-env.d.ts
├─ next.config.js
├─ package-lock.json
├─ package.json
├─ pnpm-lock.yaml
├─ postcss.config.js
  ├─ public/arrow.svg
  ├─ public/lua.svg
  ├─ public/next.svg
  ├─ public/vercel.svg
├─ tailwind.config.ts
├─ tsconfig.json
```

Pontos principais:

- `app/page.jsx` — página inicial que busca dados de `/api/country` e renderiza cards
- `app/api/country/route.js` — rota **GET** que lê `data.json` e retorna países já formatados
- `app/country/[code]/page.jsx` — página de detalhes por **numericCode** do país
- `components/*` — componentes reutilizáveis (Card, Header, CountryDetails, etc.)
- `public/*` — ícones e imagens estáticas
- `tailwind.config.ts` + `app/globals.css` — setup do Tailwind

---

##  Endpoints

### `GET /api/country`

Retorna um JSON com a lista de países:

```json
[
  {
    "name": "Brazil",
    "population": "212.559.417",
    "region": "Americas",
    "capital": "Brasília",
    "flag": "https://.../br.svg",
    "code": "076"
  },

]
```

> O campo `code` corresponde a `numericCode` e é usado para montar a rota `/country/[code]`.

---

##  Navegação

- **/** — lista de países
- **/country/[code]** — detalhes do país selecionado (inclui nomes das fronteiras calculados a partir de `alpha3Code`)

---

##  Boas práticas já aplicadas

- Separação de responsabilidades entre **Camada de API** e **UI**
- Formatação de números para `pt-BR` (ex.: população)
- Componentes **client** e **server** conforme a necessidade

---

