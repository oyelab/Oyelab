type DataType = {
	id: number;
	img: string;
	name: string;
	review: string;
	position: string;
}[];

export const testimonilasData: DataType = [
	{
		id: 1,
		img: '/images/testimonials/author1.jpg',
		name: 'Ahmed Shapon',
		position: 'Owner at Wings Sportswear',
		review: `"Working with NexaDev transformed Wings Sportswear. They delivered a sleek, user-friendly eCommerce platform that perfectly captured our brand. The result? Boosted sales, enhanced customer engagement, and a seamless experience. Their expertise is truly unmatched."`,
	},
	{
		id: 3,
		img: '/images/testimonials/author3.jpg',
		name: 'Md Ruhin Mia',
		position: 'Co-Founder/Owner at Zero Soft BD',
		review: `"NexaDev is a hub of creativity and technical brilliance. Their team’s commitment to delivering top-notch solutions with a focus on scalability and innovation is commendable. As a well-wisher, I have no doubt they’ll continue to achieve great milestones."`,
	},
	{
		id: 4,
		img: '/images/testimonials/author4.png',
		name: 'Koishik Ahmed',
		position: 'UI/UX Lead at Pixarzo',
		review: `"NexaDev's dedication to precision and user-centric solutions sets them apart. Their ability to translate complex ideas into seamless experiences is truly inspiring. As a well-wisher, I’m excited to see them redefine industry benchmarks."`,
	},
];
