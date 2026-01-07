# pruebaDocker

Proyecto de prueba que arranca frontend y backend con Docker.

## Quickstart ✅

1. Clona el repo:

```bash
git clone https://github.com/Gpanelli3/pruebaDocker.git
cd pruebaDocker
```

2. Copia el ejemplo de env y edítalo según tu entorno (opcional si no usas Firebase aún):

```bash
cp .env.example .env
```

3. (Opcional) Si vas a usar Firebase Admin SDK en el backend, crea la carpeta `secrets` y coloca tu `firebase-service-account.json` en `./secrets/firebase-service-account.json` (¡NO lo subas al repositorio!).

4. Levanta los servicios con Docker:

```bash
docker compose up --build
```

5. Abre el frontend en http://localhost:5173 y el backend en http://localhost:3000

---

Notas:
- No incluyas keys ni `firebase-service-account.json` en el repo. Está incluido `.gitignore` y un `.env.example`.
- Para desarrollo con emulador de Firebase puedes activar el servicio `firebase_emulator` en `docker-compose.yml` (comentado como ejemplo).

Si quieres, puedo añadir un paso de CI que construya las imágenes en PRs. 🎯
