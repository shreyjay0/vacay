const packs = (req,res) => {
    res.status(200).json(
    {
        status: true,
        msg: 'Vacay packs'
    }
    )
}

export{
    packs
}