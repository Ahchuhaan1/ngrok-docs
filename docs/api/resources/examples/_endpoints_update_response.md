<!-- Code generated for API Clients. DO NOT EDIT. -->

#### Example Response

```json
{
	"bindings": ["public"],
	"created_at": "2025-03-21T10:17:23Z",
	"description": "Sample Cloud Endpoint",
	"domain": {
		"id": "rd_2uceM47GHfE0gVFDzmkN2nOiy8m",
		"uri": "https://api.ngrok.com/reserved_domains/rd_2uceM47GHfE0gVFDzmkN2nOiy8m"
	},
	"hostport": "endpoint-example2.com:443",
	"id": "ep_2uceMhFZT35Y8DgiTPkJfNUf12u",
	"metadata": "{\"environment\": \"staging\"}",
	"pooling_enabled": false,
	"proto": "https",
	"public_url": "https://endpoint-example2.com",
	"traffic_policy": "{\"on_http_request\":[{\"actions\":[{\"type\":\"deny\",\"config\":{\"status_code\":404}}]}]}",
	"type": "cloud",
	"updated_at": "2025-03-21T10:17:23Z",
	"uri": "https://api.ngrok.com/endpoints/ep_2uceMhFZT35Y8DgiTPkJfNUf12u",
	"url": "https://endpoint-example2.com"
}
```
