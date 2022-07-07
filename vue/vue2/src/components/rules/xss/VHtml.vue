<template>
  <div class="1">
    <div>
      Using v-html directive:
      <div class="card" style="text-align: left; height: 100%">
        <textarea id="editor"></textarea>
      </div>
    </div>
    <br />
    <div>
      <b>Output:</b>
      <h2 v-html="message"></h2>
    </div>
  </div>
</template>

<script>
const example = `
//HTML template
  <h2 v-html="message"></h2>

//Vue component code 
/* Example attack vector: <img src='#' onerror='alert(document.cookie)'> */  

let message = decodeURIComponent(document.location.hash.substring(1));


export default {
  name: "VHtml",
  data: function () {
    return {
      message: message ,
    }
  },
}`;

//Vue
let message = decodeURIComponent(document.location.hash.substring(1));

export default {
  name: "VHtml",
  data: function () {
    return {
      message: message,
    };
  },
  mounted: function () {
    let editorEle = document.getElementById("editor");

    if (editorEle) {
      var editor = window.CodeMirror.fromTextArea(editorEle, {
        mode: "javascript",
        lineNumbers: true,
        matchBrackets: true,
      });
      editor.setValue("");
      editor.setValue(example);
      editor.save();
    }
  },
};
</script>
