import fs from 'fs'

export const createContent = async (req, res) => {
    console.log('req.body', req.body)
    fs.writeFile(`/mnt/c/Users/82105/Desktop/${req.body.text}.txt`, req.body.text, () => { })
    res.end()
}