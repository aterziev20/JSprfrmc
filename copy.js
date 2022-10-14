function CopyCode() {
    let copyText = document.getElementById("HTMLBox");
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(copyText.value);
  }
  
  function CopyCode2() {
    let copyText = document.getElementById("HTMLBox2");
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(copyText.value);
  }