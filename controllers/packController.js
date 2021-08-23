const packs = (req,res) => {
    res.status(200).json(
    {
        status: 'ok',
        msg: 'Vacay packs'
    }
    )
}

export{
    packs
}