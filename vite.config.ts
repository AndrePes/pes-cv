import { loadEnv, defineConfig, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'
import { handleChatRequest } from './api/chat.ts'

const localChatApi = (): Plugin => ({
  name: 'local-chat-api',
  configureServer(server) {
    server.middlewares.use('/api/chat', async (request, response, next) => {
      if (request.method !== 'POST') return next()

      const chunks: Buffer[] = []
      request.on('data', chunk => chunks.push(Buffer.from(chunk)))
      request.on('end', async () => {
        try {
          const headers = new Headers()
          for (const [name, value] of Object.entries(request.headers)) {
            if (typeof value === 'string') headers.set(name, value)
          }
          const webRequest = new Request('http://localhost/api/chat', {
            method: 'POST',
            headers,
            body: Buffer.concat(chunks).toString('utf8'),
          })
          const webResponse = await handleChatRequest(webRequest)
          response.statusCode = webResponse.status
          webResponse.headers.forEach((value, name) => response.setHeader(name, value))
          response.end(await webResponse.text())
        } catch (error) {
          console.error('Local chat API failed', error)
          response.statusCode = 500
          response.setHeader('Content-Type', 'application/json')
          response.end(JSON.stringify({ error: 'Der lokale Chat-Service ist nicht erreichbar.' }))
        }
      })
    })
  },
})

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  for (const key of ['OPENAI_API_KEY', 'OPENAI_VECTOR_STORE_ID', 'OPENAI_MODEL', 'APP_ORIGIN']) {
    if (env[key]) process.env[key] = env[key]
  }

  return {
    plugins: [react(), localChatApi()],
  }
})
