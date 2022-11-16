
const express = require('express')
const app = express()

const fs =require('fs');



app.engine('dmv', (filePath, options, callback) => {
    fs.readFile(filePath, (err, content) => {
        if(err) return callback(err)

        const rendered = content.toString()
            .replace('#title#', '<title>' + options.title + '</title>')
            .replace('#message#', '<h1>' + options.message + '</h1>')
            .replace('#content#', '<div>' + options.content + '</div>')
            .replace('#contentTwo#', '<div>' + options.contentTwo + '</div>')
            .replace('#contentThree#', '<div>' + options.contentThree + '</div>')
            .replace('#style#', options.style);
        return callback(null, rendered)
    })
})

app.set('views', './views')
app.set('view engine', 'dmv')




// ------------ TEMPLATE 1 -------------

app.get('/', (req, res) =>{
    res.render("Virginia", {
        title: "Home",
        message: "Welcome to D.M.V",
        content: "Here are the best restaurants around DMV " ,
        contentTwo: '<img src="https://www.trolleytours.com/wp-content/uploads/2016/06/washington-monument-480x270.jpg" width="700vw" height="600vh"> ',
        // contentThree: '<a href="/1"> Next Page: Restaurants </a>',
       
    })
})

app.get('/1', (req, res) => {
    res.render ("Virginia", {
        title: 'restaurant1',
        message: 'Nazret Ethiopian Restaurant ',
        content: '<h3> Falls Church, Virginia </h3>',
        contentTwo: '<img src="https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/CFV2HZDBSMI6XFBQ47DXWWYCS4.jpg&w=691" alt=""></img>',
        
    })
})

app.get('/2', (req, res) => {
    res.render ("Virginia", {
        title: 'restaurant2',
        message: 'Field & Main ',
        content: '<h3> Marshall, Virginia </h3>',
        contentTwo: '<img src="https://metromediamark.wpenginepowered.com/wp-content/uploads/2020/10/field-and-main-2.jpg"></img>',
        
    })
})

app.get('/3', (req, res) => {
    res.render ("Virginia", {
        title: 'restaurant3',
        message: 'SER',
        content: '<h3> Arlington, Virginia </h3>',
        contentTwo: '<img src="https://www.arlingtonmagazine.com/content/uploads/data-import/93/9323ed422144320acc9d05085541f298-Untitled-1.png" width="700vw"></img>',
        
    })
})


// ------------- TEMPLATE 2 -------------


app.get('/4', (req, res) => {
    res.render ("DC", {
        title: 'restaurant4',
        message: 'Cafe Milano',
        content: '<h3> Georgetown, DC </h3>',
        contentTwo: '<img src="https://www.cafemilano.com/wp-content/uploads/2019/03/rectangle-copy@2x-1.png" width="700vw"></img>',
        
    })
})


app.get('/5', (req, res) => {
    res.render ("DC", {
        title: 'restaurant5',
        message: 'Fogo de Chão',
        content: '<h3> washington, DC </h3>',
        contentTwo: '<img src="https://www.fsrmagazine.com/sites/default/files/styles/phone_story_image_320x238/public/story-images/fogo-de-ch-o-adds-dry-aged-tomahawk-ribeye-limited-time.jpg?itok=8OqbMVTC" width="700vw"></img>',
        
    })
})

app.get('/6', (req, res) => {
    res.render ("DC", {
        title: 'restaurant6',
        message: 'The Hamilton',
        content: '<h3> washington, DC </h3>',
        contentTwo: '<img src="https://tock-public.imgix.net/imagesprod/user_uploaded_images_v1/838b324ce94b8e7fe2cbe3fb38f974a3.jpg?ixlib=js-3.5.1&auto=format&fit=crop&crop=focalpoint&w=720" width="700vw"></img>',

        
    })
})
//  ------------- Template 3 -------------

app.get('/7', (req, res) => {
    res.render ("Maryland", {
        title: 'restaurant7',
        message: 'Maggiano Restaurant',
        content: '<h3> Bethesda, MD </h3>',
        contentTwo: '<img src="https://assets.simpleviewinc.com/simpleview/image/upload/crm/virginia/maggianos0_c91241cc-5056-a36a-07da3ec498563624.jpg" width="700vw"></img>',
 
    })
})



app.get('/8', (req, res) => {
    res.render ("Maryland", {
        title: 'restaurant8',
        message: 'Cheese Cake Factory',
        content: '<h3> Bethesda, MD </h3>',
        contentTwo: '<img src="https://hosted.where2getit.com/cheesecake/images/2021/1_CCF_Fresh_Strawberry_Cheesecake_13_HR.jpg" width="700vw"></img>',

        
    })
})


app.get('/9', (req, res) => {
    res.render ("Maryland", {
        title: 'restaurant9',
        message: 'Langano Restaurant',
        content: '<h3> Silver Spring, MD </h3>',
        contentTwo: '<img src="https://bethesdamagazine.com/wp-content/uploads/2018/07/DEB20413-768x614.jpg" width="700vw"></img>',
 
    })
})




app.listen(3000, () => {
    console.log('its listening on 3000!')
})

