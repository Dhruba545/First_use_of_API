const div1 = document.getElementById('div1');
const latestPosts = async() =>{
    const res = await fetch('https://openapi.programming-hero.com/api/retro-forum/latest-posts');
    const data = await res.json();
    displayLatestPost(data)
}

const displayLatestPost = posts =>{
    console.log(posts);
    for(let post of posts){
        const profileImg = post.profile_image;
        const coverImg = post.cover_image;
        const postTitle = post.title;
        const postDescription = post.description;
        const postAuthorName = post.author.name;
        let postPublishedDate = "";
        if(post.author.posted_date){
            postPublishedDate = post.author.posted_date;   
        }
        else{
            postPublishedDate = 'No publish date';
        }
        let postAuthorDesignation = "";
        if(post.author.designation){                      /* সম্ভবত শর্ত তুলনা করার সময় একটা সমান চিহ্ন ব্যাবহৃত হয় */
            postAuthorDesignation = post.author.designation;
        }
        else{
            postAuthorDesignation = 'Unknown' ;
        }
        const newDiv = document.createElement('div');
        newDiv.classList.add('w-[374px]' , 'h-[482px]', 'flex', 'flex-col', 'justify-around' , 'bg-red-100' ,'items-center');
        newDiv.innerHTML =`
        <div class="w-[374px] h-[482px] flex flex-col justify-around items-center"> 
                <div class="w-[326px] h-[190px] bg-green-50"><img class="w-full h-full" src="${coverImg}"> </div>
                <div class="flex space-x-4 text-[#12132D] opacity-60 text-lg items-center"><i class="fa-regular fa-calendar-days"></i><p id="date">${postPublishedDate} </p></div>
                <div id="title2" class="text-lg text-black font-extrabold ml-4">${postTitle} </div>
                <div id="description2" class="ml-4 text-[16px] text-black opacity-60">${postDescription}  </div>
                <div class="flex items-center w-full ml-4 space-x-6">
                    <div class="w-11 h-11 rounded-[50%] bg-red-400 "><img class="w-full h-full rounded-[50%]" src="${profileImg}"> </div><div class="flex flex-col "><div class="text-[16px] font-bold">${postAuthorName} </div><div class="text-black opacity-60 text-[14px]">${postAuthorDesignation} </div> </div>
                </div>
        `

        div1.appendChild(newDiv);
    }
}

latestPosts();

{/* <div class="makegrid ml-[30px] mt-16 bg-red-300 w-[1170px]">
            <div class="w-[374px] h-[482px] flex flex-col justify-around items-center"> 
                <div class="w-[326px] h-[190px] bg-green-50"></div>
                <div class="flex space-x-4 text-[#12132D] opacity-60 text-lg items-center"><i class="fa-regular fa-calendar-days"></i><p id="date">No publish date</p></div>
                <div id="title2" class="text-lg text-black font-extrabold ml-4">What will a mars habitat force that impact in our daily life!!!</div>
                <div id="description2" class="ml-4 text-[16px] text-black opacity-60">Yes, you can run unit tests and view the results directly within the app. </div>
                <div class="flex items-center w-full ml-4 space-x-6">
                    <div class="w-11 h-11 rounded-[50%] bg-red-400 "></div><div class="flex flex-col "><div class="text-[16px] font-bold">Cameron Williamson</div><div class="text-black opacity-60 text-[14px]">Unknown</div> </div>
                </div>
            </div>
        </div> */}