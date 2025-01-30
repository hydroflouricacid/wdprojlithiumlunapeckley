function changeContent(evt, agentName) {
  // Declare all variables
  var tabcontent, tablinks, activetab;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("agentDescription");
  for (let i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
    console.log("AUGUUGAUIHIDS");
  }

  activetab = document.getElementById(agentName.toString());
  activetab[0].style.display = "block";
  console.log("AISAHIUDABUISD");
} 