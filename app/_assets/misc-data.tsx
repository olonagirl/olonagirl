import {
	RiCalendarCheckLine,
	RiGlobalLine,
	RiSecurePaymentLine,
	RiTimerFlashLine,
} from "@remixicon/react"

export const MiscData = [
	{
		heading: "3-day Return",
		content:
			"We accept returns of any of our items clothing, hair or accessories that is unworn and still fitted with all security tags and labels if the wrong item or size was originally sent.",
		icon: <RiCalendarCheckLine size={72} />,
	},
	{
		heading: "Worldwide delivery",
		content:
			"We will send you a tracking number and a confirmation detailing the details of your order.",
		icon: <RiGlobalLine size={72} />,
	},
	{
		heading: "Secure checkout",
		content:
			"We use verified payment processors and do not store credit card information for maximum security.",
		icon: <RiSecurePaymentLine size={72} />,
	},
	{
		heading: "Fast dispatch",
		content:
			"All orders are dispatched in 24-36 hours. Standard shipping times are Monday-Friday, 9am-5pm.",
		icon: <RiTimerFlashLine size={72} />,
	},
]
