/**
 * Formats the given currency and amount into a formatted currency string.
 *
 * @param currency - The currency to be formatted.
 * @param amount - The amount to be formatted.
 * @returns The formatted currency string.
 */
export const formatCurrency = (currency: string, amount: number) => {
	return new Intl.NumberFormat(["en-US", "en-NG"], {
		currency,
		maximumFractionDigits: 2,
		style: "currency",
	}).format(amount)
}
