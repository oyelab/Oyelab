type DataType = {
	id: number;
	title: string;
	img: string;
	description: string;
	name: string;
	role: string;
};

export const foundersData: DataType[] = [
	{
		id: 1,
		title: 'Building a future where boundaries are non-existent',
		img: '/images/about/founder-jarjis.png',
		description:
			'We’re not just creating technology, we’re shaping the future. Together, we relentlessly push the limits of innovation to build impactful solutions that empower businesses and drive meaningful transformation.',
		name: 'Mehedi Hasan Jarjis',
		role: 'Co-Founder, NexaDev',
	},
	{
		id: 2,
		title: 'Revolutionizing the Industry with Vision and Leadership',
		img: '/images/about/founder-faisal.png',
		description:
			"At the helm of NexaDev, we lead with a mission to create powerful solutions that redefine what's possible. Our focus is to drive innovation and deliver impactful results for businesses worldwide.",
		name: 'Faisal Hasan',
		role: 'Co-Founder, NexaDev',
	},
];
