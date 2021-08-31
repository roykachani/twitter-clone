const timeline = [
	{
		id: 1,
		avatar:
			'https://www.google.com/imgres?imgurl=https%3A%2F%2Fst3.depositphotos.com%2F15648834%2F17930%2Fv%2F600%2Fdepositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg&imgrefurl=https%3A%2F%2Fdepositphotos.com%2Fvector-images%2Fprofile-picture.html&tbnid=ifTSkpz9J2bh_M&vet=12ahUKEwiFtMn39tnyAhWRN7kGHZsvC8AQMygAegUIARCNAQ..i&docid=bNcOzSNtObF5xM&w=488&h=600&q=profiles%20img&ved=2ahUKEwiFtMn39tnyAhWRN7kGHZsvC8AQMygAegUIARCNAQ',
		username: 'roberto',
		message: `Lorem ipsum dolor sit amet 
		consectetuer adipiscing elit. 
		Aenean commodo ligula eget dolor.`,
		name: 'Roberto',
	},
	{
		id: 2,
		avatar:
			'https://www.google.com/imgres?imgurl=https%3A%2F%2Fimg.freepik.com%2Ffree-photo%2Fpleasant-looking-serious-man-stands-profile-has-confident-expression-wears-casual-white-t-shirt_273609-16959.jpg%3Fsize%3D626%26ext%3Djpg&imgrefurl=https%3A%2F%2Fwww.freepik.com%2Fphotos%2Fprofile&tbnid=S2NNOWEtx4Sh8M&vet=12ahUKEwiFtMn39tnyAhWRN7kGHZsvC8AQMygIegUIARCfAQ..i&docid=9DRWIkHC4pkATM&w=626&h=417&q=profiles%20img&ved=2ahUKEwiFtMn39tnyAhWRN7kGHZsvC8AQMygIegUIARCfAQ',
		username: 'miguel',
		message: `hola soy miguel y soy developer`,
		name: 'Miguel',
	},
	{
		id: 3,
		avatar:
			'https://www.google.com/imgres?imgurl=https%3A%2F%2Fimages.pexels.com%2Fphotos%2F220453%2Fpexels-photo-220453.jpeg%3Fauto%3Dcompress%26cs%3Dtinysrgb%26dpr%3D1%26w%3D500&imgrefurl=https%3A%2F%2Fwww.pexels.com%2Fsearch%2Fprofile%2520picture%2F&tbnid=B3G4vEo9lSBh0M&vet=12ahUKEwiFtMn39tnyAhWRN7kGHZsvC8AQMygBegUIARCPAQ..i&docid=FvQHUVZ-cx81xM&w=500&h=750&q=profiles%20img&ved=2ahUKEwiFtMn39tnyAhWRN7kGHZsvC8AQMygBegUIARCPAQ',
		username: 'carlitos',
		message: `Lorem ipsum 14444789324 dolor sit amet 
		
        
		consectetuer adipiscing elit. 
		Aenean commodo ligula eget dolor.`,
		name: 'carlos',
	},
];

export default (req, res) => {
	res.status(200).send(timeline);
};
