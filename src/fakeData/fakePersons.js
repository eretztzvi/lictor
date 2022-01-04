import faker from 'faker'

export const fetchFakePersons = () => {

    const data = []

    for (let i = 0; i < 30; i++) {
        const obj = {
            _id: faker.datatype.uuid(),
            first_name: faker.name.firstName(),
            last_name: faker.name.lastName(),
            image: faker.image.image(),
            company: faker.company.companyName(),
            job: faker.name.jobTitle(),
            gender: faker.name.gender(),
            email: faker.internet.email(),
            phone: faker.phone.phoneNumber(),
            note: faker.name.jobDescriptor(),
            area: faker.name.jobArea(),
            address: faker.address.city(),
            likes: [
                {
                    like_id: 'sdfsdfrtyrty53dgdfg',
                    name: "happy",
                    count: 111,
                    icon: '😀'
                },
                {
                    like_id: 'sdfsdfrtyrty53dgdnv',
                    name: "fine",
                    count: 123,
                    icon: '😐'
                },
                {
                    like_id: 'sdfsdfrtyrty53dgdnb',
                    name: "angry",
                    count: 321,
                    icon: '🤬'
                },
            ]
        }
        data.push(obj)

    }

    console.log(data)

    return data
}
