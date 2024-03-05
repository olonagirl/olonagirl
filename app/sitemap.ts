import { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
	return [
		{
			url: "https://olonagirl.com",
			changeFrequency: "monthly",
			lastModified: new Date(),
			priority: 1,
		},
		{
			url: "https://olonagirl.com/about",
			changeFrequency: "yearly",
			lastModified: new Date(),
		},
		{
			url: "https://olonagirl.com/contact",
			changeFrequency: "yearly",
			lastModified: new Date(),
		},
		{
			url: "https://olonagirl.com/products",
			changeFrequency: "always",
			lastModified: new Date(),
			priority: 1,
		},
		{
			url: "https://olonagirl.com/customer-service",
			changeFrequency: "yearly",
			lastModified: new Date(),
			priority: 0.8,
		},
		{
			url: "https://olonagirl.com/privacy-policy",
			changeFrequency: "yearly",
			lastModified: new Date(),
		},
		{
			url: "https://olonagirl.com/size-guide",
			changeFrequency: "yearly",
			lastModified: new Date(),
		},
		{
			url: "https://olonagirl.com/terms",
			changeFrequency: "yearly",
			lastModified: new Date(),
		},
	]
}
