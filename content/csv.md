---
title: API and data format
subtitle: Play with data — and eventually told us what you did?
date: 2022-01-22
extraCSS: "/css/csv.css"
draft: false
---

### Intro

1. All the API might return a JSON format or a CSV format. It depends on the last parameter in the URL. **The keys in JSON and CSV are equivalent**
3. The API are divided in two categories: for researcher (accessibly only if you've the browser extension to collect evidence), and public (for anyone).
4. You can skip the documentation to check [Integration](#integration) with other data scientist tools

### API

<div id="swagger-ui"></div>

<script src="https://unpkg.com/swagger-ui-dist@4.5.0/swagger-ui-bundle.js" crossorigin></script>
<script src="https://unpkg.com/swagger-ui-dist@4.5.0/swagger-ui-standalone-preset.js" crossorigin></script>

<script>
  window.onload = () => {
    window.ui = SwaggerUIBundle({
      url: '/json/openapi.json',
      dom_id: '#swagger-ui',
      presets: [
        SwaggerUIBundle.presets.apis,
        SwaggerUIStandalonePreset
      ],
      layout: "StandaloneLayout",
    });
  };
</script>

### Integration
