
 $(document).ready(function(){
   $("#imageBrowes").change(function(){
     var File = this.files;

     if(File && File[0]){
       ReadImage(File[0]);

     }

   })
 })

 var ReadImage=function(file){
   var reader = new FileReader;
   var image = new Image;

   reader.readAsDataURL(file);
   reader.onload= function(_file){

     image.src=_file.target.result;
     image.onload=function(){

       var height = this.height;
       var width = this.width;
       var type = file.type;
       var size = ~~(file.size / 1024) + "KB";


       $("#targetImg").attr('src',_file.target.result);
       $("#description").text("Size:" + size + ", " + height + " X " + width + ", " + type + "");
       $("#imgPreview").show();

     }


   }

 }
 var clearPreview = function(){
   $("#imageBrowes").val('')
   $("#description").text('');
   $("#imgPreview").hide();


 }


function Data(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
  }

  // Get the element with id="defaultOpen" and click on it
  document.getElementById("defaultOpen").click();

//   function validateForm() {
//     var name = document.forms["form-inline"]["nama"].value;
//     var des = document.forms["form-inline"]["deskripsi"].value;
//     var rute = document.forms["form-inline"]["rute"].value;
//     var ite = document.forms["form-inline"]["itinenary"].value;
//     var harga = document.forms["form-inline"]["harga"].value;
//     var x = [];
//     x[0] = var name;
//     for (var i = 0, len = arr.length; i < len; i++) {
//      var x = name
// };
//     if (x == "") {
//       alert("Name must be filled out");
//       return false;
//     }
//   }

function validateForm() {

    var inputs, index;
    var isValid = true;

    inputs = document.getElementById("Paket Tour").getElementsByTagName("input");

    for (index = 0; index < inputs.length; ++index) {
        var currentInputValue = inputs[index].value;
        if (currentInputValue == null || currentInputValue === "") {

            isValid = false;
        }

    }
    if (isValid == false) {
      alert("Mohon lengkapi semua kolom");
    } else {

    }
    return isValid;
}
