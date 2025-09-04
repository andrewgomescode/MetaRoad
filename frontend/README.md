# MetaRoad Frontend

Frontend do site MetaRoad construído com Next.js 15, TailwindCSS e TypeScript.

## Características

- ✅ **Next.js 15** com App Router
- ✅ **TypeScript** para type safety
- ✅ **TailwindCSS** para estilização
- ✅ **Lucide React** para ícones
- ✅ **Layout responsivo** inspirado no Maxroll.gg
- ✅ **Sidebar colapsável** (desktop)
- ✅ **Menu hamburger** (mobile)
- ✅ **Tema escuro** por padrão

## Estrutura de Componentes

```
src/
├── app/
│   ├── layout.tsx          # Layout raiz da aplicação
│   ├── page.tsx            # Página inicial
│   └── globals.css         # Estilos globais
└── components/
    └── layout/
        ├── main-layout.tsx # Layout principal com Header e Sidebar
        ├── header.tsx      # Componente Header responsivo
        └── sidebar.tsx     # Componente Sidebar com funcionalidade de colapsar
```

## Como executar

1. Instale as dependências:

```bash
npm install
```

2. Execute o servidor de desenvolvimento:

```bash
npm run dev
```

3. Abra [http://localhost:3000](http://localhost:3000) no seu navegador.

## Funcionalidades Implementadas

### Header

- Logo "MetaRoad" alinhada à esquerda em mobile
- Menu hamburguer à direita em mobile
- Dropdown "Browse Games" em desktop
- Sticky no topo da tela

### Sidebar

- **Desktop**:
  - Sidebar fixa à esquerda
  - Botão para colapsar/expandir
  - Logo no topo alinhada com o header
  - Menu de navegação com ícones
  - Tooltip nos ícones quando colapsada
- **Mobile**:
  - Menu lateral deslizante da direita
  - Overlay semi-transparente
  - Logo centralizada no topo
  - Fecha ao clicar em um link

### Layout Responsivo

- Mobile-first design
- Breakpoints: 768px (md) para desktop
- Sidebar ocupa 256px em desktop, 320px em mobile
- Conteúdo principal ajusta automaticamente

## Cores e Tema

Baseado no design do Maxroll.gg:

- **Fundo principal**: `#0a0a0a` (dark-1)
- **Fundo secundário**: `#1a1a1a` (dark-2)
- **Fundo terciário**: `#2a2a2a` (dark-3)
- **Bordas**: `#4a4a4a` (dark-5)
- **Texto principal**: `#e8e8e8`
- **Texto secundário**: `#b0b0b0` (grey-30)
- **Cor primária**: `#057af0` (azul)

## Próximos Passos

1. Implementar páginas de guias, builds e ferramentas
2. Adicionar sistema de busca
3. Integrar com o backend WordPress
4. Adicionar sistema de favoritos
5. Implementar filtros e categorias
