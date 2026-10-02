import { mkdir, rm, writeFile } from "node:fs/promises";

await rm("dist", { recursive: true, force: true });
await mkdir("dist", { recursive: true });

const html = `<!doctype html>
<html lang="es">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Práctica Pipeline CI</title>
  </head>
  <body>
    <h1>Pipeline CI ejecutado correctamente</h1>
    <p>La compilación fue generada con Node.js.</p>
  </body>
</html>
`;

await writeFile("dist/index.html", html, "utf8");
console.log("Build completado: dist/index.html");
