# OpenAI-Chat konfigurieren

Die Seite darf den OpenAI-Schlüssel niemals im Browser verwenden. Der Schlüssel gehört ausschließlich als serverseitige Umgebungsvariable in die Hosting-Plattform.

## 1. Projekt und Schlüssel

1. In der [OpenAI Platform](https://platform.openai.com/) ein eigenes Projekt für die Portfolio-Seite anlegen.
2. Einen API-Key mit möglichst eingeschränkten Projektberechtigungen erstellen und nur serverseitig hinterlegen.
3. Billing- und Usage-Limits setzen. Zusätzlich Benachrichtigungen für ungewöhnliche Kosten konfigurieren.

## 2. Vector Store erstellen

1. In der OpenAI Platform den Bereich **Storage / Vector stores** öffnen und einen Vector Store für die Portfolio-Seite erstellen.
2. Nur freigegebene, aktuelle Dokumente hochladen: CV, Zertifikate und Arbeitszeugnisse. Keine Ausweiskopien, privaten Kontaktdaten oder nicht benötigten Dokumente hochladen.
3. PDFs möglichst als textbasierte Dateien verwenden. OCR-Dokumente vor dem Upload auf Lesbarkeit prüfen.
4. Die angezeigte Vector-Store-ID (`vs_...`) als `OPENAI_VECTOR_STORE_ID` hinterlegen.
5. Nach Updates alte Dokumentversionen entfernen oder eindeutig archivieren, damit der Bot keine widersprüchlichen Angaben findet.

Die Route nutzt die OpenAI Responses API mit dem `file_search`-Tool. Dateien werden nicht an den Browser ausgeliefert. Die Antwortanweisung verhindert außerdem, dass Dokumente als neue Systemanweisungen interpretiert werden.

## 3. Hosting konfigurieren

Die Datei `api/chat.ts` ist für eine Vercel-kompatible Serverless-Route angelegt. In den Environment Variables des Deployments setzen:

```text
OPENAI_API_KEY=sk-proj-...
OPENAI_VECTOR_STORE_ID=vs_...
OPENAI_MODEL=gpt-4o-mini
APP_ORIGIN=https://deine-produktive-domain.example
```

`APP_ORIGIN` muss exakt der öffentlichen Origin entsprechen. Environment Variables nur für Production/Preview anlegen, nicht committen. Lokal kann eine nicht versionierte `.env.local` verwendet werden.

## 4. Sicherheitsmaßnahmen

- Die Route akzeptiert nur `POST` und prüft die Origin.
- Fragen sind auf 1.000 Zeichen begrenzt; Antworten auf 450 Tokens.
- OpenAI Moderation (`omni-moderation-latest`) blockiert markierte Eingaben.
- Pro IP sind im Prozessspeicher maximal acht Anfragen pro Minute erlaubt.
- API-Fehler werden nach außen neutral beantwortet und serverseitig geloggt.
- Bei mehreren Serverinstanzen oder dauerhaftem Betrieb das In-Memory-Rate-Limit durch einen zentralen Store wie Redis/Upstash ersetzen. IP-Rate-Limits allein sind kein vollständiger DDoS-Schutz; zusätzlich WAF/CDN-Schutz und Hosting-Limits aktivieren.
- Vor dem öffentlichen Start Prompt-Injection, Datenabfluss, Kostenlimits, lange Eingaben, Bot-Traffic und Moderationsfälle testen.

## 5. Datenschutz

Vor dem Livegang Datenschutzerklärung und Auftragsverarbeitung/Datentransfer mit OpenAI rechtlich prüfen. Besucher sollten darauf hingewiesen werden, dass ihre Frage zur Beantwortung an OpenAI übertragen wird. Eine Einwilligungs- oder Hinweislogik muss an die konkrete rechtliche Bewertung angepasst werden.
