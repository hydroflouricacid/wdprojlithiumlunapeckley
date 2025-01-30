function changeContent(evt, agentName) {
  // Declare all variables
  var tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("agentDescription");
  for (let i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
    console.log("AUGUUGAUIHIDS");
  }

  var activetab = document.getElementById(agentName);
  activetab.style.display = "none";
  console.log("AISAHIUDABUISD");
} 