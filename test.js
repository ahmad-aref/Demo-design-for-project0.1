


$(document).ready(function(){

	var data = {
		class1:{
			name:"1كريمات",
			test:[
				{
					name:"صانصيلك",
					price:"5",
					image:"images/p1.jpg",
					units:{
						unit1:'72',
						unit2:'12',
						unit3:'1'
					}
				}
			]
		}
		
	}
	
	var size = Object.keys(data).length;
	for(var i = 1; i< size + 1;i++){
		$('.classs').append(`<a class="dropdown-item class" id =${'class' +i} href="#">${data['class'+i].name}</a>`)

	}
	$('.class').click(function(){
					$("tbody").html('')
var items = data[$(this).attr('id')].test;
		for(var b = 0;b<items.length;b++){
			
			var value = Math.floor(Math.random()*9999999)

			$("tbody").append(`<tr>
      <th scope="row" class = "name">${items[b].name}</th>
      <td><div class="btn-group">
  <button class="btn  btn-sm dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
الوحدة
   </button>
  <div class="dropdown-menu">
    <a class="dropdown-item units" value = ${value} data-name = ${items[b].units["unit1"]} id =${items[b].units["unit1"]} href="#">    الوحدة الكبرى
</a>
     <a class="dropdown-item units" value = ${value}  id =${items[b].units["unit2"]} href="#">الوحدة الوسطى
</a>
      <a class="dropdown-item units" value = ${value}  id =${items[b].units["unit3"]} href="#">الوحدة الصغرى 
</a>
  </div>

</div></td>
      <td id = ${value} >${items[b].units["unit1"]}قطعة</td>
      <td data-price = ${value} value = ${items[b].price}>${items[b].price}ريال</td>
      <td><img id="myImg" src=${items[b].image}> 
<div id="myModal" class="modal">
<span class="close">&times;</span>
<img class="modal-content" id="img01">
<div id="caption"></div></div>
</td>

    </tr>
`)
		}
		
		
		$("img").click(function(){
var src = $(this).attr('src')	
console.log(src)
var modal = $('#myModal');
var span =$(".close")
modal.css('display','block')
 $('#img01').attr('src',src)	


	
		
span.click(function(){
modal.css('display','none')
})
		
		})
		
		$(".units").click(function(){
			var id = $(this).attr("value")
			var price =  $(this).attr("id")
			
			$("#" + id).html($(this).attr("id"))
			$(`td[data-price = ${id}]`).html(price * $(`td[data-price = ${id}]`).attr('value') + "ريال" )
	
		})
	})
	
	



	



// Get the image and insert it inside the modal - use its "alt" text as a caption
/*var img = document.getElementById('myImg');
	
img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}
*/
// Get the <span> element that closes the modal

// When the user clicks on <span> (x), close the modal


})