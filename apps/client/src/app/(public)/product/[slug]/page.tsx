export default async function ProductPage({ params }: { params: { slug: string } }) {
	const res = await fetch(
		`${process.env.NEXT_PUBLIC_CMS_API_URL}/products?populate=*&filters[slug]=${params.slug}`,
	)
	const data = await res.json()
	console.log(data.data)
	return <div>{params.slug}</div>
}
