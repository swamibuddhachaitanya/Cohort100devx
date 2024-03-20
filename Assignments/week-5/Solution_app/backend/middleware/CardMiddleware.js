
const z = require('zod');

const CardSchema = z.object({
    name: z.string(),
    description: z.string(),
    Interests: z.array(z.string()),
    UrlArray: z.array(
        z.record(z.string()))
})



function CardMiddleware(req,res,next) {
    const name = req.body.name;
    const description = req.body.description;
    const Interests = req.body.Interests;
    const UrlArray = req.body.UrlArray;

    const SchemaToCheck = {
        name:name,
        description:description,
        Interests:Interests,
        UrlArray: UrlArray
    }

    const result = CardSchema.safeParse(SchemaToCheck);

    if (result.success) {
        next();
    }
    else{
        res.status(400).json({
            msg: "Schema is wrong, Middleware is throwing an error"
        })
    }
    
}

module.exports={
    CardMiddleware
}