import supabase from '../Client'

class ImagesAPI {
    constructor() {
        this.supabase = supabase
    }

    async checkImage(filePath) {
        const { data, error } = await supabase.storage
            .from('public')
            .list(filePath)

        if (error) {
            return false
        }

        return true
    }

    async uploadImage(idPage, image) {
        const fileExtension = image.name.split('.').pop().toLowerCase()
        const fileName = `${idPage}.${fileExtension}`
        const alreadyExists = await this.checkImage(`pages/${fileName}`)

        if (alreadyExists) {
            let { data, error } = await supabase.storage
                .from('public')
                .update(`pages/${fileName}`, image, {
                    upsert: true,
                })

            if (error) {
                throw new Error(error.message)
            }
        } else {
            let { data, error } = await supabase.storage
                .from('public')
                .upload(`pages/${fileName}`, image, {
                    upsert: false,
                })

            if (error) {
                throw new Error(error.message)
            }
        }

        const { data } = supabase.storage
            .from('public')
            .getPublicUrl(`pages/${fileName}`)

        return data
    }
}

export default ImagesAPI
