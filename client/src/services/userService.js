const baseURL = 'http://localhost:3030/jsonstore/users'
export const getAll = async () => {
    try {
        const response = await fetch(baseURL)
        const result = await response.json()
        const data = Object.values(result)
        return data
    }
    catch (error) {
        console.error(error)
    }
};
export const getOne = async (userId) => {
    const response = await fetch(`${baseURL}/${userId}`)
    const result = await response.json()
    return result
}
export const remove = async (userId) => {
    const response = await fetch(`${baseURL}/${userId}`, 
    {method: "DELETE"}
    )
    const result = await response.json()
    return result
}
export const create = async (data) => {
    const body = {
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        imageUrl: data.imageUrl,
        phoneNumber: data.phoneNumber,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        address: {
            country: data.country,
            city: data.city,
            street: data.street,
            streetNumber: data.streetNumber
        }
    }
    const response = await fetch(baseURL, { 
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
    })
    const result = await response.json()
}