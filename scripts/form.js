const products = [
    {
      id: "fc-1888",
      name: "flux capacitor",
      averagerating: 4.5
    },
    {
      id: "fc-2050",
      name: "power laces",
      averagerating: 4.7
    },
    {
      id: "fs-1987",
      name: "time circuits",
      averagerating: 3.5
    },
    {
      id: "ac-2000",
      name: "low voltage reactor",
      averagerating: 3.9
    },
    {
      id: "jj-1969",
      name: "warp equalizer",
      averagerating: 5.0
    }
  ];

  window.onload = function(){
    const productSelect = document.getElementById("productname");

    products.forEach(product => {
      const option = document.createElement("option");
      option.value = product.id;
      option.textContent = `${product.name.replace(/\b[a-z]/g, (match) => match.toUpperCase())} (Avg Rating: ${product.averagerating} ★)`;
      productSelect.appendChild(option);
    });

    const form = document.querySelector ("form");

    form.addEventListener("submit", function(event) {
      let isValid = true;

      const productName = document.getElementById('productname');
      const rating = document.querySelector('input[name="rate"]:checked');
      const installDate = document.getElementById('date');

    })

    var today = new Date().toISOString().split('T') [0];
    document.getElementById('date').setAttribute("max", today)

  }

  function validate() {
    var valid = false;
    var x = document.form.rate;


    for (var i=0;i<x.length;i++){
      if(x[i].checked){
        valid= true;
        break;
      }
    }
    if (valid){
      submit;
    }
    else{
      alert("Please rate the product")
    }
  }


  document.getElementById("currentyear").innerHTML = new Date().getFullYear();
  document.getElementById("lastmodified").innerHTML = document.lastModified;