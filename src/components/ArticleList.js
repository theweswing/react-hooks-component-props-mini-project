import Article from "./Article.js"

function ArticleList(){
    return (
        <main>
            <Article title="How To Get A Girlfriend By Christmas" date="12/25/2021" preview="Get a GF by Christmas in 7 Easy Steps" readtime={10}/>
            <Article title="How To Get A Girlfriend By Thanksgiving" date="11/25/2021" preview="Eat Turkey With Your New GF By Thanksgiving" readtime={35} />
            <Article title="How To Get Over Susan" date="02/14/2021" preview="Susan, please come home" readtime={20}/>
            <Article title="When To Ask Your Fiance To Marry You" preview="Perfect advice from a future happily married man" readtime={50}/>
        </main>
    )
}


export default ArticleList