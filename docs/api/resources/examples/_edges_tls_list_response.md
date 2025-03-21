<!-- Code generated for API Clients. DO NOT EDIT. -->

#### Example Response

```json
{
	"next_page_uri": null,
	"tls_edges": [
		{
			"backend": null,
			"created_at": "2025-03-21T10:17:28Z",
			"description": "acme tls edge",
			"hostports": ["example.com:443"],
			"id": "edgtls_2uceNNSWX7JzS9wDB09ETLih5ID",
			"ip_restriction": null,
			"metadata": "{\"environment\": \"staging\"}",
			"mutual_tls": null,
			"policy": null,
			"tls_termination": null,
			"traffic_policy": null,
			"uri": "https://api.ngrok.com/edges/tls/edgtls_2uceNNSWX7JzS9wDB09ETLih5ID"
		},
		{
			"backend": {
				"backend": {
					"id": "bkdhr_2uceM3klclOlsV21zeUtmZkUJ5d",
					"uri": "https://api.ngrok.com/backends/http_response/bkdhr_2uceM3klclOlsV21zeUtmZkUJ5d"
				},
				"enabled": true
			},
			"created_at": "2025-03-21T10:17:18Z",
			"description": "acme tls edge",
			"hostports": ["endpoint-example2.com:443"],
			"id": "edgtls_2uceM4PwYR4B95LNKorSlWwuUp2",
			"ip_restriction": null,
			"mutual_tls": null,
			"policy": null,
			"tls_termination": null,
			"traffic_policy": null,
			"uri": "https://api.ngrok.com/edges/tls/edgtls_2uceM4PwYR4B95LNKorSlWwuUp2"
		}
	],
	"uri": "https://api.ngrok.com/edges/tls"
}
```
