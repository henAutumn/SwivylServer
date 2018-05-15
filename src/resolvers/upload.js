const upload = {
    async uploadFile(parent, {file}, ctx, info) {
        return ctx.db.mutation.uploadFile(
            {
                where: { id },
                
            }
        )
    }
}