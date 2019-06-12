var express = require('express');
var router = express.Router();

function random(n){return Math.floor(Math.random()*n)}

const lorem = ["Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pretium est sed risus faucibus tempor. Duis tortor mauris, malesuada ut ligula eu, lacinia tristique lectus. Phasellus id congue eros, vel dapibus nunc. Aliquam tempor pulvinar massa vitae sollicitudin. Donec pretium ligula vel placerat auctor. Nunc luctus viverra massa, id cursus felis gravida vel. Nunc rutrum ante arcu, a sollicitudin ante porta pharetra. Curabitur cursus urna ut fermentum sollicitudin. Vestibulum et erat in nibh aliquet pulvinar. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam vitae felis placerat dolor luctus iaculis. Nulla dui turpis, placerat ac tempor et, sollicitudin vel turpis. Vivamus in condimentum nunc. Duis dignissim volutpat elit, id hendrerit mauris accumsan sit amet. Interdum et malesuada fames ac ante ipsum primis in faucibus. Etiam sed placerat justo.",
    "Maecenas a fringilla diam, in dapibus neque. Sed id tempor erat. Praesent hendrerit dui eu pellentesque sodales. Vestibulum erat massa, condimentum sit amet lorem at, rutrum porttitor mi. Ut ultrices augue aliquam ornare feugiat. Suspendisse malesuada nulla at ante sollicitudin cursus. Sed mauris ante, sodales a finibus sit amet, bibendum vitae dui. Aliquam erat volutpat. Sed aliquet mattis pulvinar. Nullam id facilisis lacus. Phasellus lobortis, neque ut porttitor vehicula, nulla massa volutpat urna, a congue ligula purus non mi. Praesent consequat metus at hendrerit pulvinar. Fusce placerat ipsum sit amet risus maximus, a placerat quam imperdiet. Nulla facilisi.",
    "Sed non lectus posuere, rhoncus est vitae, fermentum arcu. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec eget suscipit ante. Donec diam arcu, pharetra vel magna id, lobortis efficitur diam. Maecenas fermentum porta fermentum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris rhoncus placerat placerat. Vivamus fringilla iaculis nisi, vitae feugiat nibh commodo lobortis. Etiam tristique at est tempus varius. Maecenas tempor feugiat tellus, rutrum tempor ante auctor gravida.",
    "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. In semper nisl in ante hendrerit, semper aliquam enim porttitor. Praesent vitae ex vitae augue fermentum tempus vitae a arcu. Cras at malesuada odio. Vestibulum lobortis viverra neque, vel varius purus tristique non. Maecenas ac massa non arcu ultrices posuere. Nullam non tortor ligula. Proin vel facilisis orci, nec aliquam libero. Cras mollis dapibus tincidunt. Phasellus elementum rhoncus molestie. Aenean facilisis hendrerit ligula, sit amet bibendum nisl faucibus vitae. Nullam eget dignissim mi. Praesent placerat, ipsum eu rutrum vulputate, tellus neque iaculis erat, vulputate lacinia mi massa vel enim.",
    "Etiam ut tellus tellus. Nunc id venenatis nibh. Aliquam ut finibus ipsum. Vestibulum id velit sed lacus laoreet sodales sit amet sed lectus. Fusce quis purus eget ex lobortis egestas suscipit sed ante. Duis faucibus sodales tellus eget semper. Nunc lorem justo, posuere sed diam eget, volutpat mollis magna. Proin venenatis vestibulum ultricies. Ut vitae augue quis neque pharetra ultricies. Phasellus venenatis, justo ut hendrerit mollis, nunc tellus rhoncus libero, a ornare orci orci ut dolor. Praesent faucibus nibh nec dignissim congue. Duis in turpis quis diam."]

/* GET home page. */
router.get('/', function (req, res, next) {
    const enties = ["мандарин", "апельсин", "грузин", "карантин", "маркер", "гендер", "монитор", "взрыв"];

    let page = parseInt(req.query.page || 0);

    res.render('index', {
        array : Array(random(30)).fill(1).map(()=>({num:random(10),name:enties[random(8)]})),
        text: lorem[page%5],
        page
    });
});

module.exports = router;
