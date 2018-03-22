var $content = $( "#content" );

vargetPosts = $.ajax( "https://jsonplaceholder.typicode.com/posts" );

function generatePosts( posts ){
    var $postsList = $( "<ul>" );
    var $postItems = $postsList
        .filter(
            ( post ) => post.id < 11
        )
        .map(
            ( post ) => $( "<li>" ).text( post.title )
        );

    return $postsList.append( $postItems );
}

function appendPosts( posts ){
    var $posts = generatePosts( posts );

    $content.append( $posts );
}

getPosts.then( appendPosts );
