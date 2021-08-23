const packs = (req,res) => {
    res.status(200).json(
    {
        success: true,
        msg: 'Vacay packs'
    }
    )
}

export{
    packs
}