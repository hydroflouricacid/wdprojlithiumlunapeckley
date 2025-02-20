function changeContent(agentName) {
  var tabcontent, tablinks, activetab;
  tabcontent = document.getElementsByClassName("agentDescription");
  for (let i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  document.getElementById(agentName).style.display = "block";
} 