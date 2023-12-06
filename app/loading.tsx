export default function Loading() {
	return (
		<div className="bg-dark fixed left-0 top-0 !z-[5] grid h-screen w-screen place-items-center">
			<div className="border-t-light aspect-square w-7 animate-spin rounded-full border-2 border-gray-500"></div>
		</div>
	)
}
