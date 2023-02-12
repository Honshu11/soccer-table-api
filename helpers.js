
//querystring = ?key=stuff&team=Arsenal


// if string starts with question mark then remove question mark




// result of 'key=stuff&team=Arsenal'

// need to separate 'key=staff&team=Arsenal' by the & sign

// resulting in an array ['key=stuff', 'team=Arsenal'];

function parsetQueryParams(queryString){
    let result = {};

    if(queryString.startsWith('?')){
        queryString = queryString.slice(1);
    }
    console.log(queryString);

    return result;
}