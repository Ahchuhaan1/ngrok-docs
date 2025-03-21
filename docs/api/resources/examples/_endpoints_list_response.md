<!-- Code generated for API Clients. DO NOT EDIT. -->

#### Example Response

```json
{
	"endpoints": [
		{
			"bindings": ["public"],
			"created_at": "2025-03-21T10:17:23Z",
			"description": "sample cloud endpoint",
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
		},
		{
			"bindings": ["public"],
			"created_at": "2025-03-21T10:17:20Z",
			"hostport": "93f8e783687d.ngrok.paid:443",
			"id": "ep_2uceMLqeIkWiXMErpb4sKJCEdbx",
			"name": "command_line",
			"pooling_enabled": false,
			"principal": {
				"id": "usr_2uceJvkGttW20L6qiX4J0INHK8u",
				"uri": ""
			},
			"proto": "https",
			"public_url": "https://93f8e783687d.ngrok.paid",
			"tunnel": {
				"id": "tn_2uceMLqeIkWiXMErpb4sKJCEdbx",
				"uri": "https://api.ngrok.com/tunnels/tn_2uceMLqeIkWiXMErpb4sKJCEdbx"
			},
			"tunnel_session": {
				"id": "ts_2uceMOmuoqdvYcJmG6ncKRjdil3",
				"uri": "https://api.ngrok.com/tunnel_sessions/ts_2uceMOmuoqdvYcJmG6ncKRjdil3"
			},
			"type": "ephemeral",
			"updated_at": "2025-03-21T10:17:20Z",
			"upstream_url": "http://localhost:80",
			"url": "https://93f8e783687d.ngrok.paid"
		},
		{
			"bindings": ["public"],
			"created_at": "2025-03-21T10:17:19Z",
			"domain": {
				"id": "rd_2uceM47GHfE0gVFDzmkN2nOiy8m",
				"uri": "https://api.ngrok.com/reserved_domains/rd_2uceM47GHfE0gVFDzmkN2nOiy8m"
			},
			"edge": {
				"id": "edgtls_2uceM4PwYR4B95LNKorSlWwuUp2",
				"uri": "https://api.ngrok.com/edges/tls/edgtls_2uceM4PwYR4B95LNKorSlWwuUp2"
			},
			"hostport": "endpoint-example2.com:443",
			"id": "ep_2uceM6lGUumMIBUtnsIhFYVItlg",
			"pooling_enabled": false,
			"proto": "tls",
			"public_url": "tls://endpoint-example2.com",
			"type": "edge",
			"updated_at": "2025-03-21T10:17:19Z"
		}
	],
	"next_page_uri": null,
	"uri": "https://api.ngrok.com/endpoints"
}
```
