const requiredEnvs = [
	"CHEC_PUBLIC_KEY",
	"NEXT_PUBLIC_CHEC_PUBLIC_KEY",
	"NEXT_PUBLIC_APP_URL",
	"NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY",
	"NEXT_PUBLIC_PAYSTACK_SECRET_KEY",
	"NEXT_PUBLIC_PAYPAL_PUBLIC_KEY",
	"NEXT_PUBLIC_PAYPAL_SECRET_KEY",
	"NEXT_PUBLIC_SUPABASE_URL",
	"NEXT_PUBLIC_SUPABASE_ANON_KEY",
] as const

type RequiredEnvs = (typeof requiredEnvs)[number]

declare global {
	namespace NodeJS {
		interface ProcessEnv extends Record<RequiredEnvs, string> {
			readonly CHEC_PUBLIC_KEY: string
			readonly NEXT_PUBLIC_CHEC_PUBLIC_KEY: string
			readonly NEXT_PUBLIC_APP_URL: string
			readonly NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY: string
			readonly NEXT_PUBLIC_PAYSTACK_SECRET_KEY: string
			readonly NEXT_PUBLIC_PAYPAL_PUBLIC_KEY: string
			readonly NEXT_PUBLIC_PAYPAL_SECRET_KEY: string
			readonly NEXT_PUBLIC_SUPABASE_URL: string
			readonly NEXT_PUBLIC_SUPABASE_ANON_KEY: string
		}
	}
}

export {}
