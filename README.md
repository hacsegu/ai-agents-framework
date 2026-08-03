# AI Agents Framework — Indice de recursos

Indice curado (y en actualizacion permanente) de modelos, herramientas, tecnicas de prompting, automatizacion, frameworks de agentes y cursos para desarrollar agentes de IA.

Mantenido por Felix Sandoval (RUTA DIGITAL).

## Que es

Un indice navegable que responde: "¿existe tal herramienta? ¿donde encuentro X framework?". No es una plataforma compleja: es una fuente de verdad (`site/data.json`) mas un sitio estatico que la lee.

## Sitio en vivo

https://framework.aisenko.com

## Categorias

- 🧠 Modelos de IA
- 🛠️ Herramientas para Devs
- ✍️ Prompting y Tecnicas
- 🔄 Automatizacion
- 🤖 Frameworks de Agentes
- 🎓 Cursos y Educacion
- 🔌 MCP (Model Context Protocol)
- 🔭 Observabilidad y Monitoreo
- ☁️ Plataformas Hosted (SaaS)
- 🏠 Self-Hosted y On-Premise
- 💻 Arquitectura y Patrones de Agentes

Las categorias no estan cerradas: se agregan o ajustan a medida que el indice crece.

## Estructura

```
ai-agents-framework/
├── site/               # Se despliega tal cual a Cloudflare Pages
│   ├── data.json      # Fuente de verdad: categorias + recursos
│   ├── index.html
│   ├── styles.css
│   └── script.js
├── categories/         # Backup en markdown (opcional)
└── docs/
    ├── CONTRIBUTING.md
    └── ROADMAP.md
```

## Ver el sitio localmente

```bash
cd site
python -m http.server 8080
# abrir http://localhost:8080
```

## Desplegar

```bash
wrangler pages deploy site/ --project-name=ai-agents-framework
```

## Contribuir

Ver [docs/CONTRIBUTING.md](docs/CONTRIBUTING.md).

## Licencia

MIT
