/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs - render a sidebar for each doc of that
 group - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
	// By default, Docusaurus generates a sidebar from the docs folder structure
	docs: [
		"overview/index",
		"what-is-ngrok",
		"how-ngrok-works",
		"why-ngrok",
		"whats-new",
		{
			label: "Getting Started",
			type: "category",
			link: { type: "doc", id: "getting-started/index" },
			items: [
				"getting-started/index",
				"getting-started/go",
				"getting-started/rust",
				"getting-started/kubernetes",
			],
		},
		{
			label: "Pricing & Limits",
			type: "category",
			link: { type: "doc", id: "pricing-limits/index" },
			items: ["pricing-limits/free-plan-limits"],
		},
		{
			label: "Universal Gateway",
			type: "category",
			collapsible: false,
			className: "menu__list-item--category",
			link: { type: "doc", id: "universal-gateway/overview" },
			items: [
				"universal-gateway/overview",
				{
					label: "Concepts",
					type: "category",
					items: [
						{ id: "universal-gateway/domains", type: "doc", label: "Domains" },
						{
							id: "universal-gateway/tcp-addresses",
							type: "doc",
							label: "TCP Addresses",
						},
						"universal-gateway/tls-certificates",
						"universal-gateway/edges",
					],
				},
				{
					label: "Endpoints",
					type: "category",
					link: { type: "doc", id: "universal-gateway/endpoints" },
					items: [
						{
							id: "universal-gateway/endpoints",
							type: "doc",
							label: "Overview",
						},
						{
							label: "Types",
							type: "category",
							link: { type: "doc", id: "universal-gateway/types" },
							items: [
								{
									label: "Cloud Endpoints",
									type: "category",
									link: {
										type: "doc",
										id: "universal-gateway/cloud-endpoints/index",
									},
									items: ["universal-gateway/cloud-endpoints/quickstart"],
								},
								{
									id: "universal-gateway/agent-endpoints",
									type: "doc",
									label: "Agent Endpoints",
								},
							],
						},
						{
							label: "Protocols",
							type: "category",
							link: { type: "doc", id: "universal-gateway/protocols" },
							items: [
								{
									id: "universal-gateway/http",
									type: "doc",
									label: "HTTP/S",
								},
								{
									id: "universal-gateway/tls",
									type: "doc",
									label: "TLS",
								},
								{
									id: "universal-gateway/tcp",
									type: "doc",
									label: "TCP",
								},
							],
						},
						{
							label: "Bindings",
							type: "category",
							link: { type: "doc", id: "universal-gateway/bindings" },
							items: [
								{
									id: "universal-gateway/public-endpoints",
									type: "doc",
									label: "Public",
								},
								{
									id: "universal-gateway/internal-endpoints",
									type: "doc",
									label: "Internal",
								},
								{
									id: "universal-gateway/kubernetes-endpoints",
									type: "doc",
									label: "Kubernetes",
								},
							],
						},
						{
							id: "universal-gateway/endpoint-pooling",
							type: "doc",
							label: "Pooling",
						},
					],
				},
				{
					label: "Network",
					type: "category",
					link: {
						type: "doc",
						id: "universal-gateway/global-load-balancer",
					},
					items: [
						"universal-gateway/global-load-balancer",
						"universal-gateway/tls-termination",
						"universal-gateway/ddos-protection",
						"universal-gateway/ip-addresses",
						"universal-gateway/points-of-presence",
					],
				},
			],
		},
		{
			label: "Traffic Policy",
			type: "category",
			collapsible: false,
			className: "menu__list-item--category",
			link: { type: "doc", id: "traffic-policy/index" },
			items: [
				"traffic-policy/index",
				{
					label: "Getting Started",
					type: "category",
					link: {
						type: "doc",
						id: "traffic-policy/getting-started/agent-endpoints/cli",
					},
					items: [
						{
							type: "autogenerated",
							dirName: "traffic-policy/getting-started",
						},
					],
				},
				{
					label: "Concepts",
					type: "category",
					link: { type: "doc", id: "traffic-policy/concepts/index" },
					items: [
						{
							type: "autogenerated",
							dirName: "traffic-policy/concepts",
						},
					],
				},
				// When authentication is fleshed out this should be done.
				// {
				// 	label: "Identity",
				// 	type: "category",
				// 	link: { type: "doc", id: "traffic-policy/identity/index" },
				// 	items: [
				// 		{
				// 			type: "autogenerated",
				// 			dirName: "traffic-policy/identity",
				// 		},
				// 	],
				// },
				{
					label: "Actions",
					type: "category",
					link: { type: "doc", id: "traffic-policy/actions/index" },
					items: [
						{
							type: "autogenerated",
							dirName: "traffic-policy/actions",
						},
					],
				},
				{
					label: "Macros",
					type: "category",
					link: { type: "doc", id: "traffic-policy/macros/index" },
					items: [
						{
							type: "autogenerated",
							dirName: "traffic-policy/macros",
						},
					],
				},
				{
					label: "Variables",
					type: "category",
					link: { type: "doc", id: "traffic-policy/variables/index" },
					items: [
						{
							type: "autogenerated",
							dirName: "traffic-policy/variables",
						},
					],
				},
				{
					label: "Resources",
					type: "category",
					link: { type: "doc", id: "traffic-policy/identities" },
					items: ["traffic-policy/identities"],
				},
				{
					label: "Examples",
					type: "category",
					items: [
						{
							type: "autogenerated",
							dirName: "traffic-policy/examples",
						},
					],
				},
				// For later.
				// "traffic-policy/pricing-limits",
			],
		},
		{
			label: "Kubernetes",
			type: "category",
			collapsible: false,
			className: "menu__list-item--category",
			link: { type: "doc", id: "kubernetes/index" },
			items: [
				"kubernetes/index",
				"kubernetes/how-it-works",
				"kubernetes/changelog",
				{
					label: "Install & Manage",
					type: "category",
					link: { type: "doc", id: "kubernetes/installation/install" },
					items: [
						"kubernetes/installation/install",
						"kubernetes/installation/update",
						"kubernetes/installation/helm",
						"kubernetes/installation/architecture",
						"kubernetes/installation/uninstall",
					],
				},
				{
					label: "Usage Guides",
					type: "category",
					link: { type: "doc", id: "kubernetes/guides/quickstart" },
					items: [
						"kubernetes/guides/quickstart",
						"kubernetes/guides/using-crds",
						"kubernetes/guides/using-gwapi",
						"kubernetes/guides/using-ingresses",
						"kubernetes/guides/using-loadbalancers",
						"kubernetes/guides/bindings",
						"kubernetes/guides/pooling",
						"kubernetes/guides/custom-domain",
						"kubernetes/guides/annotations",
						"kubernetes/guides/managed-resources",
						"kubernetes/guides/finalizers",
						"kubernetes/guides/troubleshooting",
						{
							label: "How do I?",
							type: "category",
							link: {
								type: "doc",
								id: "kubernetes/guides/how-to/request-routing",
							},
							items: [
								"kubernetes/guides/how-to/request-routing",
								"kubernetes/guides/how-to/manipulate-headers",
								"kubernetes/guides/how-to/redirects",
								"kubernetes/guides/how-to/rewrite-url",
								"kubernetes/guides/how-to/static-response",
								"kubernetes/guides/how-to/terminate-tls",
								"kubernetes/guides/how-to/upstream-tls",
								"kubernetes/guides/how-to/cert-manager",
								"kubernetes/guides/how-to/rate-limiting",
								"kubernetes/guides/how-to/deny-requests",
								"kubernetes/guides/how-to/basic-auth",
								"kubernetes/guides/how-to/oauth",
								"kubernetes/guides/how-to/oidc",
								"kubernetes/guides/how-to/jwt-validation",
								"kubernetes/guides/how-to/restrict-ips",
								"kubernetes/guides/how-to/circuit-breaking",
								"kubernetes/guides/how-to/compress-response",
							],
						},
					],
				},
				{
					label: "Custom Resources",
					type: "category",
					link: { type: "doc", id: "kubernetes/crds/index" },
					items: [
						"kubernetes/crds/index",
						"kubernetes/crds/agentendpoint",
						"kubernetes/crds/cloudendpoint",
						"kubernetes/crds/ngroktrafficpolicy",
						"kubernetes/crds/boundendpoint",
						"kubernetes/crds/domain",
						"kubernetes/crds/kubernetesoperator",
						"kubernetes/crds/tunnel",
					],
				},
				{
					label: "Integrations & Platforms",
					link: { type: "doc", id: "kubernetes/integrations/argo-cd" },
					type: "category",
					items: [
						"kubernetes/integrations/argo-cd",
						"kubernetes/integrations/aws-eks",
						"kubernetes/integrations/azure-ad",
						"kubernetes/integrations/azure-aks",
						"kubernetes/integrations/consul",
						"kubernetes/integrations/digital-ocean",
						"kubernetes/integrations/gke",
						"kubernetes/integrations/linkerd",
						"kubernetes/integrations/microk8s",
						"kubernetes/integrations/rancher",
						"kubernetes/integrations/rayfay",
						"kubernetes/integrations/spectro-cloud",
						"kubernetes/integrations/vcluster",
					],
				},
			],
		},
		{
			label: "Traffic Observability",
			type: "category",
			collapsible: false,
			className: "menu__list-item--category",
			link: { type: "doc", id: "obs/index" },
			items: [
				"obs/index",
				"obs/traffic-inspection",
				{
					type: "category",
					label: "Events",
					link: { type: "doc", id: "obs/events/index" },
					items: [
						{ id: "obs/events/index", type: "doc", label: "Overview" },
						"obs/events/reference",
					],
				},
			],
		},
		{
			label: "Secure Tunnels",
			type: "category",
			link: { type: "doc", id: "agent/index" },
			className: "menu__list-item--category",
			collapsible: false,
			items: [
				{
					label: "Agent",
					type: "category",
					link: { type: "doc", id: "agent/index" },
					items: [
						"agent/index",
						"agent/web-inspection-interface",
						"agent/cli",
						"agent/cli-api",
						{
							label: "Configuration file",
							type: "category",
							link: { type: "doc", id: "agent/config/index" },
							items: ["agent/config/v2", "agent/config/v3"],
						},
						"agent/api",
						"agent/ssh-reverse-tunnel-agent",
						"agent/ingress",
						"agent/agent-tls-termination",
						"agent/changelog",
						"agent/version-support-policy",
						"agent/diagnose",
					],
				},
				{
					label: "Agent SDKs",
					type: "category",
					link: { type: "doc", id: "agent-sdks/index" },
					items: [{ type: "autogenerated", dirName: "agent-sdks" }],
				},
			],
		},
		{
			label: "Identity & Access",
			type: "category",
			collapsible: false,
			className: "menu__list-item--category",
			link: { type: "doc", id: "iam/index" },
			items: [
				"iam/index",
				{
					type: "category",
					label: "Principals",
					link: { type: "doc", id: "iam/users" },
					items: ["iam/users", "iam/bot-users"],
				},
				{
					type: "category",
					label: "Account Governance",
					link: { type: "doc", id: "iam/sso" },
					items: ["iam/sso", "iam/rbac", "iam/domain-controls"],
				},
			],
		},
		{
			type: "html",
			value: "<div class='menu__section'>Platform</div>",
		},
		{
			label: "API",
			type: "category",
			link: { type: "doc", id: "api/index" },
			items: [
				"api/index",
				{
					type: "category",
					label: "API Reference",
					items: [
						"api/reference",
						// Universal Gateway
						{
							type: "category",
							label: "Universal Gateway",
							items: [
								"api/resources/endpoints",
								"api/resources/reserved-addrs",
								"api/resources/reserved-domains",
								"api/resources/tls-certificates",
								// Edges (deprecated)
								{
									type: "category",
									label: "Edges",
									items: [
										// HTTPS Edges
										{
											type: "category",
											label: "HTTPS Edges",
											items: [
												"api/resources/edges-https",
												"api/resources/edges-https-routes",
												"api/resources/https-edge-mutual-tls-module",
												"api/resources/edge-route-backend-module",
												"api/resources/edge-route-circuit-breaker-module",
												"api/resources/edge-route-compression-module",
												"api/resources/edge-route-ip-restriction-module",
												"api/resources/edge-route-o-auth-module",
												"api/resources/edge-route-oidc-module",
												"api/resources/edge-route-request-headers-module",
												"api/resources/edge-route-response-headers-module",
												"api/resources/edge-route-saml-module",
												"api/resources/edge-route-traffic-policy-module",
												"api/resources/edge-route-user-agent-filter-module",
												"api/resources/edge-route-webhook-verification-module",
												"api/resources/edge-route-websocket-tcp-converter-module",
												"api/resources/https-edge-tls-termination-module",
											],
										},
										// TCP Edges
										{
											type: "category",
											label: "TCP Edges",
											items: [
												"api/resources/edges-tcp",
												"api/resources/tcp-edge-backend-module",
												"api/resources/tcp-edge-ip-restriction-module",
												"api/resources/tcp-edge-traffic-policy-module",
											],
										},
										// TLS Edges
										{
											type: "category",
											label: "TLS Edges",
											items: [
												"api/resources/edges-tls",
												"api/resources/tls-edge-backend-module",
												"api/resources/tls-edge-ip-restriction-module",
												"api/resources/tls-edge-mutual-tls-module",
												"api/resources/tls-edge-tls-termination-module",
												"api/resources/tls-edge-traffic-policy-module",
											],
										},
										// Backends
										{
											type: "category",
											label: "Backends",
											items: [
												"api/resources/failover-backends",
												"api/resources/http-response-backends",
												"api/resources/tunnel-group-backends",
												"api/resources/weighted-backends",
											],
										},
									],
								},
							],
						},
						// Traffic Policy
						{
							type: "category",
							label: "Traffic Policy",
							items: [
								"api/resources/certificate-authorities",
								"api/resources/ip-policies",
								"api/resources/ip-policy-rules",
								"api/resources/application-users",
								"api/resources/application-sessions",
							],
						},
						// Secure Tunnels
						{
							type: "category",
							label: "Secure Tunnels",
							items: [
								"api/resources/agent-ingresses",
								"api/resources/tunnels",
								"api/resources/tunnel-sessions",
							],
						},
						// Observability
						{
							type: "category",
							label: "Observability",
							items: [
								"api/resources/event-destinations",
								"api/resources/event-sources",
								"api/resources/event-subscriptions",
							],
						},
						// IAM
						{
							type: "category",
							label: "IAM",
							items: [
								"api/resources/ip-restrictions",
								"api/resources/api-keys",
								"api/resources/ssh-credentials",
								"api/resources/credentials",
								"api/resources/bot-users",
							],
						},
						// SSH Certificates
						{
							type: "category",
							label: "SSH Certificates",
							items: [
								"api/resources/ssh-certificate-authorities",
								"api/resources/ssh-host-certificates",
								"api/resources/ssh-user-certificates",
							],
						},
						// Partners (Abuse)
						{
							type: "category",
							label: "Partners",
							items: ["api/resources/abuse-reports"],
						},
					],
				},
			],
		},
		{
			label: "Errors",
			type: "category",
			link: { type: "doc", id: "errors/index" },
			items: ["errors/index", "errors/reference"],
		},
		{
			type: "html",
			value: "<div class='menu__section'>Guides</div>",
		},
		{
			label: "API Gateway",
			type: "category",
			items: [
				"guides/api-gateway/get-started",
				"guides/api-gateway/kubernetes",
				"guides/api-gateway/multicloud",
			],
		},
		{
			label: "Device Gateway",
			type: "category",
			link: { type: "doc", id: "guides/device-gateway/index" },
			items: [{ type: "autogenerated", dirName: "guides/device-gateway" }],
		},
		{
			label: "Identity Aware Proxy",
			type: "category",
			link: { type: "doc", id: "guides/identity-aware-proxy/index" },
			items: [
				{ type: "autogenerated", dirName: "guides/identity-aware-proxy" },
			],
		},
		{
			label: "Site-to-Site Connectivity",
			type: "category",
			link: { type: "doc", id: "guides/site-to-site-connectivity/index" },
			items: [
				{
					type: "autogenerated",
					dirName: "guides/site-to-site-connectivity",
				},
			],
		},
		{
			label: "Developer Preview",
			type: "category",
			link: { type: "doc", id: "guides/developer-preview/index" },
			items: [{ type: "autogenerated", dirName: "guides/developer-preview" }],
		},
		{
			label: "Other guides",
			type: "category",
			link: { type: "doc", id: "guides/other-guides/index" },
			items: [{ type: "autogenerated", dirName: "guides/other-guides" }],
		},
		{
			label: "Using ngrok with",
			type: "category",
			link: { type: "doc", id: "using-ngrok-with" },
			items: [{ type: "autogenerated", dirName: "using-ngrok-with" }],
		},
		{
			label: "Integrations",
			type: "category",
			link: { type: "doc", id: "integrations/index" },
			items: [{ type: "autogenerated", dirName: "integrations" }],
		},
		{
			type: "html",
			value: "<div class='menu__section'></div>",
		},
		"faq/faq",
	],
};

module.exports = sidebars;
