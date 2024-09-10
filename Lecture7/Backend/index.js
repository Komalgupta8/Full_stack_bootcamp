import express from express

const app=express()
const PORT =6000

app.get('/',(res,req)=>{
    res.send('hello')
})

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});