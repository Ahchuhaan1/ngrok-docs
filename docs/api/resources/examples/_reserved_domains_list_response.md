<!-- Code generated for API Clients. DO NOT EDIT. -->

#### Example Response

```json
{
	"next_page_uri": null,
	"reserved_domains": [
		{
			"acme_challenge_cname_target": null,
			"certificate": null,
			"certificate_management_policy": {
				"authority": "letsencrypt",
				"private_key_type": "ecdsa"
			},
			"certificate_management_status": {
				"provisioning_job": {
					"error_code": null,
					"msg": "Managed certificate provisioning in progress.",
					"retries_at": null,
					"started_at": "2025-03-21T10:17:02Z"
				},
				"renews_at": null
			},
			"cname_target": "4knqktdwka2umyjjc.2jvyhdpg2m8jodkz2.local-ngrok-cname.com",
			"created_at": "2025-03-21T10:17:02Z",
			"description": "Device 0001 Dashboard",
			"domain": "manage-0002.app.example.com",
			"error_redirect_url": null,
			"http_endpoint_configuration": null,
			"https_endpoint_configuration": null,
			"id": "rd_2uceK6Ic6IOylVhHGInBolOL1yj",
			"metadata": "{\"service\": \"dashboard\"}",
			"region": "",
			"uri": "https://api.ngrok.com/reserved_domains/rd_2uceK6Ic6IOylVhHGInBolOL1yj"
		},
		{
			"acme_challenge_cname_target": null,
			"certificate": {
				"id": "cert_2uceK2geDbgxDB8yiy9y4PB279V",
				"uri": "https://api.ngrok.com/tls_certificates/cert_2uceK2geDbgxDB8yiy9y4PB279V"
			},
			"certificate_management_policy": null,
			"certificate_management_status": null,
			"cname_target": "2udamkamcl8pjmrff.2jvyhdpg2m8jodkz2.local-ngrok-cname.com",
			"created_at": "2025-03-21T10:17:02Z",
			"domain": "myapp.mydomain.com",
			"error_redirect_url": null,
			"http_endpoint_configuration": null,
			"https_endpoint_configuration": null,
			"id": "rd_2uceK5yAfjD8I2NNYiond61EOyR",
			"region": "",
			"uri": "https://api.ngrok.com/reserved_domains/rd_2uceK5yAfjD8I2NNYiond61EOyR"
		}
	],
	"uri": "https://api.ngrok.com/reserved_domains"
}
```
