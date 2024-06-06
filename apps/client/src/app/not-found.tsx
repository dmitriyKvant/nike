import { Footer } from "@/widgets/footer"
import { Header } from "@/widgets/header"

export default function NotFound() {
	return (
		<div className="relative flex min-h-screen flex-col">
			<Header />
			<p className="flex flex-grow items-center justify-center text-center text-4xl font-semibold">
				We can't find the page you are looking for.
				<br /> Sorry for the inconvenience.
			</p>
			<Footer />
		</div>
	)
}
