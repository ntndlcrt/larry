import supabase from '../Client'

class PagesAPI {
    constructor({ user }) {
        this.userId = user.id
        this.tableName = 'pages'
        this.supabase = supabase
    }

    async getPages({ order = false }) {
        const query = supabase
            .from(this.tableName)
            .select('*')
            .eq('user_id', this.userId)

        if (order) {
            query.order('created_at', { ascending: false })
        }

        const { data, error } = await query

        if (error) {
            throw new Error(error.message)
        }
        return data
    }

    async getPage(pageId) {
        const { data, error } = await supabase
            .from(this.tableName)
            .select('*')
            .eq('user_id', this.userId)
            .eq('id', pageId)
            .single()
        if (error) {
            throw new Error(error.message)
        }
        return data
    }

    async createPage(pageData) {
        const { data, error } = await supabase
            .from(this.tableName)
            .insert([{ ...pageData, user_id: this.userId }])
        if (error) {
            throw new Error(error.message)
        }
        return data
    }

    // Create the updatePage method
    async updatePage(pageId, pageData) {
        const { error } = await supabase
            .from(this.tableName)
            .update(pageData)
            .eq('user_id', this.userId)
            .eq('id', pageId)
        if (error) {
            throw new Error(error.message)
        }
        return true
    }

    async removePage(pageId) {
        const { error } = await supabase
            .from(this.tableName)
            .delete()
            .eq('user_id', this.userId)
            .eq('id', pageId)
        if (error) {
            throw new Error(error.message)
        }
        return true
    }
}

export default PagesAPI
