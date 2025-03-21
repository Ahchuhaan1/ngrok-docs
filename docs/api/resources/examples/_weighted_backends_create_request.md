<!-- Code generated for API Clients. DO NOT EDIT. -->

#### Example Request

```bash
curl \
-X POST \
-H "Authorization: Bearer {API_KEY}" \
-H "Content-Type: application/json" \
-H "Ngrok-Version: 2" \
-d '{"backends":{"bkdhr_2uceMyxoxgbHBAAR5JppRrSPzM0":0,"bkdhr_2uceN32c2R5AfUM2eSqht09JTn1":1},"description":"acme weighted","metadata":"{\"environment\": \"staging\"}"}' \
https://api.ngrok.com/backends/weighted
```
