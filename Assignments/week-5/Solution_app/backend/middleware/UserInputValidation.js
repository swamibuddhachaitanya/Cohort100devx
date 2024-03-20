const z = require('zod');

const UserInputSchema = z.object({
    username: z.string(),
    password: z.string()
})

function ValidateUserMiddleWare(req,res,next) {
    
    const username = req.headers.username;
    const password = req.headers.password;

    const SchemaToCheck = {
        username: username,
        password:password
    }

    const result = UserInputSchema.safeParse(SchemaToCheck);
    
    if (result.success) {
        next();
    } else {
        res.status(400).json({
            msg:"username or password is in the wrong format"
        })
    }

}

module.exports={
    ValidateUserMiddleWare
}