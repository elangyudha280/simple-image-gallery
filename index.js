


const img_thumb = document.querySelector('.img-thumb');
const img = document.querySelectorAll('.img-item');


img.forEach(function(item){

    item.addEventListener('click', function(e){

        remove();

        item.classList.add('active');
   
      
    });
     


});


const remove = () => {
    img.forEach(function(item){
        item.classList.remove('active');
    });
}