1. API Polling
- Short Polling: Every 5 sec call API
- Long Polling: Make request and wait for new data
- Ex: Dashboard, Gmail, Driver Location(Uber), Yt(LiveStream Chat)

2. Server Side Event
- Subscribe for the first time and give data when new data come, it didn't close the request

3. Websocket
- 1. Connection and Establish the connection
- 2. Stay open
- Ex: Live chat, Docs, MultiPlayer Game, Collaborator Editor

Polling vs Web socket
- Polling: API call lot and expensive
- Web Socket: Not compatible - on fallback use long polling